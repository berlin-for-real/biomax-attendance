"use client";

import { useTheme } from "next-themes";
import { Menu } from "lucide-react";
import DarkToggle from "@/components/DarkToggle"

export default function Navbar({ onMenuClick }: { onMenuClick: () => void }) {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex items-center justify-between p-4 pr-9 pl-9 shadow">
      <button onClick={onMenuClick} aria-label="Open menu">
        <Menu size={24} />
      </button>
      <div>
        <DarkToggle />
      </div>
    </nav>
  );
}
