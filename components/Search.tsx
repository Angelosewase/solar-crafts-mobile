import React, { useState } from 'react';
import { View, TextInput, TextInputProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SearchInputProps extends TextInputProps {
  onSearch?: (text: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder="search something", onSearch, ...props }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (text: string) => {
    setSearchValue(text);
    if (onSearch) {
      onSearch(text);
    }
  };

  return (
    <View className="flex-row items-center bg-[#121212] rounded-xl p-3 flex-1">
      <Ionicons name="search-outline" size={28} color="white" className="mr-2" />
      <TextInput
        className="text-white flex-1  pl-2 text-xl"
        placeholder={placeholder}
        placeholderTextColor="#888"
        value={searchValue}
        onChangeText={handleInputChange}
        {...props} 
      />
    </View>
  );
};

export default SearchInput;
