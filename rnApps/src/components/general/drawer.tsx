import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React, {useContext} from 'react';
import {AppContext} from '~/provider/appsContextProvider';

const CustomDrawerContent = (props: any) => {
  const context = useContext(AppContext);

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Logout"
        onPress={() => {
          context.logoutFC();
        }}
      />
    </DrawerContentScrollView>
  );
};
export default CustomDrawerContent;
