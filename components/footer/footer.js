import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-row flex-wrap justify-between items-start  ">
      <div className=" flex flex-col ">
        <p>Link 1</p>
        <p>Link 1</p>
        <p>Link 1</p>
        <p>Link 1</p>
        <p>Link 1</p>
      </div>
      <div>
        <h1>Ovo je neki text</h1>
      </div>
      <div className="flex flex-col justify-end">
        <Link href="/home">Home</Link>
        <Link href="/home">Privacy</Link>
        <Link href="/home">TOS</Link>
        <Link href="/home">Download</Link>
        <Link href="/home">Press kit</Link>
        <Link href="/home">Buy merch</Link>
      </div>
    </footer>
  );
}
