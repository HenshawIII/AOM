interface StatItem {
  number: string;
  description: string;
}

interface StatsProps {
  stats: StatItem[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="py-16 relative" >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#f5f7f0] to-white/50 shadow-[0_0_10px_0_rgba(0,0,0,0.1)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              {/* Vertical Divider - only show between items on desktop */}
              {index > 0 && (
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gray-300"></div>
              )}
              
              <div className={`text-center ${index > 0 ? 'md:pl-8' : ''}`}>
                {/* Large Number */}
                <div className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                  {stat.number}
                </div>
                
                {/* Description Text */}
                <p className="text-xs md:text-sm font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

