"use client";

import React, { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import InputIsland from "./InputIsland";
import SocialIcons from "./SocialIcons";
import { getCurrentLanguage, getTranslation } from "@/utils/translations";

const N = 12;
const sparkles = Array.from({ length: N }).map(() => ({
  size: 12 + Math.random() * 24,
  top: Math.random() * 100,
  left: Math.random() * 100,
  opacity: (20 + Math.random() * 50).toFixed(0),
}));

export default function ComingSoon() {
  const [language, setLanguage] = useState<"en" | "es">("es");
  const t = (key: string, params?: Record<string, string | number>) =>
    getTranslation(key, language, params);

  const rawHeadline = t("home.headline");
  const match = rawHeadline.match(/<0>(.+?)<\/0>/);
  const first = match ? match[1] : "";
  const rest = match ? rawHeadline.replace(/<0>.+?<\/0>/, "") : rawHeadline;

  useEffect(() => {
    setLanguage(getCurrentLanguage());
  }, []);

  return (
    <div className="relative overflow-hidden min-h-[500px]">
      {/*   {sparkles.map((s, i) => (
        <div
          key={i}
          className="absolute sparkle-animate"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        >
          <Sparkles size={s.size} className={`text-[#683fe7]/${s.opacity}`} />
        </div>
      ))} */}

      <div className="flex flex-col items-center justify-start px-10 text-center max-w-6xl mx-auto py-16">
        <div
          className="fade-up flex items-center gap-2 bg-transparent rounded-md p-2 border border-gray-700/20 mb-2"
          style={{ animationDelay: "0.2s" }}
        >
          <Sparkles size={14} className="text-gray-700/20" />
          <span className="text-gray-700 font-medium">{t("home.soon")}</span>
        </div>

        <div className="fade-up" style={{ animationDelay: "0.4s" }}>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-none">
            <span className="text-[#683fe7]">{first}</span>
            {rest}
          </h1>
        </div>

        <div className="fade-up" style={{ animationDelay: "0.6s" }}>
          <p className="mt-8 text-lg md:text-xl text-gray-600 mb-10 max-w-3xl leading-loose">
            {t("home.subtext")}
          </p>
        </div>

        <div className="fade-up mb-8" style={{ animationDelay: "0.8s" }}>
          <InputIsland />
        </div>

        <div className="fade-up" style={{ animationDelay: "1s" }}>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}
