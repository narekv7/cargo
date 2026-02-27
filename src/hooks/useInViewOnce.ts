import { useEffect, useRef, useState } from "react";

export type UseInViewOnceOptions = IntersectionObserverInit & {
  /**
   * If true, the element is treated as visible immediately.
   * Useful as a safety fallback or for disabling animations.
   */
  defaultVisible?: boolean;
};

export interface UseInViewOnceResult<T extends HTMLElement> {
  ref: React.RefObject<T>;
  isVisible: boolean;
}

/**
 * Small IntersectionObserver hook that tracks whether the element
 * is currently within the viewport. Visibility toggles as you scroll
 * in and out, so animations can replay every time.
 */
export function useInViewOnce<T extends HTMLElement = HTMLElement>(
  options?: UseInViewOnceOptions
): UseInViewOnceResult<T> {
  const { defaultVisible = false, ...observerOptions } = options || {};
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(defaultVisible);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Fallback for very old browsers or environments without IntersectionObserver.
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target === node) {
            setIsVisible(entry.isIntersecting);
          }
        }
      },
      {
        root: observerOptions.root ?? null,
        // Treat element as visible as long as ANY part is in viewport,
        // so we only reset once it's fully out of view.
        rootMargin: observerOptions.rootMargin ?? "0px",
        threshold: observerOptions.threshold ?? 0,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [isVisible, observerOptions.root, observerOptions.rootMargin, observerOptions.threshold]);

  return { ref, isVisible };
}

