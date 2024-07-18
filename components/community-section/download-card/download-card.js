"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

import useGetDownloadUrl from "../../../hooks/use-get-download-url";

import firefoxIcon from "../../../assets/firefox.svg";
import chromeIcon from "../../../assets/chrome.svg";
import edgeIcon from "../../../assets/edge.svg";

function DownloadCard(props) {
  const { downloadUrl } = useGetDownloadUrl();
  return (
    <a
      className="px-6 py-7 w-80 rounded-lg bg-[#17191f] flex flex-col items-center transition transform hover:scale-105"
      href={downloadUrl}
      {...props}
    >
      <span className="flex items-center mb-4">
        <Image src={firefoxIcon} alt="Firefox icon" className="-mr-6 size-12" />
        <Image src={edgeIcon} alt="Edge icon" className="-mr-6 size-12" />
        <Image src={chromeIcon} alt="Chrome icon" className=" size-12" />
      </span>
      <h4 className="text-2xl">
        <b>25,000+</b> Users
      </h4>
      <p className="text-sm">
        <b>Featured</b> on Chrome Store
      </p>
    </a>
  );
}

export default dynamic(() => Promise.resolve(DownloadCard), { ssr: false });
