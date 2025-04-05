import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, TrendingUp, Users, Globe, ArrowRight } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();
  const featuredCampaigns = [
    {
      id: 1,
      title: "Save the Ocean Initiative",
      description: "Help us clean the oceans and protect marine life",
      image: "https://images.unsplash.com/photo-1583842761824-864b325a15ee?auto=format&fit=crop&q=80&w=800",
      progress: 75,
      goal: 50000,
      raised: 37500
    },
    {
      id: 2,
      title: "Education for All",
      description: "Providing quality education to underprivileged children",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
      progress: 60,
      goal: 30000,
      raised: 18000
    },
    {
      id: 3,
      title: "Community Garden Project",
      description: "Creating sustainable food sources in urban areas",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800",
      progress: 40,
      goal: 25000,
      raised: 10000
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Make a difference with</span>
              <span className="block text-rose-500">CrowdHeart</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Join our community of changemakers and start your fundraising campaign today. Together, we can create positive change in the world.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  to="/create-campaign"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-500 hover:bg-rose-600 md:py-4 md:text-lg md:px-10"
                >
                  Start Fundraising
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Campaigns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Featured Campaigns</h2>
          <p className="mt-4 text-lg text-gray-500">Support these amazing causes and help make a difference</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredCampaigns.map((campaign) => (
            <div key={campaign.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{campaign.title}</h3>
                <p className="mt-2 text-gray-600">{campaign.description}</p>
                <div className="mt-4">
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                      <div
                        style={{ width: `${campaign.progress}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-rose-500"
                      ></div>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between text-sm text-gray-600">
                    <span>${campaign.raised.toLocaleString()}</span>
                    <span>raised of ${campaign.goal.toLocaleString()}</span>
                  </div>
                </div>
                <button
                  onClick={() => navigate(`/donate/${campaign.id}`)}
                  className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-500 hover:bg-rose-600"
                >
                  Support this cause
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Why Choose CrowdHeart?
            </h2>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center">
                <Heart className="h-12 w-12 text-rose-500" />
                <h3 className="mt-6 text-xl font-medium text-gray-900">
                  Meaningful Impact
                </h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Create campaigns that matter and make a real difference in people's lives.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <TrendingUp className="h-12 w-12 text-rose-500" />
                <h3 className="mt-6 text-xl font-medium text-gray-900">
                  Transparent Tracking
                </h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Monitor your campaign's progress with real-time updates and analytics.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <Users className="h-12 w-12 text-rose-500" />
                <h3 className="mt-6 text-xl font-medium text-gray-900">
                  Supportive Community
                </h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Join a community of like-minded individuals dedicated to making change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}