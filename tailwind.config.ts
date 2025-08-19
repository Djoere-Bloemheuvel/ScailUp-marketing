
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"./src/pages/**/*.{astro,ts,tsx}",
		"./src/components/**/*.{astro,ts,tsx}",
		"./src/layouts/**/*.{astro,ts,tsx}",
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
				// Apple animations moved to index.css to prevent conflicts
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
				'scale-pulse': {
					'0%, 100%': { 
						transform: 'translateY(0) scale(1)', 
						opacity: '0.8' 
					},
					'50%': { 
						transform: 'translateY(-5px) scale(1.1)', 
						opacity: '1' 
					}
				},
				'float-smooth': {
					'0%, 100%': { 
						transform: 'translateX(-50%) translateY(0)' 
					},
					'50%': { 
						transform: 'translateX(-50%) translateY(-8px)' 
					}
				},
				'wobble': {
					'0%, 100%': { 
						transform: 'translateY(0) rotate(0deg)' 
					},
					'25%': { 
						transform: 'translateY(-3px) rotate(-2deg)' 
					},
					'75%': { 
						transform: 'translateY(-3px) rotate(2deg)' 
					}
				},
				'float-orbit': {
					'0%, 100%': { 
						transform: 'translateY(0) translateX(0)', 
						opacity: '0.6' 
					},
					'25%': { 
						transform: 'translateY(-6px) translateX(3px)', 
						opacity: '0.8' 
					},
					'50%': { 
						transform: 'translateY(-8px) translateX(0)', 
						opacity: '1' 
					},
					'75%': { 
						transform: 'translateY(-6px) translateX(-3px)', 
						opacity: '0.8' 
					}
				},
				'glow-pulse': {
					'0%, 100%': { 
						opacity: '0.6', 
						boxShadow: '0 0 10px currentColor' 
					},
					'50%': { 
						opacity: '1', 
						boxShadow: '0 0 20px currentColor, 0 0 30px currentColor' 
					}
				},
				'sweep': {
					'0%': { 
						transform: 'translateX(-100%)', 
						opacity: '0' 
					},
					'50%': { 
						opacity: '1' 
					},
					'100%': { 
						transform: 'translateX(200%)', 
						opacity: '0' 
					}
				},
				'sweep-reverse': {
					'0%': { 
						transform: 'translateX(200%)', 
						opacity: '0' 
					},
					'50%': { 
						opacity: '1' 
					},
					'100%': { 
						transform: 'translateX(-100%)', 
						opacity: '0' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'pulse-premium': 'pulse-premium 2s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
				// Apple animations defined in index.css
				'server-pulse': 'server-pulse 2s ease-in-out infinite',
				'status-light': 'status-light 1.5s ease-in-out infinite',
				'ai-code-pulse': 'ai-code-pulse 2.5s ease-in-out infinite',
				'ai-server-pulse': 'ai-server-pulse 3s ease-in-out infinite',
				'ai-database-scan': 'ai-database-scan 4s ease-in-out infinite',
				'terminal-line': 'terminal-line 2s ease-out forwards',
				'terminal-cursor': 'terminal-cursor 1s ease-in-out infinite',
				'ai-device-premium-glow': 'ai-device-premium-glow 6s ease-in-out infinite',
				'scale-pulse': 'scale-pulse 3s ease-in-out infinite',
				'float-smooth': 'float-smooth 5s ease-in-out infinite',
				'wobble': 'wobble 4s ease-in-out infinite',
				'float-orbit': 'float-orbit 4s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 2.5s ease-in-out infinite',
				'sweep': 'sweep 4s ease-in-out infinite',
				'sweep-reverse': 'sweep-reverse 6s ease-in-out infinite reverse'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
