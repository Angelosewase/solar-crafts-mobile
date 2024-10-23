import { Stack, Tabs } from "expo-router";
import { View, Text, Image } from "react-native";
import { HomeIcon, UserIcon } from "react-native-heroicons/outline";
import {
  HomeIcon as HomeIconSolid,
  UserIcon as UserIconSolid,
} from "react-native-heroicons/solid";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#070707",
          borderColor: "#000",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused }) => (
            <>
              <View className=" relative items-center justify-start ">
                {focused ? (
                  <View className="absolute bottom-6   bg-[#2A2A2A] p-5  rounded-full  ">
                    <HomeIconSolid color={"#fff"} size={28} />
                  </View>
                ) : (
                  <View className="items-center">
                    <HomeIcon color={color} size={28} />
                  </View>
                )}

                <Text className={` text-white ${focused && "mt-7"}`}>Home</Text>
              </View>
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="Explore"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <>
              <View className=" relative items-center justify-start  ">
                {focused ? (
                  <View className="absolute bottom-6   bg-[#2A2A2A] p-5  rounded-full  ">
                    <Image
                      source={require("../../assets/images/Campus.png")}
                      height={28}
                      width={28}
                    />
                  </View>
                ) : (
                  <View className="items-center">
                    <Image
                      source={require("../../assets/images/Campus.png")}
                      height={28}
                      width={28}
                    />
                  </View>
                )}

                <Text className={` text-white ${focused && "mt-7"}`}>
                  Explore
                </Text>
              </View>
            </>
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="Virtual"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <>
              <View className=" relative items-center justify-start  ">
                {focused ? (
                  <View className="absolute bottom-6   bg-[#2A2A2A] p-5  rounded-full  ">
                    <Image
                      source={require("../../assets/images/VR.png")}
                      height={28}
                      width={28}
                    />
                  </View>
                ) : (
                  <View className="items-center">
                    <Image
                      source={require("../../assets/images/VR.png")}
                      height={28}
                      width={28}
                    />
                  </View>
                )}

                <Text className={` text-white ${focused && "mt-7"}`}>
                  Virtual{" "}
                </Text>
              </View>
            </>
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <>
              <View className=" relative items-center justify-start ">
                {focused ? (
                  <View className="absolute bottom-6   bg-[#2A2A2A] p-5  rounded-full  ">
                    <UserIconSolid color={"#fff"} size={28} />
                  </View>
                ) : (
                  <View className="items-center">
                    <UserIcon color={color} size={28} />
                  </View>
                )}

                <Text className={` text-white ${focused && "mt-7"}`}>
                  Profile
                </Text>
              </View>
            </>
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
