// Manager dashboard — "/dashboard"
// TODO: replace sample data with DB

"use client";
import { useState } from "react";
import { /*icons*/ } from "lucide-react";
import Link from "next/link";

import { 
  Menu, LayoutDashboard, Package, ShoppingCart, Users, TrendingUp, RotateCcw, 
  Bell, Download, AlertTriangle, ArrowUpRight, CheckCircle2, X, Lightbulb
} from "lucide-react";


export default function DashboardPage() {
  // Show/hide tip banner
  const [showTip, setShowTip] = useState(true);

  // Daily sales bar heights (%)
  const chartData = [30, 40, 45, 38, 55, 65, 32, 28, 48, 50, 58, 78, 42, 35, 52, 62, 68, 45, 85];

  return (
    <div className="flex h-screen bg-[#FAFAF8] font-sans text-gray-900 overflow-hidden">
      
      {/* ================= SIDEBAR ================= */}
      <aside className="flex w-[240px] flex-col border-r border-[#E4E2DB] bg[#F6F5F1]]">
        {/* Logo */}
        <div className="flex h-16 items-center gap-3 px-6 border-b border-transparent">
          <Menu className="h-5 w-5 text-gray-500" />
          <span className="text-lg font-bold tracking-tight text-[#2D2D2D]">haraStock</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Workspace</p>
          
          <Link href="/dashboard" className="flex items-center gap-3 rounded-lg bg-white px-3 py-2 text-sm font-medium text-gray-900">
            <LayoutDashboard className="h-4 w-4 text-gray-700" />
            Dashboard
          </Link>
          <Link href="/stock" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
            <Package className="h-4 w-4" />
            Stock
          </Link>
          <Link href="/sales" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
            <ShoppingCart className="h-4 w-4" />
            Sales
          </Link>
          <Link href="/products" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
            <Users className="h-4 w-4" />
            Products & Suppliers
          </Link>
          <Link href="/forecast" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
            <TrendingUp className="h-4 w-4" />
            Forecast
          </Link>
          <Link href="/reorder" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
            <RotateCcw className="h-4 w-4" />
            Reorder
          </Link>
        </nav>

        {/* User Profile Bottom */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E5E7EB] text-sm font-bold text-gray-600">
                AR
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">Aina Rahman</span>
                <span className="text-xs text-gray-500">Manager</span>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 overflow-y-auto relative">
        <div className="p-8 max-w-6xl mx-auto space-y-6">
          
          {/* Header */}
          <header className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Good morning, Aina</h1>
              <p className="text-sm text-gray-500 mt-1">Sunday, 19 October 2026 · Here is how the shop is doing today.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="rounded-full border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-50">
                <Bell className="h-4 w-4" />
              </button>
              <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                <Download className="h-4 w-4" />
                Export report
              </button>
            </div>
          </header>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="text-sm font-medium text-gray-500 mb-2">Items in stock</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">1,248</h3>
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <span className="text-green-600 font-medium">+36</span> received today
              </p>
            </div>
            {/* Card 2 */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="text-sm font-medium text-gray-500 mb-2">Low stock</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">7</h3>
              <p className="text-xs text-orange-500 flex items-center gap-1">
                <AlertTriangle className="h-3 w-3" /> 3 are below reorder level
              </p>
            </div>
            {/* Card 3 */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="text-sm font-medium text-gray-500 mb-2">Today's sales</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">RM 2,184.50</h3>
              <p className="text-xs text-gray-500 flex items-center gap-1">
                <ArrowUpRight className="h-3 w-3 text-green-600" /> <span className="text-green-600 font-medium">+8.4%</span> vs yesterday
              </p>
            </div>
            {/* Card 4 */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">
              <p className="text-sm font-medium text-gray-500 mb-2">Pending reorders</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">3</h3>
              <p className="text-xs text-gray-500">
                Awaiting your approval
              </p>
            </div>
          </div>

          {/* Chart & Attention Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Chart Area (Takes 2 columns) */}
            <div className="lg:col-span-2 rounded-xl border border-gray-200 bg-white p-6 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Sales this month</h2>
                  <p className="text-xs text-gray-500">Daily revenue, 1 to 19 October - RM</p>
                </div>
                {/* Period toggle (not wired yet) */}
                <div className="flex rounded-lg bg-gray-100 p-1">
                  <button className="rounded-md bg-white px-3 py-1 text-xs font-medium shadow-sm">Daily</button>
                  <button className="rounded-md px-3 py-1 text-xs font-medium text-gray-500 hover:text-black">Weekly</button>
                  <button className="rounded-md px-3 py-1 text-xs font-medium text-gray-500 hover:text-black">Monthly</button>
                </div>
              </div>

              {/* Mock Chart Area */}
              <div className="relative flex-1 mt-4">
                {/* Y-axis labels */}
                <div className="absolute inset-y-0 left-0 flex flex-col justify-between text-xs text-gray-400 pb-6">
                  <span>3k</span>
                  <span>2k</span>
                  <span>1k</span>
                  <span>0</span>
                </div>
                
                {/* Bars — last one is today */}
                <div className="ml-8 h-64 flex items-end justify-between gap-1 border-b border-gray-100 pb-2">
                  {chartData.map((height, i) => (
                    <div key={i} className="relative group w-full flex justify-center">
                      {/* Tooltip for the last bar */}
                      {i === chartData.length - 1 && (
                        <div className="absolute -top-16 z-10 w-24 rounded-lg bg-gray-900 p-2 text-center text-xs text-white shadow-xl">
                          <span className="block text-[10px] text-gray-400">Today</span>
                          <span className="font-semibold">RM 2,184.50</span>
                          <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-gray-900"></div>
                        </div>
                      )}
                      <div 
                        className={`w-full max-w-[24px] rounded-t-sm transition-all hover:bg-[#4A5D46] ${i === chartData.length - 1 ? 'bg-[#3E4E3B]' : 'bg-[#A5B89F]'}`}
                        style={{ height: `${height}%` }}
                      ></div>
                    </div>
                  ))}
                </div>

                {/* X-axis labels */}
                <div className="ml-8 flex justify-between text-xs text-gray-400 mt-2">
                  <span>1</span>
                  <span>4</span>
                  <span>7</span>
                  <span>10</span>
                  <span>13</span>
                  <span>16</span>
                  <span>19</span>
                </div>
              </div>
            </div>

            {/* Needs Attention Panel */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 flex flex-col">
              <div className="mb-4">
                <h2 className="text-lg font-bold text-gray-900">Needs attention</h2>
                <p className="text-xs text-gray-500">Items that need action today</p>
              </div>

              <div className="flex-1 space-y-4">
                {/* Item 1 */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Gula Pasir 1kg</p>
                    <p className="text-xs text-gray-500 mt-0.5">12 left · lasts about 2 days</p>
                  </div>
                  <span className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-medium text-red-600">Critical</span>
                </div>
                {/* Item 2 */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Minyak Masak 2kg</p>
                    <p className="text-xs text-gray-500 mt-0.5">18 left · below reorder level</p>
                  </div>
                  <span className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-600">Low</span>
                </div>
                {/* Item 3 */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Telur Gred A (30)</p>
                    <p className="text-xs text-gray-500 mt-0.5">6 trays left</p>
                  </div>
                  <span className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-600">Low</span>
                </div>
                {/* Item 4 */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Tepung Gandum 1kg</p>
                    <p className="text-xs text-gray-500 mt-0.5">20 left · selling faster</p>
                  </div>
                  <span className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-600">Low</span>
                </div>
                {/* Item 5 */}
                <div className="flex items-center justify-between pb-2">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Milo 1kg</p>
                    <p className="text-xs text-gray-500 mt-0.5">Reorder approved yesterday</p>
                  </div>
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600 flex items-center gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div> Ordered
                  </span>
                </div>
              </div>

              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                <ShoppingCart className="h-4 w-4" />
                View reorder list
              </button>
            </div>
          </div>
        </div>

        {/* ================= FLOATING TIP BANNER ================= */}
        {showTip && (
        <div className="fixed bottom-6 left-[55%] -translate-x-1/2 w-full max-w-[600px] rounded-2xl border border-[#E4E2DB] bg-white p-4 shadow-[0_10px_28px_-6px_rgba(31,36,33,0.1),0_1px_3px_rgba(0,0,0,0.04)] flex items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F0F4EF] text-[#556B50]">
            <Lightbulb className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-[#556B50] mb-0.5">TIP · Stock</p>
            <p className="text-sm text-gray-700 leading-tight">
              Gula Pasir 1kg is selling 40% faster than usual. At this rate it runs out on Tuesday.
            </p>
          </div>
          <div className="flex items-center gap-3">
             {/* Pagination dots */}
            <div className="flex gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-[#556B50]"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
            </div>
            <button className="rounded-lg border border-[#E4E2DB] px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Next tip
            </button>
            <button onClick={() => setShowTip(false)} className="text-gray-400 hover:text-gray-600">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
        )}
      </main>
    </div>
  );
}