import Link from "next/link";

import FacebookIcon from "../icons/facebook";
import InstagramIcon from "../icons/instagram";
import GithubIcon from "../icons/github";
import LinkedInIcon from "../icons/linkedin";
import Logo from "../logo/logo";

import { DOWNLOAD_URLS } from "../../constants/download-urls";

export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer className="mx-auto mt-6 bg-background text-text relative z-10">
      {/* editor status bar */}
      <div className="bg-yellow text-background font-mono text-xs">
        <div className="container mx-auto px-8 flex items-center gap-4 sm:gap-6 py-1.5 overflow-x-auto whitespace-nowrap">
          <span className="font-bold">⎇ main</span>
          <span>UTF-8</span>
          <span>LF</span>
          <span className="hidden sm:inline">1500+ snippets</span>
          <span className="ml-auto">★ 25K+ devs · stay sharp</span>
        </div>
      </div>
      <div className="container mx-auto overflow-hidden px-8">
        <div className="flex flex-col sm:flex-row justify-between py-12">
          <div className="flex flex-col justify-center sm:justify-start text-sm mr-12 mb-4 sm:mb-0">
            <Logo width={96} className="mb-4 fill-textLight" />
            <p>
              <b>30 Seconds of Knowledge</b> is created, written and maintained
              <br />
              <a
                href="https://github.com/petrovicstefanrs"
                rel="noopener noreferrer"
                target="_blank"
                className="italic underline"
              >
                @petrovicstefanrs
              </a>{" "}
              and powered by Open Source projects.
            </p>
          </div>
          <div className="flex flex-row flex-wrap mt-6 sm:mt-0 sm:flex-nowrap gap-6 sm:gap-12 text-sm">
            <div className="flex flex-col gap-1.5">
              <h5 className="text-yellow font-semibold text-lg">Download</h5>
              <a
                href={DOWNLOAD_URLS.chrome}
                target="_blank"
                className="opacity-80 hover:opacity-100"
              >
                Chrome extension
              </a>
              <a
                href={DOWNLOAD_URLS.firefox}
                target="_blank"
                className="opacity-80 hover:opacity-100"
              >
                Firefox add-on
              </a>
              <a
                href={DOWNLOAD_URLS.edge}
                target="_blank"
                className="opacity-80 hover:opacity-100"
              >
                Edge add-on
              </a>
              {/* <a href={DOWNLOAD_URLS.chrome}>Opera add-on</a> */}
              <a
                href={DOWNLOAD_URLS.chrome}
                target="_blank"
                className="opacity-80 hover:opacity-100"
              >
                Brave extension
              </a>
              <a
                href={DOWNLOAD_URLS.chrome}
                target="_blank"
                className="opacity-80 hover:opacity-100"
              >
                Arc extension
              </a>
            </div>
            <div className="flex flex-col justify-end gap-1.5">
              <h5 className="text-yellow font-semibold text-lg">Community</h5>
              <a
                href="https://github.com/petrovicstefanrs/30_seconds_of_knowledge"
                target="_blank"
                className="opacity-80 hover:opacity-100"
              >
                Github
              </a>
              <a
                href="https://github.com/petrovicstefanrs/30_seconds_of_knowledge/issues"
                target="_blank"
                className="opacity-80 hover:opacity-100"
              >
                Feature requests
              </a>
              <a
                href="https://github.com/petrovicstefanrs/30_seconds_of_knowledge/issues"
                target="_blank"
                className="opacity-80 hover:opacity-100"
              >
                Report Issues
              </a>
              <a
                href="https://30-seconds-of-knowledge.creator-spring.com/"
                target="_blank"
                className="opacity-80 hover:opacity-100"
              >
                Swag store
              </a>
              <a
                href="https://30secondsofknowledge.gumroad.com/l/thhgl"
                className="opacity-80 hover:opacity-100"
              >
                One-Time Donation
              </a>
              <a
                href="https://30secondsofknowledge.gumroad.com/l/ifguu"
                className="opacity-80 hover:opacity-100"
              >
                Recurring Donation
              </a>
              <a
                href="http://eepurl.com/giRHzP"
                target="_blank"
                className="opacity-80 hover:opacity-100"
              >
                Newsletter
              </a>
            </div>
            <div className="flex flex-col gap-1.5">
              <h5 className="text-yellow font-semibold text-lg">Product</h5>
              <Link
                href="/"
                target="_blank"
                className="opacity-80 hover:opacity-100"
              >
                About Us
              </Link>
              <Link
                href="mailto:office@30secondsofknowledge.com"
                target="_blank"
                className="opacity-80 hover:opacity-100"
              >
                Contact
              </Link>
              <Link
                href="/"
                target="_blank"
                className="opacity-80 hover:opacity-100"
              >
                Media kit
              </Link>
            </div>
          </div>
        </div>
        <hr className="h-px" />
        <div className="py-12 text-footerTextDark">
          <div className="flex items-center flex-col sm:flex-row justify-between">
            <p>
              &copy;{year} &nbsp;
              <Link
                href="https://www.30secondsofknowledge.com/"
                className="underline"
              >
                30 Seconds of Knowledge
              </Link>
            </p>
            <div className="flex flex-row space-x-2.5 text-footerTextDark">
              <Link
                href="https://www.facebook.com/30secondsofknowledge"
                target="_blank"
                className="opacity-80 hover:opacity-100"
              >
                <FacebookIcon width={32} height={32} />
              </Link>
              <Link
                href="https://www.instagram.com/30secondsofknowledge?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                className="opacity-80 hover:opacity-100"
              >
                <InstagramIcon width={32} height={32} />
              </Link>
              <Link
                href="https://github.com/petrovicstefanrs/30_seconds_of_knowledge"
                target="_blank"
                className="opacity-80 hover:opacity-100"
              >
                <GithubIcon width={32} height={32} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/30-seconds-of-knowledge/"
                target="_blank"
                className="opacity-80 hover:opacity-100"
              >
                <LinkedInIcon width={32} height={32} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
