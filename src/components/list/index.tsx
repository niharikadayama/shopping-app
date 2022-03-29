import React, {useState, useRef} from 'react';
import {View, Image, StyleSheet, Animated} from 'react-native';
import {categories} from 'constant';
import Paginator from 'components/paginator';
import SelectedCategory from 'components/selectedCategory';
import styles from './styles';

const data = Object.keys(categories).map(i => ({
  key: i,
  title: i,
  image: categories[i],
}));

const Category = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const onViewableItemsChanged = (({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  return (
    <Animated.View style={styles.container}>
      <Animated.FlatList
        data={data}
        keyExtractor={item => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        pagingEnabled
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={32}
        renderItem={({item}) => {
          return (
            <View style={styles.subContainer}>
              <Image source={{uri: item.image}} style={styles.imageStyle} />
              <View
                style={[StyleSheet.absoluteFillObject, styles.overlayStyle]}
              />
              <SelectedCategory item={item} />
            </View>
          );
        }}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      <Paginator data={data} scrollX={scrollX} />
    </Animated.View>
  );
};

export default Category;
