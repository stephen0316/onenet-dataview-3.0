import { Card } from '@/components/ui/Card';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AreaBlockProps {
  name: string;
  count: number;
  className?: string;
  children?: ReactNode;
}

function AreaBlock({ name, count, className, children }: AreaBlockProps) {
  return (
    <div className={cn("group/area relative rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md", className)}>
      {children}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max opacity-0 invisible group-hover/area:opacity-100 group-hover/area:visible transition-all duration-200 z-50">
        <div className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 shadow-xl text-xs font-bold text-slate-800 whitespace-nowrap">
          {name}，报警总数：<span className="text-violet-600">{count}</span>
        </div>
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white drop-shadow-sm"></div>
      </div>
    </div>
  );
}

export function AreaStats() {
  return (
    <Card title="分辖区告警情况统计" className="h-full">
      <div className="grid grid-cols-12 gap-3 h-full pb-2">
        {/* 3F */}
        <div className="col-span-4 flex flex-col gap-3 h-full">
          <div className="text-xs font-bold text-slate-500 mb-1 shrink-0 uppercase tracking-wider">3F层</div>
          <AreaBlock name="11_09_05" count={100} className="flex-1 bg-violet-100/80 p-3 hover:bg-violet-200 border border-violet-200/50 min-h-0">
            <span className="text-violet-700 font-extrabold tracking-tight">11_09_05</span>
          </AreaBlock>
          <AreaBlock name="AI竞品对标测试" count={45} className="h-[35%] bg-emerald-100/80 p-3 hover:bg-emerald-200 border border-emerald-200/50 shrink-0">
             <span className="text-emerald-700 font-bold text-xs text-center tracking-tight">AI竞品对标测试</span>
          </AreaBlock>
        </div>

        {/* 2F */}
        <div className="col-span-5 flex flex-col gap-3 h-full">
           <div className="text-xs font-bold text-slate-500 mb-1 shrink-0 uppercase tracking-wider">2F层</div>
           <AreaBlock name="2F层" count={230} className="flex-1 bg-amber-100/80 p-3 hover:bg-amber-200 border border-amber-200/50 min-h-0">
              <span className="text-amber-700 font-extrabold text-lg tracking-tight">2F层</span>
           </AreaBlock>
        </div>

        {/* 1F */}
        <div className="col-span-3 flex flex-col gap-3 h-full">
          <div className="text-xs font-bold text-slate-500 mb-1 shrink-0 uppercase tracking-wider">1F层</div>
          <div className="flex-1 grid grid-cols-2 gap-3 min-h-0">
             <AreaBlock name="test" count={12} className="bg-rose-100/80 p-2 hover:bg-rose-200 border border-rose-200/50">
                <span className="text-rose-700 text-[10px] font-bold tracking-tight">test</span>
             </AreaBlock>
             <AreaBlock name="1F层-服务" count={8} className="bg-rose-50/80 p-2 hover:bg-rose-100 border border-rose-200/50">
                <span className="text-rose-700 text-[10px] font-bold writing-vertical tracking-tight">1F层-服务</span>
             </AreaBlock>
             <AreaBlock name="test111" count={34} className="col-span-2 bg-rose-200/80 p-2 hover:bg-rose-300 border border-rose-300/50">
                <span className="text-rose-800 text-xs font-bold tracking-tight">test111</span>
             </AreaBlock>
          </div>
          <AreaBlock name="1F层-休息区" count={56} className="h-[30%] bg-rose-100/80 p-2 hover:bg-rose-200 border border-rose-200/50 shrink-0">
             <span className="text-rose-700 text-xs text-center font-bold tracking-tight">1F层-休息区</span>
          </AreaBlock>
        </div>
      </div>
    </Card>
  );
}
