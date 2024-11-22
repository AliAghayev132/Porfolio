import  { useEffect, useState } from "react";
import { Icon } from "react-icons-kit";
import { alignRight } from "react-icons-kit/feather/alignRight";
import { close } from "react-icons-kit/ionicons/close";
import { Events, Link, scrollSpy } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function (to) {
      setActiveSection(to);
    });

    scrollSpy.update(); // Important to ensure scroll events are being tracked

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  return (
    <div className="w-full mx-auto">
      <nav className="flex justify-between items-center fixed w-full bg-white z-50 border-b">
        <div className="nav-left">
          <a
            href="https://github.com/muradbalayev"
            target="_blank"
            rel="noreferrer"
            className="name font-bold cursor-pointer relative"
          >
            DevAli
          </a>
        </div>
        <div className="nav-right md:block hidden">
          <ul className="flex list-none gap-2">
            <Link onSetActive={handleSetActive} spy={true} to="home" offset={-100} smooth={true} duration={200}>
              <li className={`font-bold rounded cursor-pointer ${activeSection === 'home' ? 'active' : ''}`}>Home</li>
            </Link>
            <Link onSetActive={handleSetActive} spy={true} to="projects" smooth={true} offset={-100} duration={200}>
              <li className={`font-bold rounded cursor-pointer ${activeSection === 'projects' ? 'active' : ''}`}>Projects</li>
            </Link>
            <Link onSetActive={handleSetActive} spy={true} to="about" smooth={true} offset={-100} duration={200}>
              <li className={`font-bold rounded cursor-pointer ${activeSection === 'about' ? 'active' : ''}`}>About</li>
            </Link>
            <Link onSetActive={handleSetActive} spy={true} to="skills" smooth={true} offset={-100} duration={200}>
              <li className={`font-bold rounded cursor-pointer ${activeSection === 'skills' ? 'active' : ''}`}>Skills</li>
            </Link>
            <Link onSetActive={handleSetActive} spy={true} to="contact" smooth={true} offset={-100} duration={200}>
              <li className={`font-bold rounded cursor-pointer ${activeSection === 'contact' ? 'active' : ''}`}>Contact</li>
            </Link>
          </ul>
        </div>
        <button
          onClick={() => {
            setOpen(true);
          }}
          className="md:hidden block transition-colors rounded-lg p-2 hover:text-white hover:bg-slate-800 cursor-pointer"
        >
          <Icon icon={alignRight} size={25} />
        </button>
      </nav>

      <div
        className={`navbar fixed top-0 right-0 flex justify-center items-center h-screen transition-all duration-700 z-50 ${
          open ? "w-full flex-grow" : "  w-0"
        }`}
      >
        <button
          onClick={() => {
            setOpen(false);
          }}
          className={`p-1 transition-colors absolute hover:text-red-500 top-5 right-5 z-50 ${
            open ? "block" : "hidden"
          }`}
        >
          <Icon icon={close} size={30} />
        </button>
        <div className={`w-full relative ${open ? "block" : "hidden"}`}>
          <ul className="list-none w-full text-white">
            <Link className="text-white" to="home" smooth={true} duration={300}>
              <li className="font-bold text-center text-2xl cursor-pointer  hover:bg-slate-900">
                Home
              </li>
            </Link>
            <Link
              className="text-white"
              to="about"
              smooth={true}
              offset={-50}
              duration={300}
            >
              <li className="font-bold text-center text-2xl cursor-pointer  hover:bg-slate-900">
                About
              </li>
            </Link>
            <Link
              className="text-white"
              to="skills"
              smooth={true}
              offset={-50}
              duration={300}
            >
              <li className="font-bold text-center text-2xl cursor-pointer  hover:bg-slate-900">
                Skills
              </li>
            </Link>
            <Link
              className="text-white"
              to="projects"
              smooth={true}
              offset={-50}
              duration={300}
            >
              <li className="font-bold text-center text-2xl cursor-pointer  hover:bg-slate-900">
                Projects
              </li>
            </Link>
            <Link
              className="text-white"
              to="contact"
              smooth={true}
              offset={-50}
              duration={300}
            >
              <li className="font-bold text-center text-2xl cursor-pointer  hover:bg-slate-900">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
