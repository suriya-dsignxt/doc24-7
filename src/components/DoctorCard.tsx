import { Doctor } from '@/src/types';
import { Star, CheckCircle2, Video, MessageSquare, Home } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface DoctorCardProps {
  doctor: Doctor;
  onViewProfile: (id: string) => void;
  key?: string;
}

export default function DoctorCard({ doctor, onViewProfile }: DoctorCardProps) {
  const statusColors = {
    available: 'bg-green-500 text-green-700',
    soon: 'bg-yellow-500 text-yellow-700',
    booked: 'bg-error text-error',
  };

  const statusLabels = {
    available: 'Available Now',
    soon: 'Available Soon',
    booked: 'Fully Booked',
  };

  return (
    <div className="group bg-surface-container-lowest rounded-xl p-6 transition-all hover:shadow-xl hover:shadow-primary/5 border border-transparent hover:border-primary/10">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="relative w-full md:w-48 h-56 flex-shrink-0">
          <img 
            alt={doctor.name} 
            className={cn(
              "w-full h-full object-cover rounded-lg transition-all duration-500",
              doctor.status === 'booked' && "grayscale"
            )}
            src={doctor.image}
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 glass-effect rounded-full flex items-center gap-1.5 shadow-sm">
            <span className={cn("w-2 h-2 rounded-full", statusColors[doctor.status].split(' ')[0])}></span>
            <span className={cn("text-[10px] font-bold uppercase tracking-wider", statusColors[doctor.status].split(' ')[1])}>
              {statusLabels[doctor.status]}
            </span>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-2xl font-bold text-on-surface">{doctor.name}</h2>
                <CheckCircle2 className="w-5 h-5 text-primary fill-primary/20" />
              </div>
              <p className="text-primary font-semibold text-sm mb-4 uppercase tracking-widest">{doctor.title}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 justify-end text-on-surface mb-1">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="font-bold">{doctor.rating}</span>
                <span className="text-on-surface-variant text-sm font-medium">({doctor.reviewCount / 1000}k reviews)</span>
              </div>
              <p className="text-xs font-medium text-on-surface-variant">Top 1% in London</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Experience</p>
              <p className="text-sm font-semibold">{doctor.experience} • {doctor.hospital}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Consultation</p>
              <div className="flex gap-2">
                <Video className="w-4 h-4 text-on-surface-variant" />
                <MessageSquare className="w-4 h-4 text-on-surface-variant" />
                <Home className="w-4 h-4 text-on-surface-variant" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Fee</p>
              <p className="text-sm font-bold text-on-surface">${doctor.fee} <span className="font-medium text-on-surface-variant">/ session</span></p>
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between pt-6 border-t border-surface-container">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white bg-surface-container-high flex items-center justify-center text-[10px] font-bold">
                  {doctor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-primary-fixed text-primary flex items-center justify-center text-[10px] font-bold">+4</div>
              </div>
              <span className="text-xs font-medium text-on-surface-variant italic">Next slot {doctor.nextSlot}</span>
            </div>
            <button 
              onClick={() => onViewProfile(doctor.id)}
              className={cn(
                "px-8 py-3 rounded-full font-bold text-sm transition-all active:scale-95",
                doctor.status === 'booked' 
                  ? "bg-surface-container-high text-on-surface-variant cursor-not-allowed"
                  : "bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-lg shadow-primary/20 hover:scale-105"
              )}
            >
              {doctor.status === 'booked' ? 'Join Waitlist' : 'Book Now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
