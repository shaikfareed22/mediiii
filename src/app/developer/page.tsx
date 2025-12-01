import PageContainer from '@/components/PageContainer';

export default function DeveloperPage() {
  return (
    <PageContainer 
      title="Meet the Developer"
      description="Learn about the creator of MediBot"
    >
      <div className="prose prose-blue max-w-none">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-8">
          <h4 className="text-xl font-semibold text-blue-900 mb-2">Shaik Fareed: AI Enthusiast &amp; Future Innovator</h4>
          <p className="text-blue-800">Creating intelligent solutions for healthcare through AI innovation</p>
        </div>

        <h5>Meet the Developer</h5>
        <p>Hello, I&apos;m Shaik Fareed — an AI enthusiast passionate about exploring cutting-edge tools and technologies. I&apos;m deeply interested in solving real-world problems through intelligent, research-driven solutions.</p>

        <h5>My Journey in AI</h5>
        <p>Currently diving deep into the world of Artificial Intelligence, I spend most of my time researching and learning new advancements in AI and ML. My vision is to become a global leader in AI innovation, contributing impactful technologies to society.</p>

        <h5>Driven by Innovation</h5>
        <p>I believe that AI is the key to a smarter, more efficient future. My goal is to create solutions that are not only technically advanced but also accessible and beneficial for people from all walks of life.</p>

        <h5>MediBot: AI-Powered Healthcare Assistant</h5>
        <p>One of my most exciting projects is <strong>MediBot</strong> — an AI-based healthcare assistant designed to improve healthcare accessibility and provide intelligent health support. MediBot is a step toward my mission of leveraging AI to transform healthcare systems worldwide.</p>

        <h5>Looking Ahead</h5>
        <p>As I continue to grow in this field, I welcome you to follow my journey, explore my work, and collaborate on innovations that can truly make a difference. Let&apos;s shape the future of AI together.</p>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h6 className="text-lg font-semibold mb-4">Connect with Me</h6>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:shaikfareed2203@gmail.com"
              className="inline-flex items-center px-4 py-2 border border-blue-300 text-sm font-medium rounded-md text-blue-700 bg-blue-50 hover:bg-blue-100"
            >
              Email Me
            </a>
            <a
              href="https://github.com/shaikfareed22"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}