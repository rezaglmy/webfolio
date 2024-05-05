import React from 'react';

import { Section } from '@/common/components';
import { Button } from '@/common/ui';
import { AppConfig } from '@/utils/AppConfig';

import { MenuEnum } from '../../hooks/useBase';

type Props = {
  ref: HTMLDivElement | null;
} & {
  scrollToSection: (item: MenuEnum) => void;
};

const SkillItem = ({ name }: { name: string }) => {
  return (
    <li className="mr-1.6 relative mb-1 overflow-hidden rounded-lg border border-gray-400 bg-gray-400 px-2.5 py-1 text-center leading-relaxed text-black">
      {name}
    </li>
  );
};

const About = React.forwardRef<HTMLDivElement, Props>(
  ({ scrollToSection }, ref) => {
    return (
      <Section ref={ref}>
        <div className="grid h-full grid-cols-2 gap-8 px-64 md:mt-32 md:flex-row md:items-start">
          <div className="text-center  md:text-left">
            <h1 className="text-3xl font-semibold text-gray-900">ABOUT ME</h1>
            <p className="mt-4 max-w-screen-sm text-lg text-gray-700">
              {AppConfig.about_description}
            </p>
            <div className="mt-4">
              <Button
                type="primary"
                onClick={() => scrollToSection(MenuEnum.CONTACT)}
              >
                {MenuEnum.CONTACT}
              </Button>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-semibold text-gray-900">SKILLS</h1>
            <ul className="mt-4 grid grid-cols-4 gap-4 text-base font-semibold leading-relaxed">
              <SkillItem name="JavaScript" />
              <SkillItem name="TypeScript" />
              <SkillItem name="React" />
              <SkillItem name="Next.js" />
              <SkillItem name="Node.js" />
              <SkillItem name="Express" />
              <SkillItem name="MongoDB" />
              <SkillItem name="MySQL" />
              <SkillItem name="Docker" />
              <SkillItem name="Git" />
              <SkillItem name="Tailwind CSS" />
              <SkillItem name="Vercel" />
              <SkillItem name="Netlify" />
            </ul>
          </div>
        </div>
      </Section>
    );
  },
);

About.displayName = 'About';

export { About };
