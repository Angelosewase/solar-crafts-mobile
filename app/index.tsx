import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter()
  return (
    <View className="flex-1 items-center justify-center relative">
      <Image
        source={require("../assets/images/onBoarding.png")}
        className="w-full h-full  flex-1"
      />
      <View className="absolute bottom-20 left-10   space-y-6">
        <Text className="text-5xl font-semibold text-white">SpaceCrafts</Text>
        <Text className="font-semibold text-white text-lg text-center ">
          learn more details about the whole planets in the universe
        </Text>
        <TouchableOpacity className="bg-black text-white bg-opacity-10 justify-center items-center py-3 rounded-2xl" onPress={() => router.navigate('/(tabs)')}>
          <Text className="text-white text-2xl font-semibold">Get started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
