import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text } from "react-native";
import { MealsStackNavigatorParamList } from "../models/types";

type MealDetailsScreenProps = NativeStackScreenProps<
  MealsStackNavigatorParamList,
  "MealDetails"
>;

export default function MealDetailsScreen({ route }: MealDetailsScreenProps) {
  const { mealId } = route.params;

  return <Text>MealDetailsScreen({mealId})</Text>;
}
