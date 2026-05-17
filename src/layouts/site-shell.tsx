import type { PropsWithChildren } from "react";

import { Footer } from "@/components/navigation/footer";
import { Navbar } from "@/components/navigation/navbar";

export function SiteShell({ children }: PropsWithChildren) {
  return (
    <div className="site-shell">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
