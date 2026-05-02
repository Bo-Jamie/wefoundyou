import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Found() {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "AdCamp - The Collective";
    if (!sessionStorage.getItem("arg_level_influence")) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    fetch("https://formspree.io/f/REPLACE_WITH_YOUR_ID", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    }).then(() => {
      setSubmitted(true);
    }).catch(() => {
      // If Formspree is not configured, we'll just simulate success for the demo
      setSubmitted(true);
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 z-10 relative fade-up">
      <main className="w-full max-w-[500px] text-center space-y-12">
        
        <div className="space-y-4">
          <h1 
            className="text-3xl md:text-4xl font-bold tracking-[0.2em] glitch-text uppercase"
            data-text="CONNECTION ESTABLISHED"
          >
            CONNECTION ESTABLISHED
          </h1>
          <p className="text-xs text-zinc-500 tracking-[0.3em] font-medium uppercase">
            Welcome to the Collective
          </p>
        </div>

        <div className="space-y-4 text-xs md:text-sm text-zinc-400 tracking-[0.1em] leading-relaxed uppercase">
          <p>This was never just a puzzle.</p>
          <p>It was a demonstration of everything we study.</p>
          <p className="text-white font-bold tracking-[0.2em] mt-4">YOU JUST LIVED ONE.</p>
        </div>

        <div className="py-4">
          <h2 className="text-xl md:text-2xl font-bold tracking-[0.3em] text-white uppercase">
            ADCAMP {currentYear}
          </h2>
        </div>

        {submitted ? (
          <div className="py-12 border border-zinc-800 fade-up">
            <p className="text-sm md:text-base tracking-[0.2em] text-white animate-pulse uppercase">
              Signal received.
            </p>
            <p className="text-[10px] md:text-xs text-zinc-500 mt-4 tracking-[0.2em] uppercase">
              We will find you before the event.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6 pt-4 fade-up">
            <div className="space-y-3">
              <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 block text-center">Full Name</label>
              <div className="relative flex items-center justify-center">
                <input required type="text" name="name" id="name" className="terminal-input w-full py-4 px-8 text-center text-sm md:text-base tracking-[0.1em]" />
              </div>
            </div>
            
            <div className="space-y-3">
              <label htmlFor="program" className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 block text-center">Program / Course</label>
              <div className="relative flex items-center justify-center">
                <input required type="text" name="program" id="program" className="terminal-input w-full py-4 px-8 text-center text-sm md:text-base tracking-[0.1em]" />
              </div>
            </div>
            
            <div className="space-y-3">
              <label htmlFor="school" className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 block text-center">School</label>
              <div className="relative flex items-center justify-center">
                <input required type="text" name="school" id="school" className="terminal-input w-full py-4 px-8 text-center text-sm md:text-base tracking-[0.1em]" />
              </div>
            </div>
            
            <div className="space-y-3">
              <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 block text-center">Email Address</label>
              <div className="relative flex items-center justify-center">
                <input required type="email" name="email" id="email" className="terminal-input w-full py-4 px-8 text-center text-sm md:text-base tracking-[0.1em]" />
              </div>
            </div>
            
            <div className="pt-6">
              <button 
                type="submit" 
                className="w-full py-4 border border-white hover:bg-white hover:text-black transition-all duration-300 tracking-[0.3em] text-xs font-bold uppercase"
              >
                → CLAIM VIP SLOT
              </button>
            </div>
            
            <div className="pt-8 flex justify-center gap-4 text-[10px] text-zinc-600 uppercase tracking-widest">
              <div className="animate-[blink_1s_infinite]">● Only 50 slots</div>
              <div className="opacity-40">○ Secure your access</div>
            </div>
          </form>
        )}
      </main>
    </div>
  );
}
