import Link from "next/link";

import FacebookIcon from "../icons/facebook";
import InstagramIcon from "../icons/instagram";
import TwitterIcon from "../icons/twitter";
import GithubIcon from "../icons/github";
import LinkedInIcon from "../icons/linkedin";
import Logo from "../logo/logo";

import { DOWNLOAD_URLS } from "../../constants/download-urls";

export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer className="mx-auto border-t-2 border-yellow bg-background text-text px-8 relative z-10">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between py-12">
          <div className="flex flex-col justify-start text-sm mr-12">
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
          <div className="flex flex-row gap-12 text-sm">
            <div className="flex flex-col gap-1.5">
              <h5 className="text-yellow font-semibold text-lg">Download</h5>
              <a href={DOWNLOAD_URLS.chrome}>Chrome extension</a>
              <a href={DOWNLOAD_URLS.firefox}>Firefox add-on</a>
              <a href={DOWNLOAD_URLS.edge}>Edge add-on</a>
              {/* <a href={DOWNLOAD_URLS.chrome}>Opera add-on</a> */}
              <a href={DOWNLOAD_URLS.chrome}>Brave extension</a>
              <a href={DOWNLOAD_URLS.chrome}>Arc extension</a>
            </div>
            <div className="flex flex-col gap-1.5">
              <h5 className="text-yellow font-semibold text-lg">Community</h5>
              <a href="https://github.com/petrovicstefanrs/30_seconds_of_knowledge">
                Github
              </a>
              <a href="https://github.com/petrovicstefanrs/30_seconds_of_knowledge/issues">
                Feature requests
              </a>
              <a href="https://github.com/petrovicstefanrs/30_seconds_of_knowledge/issues">
                Report Issues
              </a>
              <a href="https://30-seconds-of-knowledge.creator-spring.com/">
                Swag store
              </a>
              <a href="https://30secondsofknowledge.gumroad.com/l/thhgl">
                One-Time Donation
              </a>
              <a href="https://30secondsofknowledge.gumroad.com/l/ifguu">
                Recurring Donation
              </a>
              <a href="http://eepurl.com/giRHzP">Newsletter</a>
            </div>
            <div className="flex flex-col gap-1.5">
              <h5 className="text-yellow font-semibold text-lg">Product</h5>
              <Link href="/">About Us</Link>
              <Link href="mailto:office@30secondsofknowledge.com">Contact</Link>
              <Link href="/">Media kit</Link>
            </div>
          </div>
        </div>
        <hr className="h-px" />
        <div className="py-12 text-footerTextDark">
          <div className="flex items-center flex-row justify-between">
            <p>
              &copy;{year} &nbsp;
              <Link
                href="https://30secondsofknowledge.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="underline"
              >
                30 Seconds of Knowledge
              </Link>
            </p>
            <div className="flex flex-row space-x-2.5 text-footerTextDark">
              <Link href="/">
                <FacebookIcon width={32} height={32} />
              </Link>
              <Link href="/">
                <InstagramIcon width={32} height={32} />
              </Link>
              <Link href="/">
                <TwitterIcon width={32} height={32} />
              </Link>
              <Link href="/">
                <GithubIcon width={32} height={32} />
              </Link>
              <Link href="/">
                <LinkedInIcon width={32} height={32} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
