"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function EventFilter() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState("Event")

  return (
    <div className="relative">
      <div className="flex gap-3 items-center mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-[#282827] w-30 h-10 justify-center text-white rounded-lg hover:bg-[#282827] transition-colors font-medium"
        >
          <span>{selectedFilter}</span>
          <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-50 top-full mt-2 bg-white rounded-lg border border-gray-200 p-6 space-y-4 shadow-lg">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Min</label>
              <div className="relative">
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
