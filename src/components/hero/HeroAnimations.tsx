import React from 'react';

const HeroAnimations = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
      /* Premium Animation Keyframes */
      @keyframes premium-fade-in {
        0% { opacity: 0; transform: translateY(40px) scale(0.98); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }

      @keyframes premium-orb-float-slow {
        0%, 100% { transform: translateY(0) scale(1); }
        50% { transform: translateY(-30px) scale(1.02); }
      }

      @keyframes premium-orb-float-medium {
        0%, 100% { transform: translateY(0) scale(1); }
        50% { transform: translateY(-20px) scale(1.03); }
      }

      @keyframes premium-orb-float-fast {
        0%, 100% { transform: translateY(0) scale(1); }
        50% { transform: translateY(-15px) scale(1.05); }
      }

      @keyframes premium-orb-glow-silver {
        0%, 100% { box-shadow: 0 0 60px rgba(192, 192, 192, 0.1), 0 0 120px rgba(192, 192, 192, 0.05); }
        50% { box-shadow: 0 0 80px rgba(192, 192, 192, 0.2), 0 0 160px rgba(192, 192, 192, 0.08); }
      }

      @keyframes premium-orb-glow-blue {
        0%, 100% { box-shadow: 0 0 50px rgba(59, 130, 246, 0.08), 0 0 100px rgba(59, 130, 246, 0.04); }
        50% { box-shadow: 0 0 70px rgba(59, 130, 246, 0.15), 0 0 140px rgba(59, 130, 246, 0.06); }
      }

      @keyframes premium-orb-glow-purple {
        0%, 100% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.06), 0 0 80px rgba(147, 51, 234, 0.03); }
        50% { box-shadow: 0 0 60px rgba(147, 51, 234, 0.12), 0 0 120px rgba(147, 51, 234, 0.05); }
      }

      @keyframes premium-orb-glow-cyan {
        0%, 100% { box-shadow: 0 0 35px rgba(34, 211, 238, 0.05), 0 0 70px rgba(34, 211, 238, 0.02); }
        50% { box-shadow: 0 0 50px rgba(34, 211, 238, 0.1), 0 0 100px rgba(34, 211, 238, 0.04); }
      }

      @keyframes premium-orb-glow-green {
        0%, 100% { box-shadow: 0 0 35px rgba(34, 197, 94, 0.05), 0 0 70px rgba(34, 197, 94, 0.02); }
        50% { box-shadow: 0 0 50px rgba(34, 197, 94, 0.1), 0 0 100px rgba(34, 197, 94, 0.04); }
      }

      @keyframes premium-orb-pulse {
        0%, 100% { opacity: 0.8; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.1); }
      }

      @keyframes premium-core-pulse {
        0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
        50% { opacity: 1; transform: translate(-50%, -50%) scale(1.3); }
      }

      @keyframes premium-icon-float-1 {
        0%, 100% { transform: translateX(-50%) translateY(0) rotate(0deg); }
        33% { transform: translateX(-50%) translateY(-15px) rotate(1deg); }
        66% { transform: translateX(-50%) translateY(-5px) rotate(-0.5deg); }
      }

      @keyframes premium-icon-float-2 {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(2deg); }
      }

      @keyframes premium-icon-float-3 {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        40% { transform: translateY(-10px) rotate(-1deg); }
        80% { transform: translateY(-18px) rotate(1.5deg); }
      }

      @keyframes premium-icon-float-4 {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        60% { transform: translateY(-12px) rotate(-2deg); }
      }

      @keyframes premium-icon-float-5 {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-8px) rotate(1deg); }
      }

      @keyframes premium-icon-float-6 {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        30% { transform: translateY(-14px) rotate(-1deg); }
        70% { transform: translateY(-6px) rotate(2deg); }
      }

      @keyframes premium-icon-float-7 {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-16px) rotate(1.5deg); }
      }

      @keyframes premium-icon-float-8 {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        45% { transform: translateY(-11px) rotate(-1.5deg); }
        85% { transform: translateY(-3px) rotate(0.5deg); }
      }

      @keyframes premium-icon-breathe {
        0%, 100% { opacity: 0.7; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.05); }
      }

      @keyframes premium-icon-glow-silver {
        0%, 100% { box-shadow: 0 0 20px rgba(192, 192, 192, 0.2), 0 0 40px rgba(192, 192, 192, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2); }
        50% { box-shadow: 0 0 30px rgba(192, 192, 192, 0.3), 0 0 60px rgba(192, 192, 192, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3); }
      }

      @keyframes premium-icon-glow-blue {
        0%, 100% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.3), 0 0 30px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(59, 130, 246, 0.2); }
        50% { box-shadow: 0 0 25px rgba(59, 130, 246, 0.4), 0 0 50px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(59, 130, 246, 0.3); }
      }

      @keyframes premium-icon-glow-purple {
        0%, 100% { box-shadow: 0 0 15px rgba(147, 51, 234, 0.3), 0 0 30px rgba(147, 51, 234, 0.15), inset 0 1px 0 rgba(147, 51, 234, 0.2); }
        50% { box-shadow: 0 0 25px rgba(147, 51, 234, 0.4), 0 0 50px rgba(147, 51, 234, 0.2), inset 0 1px 0 rgba(147, 51, 234, 0.3); }
      }

      @keyframes premium-icon-glow-green {
        0%, 100% { box-shadow: 0 0 15px rgba(34, 197, 94, 0.3), 0 0 30px rgba(34, 197, 94, 0.15), inset 0 1px 0 rgba(34, 197, 94, 0.2); }
        50% { box-shadow: 0 0 25px rgba(34, 197, 94, 0.4), 0 0 50px rgba(34, 197, 94, 0.2), inset 0 1px 0 rgba(34, 197, 94, 0.3); }
      }

      @keyframes premium-icon-glow-cyan {
        0%, 100% { box-shadow: 0 0 15px rgba(34, 211, 238, 0.3), 0 0 30px rgba(34, 211, 238, 0.15), inset 0 1px 0 rgba(34, 211, 238, 0.2); }
        50% { box-shadow: 0 0 25px rgba(34, 211, 238, 0.4), 0 0 50px rgba(34, 211, 238, 0.2), inset 0 1px 0 rgba(34, 211, 238, 0.3); }
      }

      @keyframes premium-icon-glow-orange {
        0%, 100% { box-shadow: 0 0 15px rgba(249, 115, 22, 0.3), 0 0 30px rgba(249, 115, 22, 0.15), inset 0 1px 0 rgba(249, 115, 22, 0.2); }
        50% { box-shadow: 0 0 25px rgba(249, 115, 22, 0.4), 0 0 50px rgba(249, 115, 22, 0.2), inset 0 1px 0 rgba(249, 115, 22, 0.3); }
      }

      @keyframes premium-icon-glow-pink {
        0%, 100% { box-shadow: 0 0 15px rgba(236, 72, 153, 0.3), 0 0 30px rgba(236, 72, 153, 0.15), inset 0 1px 0 rgba(236, 72, 153, 0.2); }
        50% { box-shadow: 0 0 25px rgba(236, 72, 153, 0.4), 0 0 50px rgba(236, 72, 153, 0.2), inset 0 1px 0 rgba(236, 72, 153, 0.3); }
      }

      @keyframes premium-icon-glow-indigo {
        0%, 100% { box-shadow: 0 0 15px rgba(99, 102, 241, 0.3), 0 0 30px rgba(99, 102, 241, 0.15), inset 0 1px 0 rgba(99, 102, 241, 0.2); }
        50% { box-shadow: 0 0 25px rgba(99, 102, 241, 0.4), 0 0 50px rgba(99, 102, 241, 0.2), inset 0 1px 0 rgba(99, 102, 241, 0.3); }
      }

      @keyframes premium-icon-shimmer {
        0% { opacity: 0; transform: translateX(-100%); }
        50% { opacity: 0.8; }
        100% { opacity: 0; transform: translateX(100%); }
      }

      @keyframes premium-scan-sweep-horizontal {
        0% { transform: translateX(-100%); opacity: 0; }
        10%, 90% { opacity: 1; }
        100% { transform: translateX(200%); opacity: 0; }
      }

      @keyframes premium-scan-sweep-vertical {
        0% { transform: translateY(-100%); opacity: 0; }
        10%, 90% { opacity: 1; }
        100% { transform: translateY(200%); opacity: 0; }
      }

      @keyframes premium-scan-sweep-diagonal {
        0% { transform: translateX(-100%) translateY(-100%); opacity: 0; }
        10%, 90% { opacity: 1; }
        100% { transform: translateX(200%) translateY(200%); opacity: 0; }
      }

      @keyframes premium-connection-pulse {
        0%, 100% { opacity: 0.1; stroke-width: 1; }
        50% { opacity: 0.4; stroke-width: 1.5; }
      }

      @keyframes premium-ambient-pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.7; }
      }

      @keyframes premium-scroll-pulse {
        0%, 100% { opacity: 0.5; transform: translateY(0); }
        50% { opacity: 1; transform: translateY(12px); }
      }

      @keyframes premium-particle-trail {
        0%, 100% { opacity: 0; transform: scale(0.8); }
        50% { opacity: 0.6; transform: scale(1.2); }
      }

      @keyframes premium-button-hover {
        0% { transform: scale(1) translateY(0); }
        100% { transform: scale(1.02) translateY(-2px); }
      }

      @keyframes premium-scale-hover {
        0% { transform: scale(1); }
        100% { transform: scale(1.02); }
      }

      /* Existing ecosystem and robot animations */
      @keyframes ai-ecosystem-float {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(2deg); }
      }

      @keyframes ai-ecosystem-float-delayed {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-15px) rotate(-1deg); }
      }

      @keyframes ai-ecosystem-float-slow {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(1deg); }
      }

      @keyframes ai-ecosystem-float-center {
        0%, 100% { transform: translateX(-50%) translateY(0) rotate(0deg); }
        50% { transform: translateX(-50%) translateY(-25px) rotate(1deg); }
      }

      @keyframes ai-ecosystem-float-autonomous {
        0%, 100% { transform: translateY(0) rotate(45deg); }
        50% { transform: translateY(-18px) rotate(47deg); }
      }

      @keyframes ai-ecosystem-pulse {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.05); }
      }

      @keyframes ai-ecosystem-glow-blue {
        0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.1); }
        50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.3), inset 0 0 20px rgba(59, 130, 246, 0.1); }
      }

      @keyframes ai-ecosystem-glow-purple {
        0%, 100% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.1); }
        50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.3), inset 0 0 20px rgba(147, 51, 234, 0.1); }
      }

      @keyframes ai-ecosystem-glow-gray {
        0%, 100% { box-shadow: 0 0 15px rgba(156, 163, 175, 0.1); }
        50% { box-shadow: 0 0 30px rgba(156, 163, 175, 0.2), inset 0 0 15px rgba(156, 163, 175, 0.1); }
      }

      @keyframes ai-ecosystem-glow-cyan {
        0%, 100% { box-shadow: 0 0 25px rgba(34, 211, 238, 0.1); }
        50% { box-shadow: 0 0 50px rgba(34, 211, 238, 0.3), inset 0 0 25px rgba(34, 211, 238, 0.1); }
      }

      @keyframes ai-ecosystem-glow-green {
        0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.1); }
        50% { box-shadow: 0 0 40px rgba(34, 197, 94, 0.3), inset 0 0 20px rgba(34, 197, 94, 0.1); }
      }

      @keyframes ai-ecosystem-spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      @keyframes ai-ecosystem-data-flow {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(200%); }
      }

      @keyframes ai-ecosystem-orbit {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      @keyframes ai-ecosystem-brain-pulse {
        0%, 100% { opacity: 0.6; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.1); }
      }

      @keyframes ai-ecosystem-message-type {
        0% { width: 0; opacity: 0; }
        50% { opacity: 1; }
        100% { width: 100%; opacity: 0.6; }
      }

      @keyframes ai-ecosystem-message-pulse {
        0%, 100% { opacity: 0.4; }
        50% { opacity: 1; }
      }

      @keyframes ai-ecosystem-analytics-pulse {
        0%, 100% { opacity: 0.4; height: 60%; }
        50% { opacity: 1; height: 100%; }
      }

      @keyframes ai-ecosystem-server-pulse {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 1; }
      }

      @keyframes ai-ecosystem-status-blink {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 1; }
      }

      @keyframes ai-ecosystem-agent-pulse {
        0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
        50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
      }

      @keyframes ai-ecosystem-float-particle {
        0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
        50% { transform: translateY(-30px) scale(1.1); opacity: 0.7; }
      }

      @keyframes scan-sweep-horizontal {
        0% { transform: translateX(-100%); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateX(200%); opacity: 0; }
      }

      @keyframes scan-sweep-vertical {
        0% { transform: translateY(-100%); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateY(200%); opacity: 0; }
      }

      @keyframes scan-sweep-diagonal {
        0% { transform: translateX(-100%) translateY(-100%); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateX(200%) translateY(200%); opacity: 0; }
      }

      @keyframes ai-ecosystem-connection-pulse {
        0%, 100% { opacity: 0.2; stroke-width: 1; }
        50% { opacity: 0.8; stroke-width: 2; }
      }

      /* Apply Premium Animations */
      .premium-fade-in {
        animation: premium-fade-in 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }

      .premium-stagger-1 {
        animation-delay: 0.2s;
      }

      .premium-stagger-2 {
        animation-delay: 0.4s;
      }

      .premium-stagger-3 {
        animation-delay: 0.6s;
      }

      .premium-orb-float-slow {
        animation: premium-orb-float-slow 12s ease-in-out infinite;
      }

      .premium-orb-float-medium {
        animation: premium-orb-float-medium 9s ease-in-out infinite;
      }

      .premium-orb-float-fast {
        animation: premium-orb-float-fast 6s ease-in-out infinite;
      }

      .premium-orb-glow-silver {
        animation: premium-orb-glow-silver 8s ease-in-out infinite;
      }

      .premium-orb-glow-blue {
        animation: premium-orb-glow-blue 7s ease-in-out infinite;
      }

      .premium-orb-glow-purple {
        animation: premium-orb-glow-purple 9s ease-in-out infinite;
      }

      .premium-orb-glow-cyan {
        animation: premium-orb-glow-cyan 6s ease-in-out infinite;
      }

      .premium-orb-glow-green {
        animation: premium-orb-glow-green 8s ease-in-out infinite;
      }

      .premium-orb-pulse {
        animation: premium-orb-pulse 4s ease-in-out infinite;
      }

      .premium-core-pulse {
        animation: premium-core-pulse 3s ease-in-out infinite;
      }

      .premium-icon-float-1 {
        animation: premium-icon-float-1 15s ease-in-out infinite;
      }

      .premium-icon-float-2 {
        animation: premium-icon-float-2 11s ease-in-out infinite;
      }

      .premium-icon-float-3 {
        animation: premium-icon-float-3 13s ease-in-out infinite;
      }

      .premium-icon-float-4 {
        animation: premium-icon-float-4 9s ease-in-out infinite;
      }

      .premium-icon-float-5 {
        animation: premium-icon-float-5 14s ease-in-out infinite;
      }

      .premium-icon-float-6 {
        animation: premium-icon-float-6 10s ease-in-out infinite;
      }

      .premium-icon-float-7 {
        animation: premium-icon-float-7 12s ease-in-out infinite;
      }

      .premium-icon-float-8 {
        animation: premium-icon-float-8 8s ease-in-out infinite;
      }

      .premium-icon-breathe {
        animation: premium-icon-breathe 5s ease-in-out infinite;
      }

      .premium-icon-glow-silver {
        animation: premium-icon-glow-silver 6s ease-in-out infinite;
      }

      .premium-icon-glow-blue {
        animation: premium-icon-glow-blue 5s ease-in-out infinite;
      }

      .premium-icon-glow-purple {
        animation: premium-icon-glow-purple 7s ease-in-out infinite;
      }

      .premium-icon-glow-green {
        animation: premium-icon-glow-green 6s ease-in-out infinite;
      }

      .premium-icon-glow-cyan {
        animation: premium-icon-glow-cyan 5.5s ease-in-out infinite;
      }

      .premium-icon-glow-orange {
        animation: premium-icon-glow-orange 6.5s ease-in-out infinite;
      }

      .premium-icon-glow-pink {
        animation: premium-icon-glow-pink 7.5s ease-in-out infinite;
      }

      .premium-icon-glow-indigo {
        animation: premium-icon-glow-indigo 8s ease-in-out infinite;
      }

      .premium-icon-shimmer {
        animation: premium-icon-shimmer 8s ease-in-out infinite;
      }

      .premium-scan-sweep-horizontal {
        animation: premium-scan-sweep-horizontal 15s ease-in-out infinite;
        top: 25%;
      }

      .premium-scan-sweep-vertical {
        animation: premium-scan-sweep-vertical 18s ease-in-out infinite;
        left: 35%;
      }

      .premium-scan-sweep-diagonal {
        animation: premium-scan-sweep-diagonal 20s ease-in-out infinite;
        top: 0;
        left: 0;
        width: 200%;
        height: 1px;
        transform-origin: 0 0;
        transform: rotate(30deg);
      }

      .premium-connection-pulse {
        animation: premium-connection-pulse 8s ease-in-out infinite;
      }

      .premium-ambient-pulse {
        animation: premium-ambient-pulse 20s ease-in-out infinite;
      }

      .premium-scroll-pulse {
        animation: premium-scroll-pulse 3s ease-in-out infinite;
      }

      .premium-particle-trail {
        animation: premium-particle-trail 6s ease-in-out infinite;
      }

      .premium-button-hover:hover {
        animation: premium-button-hover 0.3s ease-out forwards;
      }

      .premium-scale-hover:hover {
        animation: premium-scale-hover 0.2s ease-out forwards;
      }
      `
    }} />
  );
};

export default HeroAnimations;
