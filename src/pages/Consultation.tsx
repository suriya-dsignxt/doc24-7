import { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Video, VideoOff, PhoneOff, MessageSquare, Users, Settings, Maximize2, Send, MoreVertical, LayoutGrid } from 'lucide-react';
import { DOCTORS } from '../constants';
import { cn } from '@/src/lib/utils';

interface ConsultationProps {
  doctorId?: string;
  onNavigate: (page: string) => void;
}

export default function Consultation({ doctorId, onNavigate }: ConsultationProps) {
  const doctor = DOCTORS.find(d => d.id === doctorId) || DOCTORS[0];
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { role: 'doctor', text: 'Hello! How are you feeling today?', time: '10:02 AM' },
    { role: 'user', text: 'Hi Dr. Thorne, I\'ve been having some chest tightness lately.', time: '10:03 AM' }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    setChatMessages([...chatMessages, { role: 'user', text: message, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    setMessage('');
  };

  return (
    <main className="h-screen pt-20 bg-slate-950 flex flex-col overflow-hidden">
      {/* Top Header */}
      <div className="flex justify-between items-center px-8 py-4 bg-slate-900/50 border-b border-slate-800/50">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <Video className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-white font-bold">Live Consultation</h1>
            <p className="text-slate-400 text-xs">Dr. {doctor.name.split(' ').pop()} • Cardiology</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-3 py-1 bg-error/20 text-error rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-error rounded-full animate-pulse"></span>
            Live • 12:45
          </div>
          <button className="p-2 text-slate-400 hover:text-white transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex relative">
        {/* Video Feeds */}
        <div className="flex-1 relative p-8 flex items-center justify-center">
          {/* Doctor Feed */}
          <div className="relative w-full h-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl bg-slate-900">
            <img 
              alt="Doctor Feed" 
              className="w-full h-full object-cover"
              src={doctor.image}
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/40 backdrop-blur-md rounded-lg text-white text-sm font-bold flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Dr. {doctor.name.split(' ').pop()}
            </div>
          </div>

          {/* User Feed (Picture-in-Picture) */}
          <div className="absolute top-12 right-12 w-64 h-44 rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-800 bg-slate-900">
            {isVideoOff ? (
              <div className="w-full h-full flex items-center justify-center bg-slate-800">
                <VideoOff className="w-10 h-10 text-slate-600" />
              </div>
            ) : (
              <img 
                alt="User Feed" 
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSu8xUbWzHJaor5OZP3cog2ie-6Gg5Z8MgOaXpqspon_GTtdi9qrDmb4mVHmNLamEH1EOv6KVJzQVlVipH59YqmAKSyPybLIB4xigotpezA_93eHaONyKTHI7JZPaUXlF6gyR_h-oaL5_jaCatc5vOSEtgJUd2pvPYua9TErZbpzZozzImBN0oDDPJe_uSGRp_5OpqEs9bHfzWiBDVhGkLWB372hX8LwOkG_LhEtnHb2eDYZ5mS16pbpF_R9MpfRybOY6Yngfg0E8"
                referrerPolicy="no-referrer"
              />
            )}
            <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/40 backdrop-blur-md rounded text-white text-[10px] font-bold">
              You (Patient)
            </div>
          </div>
        </div>

        {/* Chat Sidebar */}
        {chatOpen && (
          <div className="w-96 bg-slate-900 border-l border-slate-800 flex flex-col">
            <div className="p-6 border-b border-slate-800 flex justify-between items-center">
              <h3 className="text-white font-bold">Live Chat</h3>
              <button onClick={() => setChatOpen(false)} className="text-slate-400 hover:text-white">
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {chatMessages.map((msg, i) => (
                <div key={i} className={cn("flex flex-col", msg.role === 'user' ? "items-end" : "items-start")}>
                  <div className={cn(
                    "max-w-[80%] p-4 rounded-2xl text-sm",
                    msg.role === 'user' ? "bg-primary text-white rounded-tr-none" : "bg-slate-800 text-slate-200 rounded-tl-none"
                  )}>
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-slate-500 mt-1 uppercase font-bold">{msg.time}</span>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-slate-800">
              <div className="relative">
                <input 
                  className="w-full bg-slate-800 border-none rounded-xl py-3 pl-4 pr-12 text-white text-sm focus:ring-1 focus:ring-primary" 
                  placeholder="Type a message..." 
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button 
                  onClick={handleSendMessage}
                  className="absolute right-2 top-1.5 p-1.5 bg-primary text-white rounded-lg hover:bg-primary-container transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Controls */}
      <div className="px-8 py-6 bg-slate-900/80 backdrop-blur-xl border-t border-slate-800 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button className="p-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all">
            <LayoutGrid className="w-6 h-6" />
          </button>
          <button className="p-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all">
            <Users className="w-6 h-6" />
          </button>
        </div>

        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className={cn(
              "p-4 rounded-full transition-all shadow-lg",
              isMuted ? "bg-error text-white" : "bg-slate-800 text-white hover:bg-slate-700"
            )}
          >
            {isMuted ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
          </button>
          <button 
            onClick={() => onNavigate('dashboard')}
            className="p-5 bg-error text-white rounded-full shadow-2xl shadow-error/20 hover:scale-110 active:scale-95 transition-all"
          >
            <PhoneOff className="w-8 h-8" />
          </button>
          <button 
            onClick={() => setIsVideoOff(!isVideoOff)}
            className={cn(
              "p-4 rounded-full transition-all shadow-lg",
              isVideoOff ? "bg-error text-white" : "bg-slate-800 text-white hover:bg-slate-700"
            )}
          >
            {isVideoOff ? <VideoOff className="w-6 h-6" /> : <Video className="w-6 h-6" />}
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setChatOpen(!chatOpen)}
            className={cn(
              "p-3 rounded-xl transition-all relative",
              chatOpen ? "bg-primary text-white" : "text-slate-400 hover:text-white hover:bg-slate-800"
            )}
          >
            <MessageSquare className="w-6 h-6" />
            {!chatOpen && <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>}
          </button>
          <button className="p-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all">
            <MoreVertical className="w-6 h-6" />
          </button>
        </div>
      </div>
    </main>
  );
}
