"use client";

import { Mail, LockKeyhole, User, ShieldCheck, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  // Simple state to toggle between Sign In and Register tabs
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="flex min-h-screen w-full bg-[#FAFAF8]">
      {/* ================= LEFT PANEL (Hidden on mobile) ================= */}
      <div className="hidden lg:flex lg:w-[45%] flex-col bg-[#556B50] p-12 text-white">
        
        {/* Logo Area (Box removed!) */}
        <div className="text-xl font-bold">
          haraStock
        </div>

        {/* This wrapper pushes everything to the bottom */}
        <div className="mt-auto flex flex-col gap-12 pb-4">
          
          {/* Decorative Dashboard Placeholder */}
          <div className="flex flex-col gap-4 opacity-80 max-w-lg">
            <div className="flex gap-4">
              <div className="h-8 w-1/3 bg-white/20 rounded-md"></div>
              <div className="h-8 w-1/4 bg-white/20 rounded-md"></div>
              <div className="h-8 w-1/4 bg-white/20 rounded-md"></div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="h-8 w-2/5 bg-white/20 rounded-md"></div>
              <div className="h-8 w-1/3 bg-white rounded-md"></div> {/* Solid white block */}
            </div>
            <div className="flex gap-4">
              <div className="h-8 w-1/5 bg-white/20 rounded-md"></div>
              <div className="h-8 w-1/3 bg-white/20 rounded-md"></div>
              <div className="h-8 w-1/6 bg-white/20 rounded-md"></div>
              <div className="h-8 w-1/6 bg-white/20 rounded-md"></div>
            </div>
            <div className="flex gap-4">
              <div className="h-8 w-1/4 bg-white/20 rounded-md"></div>
              <div className="h-8 w-1/5 bg-white/20 rounded-md"></div>
              <div className="h-8 w-1/4 bg-white/20 rounded-md"></div>
            </div>
          </div>

          {/* Bottom Text */}
          <div>
            <h1 className="text-3xl font-semibold leading-tight mb-4">
              Know what to restock before it runs out.
            </h1>
            <p className="text-sm text-white/70">
              Stock, sales, forecasts and supplier orders for small shops, in one place.
            </p>
          </div>

        </div>
      </div>

      {/* ================= RIGHT PANEL (Form) ================= */}
      <div className="flex w-full lg:w-[55%] flex-col items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-[400px]">
          
          {/* Toggle Tabs */}
          <div className="flex w-full rounded-lg bg-[#EFEFEF] p-1 mb-8">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 rounded-md py-2 text-sm font-medium transition-all ${
                isLogin
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              Sign in
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 rounded-md py-2 text-sm font-medium transition-all ${
                !isLogin
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              Register
            </button>
          </div>

          {/* Heading */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              {isLogin ? "Welcome back" : "Create an account"}
            </h2>
            <p className="text-sm text-gray-500">
              {isLogin ? "Sign in to manage your shop." : "Sign up to get started."}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="aina@kedairuncit.my"
                  className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[#5E7A64] focus:outline-none focus:ring-1 focus:ring-[#5E7A64]"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                {isLogin && (
                  <Link
                    href="#"
                    className="text-xs font-medium text-gray-500 hover:text-gray-900"
                  >
                    Forgot password?
                  </Link>
                )}
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <LockKeyhole className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 placeholder-gray-400 focus:border-[#5E7A64] focus:outline-none focus:ring-1 focus:ring-[#5E7A64]"
                />
              </div>
            </div>

            {/* Keep me signed in Checkbox */}
            <div className="flex items-center gap-2 pt-1 pb-2">
              <input
                type="checkbox"
                id="keep-signed-in"
                className="h-4 w-4 rounded border-gray-300 text-[#5E7A64] focus:ring-[#5E7A64] accent-[#5E7A64]"
              />
              <label htmlFor="keep-signed-in" className="text-sm text-gray-600">
                Keep me signed in on this device
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              className="w-full rounded-lg bg-[#5E7A64] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#4A6B42] focus:outline-none focus:ring-2 focus:ring-[#5E7A64] focus:ring-offset-2"
            >
              {isLogin ? "Sign in" : "Register"}
            </button>
          </form>

          {/* Footer Text */}
          <div className="mt-8 flex items-start gap-2 text-xs text-gray-500 leading-relaxed">
            <User className="h-4 w-4 shrink-0 mt-0.5" />
            <p>
              You will see the pages for your role: manager, staff or supplier.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}