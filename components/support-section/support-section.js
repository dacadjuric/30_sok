import Circle from "../icons/circle";
import MerchArrow from "../icons/merch-arrow";
import Hand from "../../assets/hand.png";
import Image from "next/image";

export default function SupportSection() {
  return (
    <div className="bg-gradient-to-b from-[#1F194D]">
      <div className="relative min-h-[100vh] sm:min-h-[960px] container mx-auto flex flex-col justify-center items-center px-8">
        <div className="sm:flex sm:z-10">
          <div className="invisible sm:visible sm:w-1/2 flex items-start justify-center">
            <Image src={Hand} alt="Hand image" />
          </div>
          <div className="flex flex-col items-center w-full mt-8 sm:mt-0 sm:w-1/2 sm:items-end">
            <h1 className="text-5xl sm:text-6xl font-extrabold">SUPPORT US!</h1>
            <span className="text-center sm:text-right">
              <b className="text-yellow">Your support means a lot</b>! If you
              enjoy <b className="text-yellow">30 Seconds of Knowledge</b>
              <br />
              and want to support its growth, consider{" "}
              <b className="text-yellow">making a small donation</b>
            </span>
            <a
              className="gumroad-button my-6 w-64"
              href="https://30secondsofknowledge.gumroad.com/l/thhgl"
            >
              Donate On
            </a>
            <div className="flex">
              <p className="order-last ml-3">
                or by checking out <b className="text-yellow">our merch</b>
              </p>
              <MerchArrow width={180} />
            </div>
          </div>
        </div>
        <Circle className="absolute z-0 -top-8 max-h-[420px] w-[90%] animate-float" />

        <iframe
          style={{
            borderRadius: "24px",
            border: "none",
            marginTop: "32px",
            marginBottom: "32px",
          }}
          src="https://embed.creator-spring.com/widget?slug=30-seconds-of-knowledge&per=20&currency=&page=1&layout=carousel-wide&theme=dark"
          title="30 Seconds Of Knowledge Merch store powered by Spring"
          width="100%"
          height="420"
          data-reactroot=""
        />
      </div>
    </div>
  );
}
