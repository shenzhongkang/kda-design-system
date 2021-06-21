import React, { FC, forwardRef } from 'react';
import classnames from 'classnames';

export interface HeadlinePropsStrict {
  /** Adds one or more classnames for an element */
  className?: string;
  /** Set the wrapping element's tagname */
  el?: any;
  /** Set style `display: inline;` to nest Text components */
  inline?: boolean;
  /** Set style to italic */
  italic?: boolean;
  /** Headline Font size */
  size?: 'xlarge' | 'large' | 'medium' | 'small';
  /** Deemphasized text */
  subdued?: boolean;
}

export interface HeadlineProps extends HeadlinePropsStrict {
  [propName: string]: any;
}

export const Headline: FC<HeadlineProps> = forwardRef(
  (
    {
      children,
      className,
      el,
      inline,
      italic,
      subdued,
      size = 'medium',
      ...props
    },
    ref
  ) => {
    const TextClasses = classnames('Headline', className, {
      [`Headline--${size}`]: size,
      'd-i': inline,
      'fs-italic': italic,
      'fs-normal': !italic && italic != null,
      'c-neutral-90': subdued,
    });

    const newEl = () => {
      if (!el) {
        if (size === 'xlarge') {
          return 'p';
        }
        if (size === 'large') {
          return 'h1';
        }
        if (size === 'medium') {
          return 'h2';
        }
        if (size === 'small') {
          return 'h3';
        }
        return el;
      }
    };

    const HeadlineElement = newEl();

    return (
      <HeadlineElement ref={ref} className={TextClasses} {...props}>
        {children}
      </HeadlineElement>
    );
  }
);
