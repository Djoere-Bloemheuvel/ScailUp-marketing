n m>import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowRight, FileText, Zap, Brain, Target, Bot, TrendingUp, Rocket } from 'lucide-react';
import Fuse from 'fuse.js';

// Types
interface SearchItem {
  title: string;
  description: string;
  url: string;
  type: 'artikel' | 'pillar' | 'cluster';
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
    const items = searchResults.slice(0, 10).map(result => result.item);
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
    <div ref={searchRef} className="relative w-full max-w-sm sm:max-w-md mx-auto" style={{zIndex: 1000}}>
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
        <div className="absolute top-full w-full" style={{zIndex: 999999, position: 'absolute'}}>
          <div className="bg-black border border-gray-800/50 rounded-xl shadow-2xl max-h-80 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-700/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border [&::-webkit-scrollbar-thumb]:border-gray-600/30 hover:[&::-webkit-scrollbar-thumb]:bg-gray-600/70">
                {results.map((item, index) => {
                  const IconComponent = item.type === 'pillar' 
                    ? pillarIcons[item.pillar as keyof typeof pillarIcons] || FileText
                    : FileText;
                  
                  return (
                    <div
                      key={`${item.type}-${item.url}`}
                      onClick={() => handleResultClick(item)}
                      className={`px-4 py-3 cursor-pointer transition-colors duration-150 border-b border-gray-800/30 last:border-b-0 group ${
                        index === selectedIndex 
                          ? 'bg-gray-800/50' 
                          : 'hover:bg-gray-800/30'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <h4 className={`font-medium text-sm mb-1 transition-colors duration-150 ${
                            index === selectedIndex ? 'text-white' : 'text-gray-100 group-hover:text-white'
                          }`}>
                            {item.title}
                          </h4>
                          
                          <p className={`text-xs leading-relaxed transition-colors duration-150 line-clamp-2 ${
                            index === selectedIndex ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300'
                          }`}>
                            {item.description}
                          </p>
                        </div>
                        
                        <div className="flex items-start gap-2 flex-shrink-0 mt-0.5">
                          <span className={`px-2 py-0.5 text-xs font-medium rounded ${
                            item.type === 'pillar' 
                              ? 'bg-blue-500/15 text-blue-300'
                              : item.type === 'cluster'
                              ? 'bg-purple-500/15 text-purple-300' 
                              : 'bg-gray-700/30 text-gray-400'
                          }`}>
                            {item.type === 'pillar' ? 'Pillar' : item.type === 'cluster' ? 'Cluster' : 'Artikel'}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      )}
    </div>
  );
};

export default KenniscentrumSearch;