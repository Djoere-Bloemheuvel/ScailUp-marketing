import React from 'react';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ArticleCardProps {
  title: string;
  description: string;
  author: string;
  publishDate: Date;
  category: string;
  tags: string[];
  readingTime?: number;
  image?: {
    src: string;
    alt: string;
  };
  featured?: boolean;
  slug: string;
}

const categoryLabels = {
  'deep-dive': 'Deep Dive',
  'how-to': 'How-To Guide',
  'case-study': 'Case Study',
  'comparison': 'Comparison',
  'trends': 'Trends',
  'beginner-guide': 'Beginner Guide'
};

const categoryColors = {
  'deep-dive': 'bg-blue-100 text-blue-600 border-blue-200',
  'how-to': 'bg-green-100 text-green-600 border-green-200',
  'case-study': 'bg-purple-100 text-purple-600 border-purple-200',
  'comparison': 'bg-orange-100 text-orange-600 border-orange-200',
  'trends': 'bg-cyan-100 text-cyan-600 border-cyan-200',
  'beginner-guide': 'bg-yellow-100 text-yellow-600 border-yellow-200'
};

export const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  author,
  publishDate,
  category,
  tags,
  readingTime,
  image,
  featured = false,
  slug
}) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('nl-NL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <Card className={`group bg-white border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-200 overflow-hidden ${
      featured ? 'ring-1 ring-gray-200' : ''
    }`}>
      {featured && (
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-black text-white px-2 py-1 text-xs font-medium rounded">
            Featured
          </Badge>
        </div>
      )}

      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image.src} 
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <CardContent className="p-6">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Badge 
            variant="outline" 
            className="text-xs px-2 py-1 bg-gray-100 text-gray-600 border-gray-200 rounded font-medium"
          >
            {categoryLabels[category as keyof typeof categoryLabels]}
          </Badge>
          
          {tags.slice(0, 1).map((tag, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="text-xs px-2 py-1 bg-gray-50 text-gray-500 border-gray-100 rounded font-medium"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <h3 className="text-lg font-medium text-black mb-3 line-clamp-2 group-hover:text-gray-600 transition-colors duration-200 leading-snug">
          {title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <User className="w-3 h-3 mr-1" />
              {author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              {formatDate(publishDate)}
            </div>
            {readingTime && (
              <div className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {readingTime} min
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center text-black group-hover:text-gray-600 transition-colors duration-200">
          <span className="text-sm font-medium">Lees artikel</span>
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </CardContent>
    </Card>
  );
};