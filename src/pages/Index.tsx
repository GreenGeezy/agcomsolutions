import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-agtech.jpg";
import growthIcon from "@/assets/growth-icon.png";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        <div className="container relative z-10 px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">
            Agcom Solutions LLC
          </h1>
          
          <p className="text-2xl md:text-3xl mb-4 text-foreground/90 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Practical AI Tools for Smarter Crop Cultivation
          </p>
          
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            Founded by Elijah Duffy – Award-Winning AgTech for Real Results in Agriculture
          </p>
          
          <Button 
            size="lg"
            className="text-lg px-8 py-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500"
            onClick={() => scrollToSection("about")}
          >
            Explore Our AI Solutions
          </Button>
          
          <div className="mt-16 flex items-center justify-center gap-4 animate-in fade-in duration-700 delay-700">
            <div className="h-px bg-border flex-1 max-w-xs" />
            <img src={growthIcon} alt="Growth Analytics" className="w-12 h-12 opacity-70" />
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                About Agcom Solutions LLC
              </h2>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                Launched in 2025 as a single-member LLC in Casper, Wyoming, Agcom Solutions LLC started from a simple need: making cutting-edge AI practical for everyday agriculture.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                Today, we power growers with tools that analyze photos for instant health insights, predict yields, and streamline operations—helping small farms and large operations alike reduce waste and boost output.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                Our mobile-first approach means you can optimize your crops right from your phone, backed by a community of users who've seen real gains in efficiency and profitability.
              </p>
              
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2 text-growth">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-medium">Instant Diagnostics</span>
                </div>
                <div className="flex items-center gap-2 text-growth">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-medium">Yield Predictions</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-growth/20 to-primary/20 p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <TrendingUp className="w-24 h-24 mx-auto text-growth" />
                  <p className="text-xl font-semibold text-foreground">AI-Powered Agriculture</p>
                  <p className="text-muted-foreground">Data-driven insights for modern farming</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Built by Elijah Duffy, AgTech Entrepreneur
            </h2>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              Elijah Duffy founded Agcom Solutions LLC after years of building and scaling AI tools for agriculture, drawing from hands-on experience in iOS app development, machine learning deployment, and startup growth.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              As the driving force behind award-winning solutions like our core diagnostic platform, Elijah combines technical expertise with a grower's mindset to create tech that delivers immediate value.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              He's passionate about empowering the next generation of farmers through accessible innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Ready to Grow Smarter? Get in Touch
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 py-8">
              <div className="flex flex-col items-center gap-2 p-6 rounded-lg bg-background/50">
                <Mail className="w-8 h-8 text-growth" />
                <p className="font-medium text-foreground">Email</p>
                <a href="mailto:agcomsol@gmail.com" className="text-primary hover:underline">
                  agcomsol@gmail.com
                </a>
              </div>
              
              <div className="flex flex-col items-center gap-2 p-6 rounded-lg bg-background/50">
                <Phone className="w-8 h-8 text-growth" />
                <p className="font-medium text-foreground">Phone</p>
                <a href="tel:+19179678326" className="text-primary hover:underline">
                  (917) 967-8326
                </a>
              </div>
              
              <div className="flex flex-col items-center gap-2 p-6 rounded-lg bg-background/50">
                <MapPin className="w-8 h-8 text-growth" />
                <p className="font-medium text-foreground">Address</p>
                <p className="text-muted-foreground text-sm">
                  5830 E 2nd Street #7000<br />
                  Casper, WY 82609
                </p>
              </div>
            </div>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6"
              onClick={() => window.open("mailto:agcomsol@gmail.com?subject=Join AI Tips Community", "_blank")}
            >
              Join Our Community for Free AI Tips
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container px-4">
          <p className="text-center text-muted-foreground">
            © 2025 Agcom Solutions LLC. Real AI for Real Agriculture | All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
