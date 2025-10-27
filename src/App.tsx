import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import CategoryPage from './pages/CategoryPage';
import EventDetailsPage from './pages/EventDetailsPage';
import MyTickets from './pages/MyTickets';
import CalendarPage from './pages/CalendarPage';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/eventDetails" element={<EventDetailsPage />} />
          <Route path="/myTickets" element={<MyTickets />} />
          <Route path="/calendar" element={<CalendarPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
