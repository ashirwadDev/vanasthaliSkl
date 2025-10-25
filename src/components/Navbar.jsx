import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Gallery", path: "/gallery" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-[#0B3D0B] text-white z-50 shadow-md"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Vanasthali Academy"
            className="h-10 w-10 object-contain"
          />
          <span className="font-bold text-lg tracking-wide">
            Vanasthali Academy
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative transition duration-200 ${
                  isActive
                    ? "text-[#F7C948] after:w-full"
                    : "hover:text-[#F7C948]"
                } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#F7C948] after:transition-all after:duration-300 ${
                  isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 bg-[#F7C948] text-[#0B3D0B] font-semibold px-4 py-2 rounded-lg hover:bg-[#C9E265] transition"
          >
            Admissions Open
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0B3D0B] px-6 pb-4"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block py-2 text-white hover:text-[#F7C948] transition"
            >
              {item.name}
            </NavLink>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-3 bg-[#F7C948] text-[#0B3D0B] font-semibold py-2 rounded-lg hover:bg-[#C9E265] transition"
          >
            Admissions Open
          </motion.button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
