import { createContext, useState, useEffect, PropsWithChildren } from "react";

export const MobileContext = createContext<boolean>(false);

export const MobileContextProvider = ({ children }: PropsWithChildren) => {
  const [isMobileDevice, setIsMobileDevice] = useState(
    window.innerWidth <= 750
  );

  const handleResize = () => {
    setIsMobileDevice(window.innerWidth <= 750);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MobileContext.Provider value={isMobileDevice}>
      {children}
    </MobileContext.Provider>
  );
};
