"use client"

import { useState } from "react"

type ViewType = "year" | "month" | "day"

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDay, setSelectedDay] = useState<number | null>(null)
  const [view, setView] = useState<ViewType>("year")

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const dayNames = ["S", "M", "T", "W", "T", "F", "S"]
  const fullDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  const getDaysInMonth = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const prevMonthDays = new Date(year, month, 0).getDate()

    return { firstDay, daysInMonth, prevMonthDays }
  }

  const previousYear = () => {
    setCurrentDate(new Date(currentDate.getFullYear() - 1, currentDate.getMonth()))
  }

  const nextYear = () => {
    setCurrentDate(new Date(currentDate.getFullYear() + 1, currentDate.getMonth()))
  }

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const goToToday = () => {
    setCurrentDate(new Date())
    setView("year")
    setSelectedDay(null)
  }

  const handleMonthClick = (month: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), month))
    setView("month")
  }

  const handleDayClick = (day: number) => {
    setSelectedDay(day)
    setView("day")
  }

  const formatHour = (hour: number) => {
    if (hour === 0) return "12 a.m."
    if (hour === 12) return "Noon"
    if (hour < 12) return `${hour} a.m.`
    if (hour === 13) return "1 p.m."
    return `${hour - 12} p.m.`
  }

  const hours = Array.from({ length: 24 }, (_, i) => i)

  const getSelectedDayOfWeek = () => {
    if (!selectedDay) return ""
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedDay)
    return fullDayNames[date.getDay()]
  }

  const renderMiniMonth = (monthIndex: number) => {
    const year = currentDate.getFullYear()
    const { firstDay, daysInMonth, prevMonthDays } = getDaysInMonth(year, monthIndex)
    const today = new Date()
    const isCurrentMonth = today.getMonth() === monthIndex && today.getFullYear() === year

    return (
      <button
        key={monthIndex}
        onClick={() => handleMonthClick(monthIndex)}
        className="text-left hover:bg-accent/50 rounded-lg p-4 transition-colors"
      >
        <h3 className="text-lg font-medium mb-3" style={{ color: "hsl(var(--primary))" }}>
          {monthNames[monthIndex]}
        </h3>

        {/* Day headers */}
        <div className="grid grid-cols-7 gap-1 mb-1">
          {dayNames.map((day, i) => (
            <div key={i} className="text-[10px] text-center text-muted-foreground">
              {day}
            </div>
          ))}
        </div>

        {/* Days grid */}
        <div className="grid grid-cols-7 gap-1">
          {/* Previous month days */}
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`prev-${i}`} className="text-[11px] text-center text-muted-foreground/40 py-0.5">
              {prevMonthDays - firstDay + i + 1}
            </div>
          ))}

          {/* Current month days */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1
            const isToday = isCurrentMonth && day === today.getDate()

            return (
              <div
                key={day}
                className={`text-[11px] text-center py-0.5 ${
                  isToday ? "bg-primary text-primary-foreground rounded-full font-semibold" : "text-foreground"
                }`}
              >
                {day}
              </div>
            )
          })}

          {/* Next month days to fill grid */}
          {Array.from({ length: 42 - (firstDay + daysInMonth) }).map((_, i) => (
            <div key={`next-${i}`} className="text-[11px] text-center text-muted-foreground/40 py-0.5">
              {i + 1}
            </div>
          ))}
        </div>
      </button>
    )
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl bg-card shadow-lg border border-border overflow-hidden border-[#202FF8]">
          <div className="flex items-center justify-between p-6 border-b border-border border-[#202FF8]">
            <div className="flex items-center gap-4">
              {view === "year" && (
                <>
                  <button onClick={previousYear} className="p-2 hover:bg-accent rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <h2 className="text-2xl font-semibold">{currentDate.getFullYear()}</h2>
                  <button onClick={nextYear} className="p-2 hover:bg-accent rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {view === "month" && (
                <>
                  <button onClick={() => setView("year")} className="p-2 hover:bg-accent rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button onClick={previousMonth} className="p-2 hover:bg-accent rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <h2 className="text-2xl font-semibold">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </h2>
                  <button onClick={nextMonth} className="p-2 hover:bg-accent rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {view === "day" && (
                <button
                  onClick={() => setView("month")}
                  className="flex items-center gap-2 text-sm hover:bg-accent px-3 py-2 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button onClick={previousYear} className="p-2 hover:bg-accent rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToToday}
                className="px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors text-sm font-medium"
              >
                Today
              </button>
              <button onClick={nextYear} className="p-2 hover:bg-accent rounded-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Calendar Content */}
          <div className="p-6">
            {view === "year" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {monthNames.map((_, index) => renderMiniMonth(index))}
              </div>
            )}

            {/* Month View */}
            {view === "month" && (
              <div>
                {/* Day Names */}
                <div className="grid grid-cols-7 gap-2 mb-2">
                  {dayNames.map((day, i) => (
                    <div key={i} className="text-center text-sm font-medium text-muted-foreground py-2">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Days Grid */}
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({
                    length: getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth()).firstDay,
                  }).map((_, i) => (
                    <div key={`empty-${i}`} />
                  ))}

                  {Array.from({
                    length: getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth()).daysInMonth,
                  }).map((_, i) => {
                    const day = i + 1
                    const today = new Date()
                    const isToday =
                      day === today.getDate() &&
                      currentDate.getMonth() === today.getMonth() &&
                      currentDate.getFullYear() === today.getFullYear()

                    return (
                      <button
                        key={day}
                        onClick={() => handleDayClick(day)}
                        className={`
                          aspect-square rounded-lg flex items-center justify-center text-sm font-medium
                          transition-all hover:bg-accent hover:scale-105
                          ${isToday ? "bg-primary text-primary-foreground" : "bg-secondary/50"}
                        `}
                      >
                        {day}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Day View */}
            {view === "day" && selectedDay && (
              <div>
                {/* Day Header - Apple style */}
                <div className="mb-8">
                  <h1 className="text-4xl md:text-5xl font-bold mb-1">
                    {selectedDay} {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </h1>
                  <p className="text-xl text-muted-foreground">{getSelectedDayOfWeek()}</p>
                </div>

                {/* All-day section */}
                <div className="border-b border-border pb-4 mb-4">
                  <p className="text-sm text-muted-foreground">all-day</p>
                </div>

                {/* Hours List - Apple style */}
                <div className="space-y-0 max-h-[600px] overflow-y-auto">
                  {hours.map((hour) => (
                    <div
                      key={hour}
                      className="border-b border-border/50 py-6 hover:bg-accent/30 transition-colors cursor-pointer"
                    >
                      <p className="text-sm text-muted-foreground pl-2">{formatHour(hour)}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
