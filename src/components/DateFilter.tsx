"use client"

import { useState } from "react"
import { Calendar, ChevronDown } from "lucide-react";

export default function DateFilter() {
  const [isOpen, setIsOpen] = useState(false)
  const [fromDate, setFromDate] = useState("12.01.2017")
  const [toDate, setToDate] = useState("03.01.2018")
  const [selectedFilter, setSelectedFilter] = useState("Date")

  const presetFilters = ["Today", "This Month", "Next 3 Months", "Past 6 Months", "This Year"]

  const handlePresetClick = (filter: string) => {
    setSelectedFilter(filter)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <div className="flex gap-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center  w-30 h-10 gap-2 bg-[#282827] text-white rounded-lg hover:bg-[#282827] transition-colors font-medium"
        >
          <Calendar className="w-5 h-5" />
          <span>{selectedFilter}</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-50 top-full bg-white rounded-lg border border-gray-200 space-y-4">
          <div className="">
            <div>
              <label className="text-sm text-gray-500 mb-2 block">From</label>
              <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2">
                <Calendar className="w-5 h-5 text-blue-600"/>
                <input
                  type="text"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className="flex-1 outline-none text-gray-700"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-500 mb-2 block">To</label>
              <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <input
                  type="text"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className="flex-1 outline-none text-gray-700"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            {presetFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => handlePresetClick(filter)}
                className="w-full text-center py-3 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors font-medium"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
