import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import modalHero from "@/assets/modal-hero.jpg";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  buttonType: "audit" | "custom";
}

const ContactModal = ({ open, onOpenChange, buttonType }: ContactModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedFields, setCompletedFields] = useState<Record<string, boolean>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "You're locked in!",
      description: "We'll reach out within 48 hours to schedule your consultation.",
    });
    
    setIsSubmitting(false);
    onOpenChange(false);
  };

  const handleFieldComplete = (fieldName: string, value: any) => {
    if (value && value !== "") {
      setCompletedFields(prev => ({ ...prev, [fieldName]: true }));
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card border-2 border-primary/30 p-0" style={{ boxShadow: 'var(--glow-cyan)' }}>
        {/* Banner */}
        <div className="bg-secondary/20 border-b border-secondary/30 px-6 py-3 text-center">
          <p className="text-sm text-foreground font-medium">
            🚀 Consulting & custom development resume January 2026 — book your priority slot now
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={modalHero} 
            alt="Precision agriculture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/90" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-center px-4 text-primary"
              style={{ textShadow: 'var(--glow-cyan), 0 2px 10px rgba(0,0,0,0.8)' }}
            >
              Your Crop Deserves This Level of Precision
            </motion.h2>
          </div>
        </div>

        <div className="px-6 pb-6">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-2xl font-bold text-primary text-center" style={{ textShadow: 'var(--glow-cyan)' }}>
              {buttonType === "audit" ? "Book Your Free Grow Audit" : "Custom AI Development Inquiry"}
            </DialogTitle>
            <p className="text-muted-foreground text-center text-sm">
              {buttonType === "audit" 
                ? "Get a personalized AI action plan to save your crops and maximize yields"
                : "Enterprise-grade AI solutions built specifically for your operation"}
            </p>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-5 mt-6">
            <div className="space-y-2 relative">
              <Label htmlFor="fullName" className="text-foreground flex items-center gap-2">
                Full Name *
                <AnimatePresence>
                  {completedFields.fullName && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Label>
              <Input 
                id="fullName" 
                required 
                className="bg-background border-primary/30 focus:border-primary"
                placeholder="Your name"
                onChange={(e) => handleFieldComplete('fullName', e.target.value)}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground flex items-center gap-2">
                  Email *
                  <AnimatePresence>
                    {completedFields.email && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Label>
                <Input 
                  id="email" 
                  type="email" 
                  required 
                  className="bg-background border-primary/30 focus:border-primary"
                  placeholder="your@email.com"
                  onChange={(e) => handleFieldComplete('email', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground flex items-center gap-2">
                  Phone *
                  <AnimatePresence>
                    {completedFields.phone && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  required 
                  className="bg-background border-primary/30 focus:border-primary"
                  placeholder="(555) 123-4567"
                  onChange={(e) => handleFieldComplete('phone', e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="operationType" className="text-foreground flex items-center gap-2">
                Operation Type *
                <AnimatePresence>
                  {completedFields.operationType && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Label>
              <Select required onValueChange={(value) => handleFieldComplete('operationType', value)}>
                <SelectTrigger className="bg-background border-primary/30 focus:border-primary">
                  <SelectValue placeholder="Select your operation type" />
                </SelectTrigger>
                <SelectContent className="bg-card border-primary/30">
                  <SelectItem value="home">Home Grow</SelectItem>
                  <SelectItem value="small">Small Commercial (&lt; 10,000 sq ft)</SelectItem>
                  <SelectItem value="mid">Mid-Size (10k–50k sq ft)</SelectItem>
                  <SelectItem value="large">Large Commercial (&gt; 50k sq ft)</SelectItem>
                  <SelectItem value="seed-to-sale">Seed-to-Sale Facility</SelectItem>
                  <SelectItem value="breeding">Breeding Program</SelectItem>
                  <SelectItem value="tissue">Tissue Culture Lab</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="canopySize" className="text-foreground flex items-center gap-2">
                Average Plant Count or Canopy Size *
                <AnimatePresence>
                  {completedFields.canopySize && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Label>
              <Input 
                id="canopySize" 
                required 
                className="bg-background border-primary/30 focus:border-primary"
                placeholder="e.g., 500 plants or 5,000 sq ft"
                onChange={(e) => handleFieldComplete('canopySize', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="challenge" className="text-foreground flex items-center gap-2">
                Biggest Challenge Right Now *
                <AnimatePresence>
                  {completedFields.challenge && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Label>
              <Select required onValueChange={(value) => handleFieldComplete('challenge', value)}>
                <SelectTrigger className="bg-background border-primary/30 focus:border-primary">
                  <SelectValue placeholder="What's costing you the most?" />
                </SelectTrigger>
                <SelectContent className="bg-card border-primary/30">
                  <SelectItem value="pests">Pests & Disease</SelectItem>
                  <SelectItem value="nutrients">Nutrient Problems</SelectItem>
                  <SelectItem value="yield">Yield Inconsistency</SelectItem>
                  <SelectItem value="pm">Powdery Mildew</SelectItem>
                  <SelectItem value="root">Root Rot</SelectItem>
                  <SelectItem value="labor">Labor Costs</SelectItem>
                  <SelectItem value="compliance">Compliance & Tracking</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">Message (Optional)</Label>
              <Textarea 
                id="message" 
                className="bg-background border-primary/30 focus:border-primary min-h-[100px]"
                placeholder="Tell us more about your situation..."
              />
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
                style={{ boxShadow: 'var(--glow-cyan)' }}
              >
                {isSubmitting ? "Submitting..." : "Secure My 2026 Spot"}
              </Button>
            </motion.div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
