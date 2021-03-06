import React, {useRef, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from 'components/header';
import {supportMaterial} from 'constant';
import {Transition, Transitioning} from 'react-native-reanimated';
import style from './styles';

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

const Support = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef();
  return (
    <Transitioning.View
      ref={ref}
      transition={transition}
      style={style.container}>
      <Header
        leftIcon={'ios-chevron-back'}
        rightIcon={'close'}
        iconSize={25}
        onLeftIconPress={() => {}}
        onRightIconPress={() => {}}
        showLogo={false}
        title={'Support'}
      />

      <FlatList
        data={supportMaterial}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              key={item.heading}
              onPress={() => {
                ref.current.animateNextTransition();
                setCurrentIndex(index === currentIndex ? 0 : index);
              }}
              style={style.cardContainer}>
              <View
                style={[style.card, {backgroundColor: item.backgroundColor}]}>
                <View style={style.cardHeadinglist}>
                  <Icon name={item.iconName} size={29} color={item.textColor} />
                  <Text style={style.cardHeading}>{item.heading}</Text>
                </View>
                <Icon name="chevron-right" size={25} style={style.iconStyle} />
                {index === currentIndex && (
                  <View style={style.subHeadinglist}>
                    {item.subHeading.map(subHeading => (
                      <Text
                        key={subHeading}
                        style={[
                          style.subHeadingListbody,
                          {color: item.textColor},
                        ]}>
                        {subHeading}
                      </Text>
                    ))}
                  </View>
                )}
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </Transitioning.View>
  );
};

export default Support;
