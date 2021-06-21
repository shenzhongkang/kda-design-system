import React, { FC, forwardRef, useEffect } from 'react';
import classnames from 'classnames';
import { Headline } from '../Headline';

export interface TextPropsStrict {
  /** Bold */
  bold?: boolean;
  /** Adds one or more classnames for an element */
  className?: string;
  /** Set the wrapping element's tagname */
  el?: any;
  /** *Deprecated* Use `bold` prop instead */
  headline?: boolean;
  /** Set style `display: inline` to nest Text components */
  inline?: boolean;
  /** Set style to italic */
  italic?: boolean;
  /** Font size, 1 for smallest, 6 for largest */
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | '1' | '2' | '3' | '4' | '5' | '6' | '7';
  /** Deemphasized text */
  subdued?: boolean;
}

export interface TextProps extends TextPropsStrict {
  [propName: string]: any;
}

export const Text: FC<TextProps> = forwardRef(
  (
    {
      bold,
      children,
      className,
      el: TextElement = 'p',
      headline,
      inline,
      italic,
      size = 3,
      subdued,
      ...props
    },
    ref
  ) => {
    useEffect(() => {
      console.warn(
        '@kda/design-system: The Text component will be deprecated. Please use Headline, BodyText, or Eyebrow component instead.'
      );
      if (!headline) {
        return;
      }
      console.warn(
        '@kda/design-system: The `headline` prop of the Text component has been deprecated. Please use `bold` instead.'
      );
    });

    const TextClasses = classnames('Text', className, {
      [`fs-${size}`]: !inline,
      'fw-bold': bold || headline,
      'fw-normal': !bold && bold != null,
      'd-i': inline,
      'fs-italic': italic,
      'fs-normal': !italic && italic != null,
      'c-neutral-90': subdued,
      'ff-display lh-display fw-bold': size === 7 || size === '7',
    });

    if (size === 6 || size === '6') {
      const headlineProps = {
        children,
        className,
        inline,
        italic,
        subdued,
        ...props,
      };

      return (
        <Headline ref={ref} size="xlarge" el={TextElement} {...headlineProps} />
      );
    }

    return (
      <TextElement ref={ref} className={TextClasses} {...props}>
        {children}
      </TextElement>
    );
  }
);
