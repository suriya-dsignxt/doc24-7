import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { DOCTORS } from '../constants';
import DoctorCard from '../components/DoctorCard';

interface FindDoctorsProps {
  onNavigate: (page: string, params?: any) => void;
}

export default function FindDoctors({ onNavigate }: FindDoctorsProps) {
  const [search, setSearch] = useState('');

  return (
    <main className="pt-24 pb-20 min-h-screen max-w-screen-2xl mx-auto px-8">
      {/* Search & Header Section */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Find your specialist</h1>
            <p className="text-on-surface-variant text-lg">2,480 verified doctors available for your care.</p>
          </div>
          <div className="flex-1 max-w-md relative">
            <input 
              className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" 
              placeholder="Search symptoms, doctors, or clinics..." 
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Search className="absolute left-4 top-4 text-on-surface-variant w-6 h-6" />
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-72 flex-shrink-0 space-y-10">
          <div>
            <h3 className="font-bold text-on-surface uppercase tracking-widest text-xs mb-6">Availability</h3>
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input className="rounded-md border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                <span className="text-sm font-medium text-on-surface-variant group-hover:text-primary transition-colors">Available Today</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input className="rounded-md border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                <span className="text-sm font-medium text-on-surface-variant group-hover:text-primary transition-colors">Video Consultation</span>
              </label>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-on-surface uppercase tracking-widest text-xs mb-6">Specialty</h3>
            <div className="space-y-4">
              <select className="w-full bg-surface-container-low border-none rounded-lg text-sm py-3 px-4 focus:ring-primary/20">
                <option>All Specialties</option>
                <option>Cardiology</option>
                <option>Dermatology</option>
                <option>Pediatrics</option>
                <option>Neurology</option>
              </select>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-on-surface uppercase tracking-widest text-xs mb-6">Experience</h3>
            <div className="space-y-3">
              <input className="w-full h-1 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary" type="range" />
              <div className="flex justify-between text-xs font-semibold text-on-surface-variant">
                <span>Any</span>
                <span>15+ Years</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-on-surface uppercase tracking-widest text-xs mb-6">Consultation Fee</h3>
            <div className="grid grid-cols-2 gap-2">
              <button className="py-2 px-3 text-xs font-bold rounded-lg bg-surface-container-low border border-transparent hover:border-primary/30 transition-all">Free</button>
              <button className="py-2 px-3 text-xs font-bold rounded-lg bg-primary text-on-primary shadow-lg shadow-primary/20">Paid</button>
              <button className="py-2 px-3 text-xs font-bold rounded-lg bg-surface-container-low border border-transparent hover:border-primary/30 transition-all">$0 - $50</button>
              <button className="py-2 px-3 text-xs font-bold rounded-lg bg-surface-container-low border border-transparent hover:border-primary/30 transition-all">$100+</button>
            </div>
          </div>
        </aside>

        {/* Results Content */}
        <div className="flex-1 space-y-8">
          {DOCTORS.map((doctor) => (
            <DoctorCard 
              key={doctor.id} 
              doctor={doctor} 
              onViewProfile={(id) => onNavigate('doctor-profile', { id })} 
            />
          ))}
        </div>
      </div>
    </main>
  );
}
