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
      className="group inline-flex w-fit items-center gap-3 rounded-lg bg-yellow px-5 py-3 font-mono font-bold text-background transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow/20"
      target="_blank"
      href={downloadUrl}
      {...props}
    >
      <span className="flex flex-col leading-tight">
        <span className="text-base sm:text-lg whitespace-nowrap">
          <span className="mr-1.5">▸</span>install - it&apos;s free
        </span>
        <span className="text-xs font-medium text-background/70 whitespace-nowrap">
          chrome · firefox · edge
        </span>
      </span>
      <span className="flex items-center shrink-0 pl-1">
        <Image src={firefoxIcon} alt="Firefox" className="-mr-2.5 size-6" />
        <Image src={edgeIcon} alt="Edge" className="-mr-2.5 size-6" />
        <Image src={chromeIcon} alt="Chrome" className="size-6" />
      </span>
    </a>
  );
}

export default dynamic(() => Promise.resolve(DownloadButton), { ssr: false });
