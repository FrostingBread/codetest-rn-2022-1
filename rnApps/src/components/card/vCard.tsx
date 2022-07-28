import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
//@ts-ignore
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '~/configure/theme';
import IChallengeData from '~/model/challengeData';
import getRemainDayString from '~/utils/dateTimeHelper';

type Props = {height: number; factor: number; item: IChallengeData | null};

const VerticalCard: React.FC<Props> = (props: Props) => {
  let {height, factor, item} = props;

  const _height = (height ?? 400) - 30;
  const _weight = _height / (factor * 1);

  return (
    <View style={[{height: _height, width: _weight}, styles.container]}>
      <View>
        <View style={[styles.image, {height: _height * 0.3}]}>
          <FastImage
            style={{height: '100%', width: '100%'}}
            source={{uri: item?.image}}
          />
        </View>
        <Text style={styles.title} numberOfLines={3} ellipsizeMode={'tail'}>
          {item?.name}
        </Text>

        <Text style={styles.subTitle} numberOfLines={3} ellipsizeMode={'tail'}>
          {getRemainDayString(item?.dueDate)}
        </Text>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.describe} numberOfLines={2} ellipsizeMode={'tail'}>
          Earn up to <Text style={styles.highlightNumber}> {item?.point} </Text>
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
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderRadius: 5,
    elevation: 50,
    padding: 16,
  },
  image: {},
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //alignItems: 'flex-end',
  },
  cardContainer: {},
  title: {
    paddingVertical: 6,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.lightDark,
  },
  subTitle: {
    fontSize: 12,
    color: Colors.grey,
  },
  describe: {color: Colors.grey, flex: 1, fontSize: 14},
  highlightNumber: {color: Colors.lightBlue, fontWeight: '700'},
});
export default VerticalCard;
