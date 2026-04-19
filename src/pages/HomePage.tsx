import { Hero } from "../components/Hero";
import { OriginSection } from "../components/OriginSection";

interface HomePageProps {
  onOpenGetApp: () => void;
}

export default function HomePage({ onOpenGetApp }: HomePageProps) {
  return (
    <>
      <Hero onOpenGetApp={onOpenGetApp} />
      <OriginSection />
    </>
  );
}
