
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // In a real application, this would be an API call to your authentication service
      console.log('Signing in with:', formData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, let's say admin user is admin@ies.edu with password "admin"
      // and student user is student@ies.edu with password "student"
      if (formData.email === 'admin@ies.edu' && formData.password === 'admin') {
        localStorage.setItem('userRole', 'admin');
        localStorage.setItem('userEmail', formData.email);
        toast.success('Welcome back, Admin!');
        navigate('/admin/dashboard');
      } else if (formData.email === 'student@ies.edu' && formData.password === 'student') {
        localStorage.setItem('userRole', 'student');
        localStorage.setItem('userEmail', formData.email);
        toast.success('Welcome back, Student!');
        navigate('/student/dashboard');
      } else {
        toast.error('Invalid email or password. Please try again.');
      }
    } catch (error) {
      console.error('Sign in error:', error);
      toast.error('An error occurred during sign in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-festblue">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-20">
        <div className="glass-card max-w-md w-full p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
            <p className="text-gray-300 mt-2">Sign in to your IES FESTHIVE account</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email / Roll Number
              </label>
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-festblue-light border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-festblue-accent text-white"
                placeholder="Enter your email or roll number"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-festblue-light border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-festblue-accent text-white"
                placeholder="Enter your password"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-festblue-accent focus:ring-festblue-accent border-gray-600 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>
              
              <div className="text-sm">
                <a href="#" className="font-medium text-festblue-accent hover:text-festblue-accent/80">
                  Forgot your password?
                </a>
              </div>
            </div>
            
            <Button
              type="submit"
              className="w-full bg-festblue-accent hover:bg-festblue-accent/80 text-white"
              disabled={loading}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </Button>
            
            <div className="text-center mt-4 text-gray-300">
              Don't have an account?{' '}
              <Link to="/signup" className="text-festblue-accent hover:text-festblue-accent/80">
                Sign up
              </Link>
            </div>
          </form>
          
          {/* Demo account info for testing */}
          <div className="mt-8 p-4 border border-gray-700 rounded-lg bg-festblue/50">
            <h4 className="font-semibold text-white mb-2">Demo Accounts:</h4>
            <p className="text-sm text-gray-300 mb-1">Admin: admin@ies.edu / admin</p>
            <p className="text-sm text-gray-300">Student: student@ies.edu / student</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SignIn;
