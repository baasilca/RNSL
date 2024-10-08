import EncryptedStorage from 'react-native-encrypted-storage';

const getParamsWithStatement = async (params: any) => {
  try {
    const attestationResponse = await EncryptedStorage.getItem(
      'attestationResponse',
    );
    return {
      ...params,
      statement: JSON.parse(attestationResponse || ''),
    };
  } catch (error) {
    return params;
  }
};

export default getParamsWithStatement;
