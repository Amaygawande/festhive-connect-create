
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { email, role, name, password, rollNo } = location.state || {};
  
  // Generate a simple demo OTP - in a real app this would be sent via email
  const demoOtp = "123456";
  
  const handleVerify = () => {
    if (!otp) {
      toast.error("Please enter OTP");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API verification - in a real app, this would validate against a backend
    setTimeout(() => {
      if (otp === demoOtp) {
        // Store user data in localStorage as a simple DB simulation
        localStorage.setItem('userRole', role);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userName', name || '');
        localStorage.setItem('emailVerified', 'true');
        
        setIsLoading(false);
        toast.success('Email verified successfully');
        
        // Redirect based on role
        if (role === 'admin') {
          navigate('/admin/dashboard');
        } else {
          navigate('/student/dashboard');
        }
      } else {
        setIsLoading(false);
        toast.error('Invalid OTP. Please try again.');
      }
    }, 1500);
  };
  
  const handleResendOtp = () => {
    toast.success(`Demo OTP: ${demoOtp} (This would be sent via email in a real app)`);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-festblue">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">Verify Your Email</h2>
            <p className="mt-2 text-gray-300">We've sent a 6-digit code to {email || 'your email'}</p>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Enter verification code
              </label>
              <div className="flex justify-center">
                <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
            </div>
            
            <div>
              <Button
                onClick={handleVerify}
                disabled={isLoading || otp.length < 6}
                className="w-full bg-festblue-accent hover:bg-festblue-accent/80 py-2"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Verifying...
                  </>
                ) : (
                  'Verify'
                )}
              </Button>
            </div>
            
            <div className="text-center">
              <p className="text-gray-300 text-sm">
                Didn't receive a code?{' '}
                <button 
                  onClick={handleResendOtp}
                  className="text-festblue-accent hover:text-festblue-accent/80"
                >
                  Send again
                </button>
              </p>
              
              {/* For demo purposes */}
              <div className="mt-6 p-3 bg-festblue-light/30 rounded-lg">
                <p className="text-xs text-gray-400">Demo OTP: {demoOtp}</p>
                <p className="text-xs text-gray-400 mt-1">(This simulates an email you would receive)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OtpVerification;
