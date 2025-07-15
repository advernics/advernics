import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { caseStudies } from "@/data/caseStudies";

const CaseStudiesListPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Success Stories
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover how we've helped businesses like yours achieve remarkable growth through strategic social media marketing.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-card border border-white/10 rounded-xl overflow-hidden flex flex-col">
                <div className="p-6">
                  <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full bg-${study.color}-500/10 text-${study.color}-400 mb-4`}>
                    {study.industry}
                  </span>
                  <h2 className="text-2xl font-bold mb-3">{study.brandName}</h2>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {study.challenge}
                  </p>
                </div>
                <div className="mt-auto p-6 bg-card-gradient border-t border-white/10">
                  <Link to={`/case-studies/${study.id}`}>
                    <Button variant="outline" className="w-full">
                      Read Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesListPage;
