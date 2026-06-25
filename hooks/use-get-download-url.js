"use client";

import { useEffect, useState } from "react";
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

const DEFAULT_URL = DOWNLOAD_URLS.chrome;

export default function useGetDownloadUrl() {
  const [downloadUrl, setDownloadUrl] = useState(DEFAULT_URL);
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    const currentBrowser = (rdd.browserName || "").toLowerCase();
    const url = URLS[currentBrowser];
    setDownloadUrl(url || DEFAULT_URL);
    setIsSupported(!!url);
  }, []);

  return {
    downloadUrl,
    isSupported,
  };
}
