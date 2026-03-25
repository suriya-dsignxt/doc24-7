import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import FindDoctors from './pages/FindDoctors';
import DoctorProfile from './pages/DoctorProfile';
import Consultation from './pages/Consultation';
import Checkout from './pages/Checkout';
import Dashboard from './pages/Dashboard';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [pageParams, setPageParams] = useState<any>({});

  const handleNavigate = (page: string, params: any = {}) => {
    setCurrentPage(page);
    setPageParams(params);
    window.scrollTo(0, 0);
  };

  // Simple routing based on state
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'find-doctors':
        return <FindDoctors onNavigate={handleNavigate} />;
      case 'doctor-profile':
        return <DoctorProfile doctorId={pageParams.id} onNavigate={handleNavigate} />;
      case 'consultation':
        return <Consultation doctorId={pageParams.doctorId} onNavigate={handleNavigate} />;
      case 'checkout':
        return <Checkout doctorId={pageParams.doctorId} date={pageParams.date} time={pageParams.time} onNavigate={handleNavigate} />;
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {currentPage !== 'consultation' && (
        <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      )}
      
      <div className="flex-1">
        {renderPage()}
      </div>

      {currentPage !== 'consultation' && <Footer />}
    </div>
  );
}
