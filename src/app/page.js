import AtrophySection from "../../components/atrophy-section/atrophy-section";
import CommunitySection from "../../components/community-section/community-section";
import LandingPage from "../../components/landing/landing";
import SnippetsPage from "../../components/snippets/snippets";
import SupportSection from "../../components/support-section/support-section";

export default function Home() {
  return (
    <main className="bg-background text-text scroll-smooth">
      <LandingPage />
      <AtrophySection />
      <SnippetsPage />
      <CommunitySection />
      <SupportSection />
    </main>
  );
}
