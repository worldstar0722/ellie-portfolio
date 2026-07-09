import { motion, AnimatePresence } from "framer-motion";

// Shared motion vocabulary: fast, gentle ease-out, never bouncy.
export const easeOutSoft = [0.25, 0.46, 0.45, 0.94];

const viewport = { once: true, margin: "0px 0px -60px 0px" };

export function Reveal({ children, delay = 0, className, as = "div", ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.5, delay, ease: easeOutSoft }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOutSoft } },
};

export function Stagger({ children, className, as = "div", ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function StaggerChild({ children, className, as = "div", ...rest }) {
  const Tag = motion[as];
  return (
    <Tag variants={staggerItem} className={className} {...rest}>
      {children}
    </Tag>
  );
}

// Expand/collapse with height + fade, in place of display toggling.
export function Collapse({ open, children, id, className }) {
  return (
    <AnimatePresence initial={false}>
      {open ? (
        <motion.div
          id={id}
          className={className}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: easeOutSoft }}
          style={{ overflow: "hidden" }}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
