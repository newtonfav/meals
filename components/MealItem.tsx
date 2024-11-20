import { View, Text } from "react-native";
import { IMealItem } from "../screens/MealsOverviewScreen";

interface MealItemProps {
  item: IMealItem;
}

export default function MealItem({ item }: MealItemProps) {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
}
