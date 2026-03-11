import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  action?: React.ReactNode;
  noPadding?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ className, title, action, children, noPadding = false, ...props }) => {
  return (
    <div 
      className={cn(
        "relative flex flex-col bg-white/70 border border-white/50 backdrop-blur-md rounded-xl shadow-sm transition-all duration-300 text-slate-800",
        "hover:shadow-md hover:bg-white/80",
        "group",
        className
      )} 
      {...props}
    >
      {(title || action) && (
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200/50 bg-white/40 rounded-t-xl">
          {title && (
            <h3 className="text-sm font-bold text-slate-800 tracking-wide flex items-center gap-2">
              <span className="w-1 h-3 bg-violet-500 rounded-full inline-block" />
              {title}
            </h3>
          )}
          {action && <div>{action}</div>}
        </div>
      )}
      <div className={cn("flex-1 flex flex-col min-h-0", !noPadding && "p-4")}>
        {children}
      </div>
    </div>
  );
}
