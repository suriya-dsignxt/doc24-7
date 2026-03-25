import { motion } from 'motion/react';
import { Activity, Heart, Weight, Thermometer, Calendar, Clock, FileText, Download, ChevronRight, ArrowUpRight, ArrowDownRight, Pill, Stethoscope } from 'lucide-react';
import { PRESCRIPTIONS, REPORTS } from '../constants';
import { cn } from '@/src/lib/utils';

interface DashboardProps {
  onNavigate: (page: string, params?: any) => void;
  appointments: any[];
}

export default function Dashboard({ onNavigate, appointments }: DashboardProps) {
  const stats = [
    { label: 'Heart Rate', value: '72', unit: 'bpm', icon: Heart, color: 'text-error', bg: 'bg-error-container/20', trend: '+2%', trendUp: true },
    { label: 'Blood Pressure', value: '120/80', unit: 'mmHg', icon: Activity, color: 'text-primary', bg: 'bg-primary-container/10', trend: '-1%', trendUp: false },
    { label: 'Weight', value: '68.5', unit: 'kg', icon: Weight, color: 'text-secondary', bg: 'bg-secondary-container/20', trend: '0%', trendUp: null },
    { label: 'Body Temp', value: '36.6', unit: '°C', icon: Thermometer, color: 'text-tertiary', bg: 'bg-tertiary-fixed/30', trend: '+0.1%', trendUp: true },
  ];

  return (
    <main className="pt-24 pb-20 max-w-screen-2xl mx-auto px-8">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column: Stats & Appointments */}
        <div className="flex-1 space-y-12">
          <section>
            <div className="flex justify-between items-end mb-8">
              <div>
                <h1 className="text-4xl font-extrabold tracking-tight mb-2">Welcome back, Sarah</h1>
                <p className="text-on-surface-variant">Here's a summary of your health vitals and upcoming care.</p>
              </div>
              <div className="text-right">
                <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Last Sync</div>
                <div className="font-bold">Today, 10:30 AM</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/5 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className={cn("p-3 rounded-lg", stat.bg)}>
                      <stat.icon className={cn("w-6 h-6", stat.color)} />
                    </div>
                    {stat.trendUp !== null && (
                      <div className={cn(
                        "flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full",
                        stat.trendUp ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                      )}>
                        {stat.trendUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                        {stat.trend}
                      </div>
                    )}
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{stat.label}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold">{stat.value}</span>
                      <span className="text-sm font-medium text-on-surface-variant">{stat.unit}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Upcoming Appointments</h2>
              <button 
                onClick={() => onNavigate('find-doctors')}
                className="text-primary font-bold text-sm hover:underline"
              >
                Book New
              </button>
            </div>
            <div className="space-y-4">
              {appointments.length > 0 ? (
                appointments.map((apt, idx) => (
                  <div key={apt.id || idx} className="bg-gradient-to-br from-primary to-primary-container p-8 rounded-xl text-on-primary shadow-xl shadow-primary/20 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-white/20 shadow-inner">
                        <img 
                          alt={apt.doctorName} 
                          className="w-full h-full object-cover"
                          src={apt.doctorImage}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1">
                          {idx === 0 ? 'Next Consultation' : 'Upcoming'}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{apt.doctorName}</h3>
                        <p className="opacity-80 font-medium">{apt.doctorTitle} • {apt.hospital}</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="text-center md:text-right">
                        <div className="flex items-center gap-2 justify-center md:justify-end mb-1">
                          <Calendar className="w-4 h-4" />
                          <span className="font-bold">{apt.date}</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center md:justify-end">
                          <Clock className="w-4 h-4" />
                          <span className="font-bold">{apt.time}</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => onNavigate('consultation', { doctorId: apt.doctorId })}
                        className="px-8 py-4 bg-white text-primary rounded-full font-bold shadow-lg hover:scale-105 active:scale-95 transition-all"
                      >
                        Join Call
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-surface-container-low p-12 rounded-xl border border-dashed border-outline-variant text-center">
                  <Calendar className="w-12 h-12 text-on-surface-variant mx-auto mb-4 opacity-20" />
                  <h3 className="text-xl font-bold mb-2">No upcoming appointments</h3>
                  <p className="text-on-surface-variant mb-6">Schedule your first consultation today.</p>
                  <button 
                    onClick={() => onNavigate('find-doctors')}
                    className="px-8 py-3 bg-primary text-on-primary rounded-full font-bold shadow-lg"
                  >
                    Find a Doctor
                  </button>
                </div>
              )}
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <section>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Pill className="w-6 h-6 text-primary" />
                  Active Prescriptions
                </h2>
                <button className="text-primary font-bold text-sm hover:underline">Refill All</button>
              </div>
              <div className="space-y-4">
                {PRESCRIPTIONS.map((p) => (
                  <div key={p.id} className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/5 flex justify-between items-center group hover:bg-white hover:shadow-md transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Pill className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-on-surface">{p.medication}</div>
                        <div className="text-xs text-on-surface-variant">{p.dosage} • {p.frequency}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Prescribed by</div>
                      <div className="text-sm font-bold">{p.doctor}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" />
                  Health Reports
                </h2>
                <button className="text-primary font-bold text-sm hover:underline">Upload New</button>
              </div>
              <div className="space-y-4">
                {REPORTS.map((r) => (
                  <div key={r.id} className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/5 flex justify-between items-center group hover:bg-white hover:shadow-md transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                        <FileText className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <div className="font-bold text-on-surface">{r.title}</div>
                        <div className="text-xs text-on-surface-variant">{r.date} • {r.provider}</div>
                      </div>
                    </div>
                    <button className="p-3 bg-surface-container-high rounded-lg text-on-surface-variant hover:bg-primary hover:text-white transition-all">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Right Column: Profile & Quick Actions */}
        <aside className="w-full lg:w-96 space-y-8">
          <div className="glass-panel p-8 rounded-xl shadow-2xl border border-white/40 text-center">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <img 
                alt="Sarah" 
                className="w-full h-full rounded-full object-cover border-4 border-white shadow-xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSu8xUbWzHJaor5OZP3cog2ie-6Gg5Z8MgOaXpqspon_GTtdi9qrDmb4mVHmNLamEH1EOv6KVJzQVlVipH59YqmAKSyPybLIB4xigotpezA_93eHaONyKTHI7JZPaUXlF6gyR_h-oaL5_jaCatc5vOSEtgJUd2pvPYua9TErZbpzZozzImBN0oDDPJe_uSGRp_5OpqEs9bHfzWiBDVhGkLWB372hX8LwOkG_LhEtnHb2eDYZ5mS16pbpF_R9MpfRybOY6Yngfg0E8"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 border-4 border-white rounded-full"></div>
            </div>
            <h3 className="text-2xl font-bold mb-1">Sarah McAlister</h3>
            <p className="text-on-surface-variant text-sm mb-8">Patient ID: #P-29102</p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-surface-container-low rounded-lg">
                <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Blood Type</div>
                <div className="text-lg font-bold text-error">O+</div>
              </div>
              <div className="p-4 bg-surface-container-low rounded-lg">
                <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Age</div>
                <div className="text-lg font-bold">28 Yrs</div>
              </div>
            </div>

            <button className="w-full py-3 bg-surface-container-high text-on-surface rounded-full font-bold text-sm hover:bg-surface-container-highest transition-all">
              Edit Profile
            </button>
          </div>

          <div className="p-8 bg-surface-container-low rounded-xl border border-outline-variant/10">
            <h4 className="font-bold text-xs uppercase tracking-widest text-on-surface-variant mb-6">Quick Actions</h4>
            <div className="space-y-3">
              <button className="w-full p-4 bg-white rounded-lg flex items-center justify-between group hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <Stethoscope className="w-5 h-5 text-primary" />
                  <span className="font-bold text-sm">Book New Visit</span>
                </div>
                <ChevronRight className="w-4 h-4 text-outline group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full p-4 bg-white rounded-lg flex items-center justify-between group hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5 text-secondary" />
                  <span className="font-bold text-sm">Symptom Checker</span>
                </div>
                <ChevronRight className="w-4 h-4 text-outline group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full p-4 bg-white rounded-lg flex items-center justify-between group hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-error" />
                  <span className="font-bold text-sm">Emergency SOS</span>
                </div>
                <ChevronRight className="w-4 h-4 text-outline group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
