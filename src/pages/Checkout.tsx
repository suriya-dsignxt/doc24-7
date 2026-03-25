import { useState } from 'react';
import { CreditCard, ShieldCheck, CheckCircle2, ArrowLeft, Calendar, Clock, User, ChevronRight } from 'lucide-react';
import { DOCTORS } from '../constants';
import { cn } from '@/src/lib/utils';

interface CheckoutProps {
  doctorId: string;
  date: string;
  time: string;
  onNavigate: (page: string) => void;
  onConfirm: (appointment: any) => void;
}

export default function Checkout({ doctorId, date, time, onNavigate, onConfirm }: CheckoutProps) {
  const doctor = DOCTORS.find(d => d.id === doctorId) || DOCTORS[0];
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      onConfirm({
        doctorName: doctor.name,
        doctorTitle: doctor.title,
        doctorImage: doctor.image,
        hospital: doctor.hospital,
        date,
        time,
        doctorId: doctor.id
      });
    }, 2000);
  };

  if (isSuccess) {
    return (
      <main className="pt-32 pb-20 max-w-2xl mx-auto px-8 text-center">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-12 h-12 text-green-600" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-4">Appointment Confirmed!</h1>
        <p className="text-on-surface-variant text-lg mb-12">
          Your appointment with Dr. {doctor.name.split(' ').pop()} has been successfully booked for {date} at {time}.
        </p>
        <div className="bg-surface-container-low p-8 rounded-xl mb-12 text-left space-y-4">
          <div className="flex justify-between">
            <span className="text-on-surface-variant">Appointment ID</span>
            <span className="font-bold">#DOC-82910</span>
          </div>
          <div className="flex justify-between">
            <span className="text-on-surface-variant">Doctor</span>
            <span className="font-bold">{doctor.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-on-surface-variant">Date & Time</span>
            <span className="font-bold">{date}, {time}</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => onNavigate('dashboard')}
            className="px-8 py-4 bg-primary text-on-primary rounded-full font-bold shadow-xl active:scale-95 transition-all"
          >
            Go to Dashboard
          </button>
          <button 
            onClick={() => onNavigate('home')}
            className="px-8 py-4 bg-surface-container-high text-on-surface rounded-full font-bold hover:bg-surface-container-highest transition-all"
          >
            Back to Home
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-20 max-w-7xl mx-auto px-8">
      <button 
        onClick={() => onNavigate('doctor-profile')}
        className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8 group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-bold uppercase tracking-widest text-xs">Back to Profile</span>
      </button>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column: Payment & Details */}
        <div className="flex-1 space-y-12">
          <section>
            <h1 className="text-4xl font-extrabold tracking-tight mb-8">Secure Checkout</h1>
            
            <div className="space-y-8">
              <div className="p-8 bg-surface-container-low rounded-xl border border-outline-variant/10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Patient Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Full Name</label>
                    <input className="w-full bg-white border border-outline-variant rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary/20" defaultValue="Sarah McAlister" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Email Address</label>
                    <input className="w-full bg-white border border-outline-variant rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary/20" defaultValue="sarah.m@example.com" />
                  </div>
                </div>
              </div>

              <div className="p-8 bg-surface-container-low rounded-xl border border-outline-variant/10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-primary" />
                  Payment Method
                </h3>
                <div className="space-y-4">
                  <button 
                    onClick={() => setPaymentMethod('card')}
                    className={cn(
                      "w-full p-6 rounded-xl border-2 flex items-center justify-between transition-all",
                      paymentMethod === 'card' ? "border-primary bg-primary/5" : "border-transparent bg-white hover:border-primary/20"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-8 bg-slate-100 rounded flex items-center justify-center">
                        <CreditCard className="w-6 h-6 text-slate-600" />
                      </div>
                      <div className="text-left">
                        <div className="font-bold">Credit / Debit Card</div>
                        <div className="text-xs text-on-surface-variant">Visa, Mastercard, Amex</div>
                      </div>
                    </div>
                    {paymentMethod === 'card' && <CheckCircle2 className="w-6 h-6 text-primary" />}
                  </button>

                  <button 
                    onClick={() => setPaymentMethod('paypal')}
                    className={cn(
                      "w-full p-6 rounded-xl border-2 flex items-center justify-between transition-all",
                      paymentMethod === 'paypal' ? "border-primary bg-primary/5" : "border-transparent bg-white hover:border-primary/20"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-8 bg-slate-100 rounded flex items-center justify-center">
                        <span className="font-black italic text-blue-800">PayPal</span>
                      </div>
                      <div className="text-left">
                        <div className="font-bold">PayPal</div>
                        <div className="text-xs text-on-surface-variant">Fast and secure</div>
                      </div>
                    </div>
                    {paymentMethod === 'paypal' && <CheckCircle2 className="w-6 h-6 text-primary" />}
                  </button>
                </div>

                {paymentMethod === 'card' && (
                  <div className="mt-8 space-y-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Card Number</label>
                      <input className="w-full bg-white border border-outline-variant rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary/20" placeholder="0000 0000 0000 0000" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Expiry Date</label>
                        <input className="w-full bg-white border border-outline-variant rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary/20" placeholder="MM / YY" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">CVV</label>
                        <input className="w-full bg-white border border-outline-variant rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary/20" placeholder="123" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Summary */}
        <aside className="w-full lg:w-96">
          <div className="sticky top-24 glass-panel p-8 rounded-xl shadow-2xl border border-white/40">
            <h3 className="text-2xl font-bold mb-8">Appointment Summary</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <img 
                  alt={doctor.name} 
                  className="w-20 h-20 rounded-lg object-cover"
                  src={doctor.image}
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold text-lg">{doctor.name}</div>
                  <div className="text-primary font-bold text-xs uppercase tracking-widest">{doctor.title}</div>
                  <div className="text-on-surface-variant text-xs mt-1">{doctor.hospital}</div>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-outline-variant/20">
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">{date}</span>
                </div>
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">{time}</span>
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-outline-variant/20">
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">Consultation Fee</span>
                  <span className="font-bold">${doctor.fee}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">Service Fee</span>
                  <span className="font-bold">$10</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-outline-variant/20">
                  <span className="text-xl font-bold">Total</span>
                  <span className="text-3xl font-extrabold text-primary">${doctor.fee + 10}</span>
                </div>
              </div>

              <div className="pt-6">
                <button 
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className={cn(
                    "w-full py-4 rounded-full font-bold text-lg shadow-xl transition-all flex items-center justify-center gap-2",
                    isProcessing 
                      ? "bg-surface-container-high text-on-surface-variant cursor-not-allowed" 
                      : "bg-gradient-to-br from-primary to-primary-container text-on-primary shadow-primary/20 active:scale-95"
                  )}
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-on-surface-variant border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      Pay & Confirm
                      <ChevronRight className="w-5 h-5" />
                    </>
                  )}
                </button>
                <div className="flex items-center justify-center gap-2 mt-6 text-on-surface-variant">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Secure 256-bit SSL Encryption</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
