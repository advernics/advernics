import { Link } from "react-router-dom";
import { Check, Briefcase, Users, Zap, Heart, BarChart2, DollarSign, Clock, Globe, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const CareersPage = () => {
  const openPositions = [
    {
      id: 1,
      title: "Senior Social Media Manager",
      type: "Full-time",
      location: "London, UK (Remote)",
      department: "Marketing"
    },
    {
      id: 2,
      title: "Content Creator & Strategist",
      type: "Full-time",
      location: "London, UK (Hybrid)",
      department: "Content"
    },
    {
      id: 3,
      title: "Digital Marketing Intern",
      type: "Internship",
      location: "Remote",
      department: "Marketing"
    }
  ];

  const benefits = [
    { icon: <DollarSign className="w-6 h-6 text-primary" />, title: "Competitive Salary", description: "Industry-competitive compensation package" },
    { icon: <Clock className="w-6 h-6 text-primary" />, title: "Flexible Hours", description: "Work when you're most productive" },
    { icon: <Globe className="w-6 h-6 text-primary" />, title: "Remote Work", description: "Work from anywhere in the world" },
    { icon: <Award className="w-6 h-6 text-primary" />, title: "Career Growth", description: "Clear paths for advancement" },
    { icon: <Users className="w-6 h-6 text-primary" />, title: "Team Events", description: "Regular team building activities" },
    { icon: <Heart className="w-6 h-6 text-primary" />, title: "Health Benefits", description: "Comprehensive health coverage" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Help us shape the future of social media marketing while growing your career
            in an innovative and supportive environment.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Join Advernics?</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We're building a team of passionate individuals who are excited about transforming social media marketing through innovation and creativity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl border border-white/10">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Meaningful Work</h3>
              <p className="text-muted-foreground">
                Work on challenging projects that make a real impact for our clients and their audiences.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl border border-white/10">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast-Paced Growth</h3>
              <p className="text-muted-foreground">
                Be part of a rapidly growing company with endless opportunities for professional development.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl border border-white/10">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Great Team</h3>
              <p className="text-muted-foreground">
                Collaborate with talented, passionate people who love what they do and support each other's growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Check out our current job openings and find your perfect fit at Advernics.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {openPositions.map((position) => (
              <div key={position.id} className="bg-card p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1.5" />
                        {position.type}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1.5" />
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <BarChart2 className="w-4 h-4 mr-1.5" />
                        {position.department}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" className="mt-4 md:mt-0">
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see a role that fits your skills? We're always looking for talented individuals.
            </p>
            <Button variant="outline">
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Benefits</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We take care of our team with a comprehensive benefits package and a great work environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-card rounded-lg border border-white/10">
                <div className="flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Join Our Team?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about social media and digital marketing.
            Take the first step toward an exciting career at Advernics.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              View Open Positions
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;
