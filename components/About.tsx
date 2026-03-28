import React from 'react';
import { motion } from 'framer-motion';
import Parallax from './Parallax';

const About: React.FC = () => {
    return (
        <section id="about" className="scroll-mt-32 py-12">
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="bg-neutral-900/30 border border-neutral-800 rounded-3xl p-8 md:p-16 relative overflow-hidden"
            >

                {/* Decoration */}
                <Parallax offset={-50} className="absolute top-0 right-0 w-64 h-64 bg-lime-500/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        className="text-sm font-bold text-lime-400 uppercase tracking-widest mb-6"
                    >
                        Philosophy
                    </motion.h2>
                    
                    <Parallax offset={20}>
                        <p className="text-3xl md:text-5xl font-bold text-white leading-tight mb-12">
                            "Design is not just what it looks like. Design is how it <span className="text-neutral-500 decoration-lime-400 underline decoration-2 underline-offset-4">works</span>."
                        </p>
                    </Parallax>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-white font-bold text-xl mb-4">The Process</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                I follow a continuous improvement approach—starting with research, validating ideas early, and refining at the final stages. I rely on data to support design choices, focusing not only on visual appeal but also on delivering meaningful, functional user experiences.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3 className="text-white font-bold text-xl mb-4">The Goal</h3>
                            <p className="text-neutral-400 leading-relaxed">
                                To design experiences that feel effortless. When users can complete tasks naturally without noticing the interface, the design is successful. True excellence in design comes from clarity, simplicity, and purposeful functionality.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;