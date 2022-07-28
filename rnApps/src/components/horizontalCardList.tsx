import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Colors} from '~/configure/theme';
import IAssessmentData from '~/model/assessmentData';
import HorizontalCard from './card/hCard';

type Props = {
  data: IAssessmentData[] | null[];
};
//using Flatlist
const HorizontalCardList: React.FC<Props> = (props: Props) => {
  const height = 180;
  const {data} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Assessments</Text>
      <View style={[styles.cardContainer, {height: height + 20}]}>
        {data != null && data.length > 0 ? (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <HorizontalCard height={height} item={item} />
            )}
            keyExtractor={(item, index) => index.toString()}
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
