import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

// Define the structure of a space body
interface SpaceBody {
  name: string;
  type: 'planet' | 'star' | 'messier';
}

// Sample array of space bodies
const spaceBodies: SpaceBody[] = [
  { name: 'Earth', type: 'planet' },
  { name: 'Sun', type: 'star' },
  { name: 'Andromeda', type: 'messier' },
  { name: 'Jupiter', type: 'planet' },
  { name: 'Betelgeuse', type: 'star' },
  { name: 'Orion Nebula', type: 'messier' },
];

const TabComponent: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'planet' | 'star' | 'messier'>('all');

  // Function to filter space bodies based on the selected category
  const filterSpaceBodies = () => {
    if (selectedCategory === 'all') {
      return spaceBodies;
    }
    return spaceBodies.filter((body) => body.type === selectedCategory);
  };

  // Array of categories
  const categories: Array<'all' | 'planet' | 'star' | 'messier'> = ['all', 'planet', 'star', 'messier'];

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {/* Render Tabs */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 16 }}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => setSelectedCategory(category)} 
          >
            <Text style={{ color: selectedCategory === category ? 'blue' : 'black' }}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Render List of Space Bodies */}
      <FlatList
        data={filterSpaceBodies()}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
            <Text style={{ fontSize: 18 }}>{item.name}</Text>
            <Text style={{ color: 'gray' }}>{item.type}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default TabComponent;
