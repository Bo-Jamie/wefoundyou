import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Communication() {
  const [answer, setAnswer] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "listening...";
    if (!sessionStorage.getItem("arg_level_noise")) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const ans = answer.toLowerCase().trim();
    if (["influence", "advertising", "media"].includes(ans)) {
      setSuccess(true);
      sessionStorage.setItem("arg_level_communication", "true");
      setTimeout(() => {
        document.body.style.opacity = "0";
        setTimeout(() => {
          document.body.style.opacity = "1";
          navigate("/influence");
        }, 300);
      }, 3000);
    } else {
      setAnswer("");
    }
  };

  if (success) {
    return (
      <div className="flex h-screen items-center justify-center p-4">
        <p className="text-center text-sm md:text-base animate-pulse max-w-md leading-relaxed">
          You understand more than you know. One final lock remains. The key has always been with you.
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center p-4 z-10 relative">
      <main className="w-full max-w-[500px] text-center space-y-12">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold tracking-[0.2em] glitch-text" data-text="The Collective communicates in layers.">
            The Collective communicates in layers.
          </h1>
          <p className="text-xs text-zinc-500 tracking-[0.1em] font-medium leading-loose">
            Your first layer is decoded.<br />Now — think.
          </p>
        </div>
        
        <div className="border border-zinc-800 p-8 w-full bg-black/50 backdrop-blur text-left space-y-4 text-xs md:text-sm tracking-widest text-zinc-300 leading-relaxed shadow-[0_0_15px_rgba(255,255,255,0.03)] mx-auto font-mono">
          <p>I have no voice but I speak to millions.</p>
          <p>I have no hands but I shape what you believe.</p>
          <p>I am everywhere and invisible.</p>
          <p className="text-zinc-500">Brands worship me.</p>
          <p>People follow me without knowing.</p>
          <p className="mt-6 pt-4 border-t border-zinc-800/50 text-white font-bold tracking-[0.3em] uppercase">What am I?</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 pt-8">
          <div className="relative flex items-center justify-center">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="terminal-input w-full py-4 px-8 text-center text-xl tracking-[0.2em] lowercase"
              autoFocus
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-4 border border-white hover:bg-white hover:text-black transition-all duration-300 tracking-widest text-sm font-bold uppercase"
          >
            → SUBMIT
          </button>
        </form>
      </main>
    </div>
  );
}
