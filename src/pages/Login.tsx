import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="relative flex items-center justify-center min-h-screen p-4 overflow-hidden" style={{ background: 'radial-gradient(circle at 20% 30%, #3a2e6c 0%, #251f45 60%, #18122b 100%)' }}>
      {/* Animated floating orbs for background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bg-purple-500 rounded-full -top-32 -right-32 w-96 h-96 mix-blend-screen filter blur-2xl opacity-40 animate-pulse"></div>
        <div className="absolute bg-blue-400 rounded-full -bottom-32 -left-32 w-96 h-96 mix-blend-screen filter blur-2xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bg-pink-400 rounded-full top-1/4 left-1/2 w-60 h-60 mix-blend-screen filter blur-2xl opacity-20 animate-pulse animation-delay-4000"></div>
        <div className="absolute w-40 h-40 rounded-full bg-cyan-400 bottom-1/3 right-1/3 mix-blend-screen filter blur-2xl opacity-20 animate-pulse animation-delay-3000"></div>
      </div>

      {/* Login card */}
      <div className="relative w-full max-w-lg">
        <div className="p-8 space-y-6 border shadow-2xl bg-white/10 backdrop-blur-lg rounded-2xl border-white/20">
          {/* Header */}
          <div className="space-y-2 text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-400 to-blue-400">
              <AiOutlineLock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
            <p className="text-purple-100">Sign in to your account</p>
          </div>

          {/* Form */}
          <div className="space-y-5">
            {/* Email field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-purple-100">
                Email Address
              </label>
              <div className="relative">
                <AiOutlineMail className="absolute w-5 h-5 text-purple-300 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-3 pl-10 pr-4 text-white placeholder-purple-200 transition-all duration-200 border rounded-lg bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent backdrop-blur-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-purple-100">
                Password
              </label>
              <div className="relative">
                <AiOutlineLock className="absolute w-5 h-5 text-purple-300 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full py-3 pl-10 pr-12 text-white placeholder-purple-200 transition-all duration-200 border rounded-lg bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent backdrop-blur-sm"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute text-purple-300 transition-colors transform -translate-y-1/2 right-3 top-1/2 hover:text-white"
                >
                  {showPassword ? <AiOutlineEyeInvisible className="w-5 h-5" /> : <AiOutlineEye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember me and forgot password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-purple-100 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-purple-600 rounded bg-white/10 border-white/20 focus:ring-purple-400 focus:ring-2" />
                <span className="ml-2">Remember me</span>
              </label>
              <a href="#" className="text-purple-200 transition-colors hover:text-white hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              Sign In
            </button>
          </div>

        

          {/* Register link */}
          <p className="text-center text-purple-100">
            Don't have an account?{' '}
            <a href="/register" className="font-semibold text-white transition-all duration-200 hover:underline">
              Create one
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};