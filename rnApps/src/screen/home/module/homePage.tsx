import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import AppBar from '~/components/general/appBar';
import HorizontalCardList from '~/components/horizontalCardList';
import VerticalCardList from '~/components/verticalCardList';
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
  container: {},
});
export default HomePage;
