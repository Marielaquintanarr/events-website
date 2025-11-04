"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import LocationOnIcon from "@mui/icons-material/LocationOn"

export default function LocationFilter({ color }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState("Guadalajara")

  return (
    <div className="relative">
      <div className="flex gap-3 items-center mb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ backgroundColor: color }}
          className="flex items-center gap-2 px-4 h-10 justify-center text-white rounded-lg transition-colors font-medium"
        >
          <LocationOnIcon className="w-5 h-5 text-white align-middle" />
          <span>{selectedFilter}</span>
          <ChevronDown
            className={`w-5 h-5 text-white transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-50 top-full mt-2 bg-white rounded-lg border border-gray-200 p-6 space-y-4 shadow-lg">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Guadalajara</label>
              <label className="block text-sm font-medium text-gray-600 mb-2">Zapopan</label>
              <label className="block text-sm font-medium text-gray-600 mb-2">Tlajomulco</label>
              <label className="block text-sm font-medium text-gray-600 mb-2">Chapala</label>
              <label className="block text-sm font-medium text-gray-600 mb-2">Mazamitla</label>
              <label className="block text-sm font-medium text-gray-600 mb-2">Tapalpa</label>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
