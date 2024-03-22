import { RefObject, useEffect, useState } from "react";

export const useElementVisibility = (
  windowHeight: number,
  scrollPosition: number,
  elementRef: RefObject<HTMLDivElement>
) => {
  const [isElementVisible, setIsElementVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => setIsLoading(false), []);

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      const elementPosition = element.getBoundingClientRect().y;
      setIsElementVisible(elementPosition < windowHeight);
    }
  }, [scrollPosition, isLoading]);

  return isElementVisible;
};
