import { Card } from '@/components/ui/Card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';

const pieData = [
  { name: '火警', value: 4, color: '#fb7185' }, // rose-400
  { name: '故障', value: 2, color: '#fbbf24' }, // amber-400
  { name: '联动', value: 1, color: '#60a5fa' }, // blue-400
  { name: '屏蔽', value: 1, color: '#94a3b8' }, // slate-400
  { name: '其他', value: 1, color: '#a78bfa' }, // violet-400
];

const areaData = [
  { month: '2025-04', fire: 10, fault: 15, linkage: 8, shield: 5, other: 3 },
  { month: '2025-05', fire: 15, fault: 12, linkage: 10, shield: 6, other: 4 },
  { month: '2025-06', fire: 12, fault: 18, linkage: 12, shield: 8, other: 5 },
  { month: '2025-07', fire: 30, fault: 25, linkage: 15, shield: 10, other: 6 },
  { month: '2025-08', fire: 45, fault: 30, linkage: 20, shield: 12, other: 8 },
  { month: '2025-11', fire: 520, fault: 45, linkage: 25, shield: 15, other: 10 },
  { month: '2025-12', fire: 20, fault: 20, linkage: 10, shield: 5, other: 2 },
];

export function RiskChart() {
  return (
    <Card title="风险告警事件统计" className="h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full pb-2">
        {/* Pie Chart */}
        <div className="h-full relative min-h-0 flex flex-col">
          <div className="flex-1 min-h-0 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--tooltip-bg)', borderColor: 'var(--tooltip-border)', color: 'var(--tooltip-text)', borderRadius: '0.75rem', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: 'var(--tooltip-text)', fontWeight: 600 }}
                />
              </PieChart>
            </ResponsiveContainer>
            {/* Center Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
              <div className="text-3xl font-extrabold text-slate-800">9</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">总事件</div>
            </div>
          </div>
          
          {/* Custom Legend */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 pb-2">
            {pieData.map((entry, index) => (
              <div key={index} className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full shadow-sm" style={{ backgroundColor: entry.color }} />
                <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">{entry.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Area Chart */}
        <div className="h-[250px] md:h-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={areaData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorFire" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#fb7185" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#fb7185" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--grid-stroke)" vertical={false} />
              <XAxis 
                dataKey="month" 
                stroke="var(--axis-stroke)" 
                fontSize={10} 
                tickLine={false}
                axisLine={false}
                fontWeight={600}
              />
              <YAxis 
                stroke="var(--axis-stroke)" 
                fontSize={10} 
                tickLine={false}
                axisLine={false}
                fontWeight={600}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: 'var(--tooltip-bg)', borderColor: 'var(--tooltip-border)', color: 'var(--tooltip-text)', borderRadius: '0.75rem', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)' }}
                itemStyle={{ fontWeight: 600 }}
              />
              {/* Fire - Main Area */}
              <Area 
                type="monotone" 
                dataKey="fire" 
                name="火警"
                stroke="#fb7185" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorFire)" 
              />
              {/* Other Lines */}
              <Area type="monotone" dataKey="fault" name="故障" stroke="#fbbf24" strokeWidth={2} fill="none" />
              <Area type="monotone" dataKey="linkage" name="联动" stroke="#60a5fa" strokeWidth={2} fill="none" />
              <Area type="monotone" dataKey="shield" name="屏蔽" stroke="#94a3b8" strokeWidth={2} fill="none" />
              <Area type="monotone" dataKey="other" name="其他" stroke="#a78bfa" strokeWidth={2} fill="none" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}
