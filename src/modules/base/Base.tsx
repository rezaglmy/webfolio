import React from 'react';

import { Footer, Header, Meta, Section } from '@/common/components';

import { AppConfig } from '../../utils/AppConfig';
import { VerticalFeatures } from './components';
import { useBase } from './hooks/useBase';
import { About, Contact, Home } from './sections';

const Base = () => {
  const {
    menuItems,
    headerIsVisible,
    handleScroll,
    scrollToSection,
    homeSectionRef,
    aboutSectionRef,
    projectsSectionRef,
    contactSectionRef,
  } = useBase();

  return (
    <div
      className="no-scrollbar h-screen snap-y snap-mandatory overflow-y-scroll"
      onScroll={handleScroll}
    >
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Header
        menuItems={menuItems}
        scrollToSection={scrollToSection}
        visible={headerIsVisible}
      />

      <Home ref={homeSectionRef} scrollToSection={scrollToSection} />

      <About ref={aboutSectionRef} />

      <Section ref={projectsSectionRef} autoHeight bgColor="bg-gray-100">
        <VerticalFeatures />
      </Section>

      <Contact ref={contactSectionRef} />

      <Footer />
    </div>
  );
};

export { Base };
