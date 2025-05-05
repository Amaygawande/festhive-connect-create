
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import StudentSidebar from '@/components/student/StudentSidebar';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const StudentDashboard = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is authenticated and has student role
    const userRole = localStorage.getItem('userRole');
    
    if (!userRole || userRole !== 'student') {
      toast.error('Please sign in as a student to access this page');
      navigate('/signin');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex bg-festblue">
      {/* Sidebar */}
      <div className="hidden md:block w-64">
        <StudentSidebar />
      </div>
      
      {/* Main Content */}
      <div className="flex-grow">
        <div className="p-6">
          {/* Mobile View Menu */}
          <div className="md:hidden mb-6">
            <button className="p-2 rounded-md text-white bg-festblue-light">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* Welcome Section */}
          <div className="glass-card p-6 mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">Welcome to Your Dashboard</h1>
            <p className="text-gray-300">
              Explore upcoming events, manage your registrations, and stay connected with campus activities.
            </p>
          </div>
          
          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Button asChild className="h-auto py-6 bg-gradient-to-r from-blue-600 to-blue-800">
                <Link to="/student/events" className="flex flex-col items-center">
                  <Calendar className="h-8 w-8 mb-2" />
                  <span className="text-lg">View All Events</span>
                </Link>
              </Button>
              
              <Button asChild className="h-auto py-6 bg-gradient-to-r from-green-600 to-green-800">
                <Link to="#" className="flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  <span className="text-lg">My Registrations</span>
                </Link>
              </Button>
              
              <Button asChild className="h-auto py-6 bg-gradient-to-r from-purple-600 to-purple-800">
                <Link to="#" className="flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                  </svg>
                  <span className="text-lg">Campus Announcements</span>
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Upcoming Events Section */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">Upcoming Events</h2>
              <Link to="/student/events" className="text-festblue-accent hover:underline">
                View All
              </Link>
            </div>
            
            <div className="glass-card p-6">
              <div className="space-y-4">
                <div className="border-b border-gray-700 pb-4">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-white font-semibold">Tech Innovate 2024</h3>
                      <p className="text-gray-400 text-sm">June 20, 2024 • Main Auditorium</p>
                    </div>
                    <Button size="sm" className="bg-festblue-accent hover:bg-festblue-accent/80">
                      Register
                    </Button>
                  </div>
                </div>
                
                <div className="border-b border-gray-700 pb-4">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-white font-semibold">Annual Cultural Fest</h3>
                      <p className="text-gray-400 text-sm">July 15, 2024 • Open Air Theatre</p>
                    </div>
                    <Button size="sm" className="bg-festblue-accent hover:bg-festblue-accent/80">
                      Register
                    </Button>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-white font-semibold">Coding Competition</h3>
                      <p className="text-gray-400 text-sm">August 5, 2024 • CS Building</p>
                    </div>
                    <Button size="sm" className="bg-festblue-accent hover:bg-festblue-accent/80">
                      Register
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
