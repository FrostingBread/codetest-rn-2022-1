import AsyncStorage from '@react-native-async-storage/async-storage';

const storeUserSession = async (value: string) => {
  try {
    await AsyncStorage.setItem('loginCred', value).catch(() => {
      throw 'Cannot save credential';
    });
    return true;
  } catch (e) {
    throw e;
  }
};

const readUserSession = async (): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem('loginCred');
    return value;
  } catch (e) {
    return null;
  }
};

export {storeUserSession, readUserSession};
