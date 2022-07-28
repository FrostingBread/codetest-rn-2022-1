import React, {ReactNode, useEffect, useState} from 'react';
import Snackbar from 'react-native-snackbar';
import {userA, userACredential} from '~/configure/conf';
import User from '~/model/user';
import {readUserSession, storeUserSession} from '~/utils/localSaver';

const AppContext = React.createContext<IAppContext>({
  user: undefined,
  isInitComplete: false,
  loginFC: async (userName: string | null, userPassword: string | null) =>
    false,
  logoutFC: () => {},
});

export interface IAppContext {
  user: User | null | undefined;
  isInitComplete: boolean;
  loginFC: {
    (userName: string | null, userPassword: string | null): Promise<boolean>;
  };
  logoutFC: Function;
}

const AppContextProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isInitComplete, setIsInitComplete] = useState<boolean>(false);
  const loginFC = async (
    userName: string | null,
    userPassword: string | null,
  ) => {
    let userCA = userACredential;
    if (userCA?.userName == userName && userCA?.userPassword == userPassword) {
      setUser(userA);
      await storeUserSession(JSON.stringify(userCA));
      return true;
    }
    throw 'Username or Password Mismatch';
  };

  const logoutFC = () => {
    setUser(null);
    storeUserSession('{}');
    return true;
  };

  //check already login
  useEffect(() => {
    readUserSession()
      .then(async e => {
        if (e != null) {
          let t = JSON.parse(e);
          await loginFC(t?.userName, t?.userPassword);
          setIsInitComplete(true);
        }
      })
      .catch(e => {
        setIsInitComplete(true);
      });
    setIsInitComplete(true);
  }, []);

  return (
    <AppContext.Provider value={{user, isInitComplete, loginFC, logoutFC}}>
      {children}
    </AppContext.Provider>
  );
};

export {AppContextProvider, AppContext};
