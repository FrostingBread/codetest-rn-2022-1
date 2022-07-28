import React, {ReactNode, useState} from 'react';
import {userA, userACredential} from '~/configure/conf';
import User from '~/model/user';

const AppContext = React.createContext<IAppContext>({
  user: undefined,
  loginFC: (userName: String | null, userPassword: String | null) => false,
  logoutFC: () => {},
});

export interface IAppContext {
  user: User | null | undefined;
  loginFC: {(userName: String | null, userPassword: String | null): boolean};
  logoutFC: Function;
}

const AppContextProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<User | null>(null);
  const loginFC = (userName: String | null, userPassword: String | null) => {
    let userCA = userACredential;

    if (userCA?.userName == userName && userCA?.userPassword == userPassword) {
      setUser(userA);
      //TODO: save credential
      return true;
    }
    throw 'Username or Password Mismatch';
  };

  const logoutFC = () => {
    setUser(null);
    return true;
  };

  return (
    <AppContext.Provider value={{user, loginFC, logoutFC}}>
      {children}
    </AppContext.Provider>
  );
};

export {AppContextProvider, AppContext};
