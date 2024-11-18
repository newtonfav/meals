import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MealsStackNavigatorParamList } from "../models/types";

type CategoryItem = {
  id: string;
  title: string;
  color: string;
};

interface IRenderItem {
  item: CategoryItem;
}

type CategoriesScreenProps = NativeStackScreenProps<
  MealsStackNavigatorParamList,
  "MealsCategories"
>;

export default function CategoriesScreen({
  navigation,
}: CategoriesScreenProps) {
  function renderCategoryItem({ item }: IRenderItem) {
    function pressHandler() {
      navigation.navigate("MealsOverview");
    }

    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
