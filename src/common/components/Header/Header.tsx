import Link from 'next/link';
import { useState } from 'react';

import { Logo } from './Logo';

type Props = {
  scrollIsTop: boolean;
};

const Header = ({ scrollIsTop }: Props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="sticky top-0 w-screen bg-gray-100/30 backdrop-blur-md">
      <div className="mx-4 max-w-screen-lg px-3 py-4 md:mx-auto">
        <nav className="navbar flex items-center justify-between text-xl font-medium">
          <Link href="/" className={scrollIsTop ? 'hidden' : ''}>
            <Logo xl />
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
                <li className="my-8 border-b border-gray-400 uppercase">
                  <a href="/about">About</a>
                </li>
                <li className="my-8 border-b border-gray-400 uppercase">
                  <a href="/projects">Projects</a>
                </li>
                <li className="my-8 border-b border-gray-400 uppercase">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </section>

          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
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
