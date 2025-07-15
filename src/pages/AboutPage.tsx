import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Zap, Award, TrendingUp, Heart } from "lucide-react";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "CEO & Founder",
      experience: "10+ years in digital marketing",
      specialty: "Growth Strategy & Brand Development",
      image: "/placeholder.svg"
    },
    {
      name: "Sarah Chen",
      role: "Head of Strategy",
      experience: "8+ years in social media",
      specialty: "Content Strategy & Influencer Relations",
      image: "/placeholder.svg"
    },
    {
      name: "Marcus Johnson",
      role: "Creative Director",
      experience: "12+ years in advertising",
      specialty: "Visual Storytelling & Campaign Design",
      image: "/placeholder.svg"
    },
    {
      name: "Emily Rodriguez",
      role: "Analytics Lead",
      experience: "7+ years in data science",
      specialty: "Performance Analytics & ROI Optimization",
      image: "/placeholder.svg"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every strategy we develop is focused on delivering measurable results and ROI for our clients."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "We treat every client's success as our own, providing personalized attention and dedicated support."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay ahead of social media trends and leverage cutting-edge tools to give our clients an edge."
    },
    {
      icon: Heart,
      title: "Transparency",
      description: "Clear communication, honest reporting, and open collaboration are at the heart of our relationships."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            About Advernics
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We're not just another social media agency. We're growth partners dedicated 
            to transforming your brand's digital presence into a revenue-generating powerhouse.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Our <span className="bg-hero-gradient bg-clip-text text-transparent">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2025, Advernics started with a simple mission: help businesses 
                  harness the true power of social media to drive real growth and revenue.
                </p>
                <p>
                  What began as a small team of passionate marketers has grown into a full-service 
                  digital agency that has helped over 40 brands achieve extraordinary results. 
                  We've generated over $2M in revenue for our clients and built a reputation 
                  for delivering results that exceed expectations.
                </p>
                <p>
                  Today, we're proud to be a growing social media agency, 
                  known for our innovative strategies, transparent communication, and 
                  unwavering commitment to our clients' success.
                </p>
              </div>
            </div>
            <Card className="p-8 bg-card-gradient border-white/10">
              <h3 className="text-xl font-bold mb-6">Our Achievements</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">40+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">$2M+</div>
                  <div className="text-sm text-muted-foreground">Revenue Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">1M+</div>
                  <div className="text-sm text-muted-foreground">Followers Gained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">99%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our <span className="bg-hero-gradient bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-6 text-center bg-card-gradient border-white/10 hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-full bg-hero-gradient flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Meet Our <span className="bg-hero-gradient bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The brilliant minds behind your social media success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 text-center bg-card-gradient border-white/10 hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 rounded-full bg-hero-gradient mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-2">{member.experience}</p>
                <p className="text-xs text-muted-foreground">{member.specialty}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Join Our <span className="bg-hero-gradient bg-clip-text text-transparent">Success Stories?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can transform your social media presence and drive real results for your business.
          </p>
          <Button variant="hero" size="xl">
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;