import tokens from '@kda/tokens';
import windowSize from '@react-hook/window-size';

export const useScreenSize = () => {
  const [innerWidth, innerHeight] = windowSize.useWindowSize();
  const orientation = innerWidth > innerHeight ? 'landscape' : 'portrait';

  const smallerThan = {
    mobile: innerWidth <= parseFloat(tokens.breakpointMobileLarge),
    tablet: innerWidth <= parseFloat(tokens.breakpointTablet),
    desktop: innerWidth <= parseFloat(tokens.breakpointDesktop),
    large: innerWidth <= parseFloat(tokens.breakpointLarge),
    widescreen: innerWidth <= parseFloat(tokens.breakpointWidescreen),
  };

  const largerThan = {
    mobile: innerWidth > parseFloat(tokens.breakpointMobileLarge),
    tablet: innerWidth > parseFloat(tokens.breakpointTablet),
    desktop: innerWidth > parseFloat(tokens.breakpointDesktop),
    large: innerWidth > parseFloat(tokens.breakpointLarge),
    widescreen: innerWidth > parseFloat(tokens.breakpointWidescreen),
  };

  return {
    smallerThan,
    largerThan,
    innerWidth,
    innerHeight,
    orientation,
  };
};
