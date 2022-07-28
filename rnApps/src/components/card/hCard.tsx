import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
//@ts-ignore
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '~/configure/theme';
import IAssessmentData from '~/model/assessmentData';

type Props = {height: number; item: IAssessmentData | null};

const HorizontalCard: React.FC<Props> = (props: Props) => {
  let {height, item} = props;

  const _height = (height ?? 200) - 30;
  const _weight = _height * 2;

  return (
    <View style={[{height: _height, width: _weight}, styles.container]}>
      <View style={styles.image}>
        <FastImage
          style={{height: '100%', width: '100%'}}
          source={{uri: item?.image}}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3} ellipsizeMode={'tail'}>
          {item?.name}
        </Text>
        <View style={styles.rightBottomContainer}>
          <Text
            style={styles.describe}
            numberOfLines={2}
            ellipsizeMode={'tail'}>
            Earn up to
            <Text style={styles.highlightNumber}> {item?.point} </Text>
            pts
          </Text>
          <Icon
            name="arrowright"
            size={18}
            color={Colors.brownRed}
            style={{alignSelf: 'flex-end'}}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 50,
    padding: 16,
  },
  image: {flex: 5, marginRight: 12},
  rightContainer: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rightBottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //alignItems: 'flex-end',
  },
  cardContainer: {},

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.lightDark,
  },
  describe: {color: Colors.grey, flex: 1, fontSize: 14, paddingRight: 4},
  highlightNumber: {color: Colors.lightBlue, fontWeight: '700'},
});
export default HorizontalCard;
