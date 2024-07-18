import DownloadCard from "./download-card/download-card";

import Stars from "../icons/stars";
import SquiggleDivider from "../icons/squiggle-divider";
import GithubIcon from "../icons/github";
import ProductHuntIcon from "../icons/product-hunt";

export default function CommunitySection() {
  return (
    <div className="relative min-h-[768px] container mx-auto flex flex-col justify-center items-center px-8">
      <div className="absolute -top-9 rotate-180">
        <SquiggleDivider width={340} className="animate-shock" />
      </div>
      <div className="w-[50%]">
        <h4 className="text-2xl text-center">Trusted by</h4>
        <h1 className="text-6xl font-extrabold text-center">25K+ DEVELOPERS</h1>
      </div>

      <div className="gap-12 flex flex-row flex-nowrap justify-start text-center mt-9 mb-11">
        <DownloadCard />

        <div className="w-80 px-6 py-7 rounded-lg bg-yellow transition transform hover:scale-105">
          <a
            href="https://www.producthunt.com/products/css-galore#30-seconds-of-knowledge"
            target="_blank"
            className="flex flex-col items-center"
          >
            <ProductHuntIcon
              width={60}
              height={60}
              color="#0e1217"
              className="mb-1.5"
            />

            <h5 className="text-2xl text-nowrap text-background">
              <b>#2</b> product of the day
            </h5>
            <p className="text-sm text-background">
              <b>Product Hunt</b>
            </p>
          </a>
        </div>

        <div className="w-80 px-6 py-7 rounded-lg bg-cardsBackground transition transform hover:scale-105">
          <a
            href="https://github.com/petrovicstefanrs/30_seconds_of_knowledge"
            target="_blank"
            className="flex flex-col items-center"
          >
            <GithubIcon
              width={48}
              height={48}
              color="#fff"
              className="text-center mb-4"
            />
            <h5 className="text-2xl text-nowrap">1,000+ Github stars</h5>
            <p className="text-sm">petrovicstefan/30_seconds_of_knowledge</p>
          </a>
        </div>
      </div>
      <div className="flex items-center">
        <Stars width={320} className="rotate-180" />
      </div>
    </div>
  );
}
