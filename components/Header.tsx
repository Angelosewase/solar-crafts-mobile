import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "expo-router";

interface props {
  name: string;
}

const Header = ({ name }: props) => {
  const navigate = useNavigation();

  return (
    <View className="flex-row items-center  w-full mt-3">
      <TouchableOpacity onPress={() => navigate.goBack()}>
        <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity>
      <Text className="mx-auto  text-white text-xl font-extrabold">{name}</Text>
    </View>
  );
};

export default Header;
