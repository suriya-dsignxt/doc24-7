export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-12 py-16 max-w-7xl mx-auto">
        <div className="col-span-2 md:col-span-1">
          <div className="text-xl font-bold text-slate-900 mb-6">Doc 24/7</div>
          <p className="text-slate-500 text-xs leading-relaxed mb-6">
            Your digital sanctuary for health. Connecting patients with premier care anytime, anywhere.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary transition-colors">public</span>
            <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary transition-colors">alternate_email</span>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-slate-900 text-xs tracking-wide uppercase mb-6">Care</h4>
          <ul className="space-y-4">
            <li><a className="text-slate-500 hover:text-primary transition-all text-xs tracking-wide uppercase" href="#">Find Doctors</a></li>
            <li><a className="text-slate-500 hover:text-primary transition-all text-xs tracking-wide uppercase" href="#">Consultations</a></li>
            <li><a className="text-slate-500 hover:text-primary transition-all text-xs tracking-wide uppercase" href="#">Verified Providers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 text-xs tracking-wide uppercase mb-6">Legal</h4>
          <ul className="space-y-4">
            <li><a className="text-slate-500 hover:text-primary transition-all text-xs tracking-wide uppercase" href="#">Privacy Policy</a></li>
            <li><a className="text-slate-500 hover:text-primary transition-all text-xs tracking-wide uppercase" href="#">Terms of Service</a></li>
            <li><a className="text-slate-500 hover:text-primary transition-all text-xs tracking-wide uppercase" href="#">HIPAA Compliance</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 text-xs tracking-wide uppercase mb-6">Download</h4>
          <ul className="space-y-4">
            <li><a className="text-slate-500 hover:text-primary transition-all text-xs tracking-wide uppercase" href="#">App Store</a></li>
            <li><a className="text-slate-500 hover:text-primary transition-all text-xs tracking-wide uppercase" href="#">Play Store</a></li>
          </ul>
        </div>
      </div>
      <div className="px-12 py-8 border-t border-slate-200 text-center">
        <p className="text-slate-500 text-xs tracking-wide uppercase">© 2024 Doc 24/7. Your Digital Sanctuary for Health.</p>
      </div>
    </footer>
  );
}
