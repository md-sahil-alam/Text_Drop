import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-2">
          {/* <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white">
            T
          </div> */}

          <span className="text-xl font-bold tracking-tight text-gray-900">
            Text<span className="text-blue-500">Drop</span>
          </span>
        </Link>

        <div className="flex items-center gap-5 text-sm font-medium text-gray-600">
          <a
            href="#workspace"
            className="transition hover:text-blue-600 sm:block">
            Workspace
          </a>

          <a href="#about" className="transition hover:text-blue-600 sm:block">
            About
          </a>
        </div>
      </nav>
    </header>
  );
}
