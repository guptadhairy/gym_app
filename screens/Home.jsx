import { View, Text, StatusBar, Image, ScrollView } from 'react-native'
import React from 'react'
import ImageSlider from '../components/ImageSlider'

const Home = () => {
  return (
    <View style={{flex: 1, backgroundColor: "white", padding: 12}}>
        <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
        <View>
            <Text style={{fontSize: 35, fontWeight: "bold"}}>READY TO</Text>
            <Text style={{fontSize: 35, fontWeight: "bold", color: "#BE3144"}} >WORKOUT</Text>
        </View>
        <Image source={require("../assets/avatar.png")} style={{width: 70, height: 70}} />
      </View>
      <ImageSlider />
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Text>what</Text>
        </ScrollView>
      </View>
    </View>
  )
}

export default Home