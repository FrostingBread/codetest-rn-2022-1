import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Images from '~/assets/images';
import AppBar from '~/components/appBar';
import HorizontalCardList from '~/components/horizontalCard';
import VerticalCardList from '~/components/verticalCard';
import RootStackParamList from '~/route/routeType';

type Props = {navigation: StackScreenProps<RootStackParamList>['navigation']};

const HomePage: React.FC<Props> = (props: Props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppBar {...props} />
      <View style={styles.container}>
        <HorizontalCardList />
        <VerticalCardList />
      </View>
    </SafeAreaView>
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
export default HomePage;
