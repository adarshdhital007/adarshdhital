import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import Tag from './Tag';

export interface BookCardProps {
  title: string;
  author: string;
  cover: string;
  description: string;
  rating?: number;
  progress?: number;
  categories: string[];
  link?: string;
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  author,
  cover,
  description,
  rating,
  progress,
  categories
}) => {
  return (
    <div className="flex flex-col bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-100 dark:border-neutral-700">
      <div className="flex items-center px-5 pt-5">
        {/* Cover image with aspect ratio control */}
        <div className="w-24 h-36 md:w-28 md:h-42 flex-shrink-0 rounded-md overflow-hidden shadow-sm relative bg-neutral-100 dark:bg-neutral-700">
          {cover ? (
            <Image
              src={cover}
              alt={`Cover of ${title}`}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 96px, 112px"
              className="rounded-md"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-neutral-400 dark:text-neutral-500 text-sm">No Cover</span>
            </div>
          )}
        </div>
        
        {/* Book details */}
        <div className="ml-4 flex-1">
          <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">{title}</h3>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm">by {author}</p>
          
          {/* Rating or progress indicator */}
          {rating && (
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14}
                    className={`${i < Math.round(rating) 
                      ? 'text-yellow-500 fill-yellow-500' 
                      : 'text-neutral-300 dark:text-neutral-600'}`} 
                  />
                ))}
              </div>
              <span className="ml-1 text-sm text-neutral-500 dark:text-neutral-400">
                {rating.toFixed(1)}
              </span>
            </div>
          )}
          
          {progress !== undefined && (
            <div className="mt-2">
              <div className="h-2 w-full bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-xs mt-1 text-neutral-500 dark:text-neutral-400">{progress}% complete</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Description */}
      <div className="px-5 pt-4 pb-2">
        <p className="text-neutral-600 dark:text-neutral-300 text-sm line-clamp-3">{description}</p>
      </div>
      
      {/* Categories */}
      <div className="px-5 pb-5 pt-1 mt-auto">
        <div className="flex flex-wrap gap-1">
          {categories.map((category) => (
            <Tag key={category} color="neutral" variant="subtle" size="sm">
              {category}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCard; 