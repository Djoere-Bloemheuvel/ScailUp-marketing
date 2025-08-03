import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				premium: {
					black: '#000000',
					gray: '#111111',
					'gray-dark': '#0A0A0A',
					silver: '#C0C0C0',
					'silver-light': '#E5E5E5'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			fontFamily: {
				'apple': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Roboto', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(192, 192, 192, 0.3), 0 0 40px rgba(192, 192, 192, 0.1)' 
					},
					'50%': { 
						boxShadow: '0 0 30px rgba(192, 192, 192, 0.5), 0 0 60px rgba(192, 192, 192, 0.2)' 
					}
				},
				'pulse-premium': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.6' }
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				// Apple-inspired animations
				'apple-fade-in': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'apple-glow': {
					'0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
					'50%': { opacity: '0.5', transform: 'scale(1.05)' }
				},
				'apple-scroll-pulse': {
					'0%, 100%': { opacity: '0.4', transform: 'translateY(0)' },
					'50%': { opacity: '1', transform: 'translateY(8px)' }
				},
				// New animations for left robot
				'server-pulse': {
					'0%, 100%': { opacity: '0.4', scaleX: '0.8' },
					'50%': { opacity: '1', scaleX: '1' }
				},
				'status-light': {
					'0%, 100%': { opacity: '0.3' },
					'50%': { opacity: '1' }
				},
				'ai-code-pulse': {
					'0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.1)' }
				},
				'ai-server-pulse': {
					'0%, 100%': { opacity: '0.6', transform: 'rotateY(0deg)' },
					'50%': { opacity: '1', transform: 'rotateY(10deg)' }
				},
				'ai-database-scan': {
					'0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
					'33%': { opacity: '1', transform: 'scale(1.1)' },
					'66%': { opacity: '0.8', transform: 'scale(0.95)' }
				},
				'terminal-line': {
					'0%': { opacity: '0', width: '0%' },
					'100%': { opacity: '1', width: '100%' }
				},
				'terminal-cursor': {
					'0%, 50%': { opacity: '1' },
					'51%, 100%': { opacity: '0' }
				},
				'ai-device-premium-glow': {
					'0%, 100%': { opacity: '0.2' },
					'50%': { opacity: '0.4' }
				},
				// Enhanced left robot animations
				'hexagon-morph': {
					'0%, 100%': { transform: 'rotate(0deg) scale(1)' },
					'50%': { transform: 'rotate(0.5deg) scale(1.002)' }
				},
				'hexagon-shimmer': {
					'0%': { opacity: '0.1', transform: 'translateX(-100%)' },
					'50%': { opacity: '0.3', transform: 'translateX(0%)' },
					'100%': { opacity: '0.1', transform: 'translateX(100%)' }
				},
				'hexagon-breathe': {
					'0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
					'50%': { opacity: '0.4', transform: 'scale(1.01)' }
				},
				'chart-bar-dance': {
					'0%, 100%': { transform: 'scaleY(1)', opacity: '0.4' },
					'25%': { transform: 'scaleY(1.3)', opacity: '0.8' },
					'50%': { transform: 'scaleY(0.7)', opacity: '0.6' },
					'75%': { transform: 'scaleY(1.1)', opacity: '0.9' }
				},
				'chart-container-float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-2px)' }
				},
				'chart-icon-spin': {
					'0%': { transform: 'rotate(0deg) scale(1)' },
					'25%': { transform: 'rotate(5deg) scale(1.1)' },
					'75%': { transform: 'rotate(-5deg) scale(0.9)' },
					'100%': { transform: 'rotate(0deg) scale(1)' }
				},
				'panel-wave': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-1px) rotate(0.2deg)' }
				},
				'panel-slide': {
					'0%, 100%': { transform: 'translateX(0px)' },
					'50%': { transform: 'translateX(1px)' }
				},
				'grid-breathe': {
					'0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
					'50%': { opacity: '0.4', transform: 'scale(1.05)' }
				},
				'dashboard-typewriter': {
					'0%': { width: '0%', opacity: '0' },
					'50%': { width: '100%', opacity: '1' },
					'100%': { width: '100%', opacity: '0.6' }
				},
				'activity-heartbeat': {
					'0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
					'14%': { transform: 'scale(1.3)', opacity: '1' },
					'28%': { transform: 'scale(1)', opacity: '0.8' },
					'42%': { transform: 'scale(1.3)', opacity: '1' },
					'70%': { transform: 'scale(1)', opacity: '0.6' }
				},
				'layer-cascade': {
					'0%': { transform: 'translateY(10px)', opacity: '0' },
					'50%': { transform: 'translateY(0px)', opacity: '1' },
					'100%': { transform: 'translateY(-2px)', opacity: '0.7' }
				},
				'layer-flip': {
					'0%, 100%': { transform: 'rotateX(0deg)' },
					'50%': { transform: 'rotateX(180deg)' }
				},
				'interface-spiral': {
					'0%, 100%': { transform: 'rotate(0deg) scale(1)' },
					'25%': { transform: 'rotate(1deg) scale(1.02)' },
					'50%': { transform: 'rotate(0deg) scale(1.05)' },
					'75%': { transform: 'rotate(-1deg) scale(1.02)' }
				},
				'interface-matrix': {
					'0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
					'20%': { opacity: '1', transform: 'scale(1.2)' },
					'40%': { opacity: '0.3', transform: 'scale(0.8)' },
					'60%': { opacity: '0.8', transform: 'scale(1.1)' },
					'80%': { opacity: '0.4', transform: 'scale(0.9)' }
				},
				'central-orbit': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'central-core-pulse': {
					'0%, 100%': { transform: 'scale(1)', opacity: '1' },
					'50%': { transform: 'scale(1.5)', opacity: '0.5' }
				},
				'terminal-glow': {
					'0%, 100%': { boxShadow: '0 0 5px rgba(192, 192, 192, 0.2)' },
					'50%': { boxShadow: '0 0 15px rgba(192, 192, 192, 0.4)' }
				},
				'terminal-typing': {
					'0%': { width: '0%' },
					'70%': { width: '100%' },
					'100%': { width: '100%' }
				},
				'status-sequence': {
					'0%, 80%, 100%': { opacity: '0.3', transform: 'scale(1)' },
					'20%': { opacity: '1', transform: 'scale(1.3)' }
				},
				'shadow-pulse': {
					'0%, 100%': { opacity: '0.3', transform: 'translateY(4px) scale(0.95)' },
					'50%': { opacity: '0.5', transform: 'translateY(6px) scale(0.98)' }
				},
				// Enhanced right robot animations
				'ai-device-hover': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'33%': { transform: 'translateY(-3px) rotate(0.3deg)' },
					'66%': { transform: 'translateY(-1px) rotate(-0.2deg)' }
				},
				'glass-wave': {
					'0%': { opacity: '0.15', transform: 'translateX(-100%) skewX(-5deg)' },
					'50%': { opacity: '0.25', transform: 'translateX(0%) skewX(0deg)' },
					'100%': { opacity: '0.15', transform: 'translateX(100%) skewX(5deg)' }
				},
				'neural-container-flow': {
					'0%, 100%': { transform: 'scale(1)', opacity: '0.9' },
					'50%': { transform: 'scale(1.01)', opacity: '1' }
				},
				'neural-organic': {
					'0%, 100%': { transform: 'scale(1) translateY(0px)', opacity: '0.6' },
					'25%': { transform: 'scale(1.2) translateY(-2px)', opacity: '1' },
					'50%': { transform: 'scale(0.8) translateY(1px)', opacity: '0.8' },
					'75%': { transform: 'scale(1.1) translateY(-1px)', opacity: '0.9' }
				},
				'connection-flow': {
					'0%': { strokeDasharray: '0,100', opacity: '0' },
					'50%': { strokeDasharray: '50,100', opacity: '1' },
					'100%': { strokeDasharray: '100,100', opacity: '0.3' }
				},
				'processing-left': {
					'0%, 100%': { transform: 'translateX(0px) rotate(0deg)' },
					'50%': { transform: 'translateX(-2px) rotate(-1deg)' }
				},
				'processing-right': {
					'0%, 100%': { transform: 'translateX(0px) rotate(0deg)' },
					'50%': { transform: 'translateX(2px) rotate(1deg)' }
				},
				'brain-think': {
					'0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
					'25%': { transform: 'scale(1.1)', opacity: '1' },
					'50%': { transform: 'scale(0.95)', opacity: '0.9' },
					'75%': { transform: 'scale(1.05)', opacity: '1' }
				},
				'cpu-compute': {
					'0%, 100%': { transform: 'rotateY(0deg)', opacity: '0.8' },
					'20%': { transform: 'rotateY(10deg)', opacity: '1' },
					'40%': { transform: 'rotateY(-5deg)', opacity: '0.9' },
					'60%': { transform: 'rotateY(8deg)', opacity: '1' },
					'80%': { transform: 'rotateY(-3deg)', opacity: '0.9' }
				},
				'eye-container-rotate': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'ai-eye-advanced-scan': {
					'0%, 100%': { transform: 'scale(1)', color: 'rgba(255, 255, 255, 0.8)' },
					'25%': { transform: 'scale(1.2)', color: 'rgba(192, 192, 192, 1)' },
					'50%': { transform: 'scale(0.9)', color: 'rgba(255, 255, 255, 1)' },
					'75%': { transform: 'scale(1.1)', color: 'rgba(192, 192, 192, 0.9)' }
				},
				'stream-container': {
					'0%, 100%': { transform: 'scaleX(1)' },
					'50%': { transform: 'scaleX(1.02)' }
				},
				'data-stream-varied': {
					'0%': { left: '-60%', opacity: '0', transform: 'scaleX(0.5)' },
					'10%': { opacity: '0.3', transform: 'scaleX(1)' },
					'50%': { opacity: '1', transform: 'scaleX(1.2)' },
					'90%': { opacity: '0.3', transform: 'scaleX(0.8)' },
					'100%': { left: '100%', opacity: '0', transform: 'scaleX(0.3)' }
				},
				'ai-glow-breathe': {
					'0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
					'33%': { opacity: '0.5', transform: 'scale(1.01)' },
					'66%': { opacity: '0.4', transform: 'scale(0.99)' }
				},
				'shadow-float': {
					'0%, 100%': { transform: 'translateY(4px) scale(0.95)', opacity: '0.4' },
					'50%': { transform: 'translateY(8px) scale(0.97)', opacity: '0.2' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'pulse-premium': 'pulse-premium 2s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
				// Apple-inspired animations
				'apple-fade-in': 'apple-fade-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'apple-glow': 'apple-glow 8s ease-in-out infinite',
				'apple-scroll-pulse': 'apple-scroll-pulse 2s ease-in-out infinite',
				// New animations for left robot
				'server-pulse': 'server-pulse 2s ease-in-out infinite',
				'status-light': 'status-light 1.5s ease-in-out infinite',
				'ai-code-pulse': 'ai-code-pulse 2.5s ease-in-out infinite',
				'ai-server-pulse': 'ai-server-pulse 3s ease-in-out infinite',
				'ai-database-scan': 'ai-database-scan 4s ease-in-out infinite',
				'terminal-line': 'terminal-line 2s ease-out forwards',
				'terminal-cursor': 'terminal-cursor 1s ease-in-out infinite',
				'ai-device-premium-glow': 'ai-device-premium-glow 6s ease-in-out infinite',
				// Enhanced left robot animations
				'hexagon-morph': 'hexagon-morph 8s ease-in-out infinite',
				'hexagon-shimmer': 'hexagon-shimmer 6s linear infinite',
				'hexagon-breathe': 'hexagon-breathe 4s ease-in-out infinite',
				'chart-bar-dance': 'chart-bar-dance 2s ease-in-out infinite',
				'chart-container-float': 'chart-container-float 3s ease-in-out infinite',
				'chart-icon-spin': 'chart-icon-spin 4s ease-in-out infinite',
				'panel-wave': 'panel-wave 5s ease-in-out infinite',
				'panel-slide': 'panel-slide 4s ease-in-out infinite',
				'grid-breathe': 'grid-breathe 3s ease-in-out infinite',
				'dashboard-typewriter': 'dashboard-typewriter 3s ease-in-out infinite',
				'activity-heartbeat': 'activity-heartbeat 2s ease-in-out infinite',
				'layer-cascade': 'layer-cascade 2s ease-in-out infinite',
				'layer-flip': 'layer-flip 6s ease-in-out infinite',
				'interface-spiral': 'interface-spiral 8s ease-in-out infinite',
				'interface-matrix': 'interface-matrix 1.5s ease-in-out infinite',
				'central-orbit': 'central-orbit 20s linear infinite',
				'central-core-pulse': 'central-core-pulse 2s ease-in-out infinite',
				'terminal-glow': 'terminal-glow 3s ease-in-out infinite',
				'terminal-typing': 'terminal-typing 4s ease-in-out infinite',
				'status-sequence': 'status-sequence 2s ease-in-out infinite',
				'shadow-pulse': 'shadow-pulse 4s ease-in-out infinite',
				// Enhanced right robot animations
				'ai-device-hover': 'ai-device-hover 6s ease-in-out infinite',
				'glass-wave': 'glass-wave 8s linear infinite',
				'neural-container-flow': 'neural-container-flow 4s ease-in-out infinite',
				'neural-organic': 'neural-organic 3s ease-in-out infinite',
				'connection-flow': 'connection-flow 4s ease-in-out infinite',
				'processing-left': 'processing-left 3s ease-in-out infinite',
				'processing-right': 'processing-right 3.2s ease-in-out infinite',
				'brain-think': 'brain-think 2.5s ease-in-out infinite',
				'cpu-compute': 'cpu-compute 3s ease-in-out infinite',
				'eye-container-rotate': 'eye-container-rotate 30s linear infinite',
				'ai-eye-advanced-scan': 'ai-eye-advanced-scan 2s ease-in-out infinite',
				'stream-container': 'stream-container 4s ease-in-out infinite',
				'data-stream-varied': 'data-stream-varied 4s ease-in-out infinite',
				'ai-glow-breathe': 'ai-glow-breathe 5s ease-in-out infinite',
				'shadow-float': 'shadow-float 6s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
