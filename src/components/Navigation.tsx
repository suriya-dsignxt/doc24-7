import { cn } from '@/src/lib/utils';
import { MapPin, Bell, Menu } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'find-doctors', label: 'Find Doctors' },
    { id: 'consultations', label: 'Consultations' },
    { id: 'history', label: 'History' },
    { id: 'dashboard', label: 'Dashboard' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-slate-100/50">
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
        <div 
          className="text-2xl font-black tracking-tighter text-primary cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          Doc 24/7
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "text-sm font-medium transition-all pb-1 border-b-2",
                currentPage === item.id 
                  ? "text-primary font-bold border-primary" 
                  : "text-slate-600 hover:text-primary border-transparent"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-slate-50 rounded-full transition-all">
            <MapPin className="w-5 h-5 text-slate-600" />
          </button>
          <button className="p-2 hover:bg-slate-50 rounded-full transition-all relative">
            <Bell className="w-5 h-5 text-slate-600" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
          </button>
          <div 
            className="h-10 w-10 rounded-full overflow-hidden border-2 border-primary/10 cursor-pointer"
            onClick={() => onNavigate('dashboard')}
          >
            <img 
              alt="User" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSu8xUbWzHJaor5OZP3cog2ie-6Gg5Z8MgOaXpqspon_GTtdi9qrDmb4mVHmNLamEH1EOv6KVJzQVlVipH59YqmAKSyPybLIB4xigotpezA_93eHaONyKTHI7JZPaUXlF6gyR_h-oaL5_jaCatc5vOSEtgJUd2pvPYua9TErZbpzZozzImBN0oDDPJe_uSGRp_5OpqEs9bHfzWiBDVhGkLWB372hX8LwOkG_LhEtnHb2eDYZ5mS16pbpF_R9MpfRybOY6Yngfg0E8"
              referrerPolicy="no-referrer"
            />
          </div>
          <button className="md:hidden p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
