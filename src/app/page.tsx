'use client';

import { useState } from 'react';
import PageContainer from '@/components/PageContainer';

export default function Home() {
  const [symptoms, setSymptoms] = useState('');
  const [prediction, setPrediction] = useState<null | {
    disease: string;
    description: string;
    precautions: string[];
    medications: string[];
    workouts: string[];
    diets: string[];
  }>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with backend API
    alert('Backend integration coming soon!');
  };

  return (
    <PageContainer
      title="Health Care Center"
      description="Get personalized medicine recommendations based on your symptoms"
    >
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700">
              Select Symptoms
            </label>
            <input
              type="text"
              id="symptoms"
              name="symptoms"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Type symptoms such as itching, sleeping, aching etc"
            />
          </div>
          
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Predict
          </button>
        </form>

        {prediction && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">AI System Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: 'Disease', data: prediction.disease, color: 'bg-orange-100' },
                { label: 'Description', data: prediction.description, color: 'bg-blue-100' },
                { label: 'Precautions', data: prediction.precautions, color: 'bg-purple-100' },
                { label: 'Medications', data: prediction.medications, color: 'bg-red-100' },
                { label: 'Workouts', data: prediction.workouts, color: 'bg-green-100' },
                { label: 'Diets', data: prediction.diets, color: 'bg-yellow-100' },
              ].map((item) => (
                <button
                  key={item.label}
                  className={`${item.color} p-4 rounded-lg text-gray-900 font-medium hover:opacity-90 transition`}
                  onClick={() => {
                    // TODO: Implement modal display
                    alert(`${item.label}: ${Array.isArray(item.data) ? item.data.join(', ') : item.data}`);
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </PageContainer>
  );
}
