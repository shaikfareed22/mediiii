import { NextResponse } from 'next/server';
import data from '@/data/symptoms.json';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const symptomsRaw = body?.symptoms;
    if (!symptomsRaw || typeof symptomsRaw !== 'string') {
      return NextResponse.json({ error: 'Please provide a `symptoms` string in the request body.' }, { status: 400 });
    }

    const tokens = symptomsRaw
      .toLowerCase()
      .split(/[,;\s]+/)
      .map((t) => t.trim())
      .filter(Boolean);

    // Simple scoring: count symptom token matches for each disease
    interface Disease {
      disease: string;
      description: string;
      symptoms: string[];
      precautions: string[];
      medications: string[];
      workouts: string[];
      diets: string[];
    }
    let best: Disease | null = null;
    let bestScore = 0;

    for (const entry of data) {
      const entrySymptoms = (entry.symptoms || []).map((s: string) => s.toLowerCase());
      const score = tokens.reduce((acc: number, t: string) => (entrySymptoms.includes(t) ? acc + 1 : acc), 0);
      if (score > bestScore) {
        bestScore = score;
        best = entry;
      }
    }

    if (best && bestScore > 0) {
      return NextResponse.json({ result: best });
    }

    // No match found
    return NextResponse.json(
      {
        result: null,
        message:
          'No matching disease found for the provided symptoms. If you have dataset files, add entries to `src/data/symptoms.json` (see README for format).',
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json({ error: 'Invalid request or server error.' }, { status: 500 });
  }
}
