import { motion } from 'framer-motion';
import { Camera, CheckCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import phoneMockup from '@/assets/phone-mockup.png';

const PhoneMockup = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-64 mx-auto"
      >
        <div className="relative bg-gradient-to-b from-card/80 to-background/80 rounded-3xl p-3 border-2 border-primary/30 backdrop-blur-sm"
             style={{ boxShadow: 'var(--glow-cyan)' }}>
          <div className="bg-background rounded-2xl p-4 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <div className="h-1 w-16 bg-muted rounded-full" />
              <div className="flex gap-1">
                <div className="h-1 w-1 rounded-full bg-muted" />
                <div className="h-1 w-1 rounded-full bg-muted" />
              </div>
            </div>

            <div className="aspect-square bg-muted/20 rounded-xl flex items-center justify-center border border-primary/20 relative overflow-hidden">
              <Camera className="w-12 h-12 text-primary/40" />
              
              {step === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-background/80"
                >
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-2"
                    />
                    <p className="text-xs text-primary font-medium">Analyzing...</p>
                  </div>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-destructive/10"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-destructive/20 flex items-center justify-center mx-auto mb-2">
                      <div className="text-2xl">⚠️</div>
                    </div>
                    <p className="text-xs text-destructive font-medium">Issue Detected</p>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute inset-0 flex items-center justify-center bg-primary/10"
                >
                  <div className="text-center px-4">
                    <CheckCircle className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="text-xs text-primary font-medium">Treatment Ready</p>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="space-y-2">
              <div className="h-2 bg-muted/30 rounded-full w-full" />
              <div className="h-2 bg-muted/30 rounded-full w-3/4" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PhoneMockup;
