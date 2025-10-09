import PageContainer from '@/components/PageContainer';

export default function AboutPage() {
  return (
    <PageContainer 
      title="About Us"
      description="Learn more about MediBot and our mission"
    >
      <div className="prose prose-blue max-w-none">
        <h3>About Us</h3>
        <p>Welcome to <strong>MediBot</strong> — where innovation meets healthcare. We're on a mission to transform how people access, understand, and take charge of their well-being through the power of artificial intelligence.</p>

        <h3>Our Vision</h3>
        <p>We imagine a future where healthcare knowledge is universally accessible — not limited by geography, language, or background. MediBot was born from a bold vision: to equip every individual with intelligent tools to make informed decisions about their health.</p>

        <h3>Who We Are</h3>
        <p>We're a dedicated team of AI developers, researchers, and healthcare professionals, united by a shared purpose — to make healthcare smarter, simpler, and more human-centric. Our diverse backgrounds blend medical expertise with cutting-edge technology to build a platform that truly serves you.</p>

        <h3>Our Mission</h3>
        <p>At <strong>MediBot</strong>, our mission is to leverage advanced AI and machine learning to offer accurate, accessible health insights. By analyzing user-reported symptoms, we provide predictive suggestions, empowering users to understand potential conditions while guiding them with educational resources.</p>

        <h3>How MediBot Works</h3>
        <p>Powered by a sophisticated machine learning model trained on a comprehensive medical dataset, MediBot interprets your symptoms and delivers data-driven predictions. But we go beyond diagnosis — we focus on clarity, context, and care.</p>

        <h3>Your Health, Our Purpose</h3>
        <p>We know healthcare can be overwhelming. That's why MediBot is designed to simplify it — offering not just predictions but also detailed information about conditions, lifestyle advice, treatment options, preventive measures, and wellness tips — all in one intuitive platform.</p>

        <h3>Be Part of the Future</h3>
        <p>We invite you to explore MediBot and take an active role in your health journey. Dive into our rich content, get insights tailored to your needs, and discover how intelligent healthcare can truly change lives.</p>

        <p>Thank you for making MediBot your partner in health. Together, we're building a future where everyone has the power to live healthier, smarter, and more informed.</p>
      </div>
    </PageContainer>
  );
}