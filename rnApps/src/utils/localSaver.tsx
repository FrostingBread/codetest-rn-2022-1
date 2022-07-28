import AsyncStorage from '@react-native-async-storage/async-storage';

const storeUserSession = async (value: string) => {
  try {
    await AsyncStorage.setItem('loginSession', value);
    return true;
  } catch (e) {
    return false;
  }
};

const readUserSession = async () => {
  try {
    const value = await AsyncStorage.getItem('loginSession');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return null;
  }
};

export {storeUserSession, readUserSession};
