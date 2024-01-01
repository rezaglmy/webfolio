import { debounce } from 'lodash';
import { useState } from 'react';

import { Footer, Header, Meta, Section } from '@/common/components';

import { AppConfig } from '../../utils/AppConfig';
import { VerticalFeatures } from './components';

const Home = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const updateScrollTopValue = debounce((value: number) => {
    setScrollTop(value);
  }, 100);

  const handleScroll = (event: any) => {
    updateScrollTopValue(event.currentTarget.scrollTop);
  };

  return (
    <div
      className="no-scrollbar h-screen snap-y snap-mandatory overflow-y-scroll text-gray-600"
      onScroll={handleScroll}
    >
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Header scrollIsTop={scrollTop <= 100} />
      <Section>
        <div className="h-full bg-gray-200 text-3xl">test</div>
      </Section>
      <Section autoHeight>
        <VerticalFeatures />
      </Section>
      <Section>
        <Footer />
      </Section>
    </div>
  );
};

export { Home };
