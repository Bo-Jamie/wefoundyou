import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Influence() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "// signal //";
    if (!sessionStorage.getItem("arg_level_communication")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="flex min-h-screen flex-col bg-[#000000] p-4 z-10 relative fade-up font-mono">
      <div className="absolute top-16 left-0 w-full text-center space-y-3 z-20 pointer-events-none">
        <p className="text-sm md:text-base text-zinc-500 tracking-[0.2em]">
          Three signals received. One transmission remains.
        </p>
        <p className="text-xs text-zinc-800 tracking-[0.3em]">
          Turn up the signal.
        </p>
      </div>

      <div className="flex-grow flex items-center justify-center pointer-events-none">
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
    </div>
  );
}
