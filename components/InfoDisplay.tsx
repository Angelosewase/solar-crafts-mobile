import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardType,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface props {
  value?: string | undefined;
  onChange?: (value: string | number | undefined) => void;
  inputType: KeyboardType;
  placeholder?: string;
}

const EditableInput = ({
  value,
  onChange,
  inputType,
  placeholder = "",
}: props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  const handleIconPress = () => {
    setIsEditing(true);
  };

  const handleInputChange = (text: string) => {
    setInputValue(text);
    if (onChange) {
      onChange(text);
    }
  };

  return (
    <View className={"flex-row items-center m-2 border-white border  rounded-xl"}>
      {isEditing ? (
        <TextInput
          placeholder={placeholder}
          keyboardType={inputType}
          className="border-b-2 border-gray-600 text-lg  text-white p-4"
          value={inputValue}
          onChangeText={handleInputChange}
          onBlur={() => setIsEditing(false)}
          autoFocus
        />
      ) : (
        <View className="flex-row items-center  w-full justify-between  p-4 ">
          <Text className="text-lg mr-2 text-white ">{inputValue}</Text>
          <TouchableOpacity onPress={handleIconPress}>
            <Ionicons name="pencil-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default EditableInput;
