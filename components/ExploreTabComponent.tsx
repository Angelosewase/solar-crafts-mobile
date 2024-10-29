import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { Data } from "@/assets/data/defaults";
import { EllipsisVerticalIcon } from "react-native-heroicons/outline";
import { useRouter } from "expo-router";

const ExploreTabComponent = () => {
  const router = useRouter();
  function handleClick(id: string) {
    router.navigate(`/${id}`);
  }
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "planet" | "star" | "messier"
  >("all");

  const filterSpaceBodies = () => {
    if (selectedCategory === "all") {
      return Data;
    }
    return Data.filter((body) => body.type === selectedCategory);
  };

  const categories: Array<"all" | "planet" | "star" | "messier"> = [
    "all",
    "planet",
    "star",
    "messier",
  ];
  return (
    <View className="mt-4">
      <View className="flex-row justify-between pb-2 mb-2">
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
      <ScrollView className=" space-y-3 mb-44">
        {filterSpaceBodies().map((item) => {
          if (item.type === "planet") {
            return (
              <TouchableOpacity
                className="w-full flex-row justify-between"
                key={item.name}
                onPress={() => handleClick(item.id)}
              >
                <View className="w-[50%] items-start  h-[155px]  mb-4 bg-[#121212] pt-5 px-5  rounded-xl">
                  <Image
                    source={item.imgSrc}
                    className="rounded-full  h-14 w-14 z-10"
                  />
                  <Text className="text-white text-2xl font-bold mb-2">
                    {item.name}
                  </Text>
                  <Text className="text-white  text-base mb-2">
                    {item.nickName}
                  </Text>
                </View>
                <TouchableOpacity>
                  <EllipsisVerticalIcon size={30} color={"white"} />
                </TouchableOpacity>
              </TouchableOpacity>
            );
          } else if (item.type === "star") {
            return (
              <TouchableOpacity
                className="w-full flex-row justify-between"
                key={item.name}
              >
                <View className="w-[50%] relative  h-[155px] bg-[#121212] items-center justify-center  rounded-xl">
                  <Image
                    source={item.imgSrc}
                    className="rounded-full  h-[150px] w-[155px] z-10"
                  />

                  <Text className="text-white text-2xl font-bold mb-2 absolute top-10  w-full text-center z-50">
                    {item.name}
                  </Text>
                  {/* 
                  <Text className="text-white  text-base mb-2">
                    {item.nickName}
                  </Text> */}
                </View>
                <TouchableOpacity>
                  <EllipsisVerticalIcon size={30} color={"white"} />
                </TouchableOpacity>
              </TouchableOpacity>
            );
          } else {
            return (
              <TouchableOpacity
                className="w-full flex-row justify-between"
                key={item.name}
              >
                <View className="w-[50%] relative  h-[155px] bg-[#121212] items-center justify-center  rounded-xl">
                  <Image
                    source={item.imgSrc}
                    className="h-[150px] w-[155px] z-10"
                  />

                  <Text className="text-white text-2xl font-bold mb-2 absolute top-10  w-full text-center z-50">
                    {item.name}
                  </Text>
                  {/* 
                  <Text className="text-white  text-base mb-2">
                    {item.nickName}
                  </Text> */}
                </View>
                <TouchableOpacity>
                  <EllipsisVerticalIcon size={30} color={"white"} />
                </TouchableOpacity>
              </TouchableOpacity>
            );
          }
        })}
      </ScrollView>
    </View>
  );
};

export default ExploreTabComponent;
