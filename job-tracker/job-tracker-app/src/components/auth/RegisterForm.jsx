import React, { useState } from "react";
import { Mail, LockKeyhole, User } from "lucide-react";
import FormButton from "./FormButton";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailFormatError, setEmailFormatError] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setNameError(false);
    setEmailError(false);
    setPasswordError(false);
    setEmailFormatError(false);

    let hasError = false;

    if (!name.trim()) {
      setNameError(true);
      hasError = true;
    }

    if (!email.trim()) {
      setEmailError(true);
      hasError = true;
    } else if (!validateEmail(email)) {
      setEmailFormatError(true);
      hasError = true;
    }

    if (!password.trim()) {
      setPasswordError(true);
      hasError = true;
    }

    if (!hasError) {
      console.log("Register:", { name, email, password });
    }
  };

  const handleNameFocus = () => {
    if (nameError) setNameError(false);
  };

  const handleEmailFocus = () => {
    if (emailError) setEmailError(false);
    if (emailFormatError) setEmailFormatError(false);
  };

  const handlePasswordFocus = () => {
    if (passwordError) setPasswordError(false);
  };

  const handleEmailBlur = () => {
    if (email.trim() && !validateEmail(email)) {
      setEmailFormatError(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-95 max-w-sm p-5"
      noValidate
    >
      <div className={`relative ${nameError ? "has-error-required" : ""}`}>
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <User size={18} className="text-gray-400" />
        </div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={handleNameFocus}
          placeholder="Name"
          className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-16 text-sm text-gray-700 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-[#4FADCO]/20 focus:border-[#4FADCO] focus:outline-none transition-all duration-300 ease-out hover:bg-gray-100 hover:border-gray-300"
        />
      </div>

      <div
        className={`relative ${emailError ? "has-error-required" : ""} ${
          emailFormatError ? "has-error-format" : ""
        }`}
      >
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <Mail size={18} className="text-gray-400" />
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
          placeholder="Email"
          aria-invalid={emailFormatError ? "true" : undefined}
          aria-describedby={emailFormatError ? "login-email-error" : undefined}
          className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-sm text-gray-700 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-[#4FADCO]/20 focus:border-[#4FADCO] focus:outline-none transition-all duration-300 ease-out hover:bg-gray-100 hover:border-gray-300"
        />
      </div>

      <div className={`relative ${passwordError ? "has-error-required" : ""}`}>
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <LockKeyhole size={18} className="text-gray-400" />
        </div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={handlePasswordFocus}
          placeholder="Password"
          className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3 pl-12 pr-4 text-sm text-gray-700 placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-[#4FADCO]/20 focus:border-[#4FADCO] focus:outline-none transition-all duration-300 ease-out hover:bg-gray-100 hover:border-gray-300"
          style={{ textOverflow: "ellipsis" }}
        />
      </div>

      <FormButton>Sign up</FormButton>

      <style jsx>{`
        @keyframes subtle-pulse {
          0% {
            border-color: rgb(252 165 165);
          }
          50% {
            border-color: rgb(239 68 68);
          }
          100% {
            border-color: rgb(252 165 165);
          }
        }

        /* Higher-contrast, iOS-like orange pulse */
        @keyframes subtle-pulse-warn {
          0% {
            border-color: rgb(251 146 60);
          } /* orange-400 */
          50% {
            border-color: rgb(234 88 12);
          } /* orange-600 */
          100% {
            border-color: rgb(251 146 60);
          } /* orange-400 */
        }

        .has-error-required::after,
        .has-error-format::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 0.75rem;
          pointer-events: none;
          z-index: 2;
          will-change: border-color;
        }

        /* Only the animated border layer is visible during error */
        .has-error-required input,
        .has-error-format input {
          border-color: transparent !important;
        }

        .has-error-required::after {
          border: 1px solid rgb(252 165 165);
          animation: subtle-pulse 0.75s cubic-bezier(0.22, 1, 0.36, 1) 2;
        }

        .has-error-format::after {
          border: 1px solid rgb(251 146 60); /* orange-400 */
          animation: subtle-pulse-warn 0.75s cubic-bezier(0.22, 1, 0.36, 1) 2;
        }

        @media (prefers-reduced-motion: reduce) {
          .has-error-required::after,
          .has-error-format::after {
            animation: none !important;
          }
        }
      `}</style>
    </form>
  );
}

export default RegisterForm;
