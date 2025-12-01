import { motion } from 'framer-motion';
import { Camera, Brain, TrendingUp, CheckCircle, DollarSign } from 'lucide-react';
import { useState } from 'react';

const HowItWorks = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      icon: Camera,
      title: "Snap",
      description: "Take a photo of your crop with your phone",
      color: "primary",
      animation: "shutter"
    },
    {
      icon: Brain,
      title: "Know",
      description: "AI analyzes and identifies issues instantly",
      color: "destructive",
      animation: "analyze"
    },
    {
      icon: TrendingUp,
      title: "Win",
      description: "Get precise treatments and watch yields climb",
      color: "primary",
      animation: "grow"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="container px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary"
          style={{ textShadow: 'var(--glow-cyan)' }}
        >
          How It Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
        >
          Three simple steps between you and healthier crops
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative p-8 rounded-xl bg-card/50 border-2 border-primary/20 backdrop-blur-sm transition-all duration-300"
              style={{ 
                boxShadow: hoveredCard === index ? 'var(--glow-cyan)' : 'none'
              }}
            >
              <div className="relative mb-6">
                <motion.div
                  animate={hoveredCard === index ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/30"
                >
                  <card.icon className="w-10 h-10 text-primary" style={{ filter: 'drop-shadow(var(--glow-cyan))' }} />
                </motion.div>

                {hoveredCard === index && card.animation === "shutter" && (
                  <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </motion.div>
                )}

                {hoveredCard === index && card.animation === "analyze" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute inset-0 rounded-full border-4 border-destructive/50"
                  />
                )}

                {hoveredCard === index && card.animation === "grow" && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute -top-2 -right-2"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <DollarSign className="w-8 h-8 text-primary" style={{ filter: 'drop-shadow(var(--glow-cyan))' }} />
                    </motion.div>
                  </motion.div>
                )}
              </div>

              <h3 className="text-2xl font-bold text-center mb-3 text-foreground">
                {card.title}
              </h3>
              <p className="text-center text-muted-foreground">
                {card.description}
              </p>

              {index < cards.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-primary text-2xl"
                >
                  →
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
