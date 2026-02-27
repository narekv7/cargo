import React from "react";
import { useInViewOnce } from "../../hooks/useInViewOnce";

type Variant = "left" | "right" | "up" | "top";

export interface AnimatedSectionProps
  extends React.HTMLAttributes<HTMLElement> {
  /**
   * Which direction the content should animate in from.
   * - "left": slide in from the left
   * - "right": slide in from the right
   * - "up": slide in from the bottom
   * - "top": slide in from the top
   */
  variant?: Variant;
  /**
   * Semantic element to render as, e.g. "section", "div", "article".
   */
  as?: React.ElementType;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  as: Component = "section",
  variant = "up",
  className = "",
  children,
  ...rest
}) => {
  const { ref, isVisible } = useInViewOnce<HTMLElement>();

  const directionClass =
    variant === "left"
      ? "from-left"
      : variant === "right"
        ? "from-right"
        : variant === "top"
          ? "from-top"
          : "from-bottom";

  const classes = [
    "animate-on-scroll",
    directionClass,
    isVisible ? "is-visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const ComponentToRender = Component as React.ElementType;

  return (
    <ComponentToRender
      ref={ref as React.RefObject<any>}
      className={classes}
      {...rest}
    >
      {children}
    </ComponentToRender>
  );
};

