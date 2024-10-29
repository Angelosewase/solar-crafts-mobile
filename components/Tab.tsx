import { Data } from "@/assets/data/defaults";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const TabComponent: React.FC = () => {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "planet" | "star" | "messier"
  >("all");

  const filterSpaceBodies = () => {
    if (selectedCategory === "all") {
      return Data.slice(0, 2);
    }
    return Data.filter((body) => body.type === selectedCategory).slice(0, 2);
  };

  const categories: Array<"all" | "planet" | "star" | "messier"> = [
    "all",
    "planet",
    "star",
    "messier",
  ];

  function handleClick(id: string) {
    router.navigate(`/${id}`);
  }

  return (
    <View className="mt-8">
      <View className="flex-row justify-between pb-2 mb-12">
        {categories.map((category, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              className={`text-white text-xl ${
                selectedCategory === category ? "text-blue-500" : ""
              }`}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View className="flex-row flex-wrap justify-between">
        {filterSpaceBodies().map((item) => {
          if (item.type !== "messier") {
            return (
              <View
                key={item.name}
                className="w-[47%] items-start  h-[200px]  mb-4 bg-[#121212] justify-end pt-20 px-5 rounded-xl"
              >
                <Image
                  source={item.imgSrc}
                  className="absolute -top-8 right-10 rounded-full h-24 w-24 z-10"
                />
                <Text className="text-white text-3xl font-bold mb-2 mt-auto">
                  {item.name}
                </Text>
                <Text className="text-white  text-base mb-2">
                  {item.nickName}
                </Text>
                <TouchableOpacity
                  className="ml-auto"
                  onPress={() => handleClick(item.id)}
                  disabled={item.type !== "planet"}
                >
                  <Text className="text-blue-500 text-4xl">&gt;</Text>
                </TouchableOpacity>
              </View>
            );
          }else{
            return (
           
              <View className="relative w-[47%]  p-3 h-[200px] bg-[#121212] items-center justify-center  rounded-xl" key={item.name}>
                <Image
                  source={item.imgSrc}
                  className="h-full w-full  z-10"
                />

                <Text className="text-white text-2xl font-bold mb-2 absolute top-10  w-full text-center z-50">
                  {item.name}
                </Text>
                {/* 
                <Text className="text-white  text-base mb-2">
                  {item.nickName}
                </Text> */}
              </View>
  
            )
          }
        })}
      </View>
    </View>
  );
};

export default TabComponent;
