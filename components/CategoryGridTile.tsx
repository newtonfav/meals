import React from "react";
import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

interface ICategoryGridTile {
  title: string;
  color: string;
}

export default function CategoryGridTile({ title, color }: ICategoryGridTile) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    // iOS shadow
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    backgroundColor: "white",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.9,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
