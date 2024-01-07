import React from 'react';
import { type ReactNode } from 'react';

type ISectionProps = {
  ref: HTMLDivElement | null;
} & {
  title?: string;
  description?: string;
  paddingTop?: number;
  children: ReactNode;
  autoHeight?: boolean;
  bgColor?: string;
};

const Section = React.forwardRef<HTMLDivElement, ISectionProps>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        className={`w-dvw p-4 ${
          props.autoHeight ? 'min-h-screen' : 'h-screen'
        } snap-start ${
          props.paddingTop !== undefined
            ? `pt-[${props.paddingTop}px]`
            : 'pt-[100px]'
        } ${props.bgColor ? props.bgColor : 'bg-gray-200'}`}
      >
        {(props.title || props.description) && (
          <div className="mb-12 text-center">
            {props.title && (
              <h2 className="text-4xl font-bold text-gray-900">
                {props.title}
              </h2>
            )}
            {props.description && (
              <div className="mt-4 text-xl md:px-20">{props.description}</div>
            )}
          </div>
        )}

        {props.children}
      </div>
    );
  },
);

Section.displayName = 'Section';

export { Section };
