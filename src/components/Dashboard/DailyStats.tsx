import { Card } from '@/components/ui/Card';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export function DailyStats() {
  const repairData = [
    { name: '未关闭', value: 0, color: '#fbbf24' }, // amber-400
    { name: '已关闭', value: 1, color: '#34d399' }, // emerald-400
  ];

  return (
    <Card title="今日运营数据" className="h-full flex flex-col">
      <div className="flex-1 flex flex-col justify-between gap-3 px-3 pt-3 pb-5 min-h-0 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
        
        {/* Section 1: Abnormal Stats */}
        <div className="space-y-3 shrink-0">
          <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2">
            <span className="w-1 h-3 bg-rose-500 rounded-full"></span>
            异常概览
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {/* Fire */}
            <div className="group/fire relative bg-rose-50 border border-rose-100 rounded-lg p-3 cursor-pointer hover:bg-rose-100 transition-colors shadow-sm">
              <div className="text-xs font-semibold text-rose-600 mb-1 uppercase tracking-wider">火警</div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-extrabold text-rose-600">0</span>
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max opacity-0 invisible group-hover/fire:opacity-100 group-hover/fire:visible transition-all duration-200 z-50">
                <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-xl">
                  <div className="flex gap-5 text-sm">
                    <div>
                      <span className="text-slate-500">未处理: </span>
                      <span className="text-rose-600 font-bold">0</span>
                    </div>
                    <div>
                      <span className="text-slate-500">已处理: </span>
                      <span className="text-slate-800 font-bold">0</span>
                    </div>
                  </div>
                </div>
                {/* Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white drop-shadow-sm"></div>
              </div>
            </div>
            {/* Fault */}
            <div className="group/fault relative bg-amber-50 border border-amber-100 rounded-lg p-3 cursor-pointer hover:bg-amber-100 transition-colors shadow-sm">
              <div className="text-xs font-semibold text-amber-600 mb-1 uppercase tracking-wider">故障</div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-extrabold text-amber-600">0</span>
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max opacity-0 invisible group-hover/fault:opacity-100 group-hover/fault:visible transition-all duration-200 z-50">
                <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-xl">
                  <div className="flex gap-5 text-sm">
                    <div>
                      <span className="text-slate-500">未处理: </span>
                      <span className="text-amber-600 font-bold">0</span>
                    </div>
                    <div>
                      <span className="text-slate-500">已处理: </span>
                      <span className="text-slate-800 font-bold">0</span>
                    </div>
                  </div>
                </div>
                {/* Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white drop-shadow-sm"></div>
              </div>
            </div>
            {/* Other */}
            <div className="group/other relative bg-violet-50 border border-violet-100 rounded-lg p-3 col-span-2 flex justify-between items-center cursor-pointer hover:bg-violet-100 transition-colors shadow-sm">
              <div className="text-xs font-semibold text-violet-600 uppercase tracking-wider">其他异常</div>
              <div className="text-xl font-extrabold text-violet-600">0</div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max opacity-0 invisible group-hover/other:opacity-100 group-hover/other:visible transition-all duration-200 z-50">
                <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-xl">
                  <div className="flex gap-5 text-sm">
                    <div>
                      <span className="text-slate-500">联动: </span>
                      <span className="text-violet-600 font-bold">0</span>
                    </div>
                    <div>
                      <span className="text-slate-500">反馈: </span>
                      <span className="text-violet-600 font-bold">0</span>
                    </div>
                    <div>
                      <span className="text-slate-500">屏蔽: </span>
                      <span className="text-violet-600 font-bold">0</span>
                    </div>
                    <div>
                      <span className="text-slate-500">监管: </span>
                      <span className="text-violet-600 font-bold">0</span>
                    </div>
                  </div>
                </div>
                {/* Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white drop-shadow-sm"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-slate-200 w-full shrink-0" />

        {/* Section 2: Repair Stats */}
        <div className="shrink-0">
          <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-2">
            <span className="w-1 h-3 bg-amber-500 rounded-full"></span>
            维修报修
          </h4>
          <div className="flex items-center h-[90px]">
            <div className="w-1/2 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-sm" />
                <div className="text-sm text-slate-600 font-medium">未关闭 <span className="text-slate-800 font-bold ml-2">0</span></div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm" />
                <div className="text-sm text-slate-600 font-medium">已关闭 <span className="text-slate-800 font-bold ml-2">0</span></div>
              </div>
            </div>
            <div className="w-1/2 h-full relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={repairData}
                    cx="50%"
                    cy="50%"
                    innerRadius={25}
                    outerRadius={40}
                    paddingAngle={5}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                  >
                    {repairData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-lg font-extrabold text-slate-800">0</div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-slate-200 w-full shrink-0" />

        {/* Section 3: Patrol Stats */}
        <div className="flex-1 min-h-0 flex flex-col gap-2 relative -top-1">
          <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2 shrink-0">
            <span className="w-1 h-3 bg-emerald-500 rounded-full"></span>
            巡查检查
          </h4>
          
          <div className="flex-1 flex flex-col justify-between gap-2">
            {/* Route Progress */}
            <div className="bg-slate-50 rounded p-2.5 border border-slate-100">
              <div className="flex justify-between text-xs mb-1.5 font-medium">
                <span className="text-slate-500">巡查路线</span>
                <span className="text-slate-800 font-bold">0 / 4</span>
              </div>
              <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-violet-400 w-[0%] rounded-full"></div>
              </div>
            </div>

            {/* Points Progress */}
            <div className="bg-slate-50 rounded p-2.5 border border-slate-100">
              <div className="flex justify-between text-xs mb-1.5 font-medium">
                <span className="text-slate-500">巡查点位</span>
                <span className="text-slate-800 font-bold">0 / 5</span>
              </div>
              <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-violet-400 w-[0%] rounded-full"></div>
              </div>
            </div>

            {/* Check Status */}
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-2 bg-emerald-50 rounded border border-emerald-100 shadow-sm">
                <div className="text-xs font-semibold text-emerald-600 mb-0.5 uppercase tracking-wider">正常</div>
                <div className="font-extrabold text-emerald-600 text-lg">0</div>
              </div>
              <div className="text-center p-2 bg-rose-50 rounded border border-rose-100 shadow-sm">
                <div className="text-xs font-semibold text-rose-600 mb-0.5 uppercase tracking-wider">异常</div>
                <div className="font-extrabold text-rose-600 text-lg">0</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Card>
  );
}
