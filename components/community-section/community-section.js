import DownloadCard from "./download-card/download-card";

import ReviewStars from "../icons/review-stars";
import SquiggleDivider from "../icons/squiggle-divider";
import GithubIcon from "../icons/github";
import ProductHuntIcon from "../icons/product-hunt";

export default function CommunitySection() {
  return (
    <div className="relative min-h-[100vh] sm:min-h-[768px] container mx-auto flex flex-col justify-center items-center px-8 pt-12 sm:pt-20">
      <div className="absolute -top-5 sm:-top-9 md:-top-9 rotate-180 ">
        <SquiggleDivider
          width={340}
          className="animate-shock w-[200px] sm:w-full"
        />
      </div>
      <div className="sm:w-[50%]">
        <h4 className="text-lg sm:text-2xl text-center">Trusted by</h4>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-center">
          25K+ DEVELOPERS
        </h1>
      </div>

      <div className="gap-6 sm:gap-12 flex flex-row flex-nowrap max-lg:flex-col justify-start text-center mt-9 mb-11">
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
      <div className="flex items-center max-lg:pb-20">
        <ReviewStars width={320} className="rotate-180" />
      </div>
    </div>
  );
}
