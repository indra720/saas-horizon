import * as React from "react";

const MD_BREAKPOINT = 1024; // This will cover md and smaller screens

export function useIsMdAndSmaller() {
  const [isMdAndSmaller, setIsMdAndSmaller] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MD_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMdAndSmaller(window.innerWidth < MD_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMdAndSmaller(window.innerWidth < MD_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMdAndSmaller;
}
