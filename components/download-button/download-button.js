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
      className="mx-16 sm:mx-24 sm:max-w-[320px] bg-textLight rounded-lg border-textLight pt-3 pr-5 pb-3 pl-4 flex place-items-center sm:gap-x-2 text-background uppercase"
      target="_blank"
      href={downloadUrl}
      {...props}
    >
      <span className="hidden sm:visible sm:flex items-center">
        <Image
          src={firefoxIcon}
          alt="Firefox icon"
          className="size-8 -mr-3 sm:-mr-6 sm:size-12"
        />
        <Image
          src={edgeIcon}
          alt="Edge icon"
          className="size-8 -mr-3 sm:-mr-6  sm:size-12"
        />
        <Image
          src={chromeIcon}
          alt="Chrome icon"
          className="size-8 sm:size-12"
        />
      </span>
      <div className="flex flex-col">
        <span className="text-base leading-4 sm:text-lg sm:leading-6 font-bold">
          start learning{" "}
        </span>
        <span className="text-sm leading-4 font-medium text-ctaLightColor">
          it's free
        </span>
      </div>
    </a>
  );
}

export default dynamic(() => Promise.resolve(DownloadButton), { ssr: false });
