import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowRight, FileText, Zap, Brain, Target, Bot, TrendingUp, Rocket } from 'lucide-react';
import Fuse from 'fuse.js';

// Types
interface SearchItem {
  title: string;
  description: string;
  url: string;
  type: 'artikel' | 'pillar';
  pillar: string;
  tags?: string[];
}

// Icons mapping
const pillarIcons = {
  'ai-automatisering': Zap,
  'custom-ai-saas': Brain,
  'ai-consultancy': Target,
  'autonomous-agents': Bot,
  'ai-marketing-sales': TrendingUp,
  'ai-implementation': Rocket
};

const KenniscentrumSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [searchData, setSearchData] = useState<SearchItem[]>([]);
  const [fuse, setFuse] = useState<Fuse<SearchItem> | null>(null);
  
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize search data
  useEffect(() => {
    const initializeSearch = async () => {
      try {
        // Fetch search data from API
        const response = await fetch('/api/search-data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch search data');
        }
        
        const data = await response.json();
        setSearchData(data);

        // Initialize Fuse.js
        const fuseOptions = {
          keys: [
            { name: 'title', weight: 0.4 },
            { name: 'description', weight: 0.3 },
            { name: 'tags', weight: 0.2 },
            { name: 'pillar', weight: 0.1 }
          ],
          threshold: 0.3,
          includeScore: true,
          minMatchCharLength: 2
        };

        const fuseInstance = new Fuse(data, fuseOptions);
        setFuse(fuseInstance);
      } catch (error) {
        console.error('Error initializing search:', error);
      }
    };

    initializeSearch();
  }, []);

  // Handle search
  useEffect(() => {
    if (!fuse || query.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const searchResults = fuse.search(query);
    const items = searchResults.slice(0, 6).map(result => result.item);
    setResults(items);
    setIsOpen(items.length > 0);
    setSelectedIndex(-1);
  }, [query, fuse]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();  
          setSelectedIndex(prev => Math.max(prev - 1, -1));
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0 && results[selectedIndex]) {
            window.location.href = results[selectedIndex].url;
          }
          break;
        case 'Escape':
          setIsOpen(false);
          setSelectedIndex(-1);
          inputRef.current?.blur();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, results]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleResultClick = (item: SearchItem) => {
    window.location.href = item.url;
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-sm sm:max-w-md mx-auto transform transition-all duration-700 ease-out hover:scale-[1.02]">
      {/* Ambient light glow */}
      <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/40 to-purple-600/40 rounded-2xl blur-xl opacity-75"></div>
      <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500/60 to-purple-600/60 rounded-xl blur-lg opacity-50"></div>
      
      {/* Gradient border wrapper */}
      <div className="relative border-0 bg-gradient-to-r from-blue-500/70 to-purple-600/70 p-[1px] rounded-xl">
        <div className="bg-black rounded-xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search resources..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => query.length >= 2 && results.length > 0 && setIsOpen(true)}
              className="w-full pl-12 pr-4 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm"
            />
          </div>
        </div>
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full overflow-hidden" style={{zIndex: 9999}}>
          {/* Ambient glow for dropdown */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-2xl blur-xl opacity-60"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/40 to-purple-600/40 rounded-xl blur-lg opacity-40"></div>
          
          {/* Gradient border wrapper for dropdown */}
          <div className="relative border-0 bg-gradient-to-r from-blue-500/60 to-purple-600/60 p-[1px] rounded-xl">
            <div className="bg-gray-900/98 backdrop-blur-2xl rounded-xl shadow-2xl">
              {results.map((item, index) => {
                const IconComponent = item.type === 'pillar' 
                  ? pillarIcons[item.pillar as keyof typeof pillarIcons] || FileText
                  : FileText;
                
                return (
                  <div
                    key={`${item.type}-${item.url}`}
                    onClick={() => handleResultClick(item)}
                    className={`px-5 py-4 cursor-pointer transition-all duration-300 ease-out border-b border-gray-800/50 last:border-b-0 group ${
                      index === selectedIndex 
                        ? 'bg-gradient-to-r from-blue-500/20 to-purple-600/20 border-l-2 border-l-blue-400' 
                        : 'hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-600/10 hover:scale-[1.01]'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 border rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 ${
                        index === selectedIndex 
                          ? 'bg-gradient-to-r from-blue-500/30 to-purple-600/30 border-blue-400/50' 
                          : 'bg-gray-800/80 border-gray-700/50 group-hover:bg-gray-700/80 group-hover:border-gray-600/50'
                      }`}>
                        <IconComponent className={`w-5 h-5 transition-colors duration-300 ${
                          index === selectedIndex ? 'text-blue-300' : 'text-gray-400 group-hover:text-gray-300'
                        }`} />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className={`text-sm font-semibold truncate transition-colors duration-300 ${
                            index === selectedIndex ? 'text-white' : 'text-gray-100 group-hover:text-white'
                          }`}>
                            {item.title}
                          </h4>
                          <span className={`px-2.5 py-1 text-xs font-medium rounded-full flex-shrink-0 transition-all duration-300 ${
                            item.type === 'pillar' 
                              ? index === selectedIndex 
                                ? 'bg-blue-400/30 text-blue-200 border border-blue-400/30'
                                : 'bg-blue-500/20 text-blue-300 group-hover:bg-blue-400/25'
                              : index === selectedIndex
                                ? 'bg-gray-600/50 text-gray-200 border border-gray-500/30'
                                : 'bg-gray-700/50 text-gray-300 group-hover:bg-gray-600/50'
                          }`}>
                            {item.type === 'pillar' ? 'Pillar' : 'Artikel'}
                          </span>
                        </div>
                        
                        <p className={`text-xs line-clamp-2 leading-relaxed transition-colors duration-300 ${
                          index === selectedIndex ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300'
                        }`}>
                          {item.description}
                        </p>
                      </div>
                      
                      <ArrowRight className={`w-5 h-5 flex-shrink-0 mt-1 transition-all duration-300 ${
                        index === selectedIndex 
                          ? 'text-blue-400 transform translate-x-1' 
                          : 'text-gray-500 group-hover:text-gray-400 group-hover:transform group-hover:translate-x-0.5'
                      }`} />
                    </div>
                  </div>
                );
              })}
              
              <div className="px-5 py-3 bg-gradient-to-r from-gray-800/40 to-gray-700/40 border-t border-gray-700/50">
                <p className="text-xs text-gray-400 text-center font-medium">
                  Use <span className="text-blue-400">↑↓</span> to navigate, <span className="text-blue-400">Enter</span> to select, <span className="text-blue-400">Esc</span> to close
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KenniscentrumSearch;