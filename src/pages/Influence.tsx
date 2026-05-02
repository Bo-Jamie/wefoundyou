import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Influence() {
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "// signal //";
    if (!sessionStorage.getItem("arg_level_communication")) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (answer.toLowerCase().trim() === "found") {
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
    <div className="flex min-h-screen flex-col items-center bg-[#000000] p-4 z-10 relative fade-up font-mono">
      <div className="absolute top-16 left-0 w-full text-center space-y-3 z-20 pointer-events-none">
        <p className="text-sm md:text-base text-zinc-500 tracking-[0.2em]">
          Three signals received. One transmission remains.
        </p>
        <p className="text-xs text-zinc-800 tracking-[0.3em]">
          Turn up the signal.
        </p>
      </div>

      <div className="flex-grow flex items-center justify-center pointer-events-none w-full">
        <h1 
          className="font-bold tracking-[0.3em]"
          style={{ 
            color: "#0a0a0a", 
            fontSize: "clamp(3rem, 10vw, 6rem)" 
          }}
        >
          FOUND
        </h1>
      </div>

      <div className="w-full max-w-[500px] pb-8 md:pb-12 z-20">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative flex items-center justify-center">
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
            className="w-full py-4 border border-white hover:bg-white hover:text-black transition-all duration-300 tracking-widest text-sm font-bold uppercase text-white"
          >
            → SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
