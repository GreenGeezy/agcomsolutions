import { Mail, Phone, MapPin, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-agtech.jpg";
import ContactModal from "@/components/ContactModal";
import AnimatedBackground from "@/components/AnimatedBackground";
import PhoneMockup from "@/components/PhoneMockup";
import HowItWorks from "@/components/HowItWorks";
import TrustBar from "@/components/TrustBar";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"audit" | "custom">("audit");

  const openModal = (type: "audit" | "custom") => {
    setModalType(type);
    setIsModalOpen(true);
  };

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
        <AnimatedBackground />
        
        <div className="container relative z-10 px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="text-center lg:text-left space-y-8">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-5xl md:text-7xl font-bold text-primary" 
                style={{ textShadow: 'var(--glow-cyan)' }}
              >
                Agcom Solutions LLC
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-xl md:text-2xl text-muted-foreground"
              >
                Stop losing crops to preventable disasters. Get instant AI diagnostics and predictive insights that save plants and boost your bottom line.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col gap-6 items-center lg:items-start"
              >
                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                  <div className="flex flex-col gap-2">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        onClick={() => openModal("audit")}
                        className="h-16 px-6 text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-primary transition-all"
                        style={{ 
                          boxShadow: 'var(--glow-cyan)',
                          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                        }}
                      >
                        Protect Your Crop – Book a Free Grow Audit
                      </Button>
                    </motion.div>
                    <p className="text-xs text-muted-foreground text-center">
                      Stop losing plants to pests & disease. Get a custom AI action plan in 48 hours.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        onClick={() => openModal("custom")}
                        className="h-16 px-6 text-base font-bold bg-secondary text-secondary-foreground hover:bg-secondary/90 border-2 border-secondary transition-all"
                        style={{ 
                          boxShadow: 'var(--glow-purple)',
                          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                        }}
                      >
                        Need Custom AI Agents for Your Grow?
                      </Button>
                    </motion.div>
                    <p className="text-xs text-muted-foreground text-center">
                      Enterprise-grade vision models, automation bots, and predictive analytics built for commercial facilities.
                    </p>
                  </div>
                </div>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-sm text-foreground/80 text-center lg:text-left"
                >
                  Priority 2026 scheduling now open — secure your spot before they fill.
                </motion.p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block"
            >
              <PhoneMockup />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="lg:hidden mt-12"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </section>

      <TrustBar />

      <HowItWorks />

      {/* About Section */}
      <section id="about" className="py-20 bg-card/50 border-y border-border">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.h2 
                initial={{ opacity: 0, letterSpacing: '0.05em' }}
                whileInView={{ opacity: 1, letterSpacing: '0.02em' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-primary" 
                style={{ textShadow: 'var(--glow-cyan)' }}
              >
                About Agcom Solutions LLC
              </motion.h2>
              
              <p className="text-lg text-foreground leading-relaxed">
                You're bleeding money on crop losses you could've prevented.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                Every day, growers lose plants to pests, nutrient issues, and disease outbreaks that show up too late. By the time you spot the problem, your yield's already tanked.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                Our AI tools analyze photos in seconds, predict problems before they spread, and give you the exact steps to save your crops. Mobile-first. Battle-tested. Built for growers who need results, not corporate fluff.
              </p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex gap-4 pt-4"
              >
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-2 text-primary"
                >
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-medium">Instant Diagnostics</span>
                </motion.div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-2 text-secondary"
                >
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-medium">Yield Predictions</span>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="aspect-square rounded-xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-8 flex items-center justify-center border border-primary/30" 
                style={{ boxShadow: 'var(--glow-cyan)' }}
              >
                <div className="text-center space-y-4">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <TrendingUp className="w-24 h-24 mx-auto text-primary" style={{ filter: 'drop-shadow(var(--glow-cyan))' }} />
                  </motion.div>
                  <p className="text-xl font-semibold text-foreground">AI-Powered Agriculture</p>
                  <p className="text-muted-foreground">Data-driven insights for modern farming</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary" style={{ textShadow: 'var(--glow-purple)' }}>
              Our Mission
            </h2>
            
            <p className="text-2xl text-foreground leading-relaxed font-medium">
              We build battle-tested AI tools that save crops, boost yields, and put more profit in growers' pockets — no hype, just results.
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
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-2 p-6 rounded-lg bg-background/50 border border-primary/20"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  style={{ filter: 'drop-shadow(var(--glow-cyan))' }}
                >
                  <Mail className="w-8 h-8 text-primary" />
                </motion.div>
                <p className="font-medium text-foreground">Email</p>
                <a href="mailto:agcomsol@gmail.com" className="text-primary hover:text-secondary transition-colors">
                  agcomsol@gmail.com
                </a>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-2 p-6 rounded-lg bg-background/50 border border-secondary/20"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  style={{ filter: 'drop-shadow(var(--glow-purple))' }}
                >
                  <Phone className="w-8 h-8 text-secondary" />
                </motion.div>
                <p className="font-medium text-foreground">Phone</p>
                <a href="tel:+19179678326" className="text-primary hover:text-secondary transition-colors">
                  (917) 967-8326
                </a>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-2 p-6 rounded-lg bg-background/50 border border-primary/20"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  style={{ filter: 'drop-shadow(var(--glow-cyan))' }}
                >
                  <MapPin className="w-8 h-8 text-primary" />
                </motion.div>
                <p className="font-medium text-foreground">Address</p>
                <p className="text-muted-foreground text-sm">
                  5830 E 2nd Street #7000<br />
                  Casper, WY 82609
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-primary/20 bg-background">
        <div className="container px-4">
          <p className="text-center text-muted-foreground">
            © 2025 Agcom Solutions LLC | Founded by Elijah Duffy | All rights reserved.
          </p>
        </div>
      </footer>

      <ContactModal 
        open={isModalOpen} 
        onOpenChange={setIsModalOpen}
        buttonType={modalType}
      />
    </main>;
};
export default Index;