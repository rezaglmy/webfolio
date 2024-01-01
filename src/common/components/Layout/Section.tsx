import type { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  paddingTop?: number;
  children: ReactNode;
  autoHeight?: boolean;
};

const Section = (props: ISectionProps) => (
  <section
    className={`w-dvw ${
      props.autoHeight ? 'min-h-screen' : 'h-screen'
    } snap-start ${
      props.paddingTop ? `pt-[${props.paddingTop}px]` : 'pt-[100px]'
    }`}
  >
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="text-4xl font-bold text-gray-900">{props.title}</h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl md:px-20">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </section>
);

export { Section };
