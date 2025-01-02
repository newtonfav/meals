import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { IMealItem } from "../screens/MealsOverviewScreen";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { MealsStackNavigatorParamList } from "../models/types";

interface MealItemProps {
  item: IMealItem;
}

export default function MealItem({ item }: MealItemProps) {
  const navigation =
    useNavigation<NavigationProp<MealsStackNavigatorParamList>>();

  function navigateToMealDetails() {
    navigation.navigate("MealDetails", { mealId: item.id });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={navigateToMealDetails}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailsItem}>{item.duration}m</Text>
            <Text style={styles.detailsItem}>
              {item.affordability.toUpperCase()}
            </Text>
            <Text style={styles.detailsItem}>
              {item.complexity.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    // iOS shadow
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  buttonPressed: {
    opacity: 0.9,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    margin: 8,
  },
  details: {
    alignItems: "center",
    flexDirection: "row",
    padding: 8,
    justifyContent: "center",
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
