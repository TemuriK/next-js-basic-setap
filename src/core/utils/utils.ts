import { envConfig } from '../config';

export const getAssetPath = (path: string) => {
  return envConfig.baseUrl + path;
};

export const getAssetPathFromCms = (path: string | undefined) => {
  return path ? `${envConfig.cmsDomain}${path || ''}` : '';
};

export const parseHtmlContentFromCms = (data: string) => {
  return data.replaceAll('/uploads', `${envConfig.cmsDomain}/uploads`);
};

export const isOddNumber = (number: number) => {
  return number % 2 !== 0;
};
