import { motion } from "framer-motion";

const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "Frontend Specialist",
];

export default function Roles() {
  return (
    <motion.div
      animate="show"
      className="flex flex-wrap justify-center md:justify-start gap-3 my-8"
      initial="hidden"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.12 },
        },
      }}
    >
      {roles.map((role) => (
        <motion.span
          key={role}
          className="px-4 py-1.5 rounded-full border border-default-200
                     bg-default-100/60 text-sm font-medium
                     backdrop-blur-md cursor-default"
          variants={{
            hidden: { opacity: 0, y: 12 },
            show: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.06 }}
        >
          {role}
        </motion.span>
      ))}
    </motion.div>
  );
}
