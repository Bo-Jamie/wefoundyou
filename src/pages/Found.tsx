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
    
    // Switch aesthetic to light mode
    document.body.classList.remove("bg-black", "text-white", "font-mono");
    document.body.classList.add("bg-white", "text-neutral-900", "font-sans");
    
    return () => {
      // Revert if navigating away
      document.body.classList.add("bg-black", "text-white", "font-mono");
      document.body.classList.remove("bg-white", "text-neutral-900", "font-sans");
    };
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
    <div className="min-h-screen flex flex-col items-center justify-center p-6 py-16 sans-serif fade-up font-sans">
      <div className="max-w-2xl w-full flex flex-col items-center text-center space-y-12">
        
        <div className="space-y-4">
          <h1 
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 glitch"
            data-text="You found us."
          >
            You found us.
          </h1>
          <p className="text-xl md:text-2xl text-neutral-500 font-medium tracking-wide">
            Or maybe — we found you.
          </p>
        </div>

        <div className="space-y-6 text-lg md:text-xl text-neutral-600 max-w-lg mx-auto leading-relaxed">
          <p>This was never just a puzzle.</p>
          <p>It was a demonstration of everything we study.</p>
          <p>Visual Communication. Hidden Messaging. Campaigns that move people.</p>
          <p className="font-semibold text-neutral-800">You just lived one.</p>
        </div>

        <div className="py-8">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-blue-600">
            WELCOME TO ADCAMP {currentYear}
          </h2>
        </div>

        {submitted ? (
          <div className="bg-neutral-50 p-8 rounded-2xl w-full max-w-md border border-neutral-100 shadow-sm transition-all">
            <p className="text-lg font-medium text-neutral-800">Signal received.</p>
            <p className="text-neutral-600 mt-2">We'll find you before the event. Welcome to The Collective.</p>
          </div>
        ) : (
          <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-neutral-100">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-5 text-left">
              <div className="space-y-1">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Full Name</label>
                <input required type="text" name="name" id="name" className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="program" className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Program / Course</label>
                <input required type="text" name="program" id="program" className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="school" className="text-xs font-semibold uppercase tracking-wider text-neutral-500">School</label>
                <input required type="text" name="school" id="school" className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
              </div>
              
              <div className="space-y-1">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Email Address</label>
                <input required type="email" name="email" id="email" className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-neutral-900 text-white font-medium py-3.5 rounded-lg hover:bg-black hover:shadow-lg transition-all active:scale-[0.98] mt-4 uppercase tracking-wide text-sm"
              >
                → CLAIM MY VIP SLOT
              </button>
              
              <p className="text-xs text-center text-neutral-400 mt-6 font-medium">
                Only the first 50 solvers receive VIP access.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
