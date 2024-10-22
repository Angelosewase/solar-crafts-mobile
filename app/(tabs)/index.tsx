import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import SearchInput from "@/components/Search";
import { Ionicons } from "@expo/vector-icons";
import TabComponent from "@/components/Tab";

export default function Index() {
  return (
    <View className="bg-black flex-1 px-5">
      <View className="w-full items-center justify-between flex-row mt-10">
        <Image
          source={require("../../assets/images/profile.png")}
          className="h-12 w-12"
        />
        <AntDesign name="bells" size={26} color="white" />
      </View>
      <Text className="text-white text-3xl font-semibold mt-10">
        Let's eplore!
      </Text>
      <View className="flex-row space-x-2 mt-4">
        <SearchInput />
        <TouchableOpacity className="bg-[#121212] p-3 rounded-xl">
          <Ionicons
            name="search-outline"
            size={28}
            color="white"
            className="mr-2"
          />
        </TouchableOpacity>
      </View>
      <View className="w-full"> <TabComponent /></View>
    </View>
  );
}
