import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
          !context.isInitComplete ? (
            <View></View>
          ) : context.user ? (
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
