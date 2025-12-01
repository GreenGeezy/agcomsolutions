import { Mail, Phone, MapPin, TrendingUp, Zap } from "lucide-react";
import heroImage from "@/assets/hero-agtech.jpg";
import growthIcon from "@/assets/growth-icon.png";

const Index = () => {
  return <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background to-primary/10" />
        <div className="absolute inset-0 z-0 opacity-10" style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "luminosity"
        }} />
        
        <div className="container relative z-10 px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ textShadow: 'var(--glow-cyan)' }}>
            Agcom Solutions LLC
          </h1>
          
          <p className="text-2xl md:text-3xl mb-4 text-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Practical AI Tools for Smarter Crop Cultivation
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            Founded by Elijah Duffy – Award-Winning AgTech for Real Results in Agriculture
          </p>
          
          <div className="mt-16 flex items-center justify-center gap-4 animate-in fade-in duration-700 delay-700">
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1 max-w-xs" />
            <Zap className="w-8 h-8 text-primary" style={{ filter: 'drop-shadow(var(--glow-cyan))' }} />
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent flex-1 max-w-xs" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/50 border-y border-border">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-primary" style={{ textShadow: 'var(--glow-cyan)' }}>
                About Agcom Solutions LLC
              </h2>
              
              <p className="text-lg text-foreground leading-relaxed">
                Launched in 2025 as a single-member LLC in Casper, Wyoming, Agcom Solutions LLC started from a simple need: making cutting-edge AI practical for everyday agriculture.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                Today, we power growers with tools that analyze photos for instant health insights, predict yields, and streamline operations—helping small farms and large operations alike reduce waste and boost output.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                Our mobile-first approach means you can optimize your crops right from your phone, backed by a community of users who've seen real gains in efficiency and profitability.
              </p>
              
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2 text-primary">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-medium">Instant Diagnostics</span>
                </div>
                <div className="flex items-center gap-2 text-secondary">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-medium">Yield Predictions</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-8 flex items-center justify-center border border-primary/30" style={{ boxShadow: 'var(--glow-cyan)' }}>
                <div className="text-center space-y-4">
                  <TrendingUp className="w-24 h-24 mx-auto text-primary" style={{ filter: 'drop-shadow(var(--glow-cyan))' }} />
                  <p className="text-xl font-semibold text-foreground">AI-Powered Agriculture</p>
                  <p className="text-muted-foreground">Data-driven insights for modern farming</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary" style={{ textShadow: 'var(--glow-purple)' }}>
              Built by Elijah Duffy, AgTech Entrepreneur
            </h2>
            
            <p className="text-lg text-foreground leading-relaxed">
              Elijah Duffy founded Agcom Solutions LLC after years of building and scaling AI tools for agriculture, drawing from hands-on experience in iOS app development, machine learning deployment, and startup growth.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              As the driving force behind award-winning solutions like our core diagnostic platform, Elijah combines technical expertise with a grower's mindset to create tech that delivers immediate value.
            </p>
            
            <p className="text-lg text-foreground leading-relaxed">
              He's passionate about empowering the next generation of farmers through accessible innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <section className="py-20 bg-card/50 border-t border-border">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary" style={{ textShadow: 'var(--glow-cyan)' }}>
              Ready to Grow Smarter? Get in Touch
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 py-8">
              <div className="flex flex-col items-center gap-2 p-6 rounded-lg bg-background/50 border border-primary/20">
                <Mail className="w-8 h-8 text-primary" style={{ filter: 'drop-shadow(var(--glow-cyan))' }} />
                <p className="font-medium text-foreground">Email</p>
                <a href="mailto:agcomsol@gmail.com" className="text-primary hover:text-secondary transition-colors">
                  agcomsol@gmail.com
                </a>
              </div>
              
              <div className="flex flex-col items-center gap-2 p-6 rounded-lg bg-background/50 border border-secondary/20">
                <Phone className="w-8 h-8 text-secondary" style={{ filter: 'drop-shadow(var(--glow-purple))' }} />
                <p className="font-medium text-foreground">Phone</p>
                <a href="tel:+19179678326" className="text-primary hover:text-secondary transition-colors">
                  (917) 967-8326
                </a>
              </div>
              
              <div className="flex flex-col items-center gap-2 p-6 rounded-lg bg-background/50 border border-primary/20">
                <MapPin className="w-8 h-8 text-primary" style={{ filter: 'drop-shadow(var(--glow-cyan))' }} />
                <p className="font-medium text-foreground">Address</p>
                <p className="text-muted-foreground text-sm">
                  5830 E 2nd Street #7000<br />
                  Casper, WY 82609
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-primary/20 bg-background">
        <div className="container px-4">
          <p className="text-center text-muted-foreground">
            © 2025 Agcom Solutions LLC. Real AI for Real Agriculture | All rights reserved.
          </p>
        </div>
      </footer>
    </main>;
};
export default Index;