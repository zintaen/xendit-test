import { GetServerSidePropsContext } from 'next';
import { Context as ResponsiveContext } from 'react-responsive';
import UAParser from 'ua-parser-js';

const values = {
  mobile: 748,
  tablet: 768,
};

export type ResponsiveValueProp = {
  responsiveValue: number;
}

export function ssrGetResponsiveValue(context: GetServerSidePropsContext): number {
  const userAgent = new UAParser(context.req.headers['user-agent']);
  const deviceType = userAgent.getDevice().type;

  return values[deviceType] || 1200;
}

export const ResponsiveProvider = ResponsiveContext.Provider;
