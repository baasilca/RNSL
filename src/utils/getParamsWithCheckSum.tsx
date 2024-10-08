import Config from 'react-native-config';

const getParamsWithCheckSum = (params: any) => {
  return {
    ...params,
    checkSum: Config.CHECK_SUM,
  };
};
const getParamsWithSectionName = (params: any) => {
  return {
    ...params,
    section_name: Config.CHECK_SUM,
  };
};

export {getParamsWithCheckSum, getParamsWithSectionName};
