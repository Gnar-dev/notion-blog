import React from 'react';

const FRONTEND_MENUS = [
  { label: 'HTML/CSS', href: '/about/html-css' },
  { label: 'JavaScript', href: '/about/javascript' },
  { label: 'TypeScript', href: '/about/typescript' },
  { label: 'React', href: '/about/react' },
  { label: 'Next.js', href: '/about/nextjs' },
  { label: 'UI/UX', href: '/about/ui-ux' },
  { label: '도구 & 환경', href: '/about/tools' },
];

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto flex gap-8 py-8">
      <aside className="w-64 shrink-0 border-r pr-6">
        <nav>
          <ul className="space-y-2">
            {FRONTEND_MENUS.map((menu) => (
              <li key={menu.href}>
                <a
                  href={menu.href}
                  className="hover:text-primary block rounded px-3 py-2 text-base font-medium transition-colors hover:bg-gray-100"
                >
                  {menu.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  );
}
