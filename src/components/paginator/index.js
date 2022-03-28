import React from 'react';
import {View, Animated, StyleSheet, useWindowDimensions} from 'react-native';
import {Colors} from 'theme';

let Paginator = ({data, scrollX}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[
              styles.dot,
              {
                width: dotWidth,
                opacity,
              },
            ]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    left: 150,
    bottom: 110,
    backgroundColor: 'transparent',
  },
  dot: {
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.white,
    marginHorizontal: 8,
  },
});
export default Paginator;
