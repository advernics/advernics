import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Quote } from "lucide-react";
import { useNavigate } from 'react-router-dom';

import { caseStudies } from '@/data/caseStudies';

const colorMap: { [key: string]: string } = {
  pink: 'bg-pink-50 dark:bg-pink-900/20',
  blue: 'bg-blue-50 dark:bg-blue-900/20',
  green: 'bg-green-50 dark:bg-green-900/20',
};

const CaseStudyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const caseStudy = caseStudies.find(study => study.id === id);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-muted-foreground mb-8">The requested case study could not be found.</p>
          <Button onClick={() => navigate('/')} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Button 
          onClick={() => window.history.back()} 
          variant="ghost" 
          className="mb-8 hover:bg-accent/50"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Case Studies
        </Button>
      </div>

      {/* Hero Section */}
            <div className={`${colorMap[caseStudy.color] || 'bg-gray-50 dark:bg-gray-900/20'} py-16`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-accent/10 text-accent-foreground mb-4">
              {caseStudy.industry}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{caseStudy.brandName} Case Study</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How we helped {caseStudy.brandName} achieve outstanding results through strategic social media marketing.
            </p>
          </div>
        </div>
      </div>

      {/* Case Study Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <p className="text-muted-foreground mb-12 whitespace-pre-line">
              {caseStudy.challenge}
            </p>

            <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
            <p className="text-muted-foreground mb-12 whitespace-pre-line">
              {caseStudy.solution}
            </p>

            <div className="bg-accent/10 p-6 rounded-lg mb-12">
              <Quote className="text-muted-foreground/30 w-8 h-8 mb-4" />
              <p className="text-lg italic mb-4">"{caseStudy.testimonial.text}"</p>
              <div>
                <p className="font-medium">{caseStudy.testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{caseStudy.testimonial.role}</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="sticky top-8">
              <div className="bg-card p-6 rounded-xl shadow-sm border">
                <h3 className="font-semibold mb-4">Results at a Glance</h3>
                <div className="space-y-4">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="pb-4 border-b border-border/50 last:border-0 last:pb-0">
                      <p className="text-sm text-muted-foreground mb-1">{result.metric}</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-muted-foreground line-through">{result.before}</span>
                        <span className="text-lg font-bold">{result.after}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{result.description}</p>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full mt-6" onClick={() => window.open(caseStudy.website, '_blank')}>
                  Visit Website
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="mt-8">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Similar Results
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-accent/5 py-16" id="contact">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss how we can help you achieve similar results for your brand.
          </p>
          <Button size="lg" onClick={() => navigate('/contact')}>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
