import PageContainer from '@/components/PageContainer';

export default function BlogPage() {
  return (
    <PageContainer 
      title="Blog"
      description="Insights and updates from the MediBot team"
    >
      <article className="prose prose-blue max-w-none">
        <h2 className="text-center text-3xl font-bold mb-8">
          Building a Symptom-Based Disease Diagnosis Web App with Next.js and Machine Learning
        </h2>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg leading-relaxed">
            In the age of technology and information, access to accurate and timely healthcare is more critical than ever. With the increasing importance of remote healthcare solutions, we embarked on a journey to develop a symptom-based disease diagnosis web application. Leveraging Next.js for the frontend and a Decision Tree Classifier model, we created a user-friendly platform that can help users identify potential illnesses based on their reported symptoms.
          </p>
        </div>

        <h3>The Problem</h3>
        <p>The project began with recognizing a common issue: people often experience symptoms and want quick answers about their health concerns. It can be challenging to differentiate between various diseases, especially when symptoms overlap. Our goal was to provide a convenient solution for users to input their symptoms and receive potential diagnoses.</p>

        <h3>The Solution</h3>
        <p>We developed a web app that allows users to enter a list of symptoms they are experiencing. The app then uses a pre-trained Decision Tree Classifier model to predict the most likely disease based on the provided symptoms. Here's how it works:</p>

        <ol className="list-decimal pl-6 space-y-4">
          <li><strong>Symptom Input:</strong> Users enter their symptoms through a user-friendly interface. The web app supports a wide range of symptoms, making it versatile for different scenarios.</li>
          <li><strong>Machine Learning Model:</strong> We trained a Decision Tree Classifier using a dataset containing symptoms and corresponding diseases. The model is capable of predicting diseases based on input symptoms.</li>
          <li><strong>Prediction:</strong> The app uses the model to predict the most likely disease, providing users with instant information about potential health concerns.</li>
          <li><strong>Additional Information:</strong> To enhance user experience, the app also provides additional information about the predicted disease. This includes a description of the disease, recommended precautions, medications, dietary advice, and workout tips.</li>
        </ol>

        <h3>Key Features</h3>
        <ul className="list-disc pl-6 space-y-4">
          <li><strong>User-Friendly Interface:</strong> The web app boasts an intuitive and easy-to-navigate interface, ensuring that users can input their symptoms without any hassle.</li>
          <li><strong>Accurate Predictions:</strong> Leveraging machine learning, our model provides accurate disease predictions based on the symptoms provided by the user.</li>
          <li><strong>Comprehensive Information:</strong> In addition to predictions, the app offers comprehensive information about the predicted disease, including descriptions, precautions, medications, diet recommendations, and workout tips.</li>
          <li><strong>Educational Content:</strong> To empower users with knowledge, the app includes informative blog posts about various health topics.</li>
        </ul>

        <h3>Conclusion</h3>
        <div className="bg-gray-50 p-6 rounded-lg mt-8">
          <p className="text-lg leading-relaxed">
            Our Symptom-Based Disease Diagnosis Web App brings the power of machine learning and healthcare information to the fingertips of users. It serves as a valuable resource for individuals looking to gain insights into their health conditions quickly and conveniently. By combining technology and healthcare, we aim to make healthcare more accessible and user-centric.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            In an era where remote healthcare solutions are gaining prominence, this project represents a significant step forward in providing accessible and reliable healthcare information to the masses. We hope that this project will contribute to better health awareness and ultimately improve the well-being of individuals worldwide.
          </p>
        </div>
      </article>
    </PageContainer>
  );
}