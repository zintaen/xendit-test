/* eslint-disable no-console */

type Params = {
  mockData: any;
  testFail?: boolean;
  timeout?: number;
  body?: {
    [key: string]: any;
  };
};

export function mockFetch({
  mockData,
  testFail = false,
  timeout = 1000,
  body,
}: Params) {
  return new Promise((resolve, reject) => {
    if (testFail) reject(new Error('Fail to fetch data'));

    setTimeout(() => {
      console.log('Fetching with body payload:', body);
      resolve(mockData);
    }, timeout);
  });
}
