import React, { useState, useRef, useEffect } from 'react';
import { Linkedin, ArrowUp, Mail, Phone, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

const InteractiveCharacter: React.FC<{ char: string; mouseX: any; mouseY: any }> = ({ char, mouseX, mouseY }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const distance = useMotionValue(1000);

  // Spring for smooth lighting
  const brightness = useSpring(useTransform(distance, [0, 150], [1, 0]), {
    stiffness: 150,
    damping: 15
  });

  const glowOpacity = useSpring(useTransform(distance, [0, 150], [0.8, 0]), {
    stiffness: 150,
    damping: 15
  });

  const yPos = useSpring(useTransform(distance, [0, 150], [-10, 0]), {
    stiffness: 150,
    damping: 15
  });

  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = mouseX.get() - centerX;
        const dy = mouseY.get() - centerY;
        const d = Math.sqrt(dx * dx + dy * dy);
        distance.set(d);
      }
    };

    const unsubscribeX = mouseX.on("change", calculateDistance);
    const unsubscribeY = mouseY.on("change", calculateDistance);

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [mouseX, mouseY, distance]);

  const textColor = useTransform(brightness, [0, 1], ["#262626", "#a3e635"]); // neutral-800 to lime-400

  return (
    <motion.span
      ref={ref}
      style={{
        color: textColor,
        y: yPos,
        textShadow: useTransform(glowOpacity, (v) => `0 0 ${v * 40}px rgba(163,230,53,${v})`),
        scale: useTransform(brightness, [0, 1], [1, 1.1])
      }}
      className="inline-block cursor-default select-none"
    >
      {char}
    </motion.span>
  );
};

const BehanceIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 11h5" />
    <path d="M9 12H7.5a1.5 1.5 0 1 0 0 3H9v-3z" />
    <path d="M9 6H7.5a1.5 1.5 0 1 0 0 3H9V6z" />
    <path d="M11.5 12c0 3 2.5 3 2.5 3s2.5 0 2.5-3-2.5-3-2.5-3-2.5 0-2.5 3z" />
    <path d="M3 5c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z" />
  </svg>
);

const ContactButton: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  colorClass?: string;
}> = ({ icon, label, value, href, colorClass = "bg-lime-400" }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      layout
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 25,
        mass: 0.5
      }}
      className={`inline-flex items-center h-14 ${colorClass} text-black rounded-full font-bold shadow-xl overflow-hidden px-6 whitespace-nowrap`}
    >
      <motion.div layout className="flex items-center gap-3">
        <motion.div layout className="flex-shrink-0">
          {icon}
        </motion.div>

        <motion.div
          layout
          className="flex items-center overflow-hidden"
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25
          }}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {!isHovered ? (
              <motion.span
                key="label"
                layout
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="text-lg"
              >
                {label}
              </motion.span>
            ) : (
              <motion.span
                key="value"
                layout
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="text-base font-medium opacity-90"
              >
                {value}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.a>
  );
};

const Contact: React.FC = () => {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const containerRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const handleMouseLeave = () => {
    mouseX.set(-1000);
    mouseY.set(-1000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-[#050505] text-white pt-24 pb-8 border-t border-neutral-900 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-lime-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">

        <div className="flex flex-col items-center text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-9xl font-bold mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-700"
          >
            Let's Talk.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 max-w-md mx-auto mb-12 text-lg md:text-xl"
          >
            Have a project in mind? Let's build something extraordinary together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            <ContactButton
              icon={<Mail size={22} />}
              label="Email Me"
              value="vigneshwaranvmece@gmail.com"
              href="mailto:vigneshwaranvmece@gmail.com"
            />
            <ContactButton
              icon={<Phone size={22} />}
              label="Call Me"
              value="+91 8220514063"
              href="tel:8220514063"
              colorClass="bg-white"
            />
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-neutral-900">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
            <p className="text-neutral-500 text-sm font-medium tracking-wide">BASED IN CHENNAI, INDIA</p>
          </div>

          <div className="flex gap-8">
            {[
              { name: 'LinkedIn', icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/vigneshwaran-v-m-24386b372/?skipRedirect=true' },
              { name: 'Behance', icon: <BehanceIcon size={18} />, href: 'https://www.behance.net/vmvchannel' }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-500 hover:text-lime-400 transition-all duration-300 text-sm font-bold uppercase tracking-widest group"
              >
                <span className="group-hover:scale-110 transition-transform">
                  {social.icon}
                </span>
                {social.name}
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="p-4 rounded-full bg-neutral-900 text-neutral-400 hover:bg-lime-400 hover:text-black transition-all duration-500 group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="mt-16 text-center text-neutral-800 text-[10vw] font-bold leading-none select-none uppercase tracking-tighter flex justify-center flex-wrap">
          {"Vigneshwaran".split("").map((char, index) => (
            <InteractiveCharacter
              key={index}
              char={char}
              mouseX={mouseX}
              mouseY={mouseY}
            />
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Contact;