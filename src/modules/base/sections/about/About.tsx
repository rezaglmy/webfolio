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

const SkillItem = ({
  name,
  level,
}: {
  name: string;
  level: 1 | 2 | 3 | 4 | 5;
}) => {
  return (
    <li className="mr-1.6 relative mb-1 overflow-hidden rounded-lg border border-gray-400 bg-gray-200 px-2.5 py-1 text-center leading-relaxed text-black">
      <div
        className={`absolute inset-y-0 left-0 ${
          level < 5 ? `w-${level}/5` : 'w-full'
        } bg-gray-400`}
      ></div>
      <span className="relative">{name}</span>
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
              <SkillItem name="JavaScript" level={5} />
              <SkillItem name="TypeScript" level={5} />
              <SkillItem name="React" level={5} />
              <SkillItem name="Next.js" level={5} />
              <SkillItem name="Node.js" level={5} />
              <SkillItem name="Express" level={5} />
              <SkillItem name="MongoDB" level={4} />
              <SkillItem name="MySQL" level={4} />
              <SkillItem name="Docker" level={3} />
              <SkillItem name="Git" level={3} />
              <SkillItem name="Tailwind CSS" level={2} />
              <SkillItem name="Vercel" level={1} />
              <SkillItem name="Netlify" level={1} />
            </ul>
          </div>
        </div>
      </Section>
    );
  },
);

About.displayName = 'About';

export { About };
