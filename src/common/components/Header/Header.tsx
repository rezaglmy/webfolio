import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/common/ui';
import type { MenuEnum, MenuItem } from '@/modules/base/hooks/useBase';
import { AppConfig } from '@/utils/AppConfig';

import { Logo } from './Logo';

type Props = {
  menuItems: MenuItem[];
  scrollToSection: (item: MenuEnum) => void;
  visible: boolean;
};

const Header = ({ menuItems, scrollToSection, visible = false }: Props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleSelectMenu = (menu: MenuEnum) => {
    scrollToSection(menu);
    setIsNavOpen(false);
  };

  return (
    <div
      className={`sticky top-0 z-50 w-screen bg-gray-200/70 backdrop-blur-lg ${
        visible ? 'visible h-[80px] md:h-[100px]' : 'invisible h-0'
      }`}
    >
      <div className="mx-4 h-full max-w-screen-lg p-3 md:mx-auto md:py-4">
        <nav className="navbar flex h-full items-center justify-between text-xl font-medium">
          <Link href="/">
            <Logo withTitle />
          </Link>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
              <div
                className="absolute right-0 top-0 p-6"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex min-h-[250px] flex-col items-center justify-between">
                {menuItems.map((item, index) => (
                  <li
                    key={`mobile-menu-${index}`}
                    className={`my-8 border-b border-gray-400 uppercase ${
                      item.isActive ? 'text-primary-500' : ''
                    }`}
                  >
                    <p
                      className="cursor-pointer"
                      onClick={() => handleSelectMenu(item.title)}
                    >
                      {item.title}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
            {menuItems.map((item, index) => (
              <li
                key={`desktop-menu-${index}`}
                className={`${item.isActive ? 'text-primary-500' : ''}`}
              >
                <p
                  className="cursor-pointer"
                  onClick={() => handleSelectMenu(item.title)}
                >
                  {item.title}
                </p>
              </li>
            ))}
            <li className="header-icon-list flex items-center justify-center md:justify-start">
              <Link
                href={`https://github.com/${AppConfig.contact.github_username}`}
                target="_blank"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </Link>
              <Link
                href={`https://www.linkedin.com/in/${AppConfig.contact.linkedin_username}`}
                target="_blank"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link href={`mailto:${AppConfig.contact.email}`}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.585 5.267c1.834 0 3.558.811 4.824 2.08v.004c0-.609.41-1.068.979-1.068h.145c.891 0 1.073.842 1.073 1.109l.005 9.475c-.063.621.64.941 1.029.543 1.521-1.564 3.342-8.038-.946-11.79-3.996-3.497-9.357-2.921-12.209-.955-3.031 2.091-4.971 6.718-3.086 11.064 2.054 4.74 7.931 6.152 11.424 4.744 1.769-.715 2.586 1.676.749 2.457-2.776 1.184-10.502 1.064-14.11-5.188C-.977 13.521-.847 6.093 5.62 2.245 10.567-.698 17.09.117 21.022 4.224c4.111 4.294 3.872 12.334-.139 15.461-1.816 1.42-4.516.037-4.498-2.031l-.019-.678c-1.265 1.256-2.948 1.988-4.782 1.988-3.625 0-6.813-3.189-6.813-6.812 0-3.659 3.189-6.885 6.814-6.885zm4.561 6.623c-.137-2.653-2.106-4.249-4.484-4.249h-.09c-2.745 0-4.268 2.159-4.268 4.61 0 2.747 1.842 4.481 4.256 4.481 2.693 0 4.464-1.973 4.592-4.306l-.006-.536z" />
                </svg>
              </Link>
              <Link
                href="/assets/john-doe-resume.pdf"
                target="_blank"
                className="-mt-1"
              >
                <Button sm>Resume</Button>
              </Link>
            </li>
          </ul>
        </nav>

        <style jsx>
          {`
            .header-icon-list :global(a:not(:last-child)) {
              @apply mr-3;
            }

            .header-icon-list :global(a) {
              @apply text-gray-500;
            }

            .header-icon-list :global(a:hover) {
              @apply text-gray-700;
            }

            .header-icon-list :global(svg) {
              @apply fill-current w-5 h-5;
            }
          `}
        </style>

        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>
    </div>
  );
};

export { Header };
