import { TrendingUp, DollarSign, Users, Target } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: DollarSign,
      value: "$50M+",
      label: "Revenue Generated",
      description: "For our clients in 2024",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Users,
      value: "10M+",
      label: "Followers Gained",
      description: "Across all platforms",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: TrendingUp,
      value: "300%",
      label: "Average Growth",
      description: "In first 6 months",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Target,
      value: "99%",
      label: "Success Rate",
      description: "Client satisfaction",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Results That Speak for{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Themselves
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just promise growth – we deliver measurable results that transform 
            your business and boost your bottom line.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="group relative p-6 rounded-2xl bg-card-gradient border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-3xl sm:text-4xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold text-foreground">
                      {stat.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;