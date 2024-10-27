import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useGlobalSearchParams } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Data } from "@/assets/data/defaults";
import { IPlanet, spaceData } from "@/assets/data/globals";

type InfoRowProps = {
  label: string;
  value: string | number;
  bgColor: string;
};

const InfoRow: React.FC<InfoRowProps> = ({ label, value, bgColor }) => (
  <View className={`flex-row justify-between py-2 px-2 rounded  mx-1.5 my-0.5`} style={{ backgroundColor: bgColor }}>
    <Text className="text-white text-xl font-semibold">{label}</Text>
    <Text className="text-gray-300 text-lg font-semibold">{value}</Text>
  </View>
);

const Planet = () => {
  const navigate = useNavigation();
  const { planetId } = useGlobalSearchParams();
  const planetData = Data.find((planet) => planet.id === Number(planetId));

  return (
    <View className="flex-1 bg-black ">
      <TouchableOpacity onPress={() => navigate.goBack()} className="mt-4">
        <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity>
      <Image source={planetData?.imgSrc} className="w-[50%] h-52 mt-10 mx-auto" />
      <InfoDisplayComponent planetData={planetData} />
    </View>
  );
};

const InfoDisplayComponent = ({ planetData }: { planetData: spaceData | undefined }) => {
  if (!planetData) return null;

  const renderRows = (
    data: Array<{ label: string; value: string | number }>,
    startIndex = 0
  ) =>
    data.map(({ label, value }, index) => (
      <InfoRow
        key={label}
        label={label}
        value={value}
        bgColor={index % 2 === 0 ? "#121212" : "#212121"}
      />
    ));

  const renderNestedData = (data: Record<string, number> | undefined, label: string, startIndex: number) => {
    if (!data) return null;
    return (
      <>
        <Text className="text-white mt-5 text-xl w-full text-center">{label}</Text>
        {renderRows(
          Object.entries(data).map(([key, value]) => ({ label: key, value })),
          startIndex
        )}
      </>
    );
  };

  const rows = [
    { label: "Mass", value: planetData.mass },
    { label: "Radius", value: planetData.radius },
    { label: "Distance from Sun", value: `${planetData.distanceFromSun} AU` },
    { label: "Gravity", value: `${planetData.gravity} m/s²` },
    { label: "Discovered By", value: planetData.discoveredBy },
    { label: "Discovery Date", value: planetData.discoveryDate },
    { label: "Rings", value: planetData.rings ? "Yes" : "No" },
    { label: "Habitable", value: planetData.habitable ? "Yes" : "No" },
    { label: "Composition", value: planetData.composition.join(", ") },
    { label: "Magnetic Field Strength", value: `${planetData.magneticFieldStrength} T` },
  ];

  return (
    <ScrollView className="w-full bg-[#121212] p-1 pt-2 mt-6 " style={{ borderTopLeftRadius: 35, borderTopRightRadius: 35 }}>
      <View  className="w-1/2 h-1 bg-blue-500 my-2 mb-5 mx-auto rounded-lg"/>
      <View className="mb-5 w-full items-center">
      
        <Text className="text-white text-3xl font-semibold">{planetData.name}</Text>
        <Text className="text-gray-300 text-lg font-semibold">
          {planetData.nickName}
        </Text>
      </View>
      {renderRows(rows)}
      {renderNestedData(planetData.atmosphereComposition, "Atmosphere Composition", rows.length)}
      {renderNestedData(planetData.surfaceTemperature, "Surface Temperature (°C)", rows.length)}
    </ScrollView>
  );
};

export default Planet;
