import { motion } from 'motion/react';
import { Search, Video, UserSearch, FileUp, Heart, Baby, Brain, Bone, Sparkles, Eye, ArrowRight, Star, MapPin, Briefcase, Quote } from 'lucide-react';
import { DOCTORS } from '../constants';
import { cn } from '@/src/lib/utils';

interface HomeProps {
  onNavigate: (page: string, params?: any) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const specialties = [
    { icon: Heart, label: 'Cardiology', color: 'text-error', bg: 'bg-error-container/20' },
    { icon: Baby, label: 'Pediatrics', color: 'text-secondary', bg: 'bg-secondary-container/20' },
    { icon: Brain, label: 'Neurology', color: 'text-primary', bg: 'bg-primary-container/10' },
    { icon: Bone, label: 'Orthopedics', color: 'text-tertiary', bg: 'bg-tertiary-fixed/30' },
    { icon: Sparkles, label: 'Dermatology', color: 'text-secondary', bg: 'bg-secondary-container/20' },
    { icon: Eye, label: 'Eye Care', color: 'text-primary', bg: 'bg-primary-container/10' },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative px-8 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 space-y-8 text-center lg:text-left"
          >
            <h1 className="font-headline text-5xl lg:text-7xl font-extrabold tracking-tighter leading-tight text-on-surface">
              Consult Trusted <span className="text-primary">Doctors</span> Anytime, Anywhere
            </h1>
            <p className="text-on-surface-variant text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Book appointments, get instant consultations, and manage your health — all in one place. Your well-being is our priority, available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => onNavigate('find-doctors')}
                className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full text-lg font-bold shadow-xl active:scale-95 transition-all"
              >
                Book Appointment
              </button>
              <button 
                onClick={() => onNavigate('consultation')}
                className="px-8 py-4 bg-white border border-outline-variant text-primary rounded-full text-lg font-bold hover:bg-surface-container-low transition-all flex items-center justify-center gap-2"
              >
                <Video className="w-5 h-5" />
                Consult Now
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 relative"
          >
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary-container/30 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary-container/20 blur-3xl rounded-full"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                alt="Doctor" 
                className="w-full h-auto object-cover rounded-lg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuVyafhaUDiXNA8ATv3wc89WfXR92rirrE6Wtht-Yw-wFdN89gQ94XNjbSP8Uxyy8KzHNbG4IFdOE5b4Lc6PYqmTgQme7oruVxYrFNOc3_CRzJw9B5q1nZJSZH319xNZteLegIXxj-Yzyq-s_9vWsUAHJC7vaQ8o6isdXIxYOAKziV_OoGygv5J9W4ARntuG5j2YNjcKaNY_TVl0MR8mA0hYNVNVWQL7jhnZxcS6gYk1znxoWHweGdsQzKol_JI_n5-uyBKe71obw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 glass-panel p-6 rounded-lg border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-on-surface">Verified Care</div>
                    <div className="text-sm text-on-surface-variant">Over 500+ Board Certified Doctors</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Search Bar */}
      <div className="sticky top-20 z-40 px-8 -mt-8">
        <div className="max-w-4xl mx-auto bg-surface-container-lowest shadow-2xl rounded-full p-2 flex items-center border border-outline-variant/10">
          <div className="flex-1 flex items-center px-6">
            <Search className="w-5 h-5 text-outline mr-3" />
            <input 
              className="w-full bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-outline py-4" 
              placeholder="Search doctors, clinics, symptoms..." 
              type="text"
            />
          </div>
          <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold active:scale-95 transition-all">Search</button>
        </div>
      </div>

      {/* Quick Access Bento Grid */}
      <section className="px-8 py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div 
              onClick={() => onNavigate('find-doctors')}
              className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-primary to-primary-container p-10 rounded-lg flex flex-col justify-between text-on-primary group cursor-pointer hover:shadow-2xl transition-all"
            >
              <div>
                <Search className="w-12 h-12 mb-6" />
                <h3 className="text-3xl font-headline font-bold mb-4">Book Appointment</h3>
                <p className="opacity-80 text-lg">In-person visits with the city's top-rated medical specialists.</p>
              </div>
              <ArrowRight className="self-end w-10 h-10 group-hover:translate-x-2 transition-transform" />
            </div>
            
            <div 
              onClick={() => onNavigate('consultation')}
              className="bg-surface-container-lowest p-8 rounded-lg border border-outline-variant/10 hover:shadow-xl transition-all group cursor-pointer"
            >
              <Video className="w-10 h-10 text-secondary mb-4" />
              <h4 className="font-bold text-xl mb-2">Consultation</h4>
              <p className="text-on-surface-variant text-sm">Instant video calls with doctors.</p>
            </div>
            
            <div 
              onClick={() => onNavigate('find-doctors')}
              className="bg-surface-container-lowest p-8 rounded-lg border border-outline-variant/10 hover:shadow-xl transition-all group cursor-pointer"
            >
              <UserSearch className="w-10 h-10 text-tertiary mb-4" />
              <h4 className="font-bold text-xl mb-2">Find Specialists</h4>
              <p className="text-on-surface-variant text-sm">Browse by expertise and rating.</p>
            </div>
            
            <div className="md:col-span-2 bg-secondary-container p-8 rounded-lg flex items-center justify-between group cursor-pointer hover:shadow-xl transition-all">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-inner">
                  <FileUp className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-on-secondary-container">Upload Reports</h4>
                  <p className="text-on-secondary-container/70 text-sm">Get digital analysis of your lab results.</p>
                </div>
              </div>
              <ArrowRight className="w-8 h-8 text-on-secondary-container group-hover:rotate-45 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Top Specialties */}
      <section className="px-8 py-24 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-4">Top Specialties</h2>
            <p className="text-on-surface-variant">Access over 40+ medical departments</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {specialties.map((s, i) => (
              <div key={i} className="flex flex-col items-center p-8 rounded-lg hover:bg-surface-container-low transition-all cursor-pointer group">
                <div className={cn("w-20 h-20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform", s.bg)}>
                  <s.icon className={cn("w-10 h-10", s.color)} />
                </div>
                <span className="font-bold text-on-surface">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="px-8 py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-2">Featured Specialists</h2>
              <p className="text-on-surface-variant">Top-rated doctors available for consultation</p>
            </div>
            <button 
              onClick={() => onNavigate('find-doctors')}
              className="text-primary font-bold hover:underline"
            >
              View All Doctors
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DOCTORS.map((doctor) => (
              <div key={doctor.id} className="bg-surface-container-lowest rounded-lg overflow-hidden group hover:shadow-2xl transition-all">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    alt={doctor.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={doctor.image}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    {doctor.rating} ({doctor.reviewCount / 1000}k+ Reviews)
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-secondary text-sm font-bold uppercase tracking-widest mb-1">{doctor.specialty}</div>
                  <h3 className="text-2xl font-headline font-bold mb-4">{doctor.name}</h3>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-1 text-on-surface-variant text-sm">
                      <Briefcase className="w-4 h-4" />
                      {doctor.experience} exp.
                    </div>
                    <div className="flex items-center gap-1 text-on-surface-variant text-sm">
                      <MapPin className="w-4 h-4" />
                      {doctor.location.split(',')[0]}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-primary font-bold">Available Today</div>
                    <button 
                      onClick={() => onNavigate('doctor-profile', { id: doctor.id })}
                      className="px-6 py-2 bg-primary/10 text-primary rounded-full font-bold hover:bg-primary hover:text-white transition-all"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="px-8 py-20 bg-primary text-on-primary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="text-5xl font-extrabold font-headline">10,000+</div>
              <div className="text-on-primary/70 font-semibold uppercase tracking-wider">Consultations Done</div>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-extrabold font-headline">Verified</div>
              <div className="text-on-primary/70 font-semibold uppercase tracking-wider">Doctors Only</div>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-extrabold font-headline">24/7</div>
              <div className="text-on-primary/70 font-semibold uppercase tracking-wider">Instant Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-8 py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="font-headline text-5xl font-extrabold mb-8">What our patients say</h2>
              <div className="space-y-8">
                <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm border border-outline-variant/5">
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      alt="User" 
                      className="w-14 h-14 rounded-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUOpev8vaRxiPNTGvTotwBkgBOYpEXpsROML4m-7k6-9OjnLAzdL3ya6CDf2DrWw5EMAOTXwpbZGKAvtb9zK9chrxxlyQsZ40PCG1c3nFpxBW3LW5pk9LrorzGi1GO57ZSiMNwZ7Rj1oTXn7ZOrxjt-oAs6Wskuwtb_tVfV81O6upLCVDsWKJYNvLUp04zkLDSccmEzUeIPJyjf3UIMBr7TUPs8H364jtzhh5fzhHgWn3Znz1vgT_VtgVzmLSO8Vo6uTmbBwzda2g"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="font-bold">Emily Thompson</div>
                      <div className="text-xs text-on-surface-variant">Registered Nurse</div>
                    </div>
                  </div>
                  <p className="text-on-surface-variant italic leading-relaxed">
                    "The platform is incredibly intuitive. I found a specialist for my mother and had a consultation within 2 hours. Truly a lifesaver!"
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="w-full aspect-square bg-gradient-to-br from-secondary-container to-primary-container/20 rounded-xl flex items-center justify-center p-12">
                <div className="text-center space-y-6">
                  <Quote className="w-16 h-16 text-white opacity-50 mx-auto" />
                  <h3 className="text-3xl font-headline font-bold text-on-secondary-container">
                    Trusted by millions across the globe for reliable healthcare access.
                  </h3>
                  <button className="px-8 py-3 bg-white text-primary rounded-full font-bold">Read More Stories</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
