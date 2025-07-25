import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-background sticky top-0 z-50 border-b">
      <div className="container flex h-[var(--header-height)] items-center px-4">
        <Link href="/" className="text-xl font-semibold" aria-label="홈페이지로 이동">
          <span className="font-bold">Gnar 개발 블로그</span>
        </Link>
        <nav
          className="ml-auto flex items-center gap-4"
          role="navigation"
          aria-label="메인 네비게이션"
        >
          <Link
            href="/"
            className="hover:text-primary focus:ring-primary rounded-md px-3 py-2 font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
            aria-label="홈페이지"
          >
            홈
          </Link>
          <Link
            href="/blog"
            className="hover:text-primary focus:ring-primary rounded-md px-3 py-2 font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
            aria-label="블로그 목록"
          >
            블로그
          </Link>
          <Link
            href="/about"
            className="hover:text-primary focus:ring-primary rounded-md px-3 py-2 font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
            aria-label="소개 페이지"
          >
            소개
          </Link>
        </nav>
      </div>
    </header>
  );
}
