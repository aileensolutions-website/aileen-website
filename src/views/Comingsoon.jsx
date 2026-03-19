"use client";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
const homeVideo = "/video/main-bg.mp4";


export default function ComingSoon() {
  const router = useRouter();
    const videoRef = useRef(null);

  return (
    <div className="cs-wrap">

      {/* navbar gradient veil */}
      <div style={{
        position:"fixed", top:0, left:0, right:0, height:80, zIndex:49, pointerEvents:"none",
        background:"linear-gradient(to bottom,rgba(6,10,20,.88),rgba(6,10,20,.4) 60%,transparent)",
      }}/>
      <Navbar />

      {/* background photo */}
      <div className="cs-bg">
         <video ref={videoRef} autoPlay muted loop playsInline preload="auto"
                 className="absolute inset-0 h-full w-full object-cover">
                 <source src={homeVideo} type="video/mp4" />
               </video>
      </div>

      {/* decorative circles */}
      <div className="cs-grid" />

      {/* content */}
      <div className="cs-body">
        <div className="cs-card">

          {/* animated spinner icon */}
          <div className="cs-icon-wrap">
            <svg className="cs-ring" viewBox="0 0 96 96">
              <defs>
                <linearGradient id="csGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee"/>
                  <stop offset="100%" stopColor="#34d399"/>
                </linearGradient>
              </defs>
              <circle cx="48" cy="48" r="44"/>
            </svg>
            <div className="cs-icon-inner">🔧</div>
          </div>

          {/* pill badge */}
          <div>
            <span className="cs-pill">
              <span className="cs-dot"/>IN DEVELOPMENT
            </span>
          </div>

          {/* heading */}
          <h1 className="cs-h1">
            This page will be available soon as we 
            <span style={{
              background:"linear-gradient(to right,#22d3ee,#34d399)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent"
            }}>continue improving our platform.</span>
          </h1>

         

          {/* status */}
          <div className="cs-status">
            <div className="cs-status-dot"/>
            <span className="cs-status-txt">กำลังดำเนินการพัฒนา ขออภัยในความไม่สะดวก</span>
          </div>


          {/* back button */}
          <button className="cs-btn" onClick={() => router.push("/")}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            กลับสู่หน้าแรก
          </button>

        </div>
      </div>

    </div>
  );
}