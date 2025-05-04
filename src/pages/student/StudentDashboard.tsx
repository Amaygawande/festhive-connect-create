
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import StudentSidebar from '@/components/student/StudentSidebar';

interface Event {
  id: number;
  name: string;
  date: string;
  venue: string;
  image: string;
  category: string;
}

const upcomingEvents: Event[] = [
  {
    id: 5,
    name: 'Tech Innovate 2024',
    date: '2024-06-20',
    venue: 'Main Auditorium',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    category: 'Technical',
  },
  {
    id: 6,
    name: 'Cultural Night 2024',
    date: '2024-07-30',
    venue: 'Open Air Theatre',
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&q=80',
    category: 'Cultural',
  },
];

const announcements = [
  {
    id: 1,
    title: 'Registration Open for Tech Innovate 2024',
    content: 'Registration for Tech Innovate 2024 is now open. Register before June 15 to secure your spot.',
    date: '2024-05-01',
  },
  {
    id: 2,
    title: 'Call for Volunteers - Cultural Night 2024',
    content: 'We are looking for volunteers to help organize the Cultural Night 2024. Apply now!',
    date: '2024-05-03',
  },
  {
    id: 3,
    title: 'Hackathon Theme Announcement',
    content: 'The theme for Hackathon 2024 will be "Sustainable Smart Cities". Start preparing your ideas!',
    date: '2024-05-02',
  },
];

const StudentDashboard = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userInterests, setUserInterests] = useState<number[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated and has student role
    const userRole = localStorage.getItem('userRole');
    const email = localStorage.getItem('userEmail');
    
    if (!userRole || userRole !== 'student') {
      toast.error('Please sign in as a student to access this page');
      navigate('/signin');
      return;
    }
    
    if (email) {
      setUserEmail(email);
    }
    
    // Get user interests from localStorage (in real app, this would come from API)
    const storedInterests = localStorage.getItem('userInterests');
    if (storedInterests) {
      setUserInterests(JSON.parse(storedInterests));
    }
  }, [navigate]);
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    toast.success('Logged out successfully');
    navigate('/');
  };

  return (
    <div className="min-h-screen flex bg-festblue">
      {/* Sidebar */}
      <div className="hidden md:block w-64 flex-shrink-0">
        <StudentSidebar />
      </div>
      
      {/* Main Content */}
      <div className="flex-grow">
        <div className="p-6">
          {/* Mobile View Menu */}
          <div className="md:hidden mb-6 flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-festblue-accent">
              IES FESTHIVE
            </Link>
            <button className="p-2 rounded-md text-white bg-festblue-light">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-white">Student Dashboard</h1>
              <p className="text-gray-300">Welcome back, {userEmail}</p>
            </div>
            
            <Button onClick={handleLogout} variant="outline" className="border-red-500 text-red-500 hover:bg-red-500/10">
              Logout
            </Button>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="glass-card p-6 flex items-center">
              <div className="p-3 rounded-full bg-festblue-accent/20 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-festblue-accent" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Upcoming Events</p>
                <h3 className="text-2xl font-bold text-white">8</h3>
              </div>
            </div>
            
            <div className="glass-card p-6 flex items-center">
              <div className="p-3 rounded-full bg-green-500/20 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Registered Events</p>
                <h3 className="text-2xl font-bold text-white">{userInterests.length}</h3>
              </div>
            </div>
            
            <div className="glass-card p-6 flex items-center">
              <div className="p-3 rounded-full bg-purple-500/20 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Notifications</p>
                <h3 className="text-2xl font-bold text-white">3</h3>
              </div>
            </div>
          </div>
          
          {/* Content Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Upcoming Events */}
            <div className="lg:col-span-2">
              <div className="glass-card p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-white">Upcoming Events</h2>
                  <Link to="/events" className="text-festblue-accent hover:text-festblue-accent/80 text-sm">
                    View All
                  </Link>
                </div>
                
                <div className="space-y-6">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="flex items-center space-x-4">
                      <img
                        src={event.image}
                        alt={event.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-grow">
                        <h3 className="font-medium text-white">{event.name}</h3>
                        <div className="flex items-center text-gray-300 text-sm">
                          <span className="mr-4">{formatDate(event.date)}</span>
                          <span>{event.venue}</span>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-festblue rounded text-xs text-festblue-accent">
                        {event.category}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Button asChild className="bg-festblue-accent hover:bg-festblue-accent/80">
                    <Link to="/events">Browse More Events</Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Announcements */}
            <div>
              <div className="glass-card p-6">
                <h2 className="text-xl font-semibold text-white mb-6">Announcements</h2>
                
                <div className="space-y-4">
                  {announcements.map((announcement) => (
                    <div key={announcement.id} className="border-b border-gray-700 pb-4 last:border-b-0 last:pb-0">
                      <h3 className="font-medium text-white mb-1">{announcement.title}</h3>
                      <p className="text-gray-300 text-sm mb-2">{announcement.content}</p>
                      <span className="text-xs text-gray-400">{formatDate(announcement.date)}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Button variant="outline" className="border-festblue-accent text-festblue-accent hover:bg-festblue-accent/10">
                    View All Announcements
                  </Button>
                </div>
              </div>
              
              {/* Quick Links */}
              <div className="glass-card p-6 mt-6">
                <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
                
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/student/my-events"
                      className="flex items-center text-gray-300 hover:text-festblue-accent"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                      </svg>
                      My Registered Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/student/profile"
                      className="flex items-center text-gray-300 hover:text-festblue-accent"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                      </svg>
                      Update Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/student/notifications"
                      className="flex items-center text-gray-300 hover:text-festblue-accent"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                      </svg>
                      Notifications
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
