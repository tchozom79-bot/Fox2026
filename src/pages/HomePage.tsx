import { Hero } from "../components/Hero";
import { OriginSection } from "../components/OriginSection";

interface HomePageProps {
  onOpenGetApp: () => void;
  canInstall?: boolean;
}

export default function HomePage({ onOpenGetApp, canInstall }: HomePageProps) {
  return (
    <>
      <Hero onOpenGetApp={onOpenGetApp} canInstall={canInstall} />
      <OriginSection />
    </>
  );
}
