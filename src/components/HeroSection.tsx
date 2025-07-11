import { Suspense, lazy } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";

const Spline = lazy(() => import('@splinetool/react-spline'));

interface HeroSectionProps {
  isSplineInteractive?: boolean;
}

const HeroSection = ({ isSplineInteractive = false }: HeroSectionProps) => {
  const onLoad = (spline: any) => {
    // Disable scroll zoom but keep other interactions
    if (spline && spline.setZoom) {
      spline.setZoom(1); // Set initial zoom
    }
    
    // Disable wheel events on the canvas to prevent scroll zoom
    const canvas = spline?.canvas;
    if (canvas) {
      canvas.addEventListener('wheel', (e: WheelEvent) => {
        e.preventDefault();
        e.stopPropagation();
      }, { passive: false });
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Spline 3D Background */}
      <div className={`absolute inset-0 w-full h-full ${isSplineInteractive ? 'pointer-events-auto' : 'pointer-events-none'}`} style={{ touchAction: 'pan-x pan-y pinch-zoom' }}>
        <Suspense fallback={
          <div className="w-full h-full bg-hero-gradient animate-pulse flex items-center justify-center">
            <div className="text-white/80">Loading 3D Scene...</div>
          </div>
        }>
          <Spline 
            scene="https://prod.spline.design/wBgBksMZNFgwkPpj/scene.splinecode" 
            style={{ width: '100%', height: '100%' }}
            onLoad={onLoad}
          />
        </Suspense>
      </div>

      {/* Gradient Overlay - Only on left side to preserve interactivity */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pointer-events-none">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-slide-up pointer-events-auto">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-hero-gradient text-white text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                #1 Social Media Growth Agency
              </div>
              
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                <span className="bg-hero-gradient bg-clip-text text-transparent">
                  Skyrocket
                </span>{" "}
                Your Social Media{" "}
                <span className="bg-hero-gradient bg-clip-text text-transparent">
                  Revenue
                </span>
              </h1>
              
              <p className="text-base text-muted-foreground max-w-xl">
                500+ brands, $50M+ revenue generated through strategic social media marketing.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success-gradient rounded-full"></div>
                <span className="text-sm font-medium">500+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success-gradient rounded-full"></div>
                <span className="text-sm font-medium">$50M+ Revenue Generated</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success-gradient rounded-full"></div>
                <span className="text-sm font-medium">300% Average Growth</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Start Your Growth Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="xl">
                View Case Studies
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span className="text-sm text-muted-foreground">99% Success Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-muted-foreground">10M+ Followers Gained</span>
              </div>
            </div>
          </div>

          {/* Right Column - Let the 3D scene show */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default HeroSection;