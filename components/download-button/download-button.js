"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import useGetDownloadUrl from "../../hooks/use-get-download-url";

import chromeIcon from "../../assets/chrome.svg";
import edgeIcon from "../../assets/edge.svg";
import firefoxIcon from "../../assets/firefox.svg";

function DownloadButton(props) {
  const { downloadUrl } = useGetDownloadUrl();

  return (
    <a
      className="mx-24 bg-textLight rounded-lg border-textLight pt-3 pr-5 pb-3 pl-4 flex place-items-center gap-x-2 text-background uppercase"
      href={downloadUrl}
      {...props}
    >
      <span className="flex items-center">
        <Image src={firefoxIcon} alt="Firefox icon" className="-mr-6 size-12" />
        <Image src={edgeIcon} alt="Edge icon" className="-mr-6 size-12" />
        <Image src={chromeIcon} alt="Chrome icon" className=" size-12" />
      </span>
      <div className="flex flex-col items-start">
        <span className="text-lg leading-6 font-bold">start learning </span>
        <span className="text-sm leading-[18px] font-medium text-ctaLightColor">
          it's free
        </span>
      </div>
    </a>
  );
}

export default dynamic(() => Promise.resolve(DownloadButton), { ssr: false });
