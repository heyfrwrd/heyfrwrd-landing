import React from "react";
import logoUrl from "@/assets/logo.png?url";

interface HeaderProps {
  locale: "en" | "es";
}

const Header: React.FC<HeaderProps> = ({ locale }) => {
  const langPrefix = locale === "en" ? "/en" : "";

  return (
    <header className="flex justify-between items-center px-6 py-2 w-full rounded-4xl">
      <a href={`${langPrefix}/`} className="flex items-center gap-3">
        <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
          <img src={logoUrl} alt="heyfrwrd logo" className="w-8 h-8" />
        </div>
        <span className="text-2xl font-bold text-gray-900 tracking-tight">
          heyfrwrd
        </span>
      </a>
    </header>
  );
};

export default Header;
