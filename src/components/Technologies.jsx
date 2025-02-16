import { motion } from "motion/react";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition:  {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 max-w-[900px] mx-auto"
      >
        <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src="https://skillicons.dev/icons?i=laravel" alt="Laravel" className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src="https://skillicons.dev/icons?i=php" alt="PHP" className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src="https://skillicons.dev/icons?i=react" alt="React" className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src="https://skillicons.dev/icons?i=typescript" alt="Typescript" className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src="https://skillicons.dev/icons?i=vue" alt="Vue.js" className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src="https://skillicons.dev/icons?i=mysql" alt="Mysql" className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src="https://skillicons.dev/icons?i=mongodb" alt="MongoDB" className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src="https://skillicons.dev/icons?i=nodejs" alt="NodeJs" className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src="https://skillicons.dev/icons?i=redux" alt="Redux" className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src="https://skillicons.dev/icons?i=aws" alt="AWS" className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src="https://skillicons.dev/icons?i=gcp" alt="GCP" className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(2.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src="https://skillicons.dev/icons?i=express" alt="Express" className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind" className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(2.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src="https://skillicons.dev/icons?i=regex" alt="Regex" className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(3.0)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src="https://skillicons.dev/icons?i=sqlite" alt="Sqlite" className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(3.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src="https://skillicons.dev/icons?i=linux" alt="Linux" className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(3.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src="https://skillicons.dev/icons?i=github" alt="Github" className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(3.6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src="https://skillicons.dev/icons?i=bash" alt="Bash" className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(3.8)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src="https://skillicons.dev/icons?i=docker" alt="Docker" className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(4.0)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src="https://skillicons.dev/icons?i=postman" alt="Postman" className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src="https://skillicons.dev/icons?i=appwrite" alt="Appwrite" className="text-7xl text-cyan-400" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
