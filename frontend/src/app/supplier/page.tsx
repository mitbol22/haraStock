"use client";

import { 
  Menu, LayoutDashboard, Package, ClipboardList, Tag, 
  Megaphone, ArrowUpRight, AlertTriangle, FileText, Check, Plus, Eye
} from "lucide-react";
import Link from "next/link";

export default function SupplierOverviewPage() {
  return (
    <div className="flex h-screen bg-[#F6F5F1] font-sans text-gray-900 overflow-hidden">
      
      {/* ================= SIDEBAR ================= */}
      <aside className="flex w-[240px] flex-col border-r border-[#E4E2DB] bg-[#F6F5F1]">
        {/* Logo */}
        <div className="flex h-16 items-center gap-3 px-6 border-b border-transparent">
          <Menu className="h-5 w-5 text-gray-500" />
          <span className="text-lg font-bold tracking-tight text-[#2D2D2D]">haraStock</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Partner</p>
          
          {/* Active Link */}
          <Link href="/supplier" className="flex items-center gap-3 rounded-lg bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm">
            <LayoutDashboard className="h-4 w-4 text-gray-700" />
            Overview
          </Link>
          <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-white hover:text-gray-900 transition-colors">
            <Package className="h-4 w-4" />
            Partner stock
          </Link>
          <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-white hover:text-gray-900 transition-colors">
            <ClipboardList className="h-4 w-4" />
            Restock requests
          </Link>
          <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-white hover:text-gray-900 transition-colors">
            <Tag className="h-4 w-4" />
            Promotions
          </Link>
        </nav>

        {/* User Profile Bottom */}
        <div className="border-t border-[#E4E2DB] p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#556B50] text-sm font-bold text-white">
                SF
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">Sefar Foods</span>
                <span className="text-xs text-gray-500">Supplier</span>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8 max-w-7xl mx-auto space-y-6">
          
          {/* Header */}
          <header className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Hello, Sefar Foods</h1>
              <p className="text-sm text-gray-500 mt-1">Your partner shops and what they need from you.</p>
            </div>
            <button className="flex items-center gap-2 rounded-lg bg-[#556B50] px-4 py-2 text-sm font-medium text-white hover:bg-[#43553f] transition-colors">
              <Megaphone className="h-4 w-4" />
              Promote an item
            </button>
          </header>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="rounded-xl border border-[#E4E2DB] bg-white p-5">
              <p className="text-sm font-medium text-gray-500 mb-2">Partner shops</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">3</h3>
              <p className="text-xs text-gray-500">Kedai Runcit Aina and 2 others</p>
            </div>
            <div className="rounded-xl border border-[#E4E2DB] bg-white p-5">
              <p className="text-sm font-medium text-gray-500 mb-2">Items running low</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">4</h3>
              <p className="text-xs text-orange-500 flex items-center gap-1">
                <AlertTriangle className="h-3 w-3" /> At your partner shops
              </p>
            </div>
            <div className="rounded-xl border border-[#E4E2DB] bg-white p-5">
              <p className="text-sm font-medium text-gray-500 mb-2">Restock requests</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">2</h3>
              <p className="text-xs text-gray-500">1 waiting for your reply</p>
            </div>
            <div className="rounded-xl border border-[#E4E2DB] bg-white p-5">
              <p className="text-sm font-medium text-gray-500 mb-2">Active promotions</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">1</h3>
              <p className="text-xs text-gray-500">Ends 31 Oct</p>
            </div>
          </div>

          {/* Main Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Column: Partner Stock Table */}
            <div className="lg:col-span-2 rounded-xl border border-[#E4E2DB] bg-white flex flex-col">
              <div className="p-6 border-b border-[#E4E2DB]">
                <h2 className="text-lg font-bold text-gray-900">Partner stock</h2>
                <p className="text-xs text-gray-500 mt-1">Your items at partner shops</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#F9F9F8] text-xs uppercase text-gray-500 border-b border-[#E4E2DB]">
                    <tr>
                      <th className="px-6 py-3 font-medium">Shop</th>
                      <th className="px-6 py-3 font-medium">Item</th>
                      <th className="px-6 py-3 font-medium">Stock left</th>
                      <th className="px-6 py-3 font-medium">Status</th>
                      <th className="px-6 py-3 font-medium">Runs out</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E4E2DB]">
                    {/* Row 1 */}
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-3 text-gray-900">Kedai Runcit Aina</td>
                      <td className="px-6 py-3 text-gray-900">Gula Pasir 1kg</td>
                      <td className="px-6 py-3 text-gray-900">12</td>
                      <td className="px-6 py-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2 py-0.5 text-xs font-medium text-red-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-red-600"></span> Critical
                        </span>
                      </td>
                      <td className="px-6 py-3 text-gray-500">21 Oct</td>
                    </tr>
                    {/* Row 2 */}
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-3 text-gray-900">Kedai Runcit Aina</td>
                      <td className="px-6 py-3 text-gray-900">Minyak Masak 2kg</td>
                      <td className="px-6 py-3 text-gray-900">18</td>
                      <td className="px-6 py-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-2 py-0.5 text-xs font-medium text-orange-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-orange-600"></span> Low
                        </span>
                      </td>
                      <td className="px-6 py-3 text-gray-500">25 Oct</td>
                    </tr>
                    {/* Row 3 */}
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-3 text-gray-900">Kedai Runcit Aina</td>
                      <td className="px-6 py-3 text-gray-900">Tepung Gandum 1kg</td>
                      <td className="px-6 py-3 text-gray-900">20</td>
                      <td className="px-6 py-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-2 py-0.5 text-xs font-medium text-orange-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-orange-600"></span> Low
                        </span>
                      </td>
                      <td className="px-6 py-3 text-gray-500">28 Oct</td>
                    </tr>
                    {/* Row 4 */}
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-3 text-gray-900">Mini Market Seri</td>
                      <td className="px-6 py-3 text-gray-900">Gula Pasir 1kg</td>
                      <td className="px-6 py-3 text-gray-900">25</td>
                      <td className="px-6 py-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F0F4EF] px-2 py-0.5 text-xs font-medium text-[#556B50]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#556B50]"></span> In stock
                        </span>
                      </td>
                      <td className="px-6 py-3 text-gray-500">26 Oct</td>
                    </tr>
                    {/* Row 5 */}
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-3 text-gray-900">Mini Market Seri</td>
                      <td className="px-6 py-3 text-gray-900">Kicap Manis 1L</td>
                      <td className="px-6 py-3 text-gray-900">40</td>
                      <td className="px-6 py-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F0F4EF] px-2 py-0.5 text-xs font-medium text-[#556B50]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#556B50]"></span> In stock
                        </span>
                      </td>
                      <td className="px-6 py-3 text-gray-500">18 Nov</td>
                    </tr>
                    {/* Row 6 */}
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-3 text-gray-900">Kedai Pak Lah</td>
                      <td className="px-6 py-3 text-gray-900">Minyak Masak 2kg</td>
                      <td className="px-6 py-3 text-gray-900">55</td>
                      <td className="px-6 py-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F0F4EF] px-2 py-0.5 text-xs font-medium text-[#556B50]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#556B50]"></span> In stock
                        </span>
                      </td>
                      <td className="px-6 py-3 text-gray-500">30 Nov</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column: Requests & Promotions */}
            <div className="space-y-6">
              
              {/* Restock Requests Card */}
              <div className="rounded-xl border border-[#E4E2DB] bg-white p-6">
                <div className="mb-4">
                  <h2 className="text-lg font-bold text-gray-900">Restock requests</h2>
                  <p className="text-xs text-gray-500 mt-1">Orders sent to you by partner shops</p>
                </div>

                <div className="space-y-4">
                  {/* Request 1 */}
                  <div className="rounded-lg border border-[#E4E2DB] p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-gray-500">PO-2026-0142</span>
                      <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-600 flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span> New
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-900">Kedai Runcit Aina · 3 items</p>
                    <p className="text-sm text-gray-900 font-bold mt-1 mb-3">RM 509.40</p>
                    
                    <div className="flex gap-2">
                      <button className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-[#E4E2DB] py-2 text-xs font-medium text-gray-700 hover:bg-gray-50">
                        <FileText className="h-3.5 w-3.5" /> View PDF
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-[#556B50] py-2 text-xs font-medium text-white hover:bg-[#43553f]">
                        <Check className="h-3.5 w-3.5" /> Accept order
                      </button>
                    </div>
                  </div>

                  {/* Request 2 */}
                  <div className="rounded-lg border border-[#E4E2DB] p-4 opacity-75">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-gray-500">PO-2026-0139</span>
                      <span className="rounded-full bg-[#F0F4EF] px-2 py-0.5 text-xs font-medium text-[#556B50] flex items-center gap-1">
                        <Check className="h-3 w-3" /> Accepted · Thu 23 Oct
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-900">Mini Market Seri · 2 items</p>
                    <p className="text-sm text-gray-900 font-bold mt-1">RM 312.00</p>
                  </div>
                </div>
              </div>

              {/* Promotions Card */}
              <div className="rounded-xl border border-[#E4E2DB] bg-white p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">Your promotions</h2>
                    <p className="text-xs text-gray-500 mt-1">Shown to partner shops</p>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <div className="rounded-lg bg-[#F9F9F8] border border-[#E4E2DB] p-3 flex items-start gap-3">
                  <div className="bg-white p-2 rounded-md border border-[#E4E2DB]">
                    <Tag className="h-4 w-4 text-[#556B50]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium text-gray-900">Minyak Masak 2kg - 8% off</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-500">Until 31 Oct · seen by 3 shops</p>
                      <span className="rounded-full bg-[#F0F4EF] px-2 py-0.5 text-[10px] font-medium text-[#556B50] flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#556B50]"></span> Active
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}