import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

const CustomHooks = () => {
  const isMobile: boolean = useMediaQuery("(max-width:320px)");
  const isTablet: boolean = useMediaQuery(
    "(min-width: 321px) and (max-width:768px)"
  );
  const isDesktop: boolean = useMediaQuery("(min-width:769px)");
  return (
    <>
      {isMobile && <span>Hello Mobile</span>}
      {isTablet && <span>Hello Tablet</span>}
      {isDesktop && <span>Hello Desktop</span>}
    </>
  );
};

export default CustomHooks;
