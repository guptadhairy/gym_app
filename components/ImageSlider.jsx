import { View, Text } from 'react-native'
import React from 'react'

import { SliderBox } from "react-native-image-slider-box";

const images = [
    require("../assets/1.jpg"),
    require("../assets/2.jpg"),
    require("../assets/3.jpg"),
    require("../assets/4.jpg"),
    require("../assets/5.jpg"),
]

const ImageSlider = () => {
  return (
   <View style={{ alignItems: "center", padding: 10, height: 200, marginTop: 20}}>
    <SliderBox  ImageComponentStyle={{borderRadius: 15, width: '96%', height: '98%'}} parentWidth={330}images={images} autoplay={true} autoplayInterval={3000} circleLoop={true} />
   </View>
  )
}

export default ImageSlider