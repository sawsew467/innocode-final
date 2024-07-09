"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";

function Header() {
  return (
    <header className="fixed bottom-0 left-0 right-0 top-0 h-24 bg-[#365448]">
      <div className="container flex h-full w-full items-center justify-between text-white">
        <h3>LOGO</h3>
        <nav>
          <ul className="flex gap-10">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="flex items-center gap-5">
          <Search />
          <Button>
            <div className="flex items-center gap-2">
              <span>DONATE NOW</span>
              <ArrowRight width={16} />
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
