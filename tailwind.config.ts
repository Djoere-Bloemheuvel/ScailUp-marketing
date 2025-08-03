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
				'ai-device-breathe': {
					'0%, 100%': { transform: 'scale(1) translateY(0px)' },
					'50%': { transform: 'scale(1.01) translateY(-2px)' }
				},
				'ai-device-pulse': {
					'0%, 100%': { opacity: '0.95', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.005)' }
				},
				'ai-glossy-sweep': {
					'0%': { transform: 'translateX(-100%)' },
					'50%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'ai-glossy-sweep-right': {
					'0%': { transform: 'translateX(100%)' },
					'50%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				'neural-node-pulse': {
					'0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.1)' }
				},
				'neural-connection-pulse': {
					'0%, 100%': { opacity: '0.3' },
					'50%': { opacity: '0.7' }
				},
				'neural-element-pulse': {
					'0%, 100%': { opacity: '0.6' },
					'50%': { opacity: '1' }
				},
				'neural-icon-pulse': {
					'0%, 100%': { opacity: '0.6', transform: 'rotate(0deg)' },
					'50%': { opacity: '1', transform: 'rotate(2deg)' }
				},
				'neural-icon-breathe': {
					'0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.05)' }
				},
				'neural-status-blink': {
					'0%, 100%': { opacity: '0.4' },
					'50%': { opacity: '1' }
				},
				'neural-data-flow': {
					'0%': { left: '-50%', opacity: '0' },
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { left: '100%', opacity: '0' }
				},
				'neural-core-pulse': {
					'0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.2)' }
				},
				'ai-core-pulse': {
					'0%, 100%': { opacity: '0.9', transform: 'scale(1) rotate(0deg)' },
					'50%': { opacity: '1', transform: 'scale(1.02) rotate(1deg)' }
				},
				'ai-central-pulse': {
					'0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.1)' }
				},
				'ai-element-fade': {
					'0%, 100%': { opacity: '0.8' },
					'50%': { opacity: '1' }
				},
				'ai-eye-breathe': {
					'0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.03)' }
				},
				'ai-device-breathing-glow': {
					'0%, 100%': { opacity: '0.2' },
					'50%': { opacity: '0.35' }
				},
				'chart-neural-pulse': {
					'0%, 100%': { opacity: '0.6', transform: 'scaleY(1)' },
					'50%': { opacity: '1', transform: 'scaleY(1.1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'pulse-premium': 'pulse-premium 2s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
				'apple-fade-in': 'apple-fade-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'apple-glow': 'apple-glow 8s ease-in-out infinite',
				'apple-scroll-pulse': 'apple-scroll-pulse 2s ease-in-out infinite',
				'server-pulse': 'server-pulse 2s ease-in-out infinite',
				'status-light': 'status-light 1.5s ease-in-out infinite',
				'ai-code-pulse': 'ai-code-pulse 2.5s ease-in-out infinite',
				'ai-server-pulse': 'ai-server-pulse 3s ease-in-out infinite',
				'ai-database-scan': 'ai-database-scan 4s ease-in-out infinite',
				'terminal-line': 'terminal-line 2s ease-out forwards',
				'terminal-cursor': 'terminal-cursor 1s ease-in-out infinite',
				'ai-device-premium-glow': 'ai-device-premium-glow 6s ease-in-out infinite',
				'ai-device-breathe': 'ai-device-breathe 6s ease-in-out infinite',
				'ai-device-pulse': 'ai-device-pulse 5s ease-in-out infinite',
				'ai-glossy-sweep': 'ai-glossy-sweep 8s ease-in-out infinite',
				'ai-glossy-sweep-right': 'ai-glossy-sweep-right 8s ease-in-out infinite',
				'neural-node-pulse': 'neural-node-pulse 3s ease-in-out infinite',
				'neural-connection-pulse': 'neural-connection-pulse 4s ease-in-out infinite',
				'neural-element-pulse': 'neural-element-pulse 2.5s ease-in-out infinite',
				'neural-icon-pulse': 'neural-icon-pulse 3.5s ease-in-out infinite',
				'neural-icon-breathe': 'neural-icon-breathe 4s ease-in-out infinite',
				'neural-status-blink': 'neural-status-blink 2s ease-in-out infinite',
				'neural-data-flow': 'neural-data-flow 4s linear infinite',
				'neural-core-pulse': 'neural-core-pulse 2s ease-in-out infinite',
				'ai-core-pulse': 'ai-core-pulse 5s ease-in-out infinite',
				'ai-central-pulse': 'ai-central-pulse 3s ease-in-out infinite',
				'ai-element-fade': 'ai-element-fade 6s ease-in-out infinite',
				'ai-eye-breathe': 'ai-eye-breathe 4s ease-in-out infinite',
				'ai-device-breathing-glow': 'ai-device-breathing-glow 6s ease-in-out infinite',
				'chart-neural-pulse': 'chart-neural-pulse 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
