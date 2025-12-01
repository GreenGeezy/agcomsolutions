import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  buttonType: "audit" | "custom";
}

const ContactModal = ({ open, onOpenChange, buttonType }: ContactModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-2 border-primary/30" style={{ boxShadow: 'var(--glow-cyan)' }}>
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-primary text-center mb-2" style={{ textShadow: 'var(--glow-cyan)' }}>
            {buttonType === "audit" ? "Book Your Free Grow Audit" : "Custom AI Development Inquiry"}
          </DialogTitle>
          <p className="text-muted-foreground text-center">
            {buttonType === "audit" 
              ? "Get a personalized AI action plan to save your crops and maximize yields"
              : "Enterprise-grade AI solutions built specifically for your operation"}
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-foreground">Full Name *</Label>
            <Input 
              id="fullName" 
              required 
              className="bg-background border-primary/30 focus:border-primary"
              placeholder="Your name"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email *</Label>
              <Input 
                id="email" 
                type="email" 
                required 
                className="bg-background border-primary/30 focus:border-primary"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground">Phone *</Label>
              <Input 
                id="phone" 
                type="tel" 
                required 
                className="bg-background border-primary/30 focus:border-primary"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="operationType" className="text-foreground">Operation Type *</Label>
            <Select required>
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
            <Label htmlFor="canopySize" className="text-foreground">Average Plant Count or Canopy Size *</Label>
            <Input 
              id="canopySize" 
              required 
              className="bg-background border-primary/30 focus:border-primary"
              placeholder="e.g., 500 plants or 5,000 sq ft"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="challenge" className="text-foreground">Biggest Challenge Right Now *</Label>
            <Select required>
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

          <div className="text-xs text-muted-foreground text-center py-2 border-t border-primary/20">
            Consulting and custom development resuming January 2026 – secure your spot now.
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full h-14 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90"
            style={{ boxShadow: 'var(--glow-cyan)' }}
          >
            {isSubmitting ? "Submitting..." : "Lock In My Spot – First 50 Bookings Get Priority Scheduling"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
