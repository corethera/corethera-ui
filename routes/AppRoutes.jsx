import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard/index';
import Profile from '../pages/profile/index';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
