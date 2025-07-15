import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Card } from "@/components/ui/card";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to transform your social media presence? Let's start a conversation 
            about your goals and how we can help you achieve them.
          </p>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center bg-card-gradient border-white/10">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">+44 7877153802</p>
            </Card>
            <Card className="p-6 text-center bg-card-gradient border-white/10">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">support@advernics.com</p>
            </Card>
            <Card className="p-6 text-center bg-card-gradient border-white/10">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Office</h3>
              <p className="text-muted-foreground">
                Apt 12, The Drake Apartments,<br />
                390 Evelyn St<br />
                London<br />
                SE8 5BU<br />
                United Kingdom
              </p>
            </Card>
            <Card className="p-6 text-center bg-card-gradient border-white/10">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Hours</h3>
              <p className="text-muted-foreground">Mon-Fri 9AM-6PM</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection />

      <Footer />
    </div>
  );
};

export default ContactPage;