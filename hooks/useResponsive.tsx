import { useMediaQuery } from 'react-responsive';

import { DeviceType } from '~/types/common';

type ReturnType = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  deviceType: DeviceType;
};

export function useResponsive(): ReturnType {
  const isMobile = useMediaQuery({ maxWidth: 748 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1200 });

  let deviceType: DeviceType;

  if (isDesktop) {
    deviceType = 'desktop';
  } else if (isTablet) {
    deviceType = 'tablet';
  } else {
    deviceType = 'mobile';
  }

  return {
    isMobile,
    isTablet,
    isDesktop,
    deviceType,
  };
}
