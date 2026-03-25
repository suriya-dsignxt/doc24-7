import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { DOCTORS } from '../constants';
import DoctorCard from '../components/DoctorCard';
import { cn } from '@/src/lib/utils';

interface FindDoctorsProps {
  onNavigate: (page: string, params?: any) => void;
  initialSearch?: string;
  initialSpecialty?: string;
}

export default function FindDoctors({ onNavigate, initialSearch = '', initialSpecialty = 'All Specialties' }: FindDoctorsProps) {
  const [search, setSearch] = useState(initialSearch);
  const [selectedSpecialty, setSelectedSpecialty] = useState(initialSpecialty);
  const [minExperience, setMinExperience] = useState(0);
  const [feeRange, setFeeRange] = useState('Any');
  const [availableToday, setAvailableToday] = useState(false);

  const filteredDoctors = useMemo(() => {
    return DOCTORS.filter((doctor) => {
      const matchesSearch = doctor.name.toLowerCase().includes(search.toLowerCase()) || 
                           doctor.title.toLowerCase().includes(search.toLowerCase()) ||
                           doctor.hospital.toLowerCase().includes(search.toLowerCase());
      
      const matchesSpecialty = selectedSpecialty === 'All Specialties' || doctor.title.includes(selectedSpecialty);
      
      const experienceValue = parseInt(doctor.experience.split(' ')[0]) || 0;
      const matchesExperience = experienceValue >= minExperience;

      let matchesFee = true;
      if (feeRange === '$0 - $50') matchesFee = doctor.fee <= 50;
      else if (feeRange === '$50 - $100') matchesFee = doctor.fee > 50 && doctor.fee <= 100;
      else if (feeRange === '$100+') matchesFee = doctor.fee > 100;

      return matchesSearch && matchesSpecialty && matchesExperience && matchesFee;
    });
  }, [search, selectedSpecialty, minExperience, feeRange]);

  const resetFilters = () => {
    setSearch('');
    setSelectedSpecialty('All Specialties');
    setMinExperience(0);
    setFeeRange('Any');
    setAvailableToday(false);
  };

  return (
    <main className="pt-24 pb-20 min-h-screen max-w-screen-2xl mx-auto px-8">
      {/* Search & Header Section */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Find your specialist</h1>
            <p className="text-on-surface-variant text-lg">{filteredDoctors.length} verified doctors available for your care.</p>
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
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-on-surface uppercase tracking-widest text-xs">Filters</h3>
            <button 
              onClick={resetFilters}
              className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
            >
              <X className="w-3 h-3" />
              Reset
            </button>
          </div>

          <div>
            <h3 className="font-bold text-on-surface uppercase tracking-widest text-xs mb-6">Availability</h3>
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input 
                  className="rounded-md border-outline-variant text-primary focus:ring-primary" 
                  type="checkbox" 
                  checked={availableToday}
                  onChange={(e) => setAvailableToday(e.target.checked)}
                />
                <span className="text-sm font-medium text-on-surface-variant group-hover:text-primary transition-colors">Available Today</span>
              </label>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-on-surface uppercase tracking-widest text-xs mb-6">Specialty</h3>
            <div className="space-y-4">
              <select 
                className="w-full bg-surface-container-low border-none rounded-lg text-sm py-3 px-4 focus:ring-primary/20"
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
              >
                <option>All Specialties</option>
                <option>Cardiology</option>
                <option>Dermatology</option>
                <option>Pediatrics</option>
                <option>Neurology</option>
                <option>Orthopedics</option>
              </select>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-on-surface uppercase tracking-widest text-xs mb-6">Experience: {minExperience}+ Years</h3>
            <div className="space-y-3">
              <input 
                className="w-full h-1 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary" 
                type="range" 
                min="0"
                max="20"
                value={minExperience}
                onChange={(e) => setMinExperience(parseInt(e.target.value))}
              />
              <div className="flex justify-between text-xs font-semibold text-on-surface-variant">
                <span>Any</span>
                <span>20+ Years</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-on-surface uppercase tracking-widest text-xs mb-6">Consultation Fee</h3>
            <div className="grid grid-cols-2 gap-2">
              {['Any', '$0 - $50', '$50 - $100', '$100+'].map((range) => (
                <button 
                  key={range}
                  onClick={() => setFeeRange(range)}
                  className={cn(
                    "py-2 px-3 text-[10px] font-bold rounded-lg transition-all border",
                    feeRange === range 
                      ? "bg-primary text-on-primary shadow-lg shadow-primary/20 border-primary" 
                      : "bg-surface-container-low text-on-surface-variant border-transparent hover:border-primary/30"
                  )}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Results Content */}
        <div className="flex-1 space-y-8">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <DoctorCard 
                key={doctor.id} 
                doctor={doctor} 
                onViewProfile={(id) => onNavigate('doctor-profile', { id })} 
              />
            ))
          ) : (
            <div className="text-center py-20 bg-surface-container-low rounded-3xl border border-dashed border-outline-variant">
              <Search className="w-12 h-12 text-on-surface-variant mx-auto mb-4 opacity-20" />
              <h3 className="text-xl font-bold mb-2">No specialists found</h3>
              <p className="text-on-surface-variant">Try adjusting your filters or search terms.</p>
              <button 
                onClick={resetFilters}
                className="mt-6 text-primary font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
