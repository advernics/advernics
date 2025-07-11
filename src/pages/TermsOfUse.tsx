import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 1, 2024</p>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using SocialBoost's services, you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
              <p className="text-muted-foreground">
                SocialBoost provides social media marketing services, including but not limited to 
                strategy development, content creation, campaign management, and analytics reporting. 
                We reserve the right to modify or discontinue services at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. User Obligations</h2>
              <p className="text-muted-foreground mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Not engage in any prohibited activities</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Prohibited Uses</h2>
              <p className="text-muted-foreground mb-4">
                You may not use our services:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Intellectual Property Rights</h2>
              <p className="text-muted-foreground">
                The service and its original content, features, and functionality are and will remain 
                the exclusive property of SocialBoost and its licensors. The service is protected by 
                copyright, trademark, and other laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                Payment terms are as follows:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Payment is due according to the agreed schedule</li>
                <li>Late payments may incur additional fees</li>
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>Prices are subject to change with notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                In no event shall SocialBoost, nor its directors, employees, partners, agents, suppliers, 
                or affiliates, be liable for any indirect, incidental, special, consequential, or punitive 
                damages, including without limitation, loss of profits, data, use, goodwill, or other 
                intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
              <p className="text-muted-foreground">
                We may terminate or suspend your account and bar access to the service immediately, 
                without prior notice or liability, under our sole discretion, for any reason whatsoever 
                and without limitation, including but not limited to a breach of the Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms shall be interpreted and governed by the laws of the State of New York, 
                without regard to conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Use, please contact us at:
              </p>
              <p className="text-muted-foreground mt-2">
                Email: legal@socialboost.com<br />
                Phone: +1 (555) 123-4567<br />
                Address: 123 Marketing Street, New York, NY 10001
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfUse;