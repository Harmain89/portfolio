// import { about } from "../assets";
import { ABOUT_TEXT } from "../constants";
import { motion } from "motion/react";

function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="mt-20 mb-6 text-center text-4xl">
            About
            <span className="text-neutral-500"> Me</span>
        </h2>

        <div className="">
            {/* <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2 lg:p-8"
            >
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl" src={about} alt="About" />
                </div>
            </motion.div> */}
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full"
            >
                <div className="flex justify-center w-full">
                    <p className="my-2 max-w-3xl py-6 text-center">{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About;