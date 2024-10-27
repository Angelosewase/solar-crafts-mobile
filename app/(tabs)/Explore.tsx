import { View, Text } from "react-native";
import React from "react";
import Header from "@/components/Header";
import ExploreTabComponent from "@/components/ExploreTabComponent";

export default function Explore() {
  return (
    <View className="flex-1 bg-black">
      <Header name="Explore" />
      <View className="px-3">
        <ExploreTabComponent />
      </View>
    </View>
  );
}
