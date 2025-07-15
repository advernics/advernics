import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, FashionForward",
      company: "E-commerce Fashion Brand",
      image: "/placeholder.svg",
      content: "SocialBoost significantly improved our Instagram presence. We grew from 5K to 50K followers in 8 months, and our sales increased by 75%. The ROI has been fantastic!", 
      rating: 5,
      revenue: "+$1M",
      followers: "150K"
    },
    {
      name: "Michael Chen",
      role: "Founder, TechStart",
      company: "SaaS Startup",
      image: "/placeholder.svg",
      content: "The team's strategic approach to LinkedIn marketing helped us generate over 50 qualified leads per month. Our B2B sales pipeline is much stronger now.", 
      rating: 5,
      revenue: "+$1.8M",
      followers: "85K"
    },
    {
      name: "Emma Rodriguez",
      role: "Marketing Director, LocalEats",
      company: "Restaurant Chain",
      image: "/placeholder.svg",
      content: "Our TikTok content strategy from SocialBoost really paid off. We've grown to over 100K followers and seen a great increase in brand awareness.", 
      rating: 5,
      revenue: "+$1M",
      followers: "500K"
    },
    {
      name: "David Kim",
      role: "Owner, FitLife Gym",
      company: "Fitness Center",
      image: "/placeholder.svg",
      content: "The social media campaigns drove 300+ new memberships in just 4 months. Our gym is now at full capacity with a waiting list!",
      rating: 5,
      revenue: "+$850K",
      followers: "75K"
    },
    {
      name: "Lisa Thompson",
      role: "Founder, BeautyBliss",
      company: "Cosmetics Brand",
      image: "/placeholder.svg",
      content: "From zero to hero! SocialBoost helped us build our brand from scratch. We now have a loyal community of 200K followers and consistent 6-figure months.",
      rating: 5,
      revenue: "+$1.5M",
      followers: "200K"
    },
    {
      name: "James Wilson",
      role: "CEO, EcoHome",
      company: "Sustainable Products",
      image: "/placeholder.svg",
      content: "The influencer partnerships they arranged brought us great exposure. Our sustainable products have seen a significant boost in recognition and sales have doubled.", 
      rating: 5,
      revenue: "+$200k",
      followers: "120K"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's how we've transformed businesses 
            across different industries with our proven social media strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 bg-card-gradient border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex flex-col h-full">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/60 mb-4" />
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Stats */}
                <div className="flex justify-between mb-4 p-3 rounded-lg bg-success-gradient/10 border border-success-gradient/20">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">{testimonial.revenue}</div>
                    <div className="text-xs text-muted-foreground">Revenue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400">{testimonial.followers}</div>
                    <div className="text-xs text-muted-foreground">Followers</div>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-hero-gradient text-white">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-primary">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;