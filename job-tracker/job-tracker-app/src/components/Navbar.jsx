import React from "react";
import { ChartNoAxesGantt, X } from "lucide-react";
import assets from "../assets/assets";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const isAuthPage = location.pathname.startsWith("/auth");

  const handleHomeClick = () => {
    navigate("/");
    setIsMenuOpen(false);
  };

  const handleLoginClick = () => {
    navigate("/auth/sign-in");
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  React.useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes dropdownEnter {
        0% {
          opacity: 0;
          transform: scale(0.95) translateY(-8px);
        }
        50% {
          opacity: 0.8;
          transform: scale(1.02) translateY(2px);
        }
        100% {
          opacity: 1;
          transform: scale(1) translateY(0);
        }
      }

      @keyframes fadeInUp {
        0% {
          opacity: 0;
          transform: translateY(10px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-dropdown-enter {
        animation: dropdownEnter 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
      }

      .animate-fade-in-up-1 {
        animation: fadeInUp 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        animation-delay: 0.05s;
        opacity: 0;
      }

      .animate-fade-in-up-2 {
        animation: fadeInUp 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        animation-delay: 0.1s;
        opacity: 0;
      }

      .animate-fade-in-up-3 {
        animation: fadeInUp 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        animation-delay: 0.15s;
        opacity: 0;
      }
    `;

    if (!document.querySelector("#navbar-styles")) {
      style.id = "navbar-styles";
      document.head.appendChild(style);
    }

    return () => {
      const existingStyle = document.querySelector("#navbar-styles");
      if (existingStyle) {
        existingStyle.remove();
      }
    };
  }, []);

  return (
    <div className="z-40 flex items-center justify-between pt-8 pb-6 px-7 sm:px-10 sm:pt-9 relative">
      <div
        onClick={handleHomeClick}
        className="flex items-center justify-center gap-3 cursor-pointer"
      >
        <img className="w-9" src={assets.logo} alt="" />
        <p className="font-black text-[1.25rem] text-[#193948]">Hustlr</p>
      </div>

      {/* FOR DESKTOP */}
      <div className="hidden sm:flex items-center justify-center gap-7">
        <p
          className={`text-[.875rem] font-semibold text-[#214b5f] hover:text-[#193948] cursor-pointer transition-all duration-300 ease-out hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:scale-105 active:scale-95 px-2 py-1 ${
            isAuthPage ? "transform translate-x-[4.5rem]" : ""
          }`}
        >
          About
        </p>
        <p
          className={`text-[.875rem] font-semibold text-[#214b5f] hover:text-[#193948] cursor-pointer transition-all duration-300 ease-out hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:scale-105 active:scale-95 px-2 py-1 ${
            isAuthPage ? "transform translate-x-[4.5rem]" : ""
          }`}
        >
          Disclaimer
        </p>
        <p
          onClick={handleLoginClick}
          className={`text-[.875rem] font-semibold text-[#214b5f] hover:text-[#193948] cursor-pointer transition-all duration-300 ease-out hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:scale-105 active:scale-95 px-2 py-1 ${
            isAuthPage
              ? "opacity-0 scale-95 pointer-events-none"
              : "opacity-100 scale-100"
          }`}
        >
          Sign in
        </p>
      </div>

      {/* FOR MOBILE MENU */}
      <div className="sm:hidden">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-lg transition-all duration-300 ease-out hover:scale-105 active:scale-95"
        >
          {isMenuOpen ? (
            <X size={24} className="text-gray-800" />
          ) : (
            <ChartNoAxesGantt size={24} className="text-gray-800" />
          )}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isMenuOpen && (
        <div className="absolute top-full right-9 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 min-w-[140px] z-50 sm:hidden backdrop-blur-md animate-dropdown-enter">
          <div className="px-1">
            <p className="text-[.875rem] font-semibold text-[#214b5f] hover:text-[#193948] cursor-pointer transition-all duration-300 ease-out hover:scale-105 active:scale-95 px-3 py-2 rounded-lg animate-fade-in-up-1">
              About
            </p>
            <p className="text-[.875rem] font-semibold text-[#214b5f] hover:text-[#193948] cursor-pointer transition-all duration-300 ease-out hover:scale-105 active:scale-95 px-3 py-2 rounded-lg animate-fade-in-up-2">
              Disclaimer
            </p>
            {!isAuthPage && (
              <p
                onClick={handleLoginClick}
                className="text-[.875rem] font-semibold text-[#214b5f] hover:text-[#193948] cursor-pointer transition-all duration-300 ease-out hover:scale-105 active:scale-95 px-3 py-2 rounded-lg animate-fade-in-up-3"
              >
                Sign in
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
