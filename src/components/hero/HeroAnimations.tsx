
import React from 'react';

const HeroAnimations = () => {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
      /* Ecosystem Animation Keyframes */
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

      /* AI Robot Animation Keyframes */
      @keyframes ai-robot-float {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-25px) rotate(1deg); }
      }

      @keyframes ai-robot-glow {
        0%, 100% { box-shadow: 0 0 30px rgba(156, 163, 175, 0.1), inset 0 0 20px rgba(156, 163, 175, 0.05); }
        50% { box-shadow: 0 0 50px rgba(156, 163, 175, 0.2), inset 0 0 30px rgba(156, 163, 175, 0.1); }
      }

      @keyframes ai-robot-connection-pulse {
        0%, 100% { opacity: 0.4; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.1); }
      }

      @keyframes ai-robot-line-pulse {
        0%, 100% { opacity: 0.2; stroke-width: 1; }
        50% { opacity: 0.6; stroke-width: 2; }
      }

      @keyframes ai-robot-brain-pulse {
        0%, 100% { opacity: 0.7; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.1); }
      }

      @keyframes ai-robot-chip-pulse {
        0%, 100% { opacity: 0.7; transform: scale(1) rotate(0deg); }
        50% { opacity: 1; transform: scale(1.1) rotate(5deg); }
      }

      @keyframes ai-robot-brain-glow {
        0%, 100% { box-shadow: 0 0 15px rgba(156, 163, 175, 0.1); }
        50% { box-shadow: 0 0 25px rgba(156, 163, 175, 0.3), inset 0 0 15px rgba(156, 163, 175, 0.1); }
      }

      @keyframes ai-robot-chip-glow {
        0%, 100% { box-shadow: 0 0 15px rgba(156, 163, 175, 0.1); }
        50% { box-shadow: 0 0 25px rgba(59, 130, 246, 0.2), inset 0 0 15px rgba(59, 130, 246, 0.05); }
      }

      @keyframes ai-robot-eye-ring-pulse {
        0%, 100% { border-color: rgba(156, 163, 175, 0.3); transform: scale(1); }
        50% { border-color: rgba(156, 163, 175, 0.6); transform: scale(1.05); }
      }

      @keyframes ai-robot-eye-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(156, 163, 175, 0.2); }
        50% { box-shadow: 0 0 40px rgba(156, 163, 175, 0.4), inset 0 0 20px rgba(156, 163, 175, 0.2); }
      }

      @keyframes ai-robot-eye-pulse {
        0%, 100% { opacity: 0.8; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.2); }
      }

      @keyframes ai-robot-progress-fill {
        0% { width: 20%; opacity: 0.4; }
        50% { width: 80%; opacity: 0.8; }
        100% { width: 60%; opacity: 0.6; }
      }

      @keyframes ai-robot-particle-float {
        0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
        50% { transform: translateY(-20px) scale(1.2); opacity: 0.8; }
      }

      @keyframes ai-robot-external-connection {
        0%, 100% { opacity: 0.2; stroke-width: 1; }
        50% { opacity: 0.7; stroke-width: 2; }
      }

      /* Apply animations */
      .ai-device-ecosystem-float {
        animation: ai-ecosystem-float 6s ease-in-out infinite;
      }

      .ai-device-ecosystem-float-delayed {
        animation: ai-ecosystem-float-delayed 8s ease-in-out infinite;
      }

      .ai-device-ecosystem-float-slow {
        animation: ai-ecosystem-float-slow 10s ease-in-out infinite;
      }

      .ai-device-ecosystem-float-center {
        animation: ai-ecosystem-float-center 7s ease-in-out infinite;
      }

      .ai-device-ecosystem-float-autonomous {
        animation: ai-ecosystem-float-autonomous 9s ease-in-out infinite;
      }

      .ai-ecosystem-pulse {
        animation: ai-ecosystem-pulse 2s ease-in-out infinite;
      }

      .ai-ecosystem-glow-blue {
        animation: ai-ecosystem-glow-blue 4s ease-in-out infinite;
      }

      .ai-ecosystem-glow-purple {
        animation: ai-ecosystem-glow-purple 5s ease-in-out infinite;
      }

      .ai-ecosystem-glow-gray {
        animation: ai-ecosystem-glow-gray 6s ease-in-out infinite;
      }

      .ai-ecosystem-glow-cyan {
        animation: ai-ecosystem-glow-cyan 4.5s ease-in-out infinite;
      }

      .ai-ecosystem-glow-green {
        animation: ai-ecosystem-glow-green 5.5s ease-in-out infinite;
      }

      .ai-ecosystem-spin {
        animation: ai-ecosystem-spin 4s linear infinite;
      }

      .ai-ecosystem-data-flow {
        animation: ai-ecosystem-data-flow 3s ease-in-out infinite;
      }

      .ai-ecosystem-orbit {
        animation: ai-ecosystem-orbit 20s linear infinite;
      }

      .ai-ecosystem-brain-pulse {
        animation: ai-ecosystem-brain-pulse 3s ease-in-out infinite;
      }

      .ai-ecosystem-message-type {
        animation: ai-ecosystem-message-type 4s ease-in-out infinite;
      }

      .ai-ecosystem-message-pulse {
        animation: ai-ecosystem-message-pulse 2s ease-in-out infinite;
      }

      .ai-ecosystem-analytics-pulse {
        animation: ai-ecosystem-analytics-pulse 2.5s ease-in-out infinite;
      }

      .ai-ecosystem-server-pulse {
        animation: ai-ecosystem-server-pulse 1.8s ease-in-out infinite;
      }

      .ai-ecosystem-status-blink {
        animation: ai-ecosystem-status-blink 1.5s ease-in-out infinite;
      }

      .ai-ecosystem-agent-pulse {
        animation: ai-ecosystem-agent-pulse 2.2s ease-in-out infinite;
      }

      .ai-ecosystem-float-particle {
        animation: ai-ecosystem-float-particle 8s ease-in-out infinite;
      }

      .scan-sweep-horizontal {
        animation: scan-sweep-horizontal 8s ease-in-out infinite;
        top: 20%;
      }

      .scan-sweep-vertical {
        animation: scan-sweep-vertical 10s ease-in-out infinite;
        left: 30%;
      }

      .scan-sweep-diagonal {
        animation: scan-sweep-diagonal 12s ease-in-out infinite;
        top: 0;
        left: 0;
        width: 200%;
        height: 1px;
        transform-origin: 0 0;
        transform: rotate(25deg);
      }

      .ai-ecosystem-connection-pulse {
        animation: ai-ecosystem-connection-pulse 3s ease-in-out infinite;
      }

      /* Apply AI Robot animations */
      .ai-robot-float {
        animation: ai-robot-float 8s ease-in-out infinite;
      }

      .ai-robot-glow {
        animation: ai-robot-glow 6s ease-in-out infinite;
      }

      .ai-robot-connection-pulse {
        animation: ai-robot-connection-pulse 2s ease-in-out infinite;
      }

      .ai-robot-line-pulse {
        animation: ai-robot-line-pulse 3s ease-in-out infinite;
      }

      .ai-robot-brain-pulse {
        animation: ai-robot-brain-pulse 2.5s ease-in-out infinite;
      }

      .ai-robot-chip-pulse {
        animation: ai-robot-chip-pulse 3s ease-in-out infinite;
      }

      .ai-robot-brain-glow {
        animation: ai-robot-brain-glow 4s ease-in-out infinite;
      }

      .ai-robot-chip-glow {
        animation: ai-robot-chip-glow 4.5s ease-in-out infinite;
      }

      .ai-robot-eye-ring-pulse {
        animation: ai-robot-eye-ring-pulse 4s ease-in-out infinite;
      }

      .ai-robot-eye-glow {
        animation: ai-robot-eye-glow 5s ease-in-out infinite;
      }

      .ai-robot-eye-pulse {
        animation: ai-robot-eye-pulse 3s ease-in-out infinite;
      }

      .ai-robot-progress-fill {
        animation: ai-robot-progress-fill 4s ease-in-out infinite;
      }

      .ai-robot-particle-float {
        animation: ai-robot-particle-float 6s ease-in-out infinite;
      }

      .ai-robot-external-connection {
        animation: ai-robot-external-connection 3.5s ease-in-out infinite;
      }
      `
    }} />
  );
};

export default HeroAnimations;
