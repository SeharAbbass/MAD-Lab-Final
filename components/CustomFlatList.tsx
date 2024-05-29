// CustomFlatList.tsx
import React from 'react';
import { FlatList, FlatListProps, View, Text } from 'react-native';

interface CustomFlatListProps extends FlatListProps<any> {
  // Add any custom props if needed
  emptyListMessage?: string;
}

const CustomFlatList: React.FC<CustomFlatListProps> = ({ emptyListMessage = "No items found", ...props }) => {
  return (
    <FlatList
      ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>{emptyListMessage}</Text>}
      {...props}
    />
  );
};

export default CustomFlatList;
