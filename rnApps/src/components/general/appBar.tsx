import {StackScreenProps} from '@react-navigation/stack';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import RootStackParamList from '~/route/routeType';
import ExitButton from '~/components/general/exitButton';
import MenuButton from '~/components/general/menuButton';
type Props = {
  navigation: StackScreenProps<RootStackParamList>['navigation'];
  isLoginScreen?: boolean;
};

const AppBar: React.FC<Props> = (props: Props) => (
  <View style={styles.container}>
    <View>{props.isLoginScreen && <ExitButton {...props} />}</View>
    <View>{!!!props.isLoginScreen && <MenuButton {...props} />}</View>
  </View>
);

export default AppBar;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    left: 0,
    right: 0,
    top: 0,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  leftContainer: {},
});
