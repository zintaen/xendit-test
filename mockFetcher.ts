type Params = {
  mockData: any;
  testFail?: boolean;
  timeout?: number;
};

export function mockFetch({
  mockData,
  testFail = false,
  timeout = 1000,
}: Params) {
  return new Promise((resolve, reject) => {
    if (testFail) reject(new Error('Fail to fetch data'));
    setTimeout(() => resolve(mockData), timeout);
  });
}
