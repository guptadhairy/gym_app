import { View, Text, StatusBar } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { Button } from "react-native-paper";
import Animated, {FadeInDown} from 'react-native-reanimated';

const Welcome = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#161A30",
      }}
    >
      <StatusBar backgroundColor={"#161A30"} />
      <LottieView
        source={require("../assets/gym.json")}
        style={{ width: "100%", height: 400 }}
        autoPlay
        loop
      />
      <Text style={{color: "white", fontSize: 40, fontWeight: "bold"}}>Best <Text style={{color: "#BE3144"}}>WorkOuts</Text></Text>
      <Animated.Text entering={FadeInDown.duration(1000)} style={{color: "white", fontSize: 35, fontWeight: "bold"}}>For you</Animated.Text>
      <Button style={{backgroundColor: "#BE3144", width: "70%", marginTop: 20}} onPress={()=> navigation.navigate("home")}>
        <Text style={{color: "white", fontSize: 17, fontWeight: "bold"}}>Get Started</Text>
      </Button>
    </View>
  );
};

export default Welcome;
