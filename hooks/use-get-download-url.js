"use client";

import * as rdd from "react-device-detect";

const DOWNLOAD_URLS = {
  chrome:
    "https://chromewebstore.google.com/detail/30-seconds-of-knowledge/mmgplondnjekobonklacmemikcnhklla?hl=en&authuser=0",
  arc: "https://chromewebstore.google.com/detail/30-seconds-of-knowledge/mmgplondnjekobonklacmemikcnhklla?hl=en&authuser=0",
  brave:
    "https://chromewebstore.google.com/detail/30-seconds-of-knowledge/mmgplondnjekobonklacmemikcnhklla?hl=en&authuser=0",
  chromium:
    "https://chromewebstore.google.com/detail/30-seconds-of-knowledge/mmgplondnjekobonklacmemikcnhklla?hl=en&authuser=0",
  edge: "https://microsoftedge.microsoft.com/addons/detail/30-seconds-of-knowledge/phcopnojoheikifimnfnknllajecemnd",
  edgechromiun:
    "https://microsoftedge.microsoft.com/addons/detail/30-seconds-of-knowledge/phcopnojoheikifimnfnknllajecemnd",
  firefox:
    "https://addons.mozilla.org/en-US/firefox/addon/30-seconds-of-knowledge/",
};

export default function useGetDownloadUrl() {
  const currentBrowser = (rdd.browserName || "").toLowerCase();

  const downloadUrl = DOWNLOAD_URLS[currentBrowser];

  console.log(currentBrowser);

  return {
    downloadUrl,
    isSupported: !!downloadUrl,
  };
}
