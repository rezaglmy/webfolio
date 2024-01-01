import React from 'react';

import { Footer, Header, Meta, Section } from '@/common/components';

import { AppConfig } from '../../utils/AppConfig';
import { VerticalFeatures } from './components';
import { useHome } from './hooks/useHome';

const Home = () => {
  const {
    menuItems,
    scrollIsTop,
    handleScroll,
    scrollToSection,
    homeSectionRef,
    aboutSectionRef,
    projectsSectionRef,
    contactSectionRef,
  } = useHome();

  return (
    <div
      className="no-scrollbar h-screen snap-y snap-mandatory overflow-y-scroll text-gray-600"
      onScroll={handleScroll}
    >
      <Meta title={AppConfig.title} description={AppConfig.description} />
      {!scrollIsTop && (
        <Header menuItems={menuItems} scrollToSection={scrollToSection} />
      )}

      <Section ref={homeSectionRef} paddingTop={0}>
        <div className="flex h-full justify-center bg-gray-200 align-middle text-3xl">
          <p>home</p>
        </div>
      </Section>
      <Section ref={aboutSectionRef}>
        <div className="flex h-full justify-center bg-gray-200 align-middle text-3xl">
          <p>about</p>
        </div>
      </Section>
      <Section ref={projectsSectionRef} autoHeight>
        <VerticalFeatures />
      </Section>
      <Section ref={contactSectionRef}>
        <div className="flex h-full justify-center bg-gray-200 align-middle text-3xl">
          <p>contact</p>
        </div>
      </Section>
      <Section>
        <Footer />
      </Section>
    </div>
  );
};

export { Home };
