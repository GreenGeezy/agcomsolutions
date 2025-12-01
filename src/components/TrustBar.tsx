import { motion } from 'framer-motion';

const TrustBar = () => {
  const badges = [
    "Built for Growers, by Growers",
    "Mobile-First AI",
    "Instant Photo Diagnostics",
    "Used in Facilities Worldwide",
    "Battle-Tested Technology",
    "Real Results, No Hype"
  ];

  // Duplicate for seamless loop
  const duplicatedBadges = [...badges, ...badges];

  return (
    <div className="py-12 bg-card/30 border-y border-primary/20 overflow-hidden">
      <motion.div
        animate={{ x: [0, -50 + '%'] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex gap-8"
      >
        {duplicatedBadges.map((badge, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-background/50 border border-primary/30 whitespace-nowrap backdrop-blur-sm"
            style={{ boxShadow: '0 0 15px rgba(0, 255, 255, 0.2)' }}
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-foreground">{badge}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TrustBar;
