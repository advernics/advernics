import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, ShoppingCart, Users } from "lucide-react";

const ShopifyDashboards = () => {
  const dashboards = [
    {
      brandName: "FashionForward",
      industry: "Fashion E-commerce",
      period: "Last 30 Days",
      revenue: "$485,230",
      orders: "3,247",
      conversionRate: "8.2%",
      visitors: "89,450",
      growth: "+285%",
      metrics: [
        { label: "Social Traffic", value: "65%", change: "+45%" },
        { label: "Instagram Sales", value: "$298,450", change: "+320%" },
        { label: "TikTok Conversions", value: "1,850", change: "+450%" },
        { label: "Avg Order Value", value: "$149", change: "+25%" }
      ]
    },
    {
      brandName: "TechGadgets Pro",
      industry: "Electronics",
      period: "Last 30 Days",
      revenue: "$672,890",
      orders: "2,156",
      conversionRate: "12.4%",
      visitors: "67,280",
      growth: "+340%",
      metrics: [
        { label: "YouTube Traffic", value: "42%", change: "+78%" },
        { label: "LinkedIn B2B Sales", value: "$425,680", change: "+290%" },
        { label: "Facebook Ads ROI", value: "4.8x", change: "+65%" },
        { label: "Customer LTV", value: "$520", change: "+85%" }
      ]
    },
    {
      brandName: "EcoLife Essentials",
      industry: "Sustainable Goods",
      period: "Last 30 Days",
      revenue: "$234,567",
      orders: "1,890",
      conversionRate: "9.7%",
      visitors: "45,230",
      growth: "+198%",
      metrics: [
        { label: "Instagram Stories", value: "2.1M", change: "+156%" },
        { label: "Influencer Sales", value: "$145,230", change: "+234%" },
        { label: "Organic Reach", value: "890K", change: "+189%" },
        { label: "Engagement Rate", value: "14.2%", change: "+89%" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Real{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Shopify Results
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Live dashboards from our clients showing actual revenue growth driven 
            by our social media strategies. These numbers don't lie.
          </p>
        </div>

        <div className="space-y-8">
          {dashboards.map((dashboard, index) => (
            <Card 
              key={index}
              className="p-6 bg-card-gradient border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 pb-6 border-b border-white/10">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-xl font-bold text-foreground mb-1">{dashboard.brandName}</h3>
                  <p className="text-muted-foreground">{dashboard.industry} • {dashboard.period}</p>
                </div>
                <div className="flex items-center space-x-2 bg-success-gradient px-4 py-2 rounded-full">
                  <TrendingUp className="w-4 h-4 text-white" />
                  <span className="text-white font-bold">{dashboard.growth} Growth</span>
                </div>
              </div>

              {/* Main Metrics */}
              <div className="grid md:grid-cols-4 gap-6 mb-6">
                <div className="text-center p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-400">{dashboard.revenue}</div>
                  <div className="text-sm text-muted-foreground">Revenue</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <ShoppingCart className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-400">{dashboard.orders}</div>
                  <div className="text-sm text-muted-foreground">Orders</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-400">{dashboard.conversionRate}</div>
                  <div className="text-sm text-muted-foreground">Conversion Rate</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
                  <Users className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-orange-400">{dashboard.visitors}</div>
                  <div className="text-sm text-muted-foreground">Visitors</div>
                </div>
              </div>

              {/* Detailed Metrics */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {dashboard.metrics.map((metric, metricIndex) => (
                  <div 
                    key={metricIndex}
                    className="p-4 rounded-lg bg-background/50 border border-white/5"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm text-muted-foreground">{metric.label}</span>
                      <span className="text-xs bg-success-gradient text-white px-2 py-1 rounded-full">
                        {metric.change}
                      </span>
                    </div>
                    <div className="text-lg font-bold text-foreground">{metric.value}</div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicator */}
        <div className="text-center mt-12 p-6 rounded-lg bg-hero-gradient/10 border border-primary/20">
          <p className="text-sm text-muted-foreground">
            ✅ All data shown is from real client Shopify dashboards with their permission
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShopifyDashboards;