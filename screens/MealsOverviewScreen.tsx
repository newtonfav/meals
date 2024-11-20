import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { MealsStackNavigatorParamList } from "../models/types";

type MealsOverviewScreenProps = NativeStackScreenProps<
  MealsStackNavigatorParamList,
  "MealsOverview"
>;

export default function MealsOverviewScreen({
  route,
}: MealsOverviewScreenProps) {
  const { categoryId } = route.params;

  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen - {categoryId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
