import {NavigationContainerProps, NavigationProp} from '@react-navigation/core';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationAction} from '@react-navigation/routers';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RootStackParamList from '../../route/routeType';
import {AppContext} from '~/provider/appsContextProvider';
import IndexPage from './module/indexPage';
import HomePage from './module/homePage';

type Props = {
  navigation: StackScreenProps<RootStackParamList>['navigation'];
};
type State = {};

class HomeScreen extends React.Component<Props, State> {
  render() {
    return (
      <AppContext.Consumer>
        {context =>
          context.user ? (
            <HomePage {...this.props} />
          ) : (
            <IndexPage {...this.props} />
          )
        }
      </AppContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({});

export default HomeScreen;
