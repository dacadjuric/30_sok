import Link from "next/link";
import FacebookIcon from "../icons/facebook";
import InstagramIcon from "../icons/instagram";
import TwitterIcon from "../icons/twitter";
import GithubIcon from "../icons/github";
import LinkedInIcon from "../icons/linkedin";
import Logo from "../logo/logo";

export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer className="mx-auto border-t-2 border-yellow bg-background text-text px-8">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between py-12">
          <div className="flex flex-col justify-start text-sm mr-12">
            <Logo width={96} className="mb-4 fill-textLight" />
            <p>
              <b>30 Seconds of Knowledge</b> is created, written and maintained
              <br />
              <Link
                href="https://github.com/petrovicstefanrs"
                rel="noopener noreferrer"
                target="_blank"
                className="italic underline"
              >
                @petrovicstefanrs
              </Link>
              and powered by Open Source projects.
            </p>
          </div>
          <div className="flex flex-row gap-12 text-sm">
            <div className="flex flex-col gap-1.5">
              <h5 className="text-yellow font-semibold text-lg">Download</h5>
              <Link href="/">Chrome extension</Link>
              <Link href="/">Firefox add-on</Link>
              <Link href="/">Edge add-on</Link>
              <Link href="/">Opera add-on</Link>
              <Link href="/">Brave extension</Link>
              <Link href="/">Arc extension</Link>
            </div>
            <div className="flex flex-col gap-1.5">
              <h5 className="text-yellow font-semibold text-lg">Community</h5>
              <Link href="/">Github</Link>
              <Link href="/">Feature requests</Link>
              <Link href="/">Report Issues</Link>
              <Link href="/">Swag store</Link>
              <Link href="/">Newsletter</Link>
            </div>
            <div className="flex flex-col gap-1.5">
              <h5 className="text-yellow font-semibold text-lg">Product</h5>
              <Link href="/">About Us</Link>
              <Link href="/">Contact</Link>
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
            <div className="flex flex-row space-x-0.5 text-footerTextDark">
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
