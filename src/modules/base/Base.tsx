import React from 'react';

import { Header, Meta, Section } from '@/common/components';

import { AppConfig } from '../../utils/AppConfig';
import { VerticalProjects } from './components';
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
      className="no-scrollbar h-screen overflow-y-scroll md:snap-y md:snap-mandatory"
      onScroll={handleScroll}
    >
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Header
        menuItems={menuItems}
        scrollToSection={scrollToSection}
        visible={headerIsVisible}
      />

      <Home ref={homeSectionRef} scrollToSection={scrollToSection} />

      <About ref={aboutSectionRef} scrollToSection={scrollToSection} />

      <Section ref={projectsSectionRef} autoHeight bgColor="bg-gray-100">
        <VerticalProjects />
      </Section>

      <Contact ref={contactSectionRef} />
    </div>
  );
};

export { Base };
