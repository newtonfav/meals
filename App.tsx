import { StyleSheet, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View>
      <StatusBar style="light" />
      <CategoriesScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
