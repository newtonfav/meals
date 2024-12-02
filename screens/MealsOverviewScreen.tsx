import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useLayoutEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { MealsStackNavigatorParamList } from "../models/types";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

type MealsOverviewScreenProps = NativeStackScreenProps<
  MealsStackNavigatorParamList,
  "MealsOverview"
>;

export interface IMealItem {
  id: string;
  categoryIds: string[];
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: number;
  ingredients: string[];
  steps: string[];
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
}

interface IRenderItem {
  item: IMealItem;
}

export default function MealsOverviewScreen({
  route,
  navigation,
}: MealsOverviewScreenProps) {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((mealItem) =>
    mealItem.categoryIds.includes(categoryId)
  );

  useLayoutEffect(
    function () {
      const categoryTitle = CATEGORIES.find(
        (category) => category.id === categoryId
      )?.title;

      navigation.setOptions({ title: categoryTitle });
    },
    [navigation, categoryId]
  );

  function renderMealItem({ item }: IRenderItem) {
    return <MealItem item={item} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
