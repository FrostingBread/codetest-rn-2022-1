import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RootStackParamList from '~/route/routeType';
//@ts-ignore
import Icon from 'react-native-vector-icons/Feather';
import {DrawerActions} from '@react-navigation/native';

type Props = {navigation: StackScreenProps<RootStackParamList>['navigation']};

const MenuButton: React.FC<Props> = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}>
      <View style={styles.container}>
        <Icon name="menu" size={30} color={'#000'} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  text: {fontSize: 26},
  container: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MenuButton;
