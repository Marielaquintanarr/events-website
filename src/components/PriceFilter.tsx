"use client"

import type React from "react"

import { useState } from "react"
import { DollarSign, ChevronDown } from "lucide-react"

export default function PriceFilter() {
  const [isOpen, setIsOpen] = useState(false)
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("Price")

  const formatCurrency = (value: string) => {
    const num = Number.parseFloat(value.replace(/[^0-9.]/g, ""))
    if (isNaN(num)) return ""
    return num.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 })
  }

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, "")
    setMinPrice(value)
    if (value || maxPrice) {
      setSelectedFilter("Custom Range")
    }
  }

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, "")
    setMaxPrice(value)
    if (minPrice || value) {
      setSelectedFilter("Custom Range")
    }
  }

  return (
    <div className="relative">
      <div className="flex gap-3 items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-[#282827] w-30 h-10 justify-center text-white rounded-lg hover:bg-[#282827] transition-colors font-medium"
        >
          <DollarSign className="w-5 h-5" />
          <span>{selectedFilter}</span>
          <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-50 top-full bg-white rounded-lg border border-gray-200 p-6 space-y-4 shadow-lg">
          <div className="">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Min</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={minPrice ? formatCurrency(minPrice) : ""}
                  onChange={handleMinChange}
                  placeholder="0"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Max</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={maxPrice ? formatCurrency(maxPrice) : ""}
                  onChange={handleMaxChange}
                  placeholder="No limit"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
