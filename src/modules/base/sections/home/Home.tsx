import React from 'react';

import { Section } from '@/common/components';
import { Logo } from '@/common/components/Header/Logo';
import { Button } from '@/common/ui';
import { AppConfig } from '@/utils/AppConfig';

import { MenuEnum } from '../../hooks/useBase';

type Props = {
  ref: HTMLDivElement | null;
} & {
  scrollToSection: (item: MenuEnum) => void;
};

const Home = React.forwardRef<HTMLDivElement, Props>(
  ({ scrollToSection }, ref) => {
    return (
      <Section ref={ref} paddingTop={0} bgColor="bg-gray-100">
        <div className="flex h-full flex-col items-center justify-center gap-8 md:flex-row">
          <div className="sm:block">
            <Logo large />
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-3xl font-semibold text-gray-900">
              {AppConfig.home.title}
            </h1>
            <p className="text-xl font-medium text-gray-500">
              {AppConfig.home.stack}
            </p>
            <p className="mt-4 max-w-screen-sm text-lg text-gray-700">
              {AppConfig.home.description}
            </p>
            <nav className="navbar mt-4 flex items-center justify-center md:justify-start">
              <ul className="flex space-x-4 md:space-x-8">
                <li>
                  <Button
                    type="primary"
                    onClick={() => scrollToSection(MenuEnum.ABOUT)}
                  >
                    More info
                  </Button>
                </li>
                <li>
                  <Button onClick={() => scrollToSection(MenuEnum.PROJECTS)}>
                    {MenuEnum.PROJECTS}
                  </Button>
                </li>
                <li>
                  <Button onClick={() => scrollToSection(MenuEnum.CONTACT)}>
                    {MenuEnum.CONTACT}
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Section>
    );
  },
);

Home.displayName = 'Home';

export { Home };
