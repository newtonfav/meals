import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

type CategoryItem = {
  id: string;
  title: string;
  color: string;
};

interface IRenderItem {
  item: CategoryItem;
}

function renderCategoryItem({ item }: IRenderItem) {
  return <CategoryGridTile title={item.title} color={item.color} />;
}

export default function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
