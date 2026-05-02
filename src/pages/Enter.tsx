import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Enter() {
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "// signal //";
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === "collective") {
      setSuccess(true);
      sessionStorage.setItem("arg_level_enter", "true");
      setTimeout(() => {
        // Flash to black transition simulate
        document.body.style.backgroundColor = "transparent";
        document.body.style.opacity = "0";
        setTimeout(() => {
          document.body.style.backgroundColor = "black";
          document.body.style.opacity = "1";
          navigate("/noise");
        }, 300);
      }, 3000);
    } else {
      setPassword("");
    }
  };

  if (success) {
    return (
      <div className="flex h-screen items-center justify-center p-4">
        <p className="text-center text-sm md:text-base animate-pulse">
          Identity confirmed. Welcome, new signal. Follow the noise.
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center p-4 z-10 relative">
      <main className="w-full max-w-[500px] text-center space-y-12">
        <div className="space-y-2">
          <h1 
            className="text-3xl md:text-4xl font-bold tracking-[0.2em] glitch-text" 
            data-text="ACCESS RESTRICTED"
          >
            ACCESS RESTRICTED
          </h1>
          <p className="text-xs text-zinc-500 tracking-[0.3em] font-medium">IDENTITY VERIFICATION REQUIRED</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6 pt-12">
          <div className="relative flex items-center justify-center">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              className="terminal-input w-full py-4 px-8 text-center text-xl tracking-[0.5em]"
              placeholder="••••••••"
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-4 border border-white hover:bg-white hover:text-black transition-all duration-300 tracking-widest text-sm font-bold"
          >
            → ENTER
          </button>
        </form>

        <div className="pt-12 flex justify-center gap-4 text-[10px] text-zinc-600 uppercase tracking-widest">
          <div className="animate-[blink_1s_infinite]">● System Live</div>
          <div className="opacity-40">○ Waiting for input</div>
        </div>
      </main>
    </div>
  );
}
