import { useState } from 'react';
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative flex items-center justify-center min-h-screen p-4 overflow-hidden" style={{ background: 'radial-gradient(circle at 80% 20%, #3a2e6c 0%, #251f45 60%, #18122b 100%)' }}>
      {/* Animated floating orbs for background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bg-pink-400 rounded-full -top-32 -left-32 w-96 h-96 mix-blend-screen filter blur-2xl opacity-40 animate-pulse"></div>
        <div className="absolute bg-blue-400 rounded-full -bottom-32 -right-32 w-96 h-96 mix-blend-screen filter blur-2xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bg-purple-400 rounded-full top-1/4 right-1/2 w-60 h-60 mix-blend-screen filter blur-2xl opacity-20 animate-pulse animation-delay-4000"></div>
        <div className="absolute w-40 h-40 rounded-full bg-cyan-400 bottom-1/3 left-1/3 mix-blend-screen filter blur-2xl opacity-20 animate-pulse animation-delay-3000"></div>
      </div>
      {/* Register card */}
      <div className="relative w-full max-w-lg">
        <div className="p-8 space-y-6 border shadow-2xl bg-white/10 backdrop-blur-lg rounded-2xl border-white/20">
          {/* Header */}
          <div className="space-y-2 text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-400 to-blue-400">
              <AiOutlineUser className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Create Account</h2>
            <p className="text-purple-100">Join us and start learning today!</p>
          </div>
          {/* Form */}
          <form className="space-y-5">
            {/* Name field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-purple-100">Name</label>
              <div className="relative">
                <AiOutlineUser className="absolute w-5 h-5 text-purple-300 transform -translate-y-1/2 left-3 top-1/2" />
                <input type="text" className="w-full py-3 pl-10 pr-4 text-white placeholder-purple-200 transition-all duration-200 border rounded-lg bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent backdrop-blur-sm" placeholder="Enter your name" />
              </div>
            </div>
            {/* Email field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-purple-100">Email</label>
              <div className="relative">
                <AiOutlineMail className="absolute w-5 h-5 text-purple-300 transform -translate-y-1/2 left-3 top-1/2" />
                <input type="email" className="w-full py-3 pl-10 pr-4 text-white placeholder-purple-200 transition-all duration-200 border rounded-lg bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent backdrop-blur-sm" placeholder="Enter your email" />
              </div>
            </div>
            {/* Password field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-purple-100">Password</label>
              <div className="relative">
                <AiOutlineLock className="absolute w-5 h-5 text-purple-300 transform -translate-y-1/2 left-3 top-1/2" />
                <input type={showPassword ? 'text' : 'password'} className="w-full py-3 pl-10 pr-12 text-white placeholder-purple-200 transition-all duration-200 border rounded-lg bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent backdrop-blur-sm" placeholder="Create a password" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute text-purple-300 transition-colors transform -translate-y-1/2 right-3 top-1/2 hover:text-white">
                  {showPassword ? <AiOutlineLock className="w-5 h-5" /> : <AiOutlineLock className="w-5 h-5 opacity-50" />}
                </button>
              </div>
            </div>
            {/* Register button */}
            <button type="submit" className="w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-transparent">
              Register
            </button>
          </form>
          {/* Login link */}
          <p className="text-center text-purple-100">
            Already have an account?{' '}
            <a href="/login" className="font-semibold text-white transition-all duration-200 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
