import { motion, useScroll, useTransform } from "framer-motion";
import { contribution } from "../assets/index.js";

const GitHubContributionGraph = () => {
  // Get scroll progress
  const { scrollYProgress } = useScroll();

  // Initially full-screen width (100vw) → Shrink to 0% on scroll up
  const width = useTransform(scrollYProgress, [0, 1], ["130vw", "0%"]);

  return (
    <div className="flex justify-center">
      <motion.img
        className="rounded-xl"
        src={contribution}
        alt="GitHub Contribution Graph"
        style={{ width }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }} // Smooth shrink effect
      />
    </div>
  );
};

export default GitHubContributionGraph;
