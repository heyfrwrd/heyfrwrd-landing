import React from 'react';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

const social = [
  { Icon: Github, href: "https://github.com/heyfrwrd", label: "GitHub" },
  {
    Icon: Instagram,
    href: "https://www.instagram.com/heyfrwrd/",
    label: "Instagram",
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/company/heyfrwrd/",
    label: "LinkedIn",
  },
  { Icon: Mail, href: "mailto:marlon.castro@heyfrwrd.me", label: "Email" },
];

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-3 p-2">
      {social.map(({ Icon, href, label }) => (
        <a
          key={href}
          href={href}
          aria-label={label}
          className="group w-8 h-8 bg-white/80 hover:bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border border-white/40 shadow-md overflow-hidden"
        >
          <Icon
            size={18}
            className="text-gray-600 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6 group-hover:text-gray-800"
          />
        </a>
      ))}
    </div>
  );
}
