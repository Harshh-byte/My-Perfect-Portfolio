import { motion } from "motion/react";
import { FlipWords } from "./FlipWords"

const HeroText = () => {
    const words = ['Secure', 'Elegant', 'Scalable'];
    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };
    return (
        <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
            {/* <DesktopView/> */}
            <div className="flex-col hidden md:flex c-space">
                <motion.h1 className="text-4xl font-medium select-none" variants={variants} initial="hidden" animate="visible" transition={{ delay: 1 }}>Hi, I'm Harsh.</motion.h1>
                <div className="flex flex-col items-start">
                    <motion.p className="text-5xl font-medium text-neutral-300 select-none" variants={variants} initial="hidden" animate="visible" transition={{ delay: 1.2 }}>
                        A Developer <br /> Dedicated to Crafting
                    </motion.p>
                    <motion.div variants={variants} initial="hidden" animate="visible" transition={{ delay: 1.5 }}>
                        <FlipWords words={words} className='font-black text-white text-8xl select-none' />
                    </motion.div>
                    <motion.p className="text-4xl font-medium text-neutral-300 select-none" variants={variants} initial="hidden" animate="visible" transition={{ delay: 1.8 }}>
                        Web Solutions
                    </motion.p>
                </div>
            </div>
            {/* <MobileView/> */}
            <div className="flex flex-col space-y-6 md:hidden">
                <motion.p className="text-4xl font-medium" variants={variants} initial="hidden" animate="visible" transition={{ delay: 1 }}>Hi, I'm Harsh.</motion.p>
                <div>
                    <motion.p className="text-5xl font-black text-neutral-300" variants={variants} initial="hidden" animate="visible" transition={{ delay: 1.2 }}>Building</motion.p>
                    <motion.div variants={variants} initial="hidden" animate="visible" transition={{ delay: 1.5 }}>
                        <FlipWords words={words} className='font-bold text-white text-7xl' />
                    </motion.div>
                    <motion.p className="text-4xl font-black text-neutral-300" variants={variants} initial="hidden" animate="visible" transition={{ delay: 1.8 }}>Web Applications</motion.p>
                </div>
            </div>
        </div >
    )
}

export default HeroText