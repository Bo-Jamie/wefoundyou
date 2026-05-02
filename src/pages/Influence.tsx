import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Influence() {
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "decrypting...";
    if (!sessionStorage.getItem("arg_level_communication")) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleanAnswer = answer.toLowerCase().replace(/\s+/g, "");
    if (cleanAnswer === "welcometoadcamp") {
      sessionStorage.setItem("arg_level_influence", "true");
      document.body.style.opacity = "0";
      setTimeout(() => {
        document.body.style.opacity = "1";
        navigate("/found");
      }, 300);
    } else {
      setAnswer("");
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center p-4 z-10 relative">
      <main className="w-full max-w-[500px] text-center space-y-12">
        <div className="space-y-2">
          <h1 className="text-xl md:text-2xl font-bold tracking-[0.2em] glitch-text" data-text="Three signals received.">
            Three signals received.
          </h1>
          <p className="text-xs text-zinc-500 tracking-[0.2em] font-medium uppercase">One transmission remains.</p>
        </div>
        
        <div className="w-full text-center py-8">
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-[0.3em] break-words text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] glitch-text" data-text="ΠQEEGKXMZI XS EHGEQT">
            ΠQEEGKXMZI XS EHGEQT
          </p>
        </div>

        <p className="text-[10px] md:text-xs text-zinc-500 text-center tracking-[0.2em] leading-relaxed uppercase">
          You already carry the key.<br />You used it to get in.<br />Use it again to get out.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="relative flex items-center justify-center">
            <div className="absolute left-0 text-zinc-600 z-10">$</div>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="ENTER DECODED MESSAGE"
              className="terminal-input w-full py-4 px-8 text-center text-lg md:text-xl tracking-[0.2em] placeholder:text-zinc-800 placeholder:text-xs uppercase"
              autoFocus
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-4 border border-white hover:bg-white hover:text-black transition-all duration-300 tracking-widest text-sm font-bold uppercase"
          >
            → DECODE
          </button>
        </form>
      </main>
    </div>
  );
}
