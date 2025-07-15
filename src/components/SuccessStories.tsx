import { useNavigate } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, DollarSign, Calendar, ExternalLink } from "lucide-react";

const SuccessStories = () => {
  const navigate = useNavigate();
  
  const handleContactClick = () => {
    navigate('/contact');
  };
  
  const handleViewCaseStudy = (brandName: string) => {
    // Convert brand name to URL-friendly format (lowercase with hyphens)
    const id = brandName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/case-studies/${id}`);
  };
  const stories = [
    {
      brandName: "Glow Beauty Co.",
      industry: "Beauty & Cosmetics",
      challenge: "Unknown brand with zero social presence",
      solution: "Instagram + TikTok influencer strategy with UGC campaigns",
      timeline: "12 months",
      results: {
        followers: "From 0 to 500K",
        revenue: "$2.8M generated",
        engagement: "18.5% avg rate",
        roi: "850% ROI"
      },
      image: "/placeholder.svg",
      color: "pink"
    },
    {
      brandName: "FitnessPro Equipment",
      industry: "Fitness & Health",
      challenge: "Struggling to compete with big fitness brands",
      solution: "YouTube content marketing + LinkedIn B2B outreach",
      timeline: "8 months",
      results: {
        followers: "From 5K to 200K",
        revenue: "$450K increase",
        engagement: "12.3% avg rate",
        roi: "420% ROI"
      },
      image: "/placeholder.svg",
      color: "blue"
    },
    {
      brandName: "EcoHome Solutions",
      industry: "Sustainable Living",
      challenge: "Niche market with limited awareness",
      solution: "Educational content strategy across all platforms",
      timeline: "10 months",
      results: {
        followers: "From 2K to 150K",
        revenue: "$980K generated",
        engagement: "22.1% avg rate",
        roi: "650% ROI"
      },
      image: "/placeholder.svg",
      color: "green"
    },
    {
      brandName: "TechStartup Hub",
      industry: "B2B SaaS",
      challenge: "No brand recognition in competitive market",
      solution: "LinkedIn thought leadership + Twitter community building",
      timeline: "6 months",
      results: {
        followers: "From 500 to 75K",
        revenue: "$1.2M ARR",
        engagement: "15.8% avg rate",
        roi: "720% ROI"
      },
      image: "/placeholder.svg",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      pink: "from-pink-500 to-rose-600",
      blue: "from-blue-500 to-cyan-600",
      green: "from-green-500 to-emerald-600",
      purple: "from-purple-500 to-violet-600"
    };
    return colorMap[color] || "from-gray-500 to-slate-600";
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Brand Transformation{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From zero to hero - see how we've completely transformed brands across 
            different industries with our strategic social media approach.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <Card 
              key={index}
              className="p-8 bg-card-gradient border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{story.brandName}</h3>
                  <p className="text-muted-foreground text-sm">{story.industry}</p>
                </div>
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getColorClasses(story.color)} flex items-center justify-center`}>
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-red-400 mb-2">Challenge:</h4>
                  <p className="text-sm text-muted-foreground">{story.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400 mb-2">Our Solution:</h4>
                  <p className="text-sm text-muted-foreground">{story.solution}</p>
                </div>
              </div>

              {/* Timeline */}
              <div className="flex items-center space-x-2 mb-6 p-3 rounded-lg bg-primary/10 border border-primary/20">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Timeline: {story.timeline}</span>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 rounded-lg bg-background/50">
                  <Users className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                  <div className="text-sm font-bold text-foreground">{story.results.followers}</div>
                  <div className="text-xs text-muted-foreground">Followers</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-background/50">
                  <DollarSign className="w-5 h-5 text-green-400 mx-auto mb-1" />
                  <div className="text-sm font-bold text-foreground">{story.results.revenue}</div>
                  <div className="text-xs text-muted-foreground">Revenue</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-background/50">
                  <TrendingUp className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                  <div className="text-sm font-bold text-foreground">{story.results.engagement}</div>
                  <div className="text-xs text-muted-foreground">Engagement</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-background/50">
                  <span className="text-orange-400 text-lg font-bold mx-auto mb-1 block">%</span>
                  <div className="text-sm font-bold text-foreground">{story.results.roi}</div>
                  <div className="text-xs text-muted-foreground">ROI</div>
                </div>
              </div>

              {/* CTA */}
              <Button 
                variant="outline" 
                className="w-full group hover:bg-hero-gradient hover:border-transparent hover:text-white"
                onClick={() => handleViewCaseStudy(story.brandName)}
              >
                View Full Case Study
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center p-8 rounded-2xl bg-hero-gradient/10 border border-primary/20 max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Ready to Write Your Success Story?</h3>
              <p className="text-muted-foreground mb-4">
                Join 40+ brands that have transformed their business with our proven strategies.
              </p>
              <Button 
                variant="hero" 
                size="lg"
                onClick={handleContactClick}
                className="cursor-pointer"
              >
                Start Your Transformation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;