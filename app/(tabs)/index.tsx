import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import SearchInput from "@/components/Search";
import { Ionicons } from "@expo/vector-icons";
import TabComponent from "@/components/Tab";
import { Data } from "@/assets/data/defaults";
import { useNavigation, useRouter } from "expo-router";

export default function Index() {
   const nav = useNavigation();
   const router = useRouter()

   function handleClick(id:string) {
     router.navigate(`/${id}`);
   }

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
      <View className="w-full">
        <TabComponent />
      </View>

      <View className="mt-auto mb-14">
        <View className="flex-row justify-between mb-2">
          <Text className="text-xl text-white font-bold p-0.5">
            You may also like{" "}
          </Text>
          <TouchableOpacity onPress={()=>router.navigate("/(tabs)/Explore")}>
            <Text className="text-xl text-blue-500 p-0.5">Explore</Text>
          </TouchableOpacity>
        </View>

        
        <KeyboardAvoidingView  className="w-full" behavior="padding" >
        <TouchableOpacity className="w-full flex-row   h-[180px]   bg-[#121212] rounded-xl" onPress={() => handleClick(Data[0].id)}>
          <View className="w-[45%] justify-center items-center">
            <Image source={Data[0].imgSrc} className="w-[140px]  h-[140px] " />
          </View>
          <View className="flex-1 justify-center px-2">
            <Text className="text-white text-2xl font-semibold">
              {Data[0].name}
            </Text>
            <Text className="text-white font-semibold text-base ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              modi, expedita quis atque ullam delectus,{" "}
            </Text>
          </View>
        </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>



    </View>
  );
}
