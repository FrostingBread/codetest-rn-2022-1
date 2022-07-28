import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Images from '~/assets/images';
import RootStackParamList from '~/route/routeType';

type Props = {navigation: StackScreenProps<RootStackParamList>['navigation']};

const IndexPage: React.FC<Props> = (props: Props) => {
  const loginOC = () => props.navigation.push('Login');

  return (
    <View style={styles.container}>
      <FastImage style={styles.image} source={Images.homeLogo()} />
      <TouchableOpacity onPress={loginOC}>
        <View style={styles.button}>
          <Text>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {height: 80, width: 80, margin: 12},
  button: {
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 80,
  },
});
export default IndexPage;
