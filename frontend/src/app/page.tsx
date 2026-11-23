import Navbar from "@/components/Navbar";
import ShareForm from "@/components/ShareForm";
import ViewForm from "@/components/ViewForm";
import Workspace from "@/components/Workspace";
import { ShieldCheck, Clock, Zap, Link } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Workspace */}
      <Workspace />
      {/* Benefits */}
      <section className="border-y border-gray-100 bg-gray-50/70 px-5 py-10">
        <div className="mx-auto  grid  max-w-5xl gap-8 sm:grid-cols-3">
          <div className="flex items-center justify-center gap-3  border border-gray-200 p-6  ">
            <ShieldCheck className="text-blue-600" size={25} />
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Password Protected
              </h3>
              <p className="text-xs text-gray-500">
                Access your text with credentials
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3  border border-gray-200 p-8">
            <Clock className="text-blue-600" size={25} />
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Auto Expiry
              </h3>
              <p className="text-xs text-gray-500">
                Text expires after 24 hours
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3  border border-gray-200 p-6">
            <Zap className="text-blue-600" size={25} />
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                Simple & Fast
              </h3>
              <p className="text-xs text-gray-500">
                No complicated registration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-gray-100 px-5 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Simple and Fast Online Text Sharing
          </h2>

          <p className="mt-5 leading-8 text-gray-500">
            Text Drop is a simple and convenient online text sharing tool that
            lets you share text, notes, code snippets, links, and important
            information with anyone. Create a text-sharing room using a custom
            username and password, then let others access your shared content
            using the same credentials. Whether you want to share notes online,
            transfer text between devices, or quickly share code snippets with
            friends and teammates, Text Drop makes text sharing fast, simple,
            and hassle-free.
          </p>
        </div>
      </section>

      {/* about creator */}
      {/* <section
        className="border-t bg-slate-900 border-gray-900 px-5 py-16 "
        id="about">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-100">
            About the Creator
          </h2>

          <p className="mt-5 leading-8 text-gray-300">
            Text Drop is built by{" "}
            <a
              href="https://www.mdsahilalam.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold  text-blue-500 underline ">
              Md Sahil Alam
            </a>
            , Bengaluru based software engineer and founder of{" "}
            <a
              href="https://pgnear.in"
              target="blank"
              className="text-blue-500 font-bold underline italic">
              PG Near
            </a>
            . He builds scalable full-stack web applications and digital
            products focused on creating products that solve real-world problems
            through clean architecture, performance, and great user experience.
            Text Drop is another project created by him to make sharing text,
            notes, and code snippets easier.
          </p>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
          {/* Main Footer */}
          <div className="  grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="/" className="inline-flex items-center gap-2">
                <span className="text-2xl font-bold tracking-tight text-white">
                  Text<span className="text-blue-400">Drop</span>
                </span>
              </a>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
                Text Drop is a simple online text-sharing tool that makes it
                easy to share text, notes, code snippets, links, and important
                information using a custom username and password. Create a
                text-sharing room and access your content whenever you need it.
                Fast, simple, and hassle-free text sharing.
              </p>

              <p className="mt-5 text-sm text-slate-400">
                Share text online. Keep things simple.
              </p>
            </div>

            {/* Product Links */}
            {/* <div className="flex justify-between"> */}
            <div className="">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                Text Drop
              </h3>

              <ul className="space-y-3 text-sm">
                <li>
                  <a href="/" className="transition hover:text-blue-400">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#workspace"
                    className="transition hover:text-blue-400">
                    Share Text Online
                  </a>
                </li>
                <li>
                  <a
                    href="#workspace"
                    className="transition hover:text-blue-400">
                    View Shared Text
                  </a>
                </li>
              </ul>
            </div>
            {/* Developer Links */}
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                Connect
              </h3>

              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="https://www.mdsahilalam.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-blue-400">
                    Personal Website
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/md-sahil-alam-software-developer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-blue-400">
                    LinkedIn
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/md-sahil-alam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-blue-400">
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:developer.sahil@gmail.com"
                    className="transition hover:text-blue-400">
                    Email
                  </a>
                </li>
                {/* <li>
                  <a
                    href="https://x.com/sahil_codex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-blue-400">
                    X (Twitter)
                  </a>
                </li> */}

                {/* <li>
                  <a
                    href="https://www.instagram.com/buildwith.mdsahil/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-blue-400">
                    Instagram
                  </a>
                </li> */}
              </ul>
            </div>
            {/* </div> */}
          </div>

          {/* Creator Branding */}
          <div className="mt-14 rounded-2xl border border-slate-700 bg-slate-800/60 p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              Built by
            </p>

            <h3 className="mt-3 text-lg font-semibold text-white">
              Md Sahil Alam
            </h3>

            <p className="mt-5 leading-8 text-gray-300">
              Text Drop is built by{" "}
              <a
                href="https://www.mdsahilalam.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold  text-blue-500 underline ">
                Md Sahil Alam
              </a>{" "}
              Bengaluru based software engineer and founder of{" "}
              <a
                href="https://pgnear.in"
                target="blank"
                className="text-blue-500 font-bold underline italic">
                PG Near
              </a>
              . He builds scalable full-stack web applications and digital
              products, focused on creating products that solve real world
              problems through clean architecture, performance, and great user
              experience. Text Drop is another project created by him to make
              sharing text, notes, and code snippets easier.
            </p>
            <a
              href="https://www.mdsahilalam.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300">
              Explore my portfolio
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {/* Bottom Bar */}
          <div
            className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-7 text-center text-xs text-slate-500 sm:flex-row sm:text-left"
            id="about">
            <p>© {new Date().getFullYear()} Text Drop. All rights reserved.</p>

            <p>
              Designed & Developed by{" "}
              <a
                href="https://www.mdsahilalam.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-300 transition hover:text-blue-400">
                Md Sahil Alam
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
