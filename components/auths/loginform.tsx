
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

interface LoginFormProps {
  onSuccess?: () => void;
  onSwitch?: () => void; // Switch to signup
}

export const LoginForm = ({ onSuccess, onSwitch }: LoginFormProps) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Add your login logic here, e.g. API call
    // Simulate login delay
    setTimeout(() => {
      setLoading(false);
      toast.success("Logged in!");
      if (onSuccess) onSuccess();
      // router.push("/dashboard"); // Uncomment if you want to redirect
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Email/Username */}
      <input
        type="text"
        placeholder="Email or Username"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        required
        className="w-full px-4 py-3 rounded-md border border-[#333] bg-[#1a1c2d] text-white font-semibold placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Password */}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-3 pr-12 rounded-md border border-[#333] bg-[#1a1c2d] text-white font-semibold placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
        >
          {showPassword ? "👁️" : "🙈"}
        </button>
      </div>

      {/* Forgot Password */}
      <div className="text-left">
        <a href="#" className="text-white font-semibold hover:underline">
          Forgot Password?
        </a>
      </div>

      {/* Sign In Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-semibold transition disabled:opacity-50"
      >
        {loading ? "Logging in..." : "Sign In"}
      </button>

      {/* Divider */}
      <div className="flex items-center my-4">
        <hr className="flex-1 border-gray-600" />
        <span className="px-2 text-gray-400 text-sm">OR</span>
        <hr className="flex-1 border-gray-600" />
      </div>

      {/* Alternative Login */}
      <div className="space-y-3">
        <button className="w-full flex items-center justify-center gap-2 py-3 bg-[#2b2f42] rounded-md text-white font-semibold hover:bg-[#3a3f5c] transition">
          <span>🗝️</span> Sign In with Passkey
        </button>
        <button className="w-full flex items-center justify-center gap-2 py-3 bg-[#2b2f42] rounded-md text-white font-semibold hover:bg-[#3a3f5c] transition">
          <img src="/icons/google.svg" className="w-5 h-5" alt="Google" />
          Sign In with Google
        </button>
        <button className="w-full py-3 bg-[#2b2f42] rounded-md text-white font-semibold hover:bg-[#3a3f5c] transition">
          Sign In another way
        </button>
      </div>

      {/* Switch to Signup */}
      {onSwitch && (
        <p className="mt-6 text-center text-gray-400 text-sm">
          Don't have an account?{" "}
          <button onClick={onSwitch} className="text-[#00c2ff] hover:underline">
            Sign up
          </button>
        </p>
      )}
    </form>
  );
};
