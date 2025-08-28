export { useTheme, type Theme } from '../contexts/ThemeContext';

// Additional theme-related utilities
export const getThemeClasses = (isDark: boolean) => ({
  // Background classes
  bg: isDark ? 'bg-black' : 'bg-white',
  bgSecondary: isDark ? 'bg-gray-900' : 'bg-gray-50',
  bgTertiary: isDark ? 'bg-gray-800' : 'bg-gray-100',
  
  // Text classes
  text: isDark ? 'text-white' : 'text-gray-900',
  textSecondary: isDark ? 'text-gray-300' : 'text-gray-600',
  textMuted: isDark ? 'text-gray-400' : 'text-gray-500',
  
  // Border classes
  border: isDark ? 'border-gray-700' : 'border-gray-200',
  borderSecondary: isDark ? 'border-gray-600' : 'border-gray-300',
  
  // Gradient classes
  gradientBg: isDark 
    ? 'from-black via-gray-900 to-black' 
    : 'from-white via-gray-50 to-white',
  gradientText: isDark
    ? 'from-white to-gray-300'
    : 'from-gray-900 to-gray-600',
});

export const getAccentColors = (isDark: boolean) => ({
  primary: 'from-blue-500 to-blue-400', // ScailUp blauw werkt in beide modes
  secondary: isDark 
    ? 'from-purple-500 to-pink-600'
    : 'from-purple-400 to-pink-500',
  success: isDark
    ? 'from-green-500 to-blue-600' 
    : 'from-green-400 to-blue-500',
});