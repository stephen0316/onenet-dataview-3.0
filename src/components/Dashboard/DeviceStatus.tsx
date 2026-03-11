import { Card } from '@/components/ui/Card';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: '警告', value: 3, color: '#fb7185' }, // rose-400
  { name: '故障', value: 2, color: '#fbbf24' }, // amber-400
  { name: '联动', value: 0, color: '#a78bfa' }, // violet-400
  { name: '反馈', value: 0, color: '#34d399' }, // emerald-400
];

const total = data.reduce((sum, item) => sum + item.value, 0);
const chartData = data.filter(d => d.value > 0);

export function DeviceStatus() {
  return (
    <Card title="设备状态" className="h-full flex flex-col">
      <div className="flex-1 flex items-center gap-6 min-h-0 p-4">
        
        {/* Left: Graphical Ring Chart */}
        <div className="w-[45%] h-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData.length > 0 ? chartData : [{ value: 1, color: '#e2e8f0' }]}
                cx="50%"
                cy="50%"
                innerRadius="70%"
                outerRadius="90%"
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {(chartData.length > 0 ? chartData : [{ value: 1, color: '#e2e8f0' }]).map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none">
            <div className="text-4xl font-extrabold text-slate-800 leading-none">{total}</div>
            <div className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">部件总数</div>
          </div>
        </div>

        {/* Right: Graphical Bars */}
        <div className="w-[55%] flex flex-col justify-center gap-4">
          {data.map((item, i) => {
            const percentage = total > 0 ? (item.value / total) * 100 : 0;
            return (
              <div key={i} className="flex flex-col gap-1.5">
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ backgroundColor: item.color }} />
                    <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">{item.name}</span>
                  </div>
                  <span className="text-sm font-extrabold text-slate-800 leading-none">{item.value}</span>
                </div>
                {/* Graphical Progress Bar */}
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                  <div 
                    className="h-full rounded-full transition-all duration-500"
                    style={{ 
                      width: `${percentage}%`, 
                      backgroundColor: item.color,
                    }} 
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </Card>
  );
}
