import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {challengesData} from '~/configure/conf';
import {Colors} from '~/configure/theme';
import IChallengeData from '~/model/challengeData';
import VerticalCard from './card/vCard';

type Props = {
  data: IChallengeData[] | null[];
};
//using Carousel
const VerticalCardList: React.FC<Props> = (props: Props) => {
  const cheight = 420;
  const cheightFactor = 2.7;
  const cWidth = Dimensions.get('screen').width - 40;
  const {data} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Challenges</Text>
      {data != null && data.length > 0 ? (
        <Carousel
          width={cheight / cheightFactor}
          height={cheight}
          data={challengesData}
          loop={false}
          style={{
            width: cWidth,
          }}
          renderItem={({item}) => (
            <VerticalCard height={cheight} factor={cheightFactor} item={item} />
          )}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>No Challenges left!</Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  flatList: {paddingVertical: 10},
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.lightDark,
    paddingVertical: 10,
  },
});
export default VerticalCardList;
