import BottomNav from "./components/navigation/bottom-nav";
import Main from "./components/main";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around">
      <div>
        <h1>Hello and welcome to my portfolio, thanks for stoping by.</h1>
        <p>I&apos;m a software engineer working for AWS.</p>
        <p>
          I&apos;m currently making this page more like an RPG game but it is in
          development.
        </p>
        <br />
        <h1>
          If you&apos;re looking to hire, here&apos;s my{" "}
          <a className = "link"href="/Aug2023.pdf">resume.</a>
        </h1>
         {/* <div>
          <Main/>
        </div> */}
      </div>
      {/* <BottomNav/> */}
    </main>
  );
}
