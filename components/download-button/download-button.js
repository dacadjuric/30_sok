"use client";

import dynamic from "next/dynamic";
import useGetDownloadUrl from "../../hooks/use-get-download-url";
import ChromeIcon from "../icons/chrome";
import EdgeIcon from "../icons/edge";
import FirefoxIcon from "../icons/firefox";

function DownloadButton() {
  const { downloadUrl, isSupported } = useGetDownloadUrl();

  return (
    <div className="mx-24">
      <a
        className="bg-textLight rounded-2xl border-textLight py-2 flex justify-center align-center text-background uppercase"
        href={downloadUrl}
      >
        <span className="flex items-center">
          <EdgeIcon width={48} height={48} />
          <FirefoxIcon width={48} height={48} />
          <ChromeIcon width={48} height={48} />
        </span>
        <div className="flex flex-col items-start">
          <span className="text-2xl font-bold">start learning </span>
          <span className="text-lg font-medium text-footerIcons">
            it's free
          </span>
        </div>
      </a>
    </div>
  );
}

export default dynamic(() => Promise.resolve(DownloadButton), { ssr: false });
