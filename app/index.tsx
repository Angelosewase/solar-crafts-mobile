import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter()
  return (
    <View className="flex-1 items-center justify-center relative">
      <Image
        source={require("../assets/images/onBoarding.png")}
        className="w-full h-full  flex-1"
      />

      <View className="absolute bottom-20 left-1 space-y-6">
        <Text className="text-5xl font-semibold text-white text-center">SpaceCrafts</Text>
        <Text className="font-semibold text-white text-lg text-center px-4 ">
          Learn more details about the whole planets in the universe
        </Text>
        <View className="px-3">
        <TouchableOpacity className="bg-black  text-white bg-opacity-10 justify-center items-center py-3 rounded-2xl" onPress={() => router.navigate('/(tabs)')}>
          <Text className="text-white text-2xl font-semibold">Get started</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
