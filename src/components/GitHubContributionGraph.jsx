import { motion, useScroll, useTransform } from "framer-motion";
import { contribution } from "../assets/index.js";
import { useEffect, useState } from "react";

const GitHubContributionGraph = () => {
  // Get scroll progress
  const { scrollYProgress } = useScroll();
  
  // State to track if we're on mobile
  const [isMobile, setIsMobile] = useState(false);
  
  // Check viewport width on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // Standard small breakpoint (adjust if needed)
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initially full-screen width (130vw) → Shrink to 0% on scroll up
  const width = useTransform(scrollYProgress, [0, 1], ["130vw", "0%"]);

  return (
    <div className="flex justify-center w-full overflow-hidden">
      <motion.img
        className="rounded-xl"
        src={contribution}
        alt="GitHub Contribution Graph"
        style={isMobile ? { width: "100%" } : { width }} 
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
      />
    </div>
  );
};

export default GitHubContributionGraph;