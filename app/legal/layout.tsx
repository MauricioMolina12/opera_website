import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { LegalSidebar } from "./components/legal-sidebar";

interface LegalLayoutProps {
  children: ReactNode;
}

export default function LegalLayout({
  children,
}: LegalLayoutProps) {
  return (
    <div className="pt-4">
      <Container size="wide">
        <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
          <LegalSidebar />

          <main className="min-w-0 pb-10">
            {children}
          </main>
        </div>
      </Container>
    </div>
  );
}