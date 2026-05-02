import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Influence() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "// reflection //";
    if (!sessionStorage.getItem("arg_level_communication")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="flex h-screen flex-col items-center justify-center p-4 z-10 relative fade-up">
      <main className="w-full text-center space-y-12 flex flex-col items-center">
        <p className="text-xs md:text-sm text-zinc-500 tracking-[0.2em] uppercase font-mono opacity-60">
          The Collective is a reflection of everything you've seen.
        </p>
        
        <div className="bg-white p-4 inline-block">
          <img 
            src="/signal-qr.png" 
            alt="QR Code" 
            className="w-[180px] h-[180px] md:w-[240px] md:h-[240px] block"
            style={{ transform: "scaleX(-1)" }}
          />
        </div>
      </main>
    </div>
  );
}
