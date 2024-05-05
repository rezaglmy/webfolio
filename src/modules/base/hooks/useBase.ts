import type { RefObject } from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';

export enum MenuEnum {
  HOME = 'Home',
  ABOUT = 'About',
  PROJECTS = 'Projects',
  CONTACT = 'Contact',
}

export type MenuItem = {
  title: MenuEnum;
  isActive: boolean;
};

type UseBaseResult = {
  menuItems: MenuItem[];
  headerIsVisible: boolean;
  handleScroll: (event: any) => void;
  scrollToSection: (item: MenuEnum) => void;
  homeSectionRef: RefObject<HTMLDivElement>;
  aboutSectionRef: RefObject<HTMLDivElement>;
  projectsSectionRef: RefObject<HTMLDivElement>;
  contactSectionRef: RefObject<HTMLDivElement>;
};

export const useBase = (): UseBaseResult => {
  const [, setScrollTop] = useState(0);
  const [headerIsVisible, setHeaderIsVisible] = useState(false);
  const homeSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = (event: any) => {
    setScrollTop(event.currentTarget.scrollTop);
  };

  const homeSectionElement = useMemo(() => {
    return homeSectionRef.current?.getBoundingClientRect();
  }, [homeSectionRef.current?.getBoundingClientRect()]);

  const aboutSectionElement = useMemo(() => {
    return aboutSectionRef.current?.getBoundingClientRect();
  }, [aboutSectionRef.current?.getBoundingClientRect()]);

  const projectsSectionElement = useMemo(() => {
    return projectsSectionRef.current?.getBoundingClientRect();
  }, [projectsSectionRef.current?.getBoundingClientRect()]);

  const contactSectionElement = useMemo(() => {
    return contactSectionRef.current?.getBoundingClientRect();
  }, [contactSectionRef.current?.getBoundingClientRect()]);

  const scrollToSection = (menu: MenuEnum) => {
    let sectionRef;
    switch (menu) {
      case MenuEnum.HOME:
        sectionRef = homeSectionRef;
        break;
      case MenuEnum.ABOUT:
        sectionRef = aboutSectionRef;
        break;
      case MenuEnum.PROJECTS:
        sectionRef = projectsSectionRef;
        break;
      case MenuEnum.CONTACT:
        sectionRef = contactSectionRef;
        break;

      default:
        sectionRef = homeSectionRef;
        break;
    }
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const checkActiveMenu = (menu: MenuEnum) => {
    let currentElement;
    let prevElement;
    switch (menu) {
      case MenuEnum.HOME:
        currentElement = homeSectionElement;
        prevElement = null;
        break;
      case MenuEnum.ABOUT:
        currentElement = aboutSectionElement;
        prevElement = homeSectionElement;
        break;
      case MenuEnum.PROJECTS:
        currentElement = projectsSectionElement;
        prevElement = aboutSectionElement;
        break;
      case MenuEnum.CONTACT:
        currentElement = contactSectionElement;
        prevElement = projectsSectionElement;
        break;

      default:
        currentElement = homeSectionElement;
        prevElement = null;
        break;
    }

    const isActive =
      (currentElement?.top as number) >
        -(
          (currentElement?.height as number) -
          ((currentElement?.height as number) % 1)
        ) &&
      (currentElement?.bottom as number) <=
        (currentElement?.height as number) +
          (prevElement ? (prevElement?.height as number) % 1 : 0);

    return isActive;
  };

  const menuItems = useMemo(
    () => [
      {
        title: MenuEnum.HOME,
        isActive: checkActiveMenu(MenuEnum.HOME),
      },
      {
        title: MenuEnum.ABOUT,
        isActive: checkActiveMenu(MenuEnum.ABOUT),
      },
      {
        title: MenuEnum.PROJECTS,
        isActive: checkActiveMenu(MenuEnum.PROJECTS),
      },
      {
        title: MenuEnum.CONTACT,
        isActive: checkActiveMenu(MenuEnum.CONTACT),
      },
    ],
    [
      homeSectionElement?.top,
      aboutSectionElement?.top,
      projectsSectionElement?.top,
      contactSectionElement?.top,
    ],
  );

  useEffect(() => {
    const activeMenu = menuItems?.find((item) => item.isActive);
    if (activeMenu) {
      setHeaderIsVisible(activeMenu.title !== MenuEnum.HOME);
    }
  }, [menuItems]);

  return {
    menuItems,
    headerIsVisible,
    handleScroll,
    scrollToSection,
    homeSectionRef,
    aboutSectionRef,
    projectsSectionRef,
    contactSectionRef,
  };
};
