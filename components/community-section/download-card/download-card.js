"use client";

import Image from "next/image";

import useGetDownloadUrl from "../../../hooks/use-get-download-url";

import firefoxIcon from "../../../assets/firefox.svg";
import chromeIcon from "../../../assets/chrome.svg";
import edgeIcon from "../../../assets/edge.svg";

export default function DownloadCard(props) {
  const { downloadUrl } = useGetDownloadUrl();
  return (
    <a
      className="flex-1 min-w-[240px] px-6 py-7 rounded-lg bg-panel border border-line hover:border-yellow/40 transition-colors flex flex-col items-center"
      target="_blank"
      rel="noopener noreferrer"
      href={downloadUrl}
      {...props}
    >
      <span className="flex items-center mb-3">
        <Image src={firefoxIcon} alt="Firefox icon" className="-mr-4 size-10" />
        <Image src={edgeIcon} alt="Edge icon" className="-mr-4 size-10" />
        <Image src={chromeIcon} alt="Chrome icon" className="size-10" />
      </span>
      <h3 className="text-xl">
        <b className="text-yellow">25,000+</b> users
      </h3>
      <p className="text-sm text-comment mt-1">Featured on Chrome Store</p>
    </a>
  );
}
