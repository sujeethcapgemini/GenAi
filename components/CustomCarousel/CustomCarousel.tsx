import React, { Component } from "react";
import { View, Text, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import styles from "./styles";

const { width } = Dimensions.get('window');

interface CarouselItem {
  title: string;
  description: string;
}

interface CustomCarouselProps {
  data: CarouselItem[];
  onSnapToItem: (index: number) => void;
}

class CustomCarousel extends Component<CustomCarouselProps> {
 
 renderItem = ({ item }: { item: CarouselItem }): JSX.Element => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  };

  
render() {
    const { data, onSnapToItem } = this.props;

    return (
      <View>
        <Carousel
          loop
          width={width}
          height={250}
          data={data}
          renderItem={this.renderItem}
          pagingEnabled
          autoPlay={true}
          onSnapToItem={onSnapToItem}
        />
      </View>
    );
  }
}

export default CustomCarousel;
