import React, { useState, useRef, useEffect } from 'react';
import { ArrowUp, Mail, Phone, ExternalLink } from 'lucide-react';
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

const BehanceIcon: React.FC<{ size?: number; className?: string }> = ({ size = 26, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 26 26"
    className={className}
  >
    <path
      fill="currentColor"
      d="M19.5 12.4c.2.3.4.6.5 1.1h-3.2c0-.1 0-.3.1-.5s.1-.3.3-.5c.1-.2.3-.3.5-.4s.5-.2.8-.2c.4.1.8.2 1 .5m-9.2-.7c.2-.2.4-.5.4-.9c0-.2 0-.4-.1-.6c-.1-.1-.2-.3-.3-.3c-.1-.1-.3-.1-.5-.2H7.2V12h2.2q.45 0 .9-.3m-.8 1.7H7.2v2.7h2.3c.2 0 .4 0 .6-.1c.2 0 .4-.1.5-.2s.3-.2.4-.4s.1-.4.1-.6c0-.5-.1-.9-.4-1.1q-.45-.3-1.2-.3M26 4.9v16.2c0 2.7-2.2 4.9-4.9 4.9H4.9C2.2 26 0 23.8 0 21.1V4.9C0 2.2 2.2 0 4.9 0h16.2C23.8 0 26 2.2 26 4.9m-9.6 4.7h4v-1h-4zM13.2 15c0-.6-.1-1.1-.4-1.6c-.3-.4-.7-.7-1.3-.9c.4-.2.8-.5 1-.8q.3-.45.3-1.2c0-.75-.1-.8-.2-1.2c-.2-.3-.4-.6-.6-.7c-.3-.2-.6-.3-1-.4c-.5-.2-.9-.2-1.4-.2H5v9.8h4.8c.4 0 .9-.1 1.3-.2s.8-.3 1.1-.5s.6-.5.8-.9c.1-.3.2-.7.2-1.2m3.6-.3h5.1c0-.6 0-1.1-.1-1.6s-.3-1-.6-1.3c-.3-.4-.7-.7-1.1-.9c-.5-.2-1-.4-1.6-.4q-.75 0-1.5.3c-.4.2-.8.5-1.2.8c-.3.3-.6.7-.7 1.2q-.3.75-.3 1.5c0 .75.1 1.1.3 1.5c.2.5.4.9.7 1.2s.7.6 1.1.8q.75.3 1.5.3q1.2 0 2.1-.6c.6-.4 1-1 1.3-1.8h-1.7c-.1.2-.2.4-.5.6s-.6.3-1 .3c-.5 0-1-.1-1.3-.4c-.3-.4-.5-.9-.5-1.5"
    />
  </svg>
);

const LinkedInIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="currentColor"
      d="M17.303 2.25H6.697A4.447 4.447 0 0 0 2.25 6.697v10.606a4.447 4.447 0 0 0 4.447 4.447h10.606a4.447 4.447 0 0 0 4.447-4.447V6.697a4.447 4.447 0 0 0-4.447-4.447m-8.46 15.742a.4.4 0 0 1-.4.423h-1.78a.41.41 0 0 1-.4-.412V10.6a.4.4 0 0 1 .4-.411h1.78a.4.4 0 0 1 .4.411zM7.52 8.632a1.467 1.467 0 1 1 .022-2.935A1.467 1.467 0 0 1 7.52 8.63m10.817 9.35a.39.39 0 0 1-.378.388H16.08a.39.39 0 0 1-.378-.389v-3.424c0-.511.156-2.223-1.356-2.223c-1.179 0-1.412 1.2-1.457 1.734v3.991a.39.39 0 0 1-.378.39h-1.823a.39.39 0 0 1-.389-.39v-7.493a.39.39 0 0 1 .39-.378h1.822a.39.39 0 0 1 .39.378v.645a2.59 2.59 0 0 1 2.434-1.112c3.035 0 3.024 2.835 3.024 4.447z"
    />
  </svg>
);

import { useScrollActive } from '../hooks/useScrollActive';

const ContactButton: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  colorClass?: string;
}> = ({ icon, label, value, href, colorClass = "bg-lime-400" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, isActive } = useScrollActive({ amount: 0.8, margin: "-10% 0px -10% 0px" });
  
  const showValue = isHovered || isActive;

  return (
    <motion.a
      ref={ref}
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
            {!showValue ? (
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
            viewport={{ once: false }}
            className="text-6xl md:text-9xl font-bold mb-8 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-700"
          >
            Let's Talk.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 max-w-md mx-auto mb-12 text-lg md:text-xl"
          >
            Have a project in mind? Let's build something extraordinary together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
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
              { name: 'LinkedIn', icon: <LinkedInIcon size={18} />, href: 'https://www.linkedin.com/in/vigneshwaran-v-m-24386b372/?skipRedirect=true' },
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