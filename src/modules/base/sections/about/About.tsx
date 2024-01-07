import React from 'react';

import { Section } from '@/common/components';

type Props = {
  ref: HTMLDivElement | null;
};

const About = React.forwardRef<HTMLDivElement, Props>((_props, ref) => {
  return (
    <Section ref={ref}>
      <div className="flex h-full justify-center align-middle text-3xl">
        <p>about</p>
      </div>
    </Section>
  );
});

About.displayName = 'About';

export { About };
