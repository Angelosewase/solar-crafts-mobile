import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import Header from "@/components/Header";
import EditableInput from "@/components/InfoDisplay";

export default function Profile() {
  const [state, setState] = useState({
    userName: "names ",
    email: " sewasejp8@example.com",
    password: "password ",
  });
  return (
    <View className=" bg-black  flex-1  w-full">
      <Header name="Profile" />
      <Image source={require("../../assets/images/profile.png")} className="mx-auto mt-10" />
      <View className="mt-10">
        <EditableInput  inputType="default" value={state.userName} />
        <EditableInput inputType="default" value={state.email} />
        <EditableInput inputType="default" value={state.password} />
      </View>
    </View>
  );
}
