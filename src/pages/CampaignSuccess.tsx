import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

function CampaignSuccess() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <CheckCircle className="h-24 w-24 text-green-500" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Campaign Created Successfully!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your campaign has been created and is now live. You can manage it from your dashboard.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Go to Dashboard
          </button>
          <button
            onClick={() => navigate('/')}
            className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default CampaignSuccess;