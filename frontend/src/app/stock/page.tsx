"use client";

import { 
  Menu, LayoutDashboard, Package, ShoppingCart, Users, TrendingUp, RotateCcw, 
  Upload, Plus, Search, Filter, Pencil, Trash2, Check, ArrowUpRight 
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function StockPage() {
  const [activeRow, setActiveRow] = useState("GUL-001");

  // Mock data based on the screenshot
  const stockItems = [
    { id: "BRS-005", name: "Beras Wangi 5kg", category: "Rice & grains", stock: 64, reorder: 20, status: "In stock", updated: "9:12 AM" },
    { id: "GUL-001", name: "Gula Pasir 1kg", category: "Baking", stock: 12, reorder: 30, status: "Critical", updated: "8:40 AM" },
    { id: "MYK-002", name: "Minyak Masak 2kg", category: "Cooking oil", stock: 18, reorder: 25, status: "Low", updated: "Yesterday" },
    { id: "TPG-001", name: "Tepung Gandum 1kg", category: "Baking", stock: 20, reorder: 25, status: "Low", updated: "Yesterday" },
    { id: "SPR-350", name: "Susu Pekat Manis", category: "Dairy", stock: 46, reorder: 20, status: "In stock", updated: "17 Oct" },
    { id: "TLR-030", name: "Telur Gred A (30)", category: "Fresh", stock: 6, reorder: 10, status: "Low", updated: "8:05 AM" },
    { id: "MLO-002", name: "Milo 1kg", category: "Beverages", stock: 9, reorder: 12, status: "Ordered", updated: "16 Oct" },
    { id: "MGI-K05", name: "Mee Maggi Kari (5)", category: "Instant food", stock: 88, reorder: 30, status: "In stock", updated: "15 Oct" },
    { id: "SRD-425", name: "Sardin Ayam Brand", category: "Canned food", stock: 52, reorder: 24, status: "In stock", updated: "14 Oct" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Critical":
        return <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1 text-xs font-medium text-red-600"><span className="h-1.5 w-1.5 rounded-full bg-red-600"></span> Critical</span>;
      case "Low":
        return <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-600"><span className="h-1.5 w-1.5 rounded-full bg-orange-600"></span> Low</span>;
      case "Ordered":
        return <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600"><span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span> Ordered</span>;
      default:
        return <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F0F4EF] px-2.5 py-1 text-xs font-medium text-[#556B50]"><span className="h-1.5 w-1.5 rounded-full bg-[#556B50]"></span> In stock</span>;
    }
  };

  return (
    <div className="flex h-screen bg-[#F6F5F1] font-sans text-gray-900 overflow-hidden">
      
      {/* ================= SIDEBAR ================= */}
      <aside className="flex w-[240px] flex-col border-r border-[#E4E2DB] bg-[#F6F5F1]">
        <div className="flex h-16 items-center gap-3 px-6 border-b border-transparent">
          <Menu className="h-5 w-5 text-gray-500" />
          <span className="text-lg font-bold tracking-tight text-[#2D2D2D]">haraStock</span>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4">
          <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Workspace</p>
          
          <Link href="/dashboard" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-white hover:text-gray-900 transition-colors">
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Link>
          
          {/* Active Stock Link */}
          <Link href="/stock" className="flex items-center gap-3 rounded-lg bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm">
            <Package className="h-4 w-4 text-gray-700" />
            Stock
          </Link>
          
          <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-white hover:text-gray-900 transition-colors">
            <ShoppingCart className="h-4 w-4" />
            Sales
          </Link>
          <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-white hover:text-gray-900 transition-colors">
            <Users className="h-4 w-4" />
            Products & Suppliers
          </Link>
          <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-white hover:text-gray-900 transition-colors">
            <TrendingUp className="h-4 w-4" />
            Forecast
          </Link>
          <Link href="#" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-white hover:text-gray-900 transition-colors">
            <RotateCcw className="h-4 w-4" />
            Reorder
          </Link>
        </nav>

        <div className="border-t border-[#E4E2DB] p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E5E7EB] text-sm font-bold text-gray-600">
                HK
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">Hafiz Kamal</span>
                <span className="text-xs text-gray-500">Staff</span>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* ================= MAIN CONTENT AREA ================= */}
      <main className="flex-1 flex overflow-hidden">
        
        {/* Left Column: Table & Header */}
        <div className="flex-1 flex flex-col p-8 overflow-y-auto border-r border-[#E4E2DB]">
          
          {/* Header */}
          <header className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Stock</h1>
              <p className="text-sm text-gray-500 mt-1">Key in stock when it arrives, or import it from a file.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 rounded-lg border border-[#E4E2DB] bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                <Upload className="h-4 w-4" />
                Import CSV / XLSX
              </button>
              <button className="flex items-center gap-2 rounded-lg bg-[#556B50] px-4 py-2 text-sm font-medium text-white hover:bg-[#43553f]">
                <Plus className="h-4 w-4" />
                Add item
              </button>
            </div>
          </header>

          {/* Filters */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search items or SKU" 
                className="w-full rounded-lg border border-[#E4E2DB] bg-white py-2 pl-9 pr-4 text-sm focus:border-[#556B50] focus:outline-none focus:ring-1 focus:ring-[#556B50]"
              />
            </div>
            <button className="flex items-center gap-2 rounded-lg border border-[#E4E2DB] bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Filter className="h-4 w-4" />
              All categories
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-[#E4E2DB] bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Filter className="h-4 w-4" />
              Any status
            </button>
          </div>

          {/* Table Container */}
          <div className="rounded-xl border border-[#E4E2DB] bg-white flex-1 flex flex-col">
            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#F9F9F8] text-xs uppercase text-gray-500 border-b border-[#E4E2DB]">
                  <tr>
                    <th className="px-6 py-4 font-medium">Item</th>
                    <th className="px-6 py-4 font-medium">Category</th>
                    <th className="px-6 py-4 font-medium text-center">In stock</th>
                    <th className="px-6 py-4 font-medium text-center">Reorder at</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium">Updated</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E4E2DB]">
                  {stockItems.map((item) => (
                    <tr 
                      key={item.id} 
                      onClick={() => setActiveRow(item.id)}
                      className={`cursor-pointer transition-colors ${activeRow === item.id ? "bg-[#F9F9F8]" : "hover:bg-gray-50"}`}
                    >
                      <td className="px-6 py-3">
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.id}</p>
                      </td>
                      <td className="px-6 py-3 text-gray-600">{item.category}</td>
                      <td className="px-6 py-3">
                        <div className="flex items-center justify-center gap-3">
                          <button className="flex h-6 w-6 items-center justify-center rounded bg-gray-100 text-gray-600 hover:bg-gray-200">-</button>
                          <span className="font-medium text-gray-900 w-6 text-center">{item.stock}</span>
                          <button className="flex h-6 w-6 items-center justify-center rounded bg-gray-100 text-gray-600 hover:bg-gray-200">+</button>
                        </div>
                      </td>
                      <td className="px-6 py-3 text-center text-gray-600">{item.reorder}</td>
                      <td className="px-6 py-3">{getStatusBadge(item.status)}</td>
                      <td className="px-6 py-3 text-gray-500 text-xs">{item.updated}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="border-t border-[#E4E2DB] px-6 py-4 flex items-center justify-between">
              <span className="text-xs text-gray-500">Showing 1-9 of 48 items</span>
              <div className="flex items-center gap-2">
                <button className="rounded-lg border border-[#E4E2DB] px-3 py-1.5 text-xs font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50">Previous</button>
                <button className="rounded-lg border border-[#E4E2DB] px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">Next</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Item Details Panel */}
        <div className="w-[360px] bg-white flex flex-col overflow-y-auto shrink-0">
          <div className="p-6">
            
            {/* Top Header */}
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-lg font-bold text-gray-900">Gula Pasir 1kg</h2>
              <div className="flex items-center gap-2 text-gray-400">
                <button className="hover:text-gray-600"><Pencil className="h-4 w-4" /></button>
                <button className="hover:text-red-500"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-6">GUL-001</p>

            {/* Stock Alert Block */}
            <div className="bg-[#FDF2F2] rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#D65A5A]">12</span>
                  <span className="text-xs text-[#D65A5A]/80 font-medium">packs left · reorder at 30</span>
                </div>
                {getStatusBadge("Critical")}
              </div>
              {/* Progress Bar */}
              <div className="w-full bg-[#F5D3D3] rounded-full h-1.5">
                <div className="bg-[#D65A5A] h-1.5 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>

            {/* Details Grid */}
            <div className="space-y-3 mb-8">
              <div className="grid grid-cols-2 text-sm">
                <span className="text-gray-500">Category</span>
                <span className="text-gray-900 font-medium text-right">Baking</span>
              </div>
              <div className="grid grid-cols-2 text-sm">
                <span className="text-gray-500">Supplier</span>
                <span className="text-gray-900 font-medium text-right">Sefar Foods</span>
              </div>
              <div className="grid grid-cols-2 text-sm">
                <span className="text-gray-500">Unit price</span>
                <span className="text-gray-900 font-medium text-right">RM 2.85</span>
              </div>
              <div className="grid grid-cols-2 text-sm">
                <span className="text-gray-500">Last received</span>
                <span className="text-gray-900 font-medium text-right">12 Oct · 40 packs</span>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-[#E4E2DB] mb-6" />

            {/* Record Stock Form */}
            <h3 className="font-semibold text-gray-900 mb-4">Record received stock</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Quantity received</label>
                <input 
                  type="number" 
                  defaultValue={40}
                  className="w-full rounded-lg border border-[#E4E2DB] bg-white py-2 px-3 text-sm focus:border-[#556B50] focus:outline-none focus:ring-1 focus:ring-[#556B50]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Date received</label>
                <input 
                  type="date" 
                  defaultValue="2026-10-19"
                  className="w-full rounded-lg border border-[#E4E2DB] bg-white py-2 px-3 text-sm text-gray-900 focus:border-[#556B50] focus:outline-none focus:ring-1 focus:ring-[#556B50]"
                />
              </div>
              <button 
                type="button"
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#556B50] py-2.5 text-sm font-medium text-white hover:bg-[#43553f] mt-2"
              >
                <Check className="h-4 w-4" />
                Save received stock
              </button>
            </form>

          </div>
        </div>

      </main>
    </div>
  );
}