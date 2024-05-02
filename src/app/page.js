import LandingPage from "../../components/landing/landing";
import SnippetsPage from "../../components/snippets/snippets";

export default function Home() {
  return (
    <main className="bg-background text-text">
      <LandingPage />
      <SnippetsPage />
    </main>
  );
}
