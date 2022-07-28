import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {assessmentData} from '~/configure/conf';
import {Colors} from '~/configure/theme';
import HorizontalCard from './card/hCard';

type Props = {};
//using Flatlist
const HorizontalCardList: React.FC<Props> = (props: Props) => {
  const height = 180;
  const data = assessmentData;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Assessments</Text>
      <View style={[styles.cardContainer, {height: height}]}>
        {data != null && data.length > 0 ? (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <HorizontalCard height={height} item={item} />
            )}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => <View style={{padding: 10}}></View>}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.flatList}
          />
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>No Assessment left!</Text>
          </View>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  flatList: {paddingVertical: 10},
  cardContainer: {},
  title: {
    fontSize: 20,
    paddingVertical: 10,
    fontWeight: '700',
    color: Colors.lightDark,
  },
});
export default HorizontalCardList;