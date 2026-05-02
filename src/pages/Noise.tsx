import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Copy } from "lucide-react";

export default function Noise() {
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    document.title = "transmission received";
    if (!sessionStorage.getItem("arg_level_enter")) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (answer.toLowerCase() === "communication") {
      sessionStorage.setItem("arg_level_noise", "true");
      document.body.style.opacity = "0";
      setTimeout(() => {
        document.body.style.opacity = "1";
        navigate("/communication");
      }, 300);
    } else {
      setAnswer("");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("Q09NTVVOSUNBVElPTg==");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center p-4 z-10 relative">
      <main className="w-full max-w-[500px] text-center space-y-12">
        <div className="space-y-4">
          <p className="text-xs text-zinc-500 tracking-[0.2em] uppercase">
            A transmission was intercepted.
          </p>
        </div>
        
        <div className="w-full flex flex-col items-center py-8 space-y-6">
          <div 
            className="group relative inline-flex items-center justify-center cursor-pointer w-full"
            onClick={handleCopy}
            title="Copy to clipboard"
          >
            <p className="text-2xl md:text-4xl font-bold tracking-[0.15em] break-all text-white select-all transition-colors group-hover:text-zinc-200">
              Q09NTVVOSUNBVElPTg==
            </p>
            <div className="absolute -right-8 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
              <Copy className={`w-5 h-5 ${copied ? 'text-white' : 'text-zinc-600'}`} />
            </div>
          </div>
          <p className="text-[10px] md:text-xs text-zinc-500 tracking-[0.2em] opacity-60 uppercase">
            64 is the key. Everything else is noise.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="relative flex items-center justify-center">
            <div className="absolute left-0 text-zinc-600 z-10">$</div>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="ENTER WHAT YOU FIND"
              className="terminal-input w-full py-4 px-8 text-center text-lg md:text-xl tracking-[0.2em] placeholder:text-zinc-800 placeholder:text-xs uppercase"
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
