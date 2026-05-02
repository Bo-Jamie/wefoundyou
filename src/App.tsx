/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Enter from "./pages/Enter";
import Noise from "./pages/Noise";
import Communication from "./pages/Communication";
import Influence from "./pages/Influence";
import Found from "./pages/Found";

function GlobalEffects() {
  const location = useLocation();
  const isFoundPage = location.pathname === "/found";
  
  if (isFoundPage) return null;

  return (
    <>
      <div className="scanline"></div>
      <div className="fixed top-8 left-8 text-[10px] text-zinc-500 flex flex-col gap-1 uppercase pointer-events-none z-40 hidden md:flex">
        <div>// Status: Listening</div>
        <div>// Frequency: 144.800 MHz</div>
        <div>// Connection: Encrypted</div>
        <div>// 04:21:59 GMT</div>
      </div>
      <div className="fixed top-8 right-8 text-[10px] text-zinc-500 uppercase flex-col gap-1 items-end pointer-events-none z-40 hidden md:flex">
        <div>Trace_001_v3</div>
        <div>Signal_ID: 884-X</div>
        <div>[||||||||||] 100%</div>
      </div>
      <div className="fixed bottom-8 left-8 right-8 flex justify-between items-end border-t border-zinc-900 pt-4 pointer-events-none z-40 hidden md:flex">
        <div className="text-[9px] text-zinc-700 leading-relaxed uppercase">
          Intercept node 04 // Location unknown // The Collective protocols active.<br />
          Do not share this link. We are monitoring all traffic flows.
        </div>
        <div className="text-[9px] text-zinc-700 uppercase">
          ■ // 0x000F4
        </div>
      </div>
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-30"></div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <GlobalEffects />
      <Routes>
        <Route path="/" element={<Navigate to="/enter" replace />} />
        <Route path="/enter" element={<Enter />} />
        <Route path="/noise" element={<Noise />} />
        <Route path="/communication" element={<Communication />} />
        <Route path="/influence" element={<Influence />} />
        <Route path="/found" element={<Found />} />
        <Route path="*" element={<Navigate to="/enter" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
