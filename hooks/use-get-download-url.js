"use client";

import * as rdd from "react-device-detect";

import { DOWNLOAD_URLS } from "../constants/download-urls";

const URLS = {
  chrome: DOWNLOAD_URLS.chrome,
  brave: DOWNLOAD_URLS.chrome,
  chromium: DOWNLOAD_URLS.chrome,
  edge: DOWNLOAD_URLS.edge,
  edgechromiun: DOWNLOAD_URLS.edge,
  firefox: DOWNLOAD_URLS.firefox,
  arc: DOWNLOAD_URLS.chrome,
};

export default function useGetDownloadUrl() {
  const currentBrowser = (rdd.browserName || "").toLowerCase();

  const downloadUrl = URLS[currentBrowser];

  return {
    downloadUrl,
    isSupported: !!downloadUrl,
  };
}
