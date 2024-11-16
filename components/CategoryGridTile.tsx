import React from "react";
import { Pressable, View, Text } from "react-native";

interface ICategoryGridTile {
  title: string;
  color: string;
}

export default function CategoryGridTile({ title, color }: ICategoryGridTile) {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
