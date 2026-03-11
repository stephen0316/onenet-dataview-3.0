import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { LogOut, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="relative z-10 flex items-center justify-between px-6 py-4 bg-white/60 backdrop-blur-lg border-b border-white/50 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="text-slate-500 font-mono text-sm tracking-wider font-medium">
          {format(time, 'yyyy-MM-dd HH:mm:ss')}
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 tracking-tight flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-violet-600" />
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-100/80 hover:bg-slate-200 text-slate-700 rounded-lg transition-all text-sm font-semibold shadow-sm border border-slate-200/50">
          <LogOut size={16} />
          退出
        </button>
      </div>
    </header>
  );
}
