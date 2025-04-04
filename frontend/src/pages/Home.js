import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [todayStudyTime, setTodayStudyTime] = useState(0); // in minutes
  const navigate = useNavigate();
  const currentUser = localStorage.getItem('currentUser');

  useEffect(() => {
    // Load today's study time from localStorage
    const today = new Date().toDateString();
    const studyTimeKey = `studyTime_${currentUser}_${today}`;
    const savedTime = localStorage.getItem(studyTimeKey) || '0';
    setTodayStudyTime(parseInt(savedTime));
  }, [currentUser]);

  const formatStudyTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours === 0) {
      return `${mins} minutes`;
    }
    return `${hours}h ${mins}m`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Today's Progress */}
       

        {/* Focus Mode Button */}
        <button
          onClick={() => navigate('/focus-mode')}
          className="w-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="p-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Start Focus Mode</h2>
              <p className="text-gray-500 mt-1">Configure your focus environment and start studying</p>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </button>

        {/* AI Assistant Button */}
        <button
          onClick={() => navigate('/chatbot')}
          className="w-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">AI Study Assistant</h3>
            <p className="text-gray-600">
              Get help with your studies using our AI-powered chatbot.
            </p>
          </div>
        </button>

        
        
      </div>
    </div>
  );
};

export default Home; 