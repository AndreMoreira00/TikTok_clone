import React from "react";
import { Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Estilo from "../styles/Estilo";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Navegador(props){
  return <LinearGradient style={Estilo.navegador} colors={["transparent", "#000"]}>
    <Pressable onPress={() => props.navigation.navigate("Home")}>
      <Image style={Estilo.navegadorIcone} source={require("../../assets/house.png")}/>
    </Pressable>

    <Pressable onPress={() => props.navigation.navigate("Search")}>
      <Image style={Estilo.navegadorIcone} source={require("../../assets/magnifying-glass.png")}/>
    </Pressable>

    <Pressable onPress={() => props.navigation.navigate("Likes")}>
      <Image style={Estilo.navegadorIcone} source={require("../../assets/heart.png")}/>
    </Pressable>
  </LinearGradient>
}