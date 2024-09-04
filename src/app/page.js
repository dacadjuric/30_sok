import CommunitySection from "../../components/community-section/community-section";
import LandingPage from "../../components/landing/landing";
import SnippetsPage from "../../components/snippets/snippets";
import SupportSection from "../../components/support-section/support-section";

export default function Home() {
  return (
    <main className="bg-background text-text">
      <LandingPage />
      <SnippetsPage />
      <CommunitySection />
      <SupportSection />
    </main>
  );
}
