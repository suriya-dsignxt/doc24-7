import { useState } from 'react';
import { Star, CheckCircle2, MapPin, Globe, Award, GraduationCap, Calendar, Clock, ChevronRight, ArrowLeft } from 'lucide-react';
import { Doctor, Review } from '../types';
import { DOCTORS, REVIEWS } from '../constants';
import { cn } from '@/src/lib/utils';

interface DoctorProfileProps {
  doctorId: string;
  onNavigate: (page: string, params?: any) => void;
}

export default function DoctorProfile({ doctorId, onNavigate }: DoctorProfileProps) {
  const doctor = DOCTORS.find(d => d.id === doctorId) || DOCTORS[0];
  const [selectedDate, setSelectedDate] = useState('Mar 25');
  const [selectedTime, setSelectedTime] = useState('04:30 PM');

  const dates = ['Mar 25', 'Mar 26', 'Mar 27', 'Mar 28', 'Mar 29'];
  const times = ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:30 PM', '06:00 PM'];

  return (
    <main className="pt-24 pb-20 max-w-7xl mx-auto px-8">
      <button 
        onClick={() => onNavigate('find-doctors')}
        className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-bold uppercase tracking-widest text-xs">Back to Search</span>
      </button>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column: Doctor Info */}
        <div className="flex-1 space-y-12">
          <section className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-64 h-80 flex-shrink-0">
              <img 
                alt={doctor.name} 
                className="w-full h-full object-cover rounded-xl shadow-lg"
                src={doctor.image}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-extrabold tracking-tight">{doctor.name}</h1>
                <CheckCircle2 className="w-6 h-6 text-primary fill-primary/10" />
              </div>
              <p className="text-primary font-bold text-lg mb-6 uppercase tracking-widest">{doctor.title}</p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-lg">{doctor.rating}</span>
                  <span className="text-on-surface-variant">({doctor.reviewCount} Reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">{doctor.location}</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <Globe className="w-5 h-5" />
                  <span className="font-medium">{doctor.languages.join(', ')}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-6 bg-surface-container-low rounded-xl">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Experience</p>
                  <p className="font-bold">{doctor.experience}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Fee</p>
                  <p className="font-bold">${doctor.fee}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Hospital</p>
                  <p className="font-bold">{doctor.hospital}</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Biography</h2>
            <p className="text-on-surface-variant leading-relaxed text-lg">
              {doctor.bio}
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </h2>
              <div className="space-y-6">
                {doctor.education.map((edu, i) => (
                  <div key={i} className="relative pl-6 border-l-2 border-primary/20">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
                    <div className="font-bold text-on-surface">{edu.degree}</div>
                    <div className="text-on-surface-variant text-sm">{edu.school}</div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-primary" />
                Certifications
              </h2>
              <div className="space-y-4">
                {doctor.certifications.map((cert, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-surface-container-low rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    <span className="font-medium text-on-surface">{cert}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Patient Reviews</h2>
              <button className="text-primary font-bold text-sm hover:underline">Write a Review</button>
            </div>
            <div className="space-y-6">
              {REVIEWS.map((review) => (
                <div key={review.id} className="p-8 bg-surface-container-low rounded-xl border border-outline-variant/5">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-4">
                      <img 
                        alt={review.userName} 
                        className="w-12 h-12 rounded-full object-cover"
                        src={review.userImage}
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <div className="font-bold flex items-center gap-2">
                          {review.userName}
                          {review.isVerified && <CheckCircle2 className="w-4 h-4 text-primary fill-primary/10" />}
                        </div>
                        <div className="text-xs text-on-surface-variant">{review.date}</div>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={cn("w-4 h-4", i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-outline")} />
                      ))}
                    </div>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed italic">"{review.comment}"</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Booking Widget */}
        <aside className="w-full lg:w-96">
          <div className="sticky top-24 glass-panel p-8 rounded-xl shadow-2xl border border-white/40">
            <h3 className="text-2xl font-bold mb-8">Book Appointment</h3>
            
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Select Date</p>
                  <Calendar className="w-4 h-4 text-on-surface-variant" />
                </div>
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  {dates.map((date) => (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={cn(
                        "flex-shrink-0 w-20 py-4 rounded-xl flex flex-col items-center transition-all border",
                        selectedDate === date 
                          ? "bg-primary text-on-primary border-primary shadow-lg shadow-primary/20" 
                          : "bg-surface-container-low text-on-surface-variant border-transparent hover:border-primary/30"
                      )}
                    >
                      <span className="text-[10px] font-bold uppercase mb-1">{date.split(' ')[0]}</span>
                      <span className="text-lg font-bold">{date.split(' ')[1]}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Select Time</p>
                  <Clock className="w-4 h-4 text-on-surface-variant" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {times.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={cn(
                        "py-3 rounded-lg text-sm font-bold transition-all border",
                        selectedTime === time 
                          ? "bg-primary text-on-primary border-primary shadow-md shadow-primary/10" 
                          : "bg-surface-container-low text-on-surface-variant border-transparent hover:border-primary/30"
                      )}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-outline-variant/20">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-on-surface-variant font-medium">Consultation Fee</span>
                  <span className="text-2xl font-bold">${doctor.fee}</span>
                </div>
                <button 
                  onClick={() => onNavigate('checkout', { doctorId: doctor.id, date: selectedDate, time: selectedTime })}
                  className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full font-bold text-lg shadow-xl shadow-primary/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  Confirm Booking
                  <ChevronRight className="w-5 h-5" />
                </button>
                <p className="text-center text-[10px] text-on-surface-variant mt-4 uppercase tracking-widest font-bold">No payment required now</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
