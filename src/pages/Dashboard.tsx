import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { PlusCircle, TrendingUp, Users, DollarSign } from 'lucide-react';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Sample campaigns data (in a real app, this would come from your database)
  const [campaigns] = useState([
    {
      id: 1,
      title: "Local Food Bank Support",
      description: "Help us provide meals to those in need",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
      progress: 45,
      goal: 20000,
      raised: 9000,
      donors: 67,
      daysLeft: 15
    },
    {
      id: 2,
      title: "Animal Shelter Renovation",
      description: "Upgrading facilities for rescued animals",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=800",
      progress: 80,
      goal: 15000,
      raised: 12000,
      donors: 94,
      daysLeft: 5
    }
  ]);

  React.useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <button
          onClick={() => navigate('/create-campaign')}
          className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 flex items-center space-x-2"
        >
          <PlusCircle className="h-5 w-5" />
          <span>Create Campaign</span>
        </button>
      </div>

      {/* Campaign Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <DollarSign className="h-10 w-10 text-rose-500" />
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Raised</p>
              <p className="text-2xl font-bold text-gray-900">$21,000</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <TrendingUp className="h-10 w-10 text-rose-500" />
            <div className="ml-4">
              <p className="text-sm text-gray-500">Active Campaigns</p>
              <p className="text-2xl font-bold text-gray-900">2</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <Users className="h-10 w-10 text-rose-500" />
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Donors</p>
              <p className="text-2xl font-bold text-gray-900">161</p>
            </div>
          </div>
        </div>
      </div>

      {/* Campaigns List */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Your Campaigns</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="p-6">
              <div className="flex items-center space-x-6">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="h-24 w-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">{campaign.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{campaign.description}</p>
                  <div className="mt-2">
                    <div className="relative pt-1">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-200">
                        <div
                          style={{ width: `${campaign.progress}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-rose-500"
                        ></div>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-sm">
                      <div className="text-gray-500">
                        ${campaign.raised.toLocaleString()} raised of ${campaign.goal.toLocaleString()}
                      </div>
                      <div className="text-gray-500">
                        {campaign.donors} donors • {campaign.daysLeft} days left
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}