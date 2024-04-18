import DownloadButton from "../../components/download-button/download-button";
import Squiggles from "../../components/icons/Squiggles";
import SquigglesX from "../../components/icons/SquigglesX";

export default function Home() {
  return (
    <>
      <main className="bg-background text-text">
        <div className="h-screen container mx-auto flex flex-col content-center justify-center">
          <div className="mx-auto text-center flex flex-col gap-8">
            <Squiggles
              width={240}
              height={200}
              className="absolute top-28 right-48 rotate-12 animate-shake"
            />

            <h1 className="text-[120px] leading-[70px] uppercase font-bold">
              30 seconds <br />
              <span className="text-[80px] leading-none">of knowledge</span>
            </h1>
            <p className="text-lg">
              Become a <b className="text-yellow">better Developer</b>, one{" "}
              <b className="text-yellow">New Tab</b> at a time.
              <br /> Get a random code snippet, from
              <b className="text-yellow"> 14 availabe categories</b>
              ,
              <br />
              that you can read and understand in
              <b className="text-yellow"> 30 seconds or less</b>.
            </p>
            <DownloadButton width={520} height={740} />
          </div>
          <SquigglesX
            width={240}
            height={200}
            className="absolute -bottom-16 left-60 rotate-180 animate-shock"
          />
        </div>
      </main>
    </>
  );
}
