import { debounce } from 'lodash';
import { useState } from 'react';

import { Footer, Header, Meta, Section } from '@/common/components';

import { AppConfig } from '../../utils/AppConfig';
import { VerticalFeatureRow } from './components/VerticalFeatures/VerticalFeatureRow';

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
        <VerticalFeatureRow
          title="Your title here"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
          image="/assets/images/feature.svg"
          imageAlt="First feature alt text"
        />
      </Section>
      <Section>
        <VerticalFeatureRow
          title="Your title here"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
          image="/assets/images/feature2.svg"
          imageAlt="Second feature alt text"
          reverse
        />
      </Section>
      <Section>
        <VerticalFeatureRow
          title="Your title here"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
          image="/assets/images/feature3.svg"
          imageAlt="Third feature alt text"
        />
        <Footer />
      </Section>
    </div>
  );
};

export { Home };
