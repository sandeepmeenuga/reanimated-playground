import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import cities from "../data/index";
import { Link } from "expo-router";
import Animated from "react-native-reanimated";
import CitySkeletonItem from "../components/skeletonitem";
const CityItem = ({ item }) => (
  <Link href={`/${item.id}`} asChild>
    <Pressable style={styles.city}>
      <Animated.Image
        sharedTransitionTag={`image-${item.id}`}
        style={styles.image}
        source={{ uri: item.image }}
      ></Animated.Image>
      <Animated.Text
        sharedTransitionTag={`title-${item.id}`}
        style={styles.name}
      >
        {item.name}
      </Animated.Text>
    </Pressable>
  </Link>
);

const CityGrid = () => {
  const [loading, setLoading] = useState(false);
  if (loading) {
    return (
      <FlatList
        data={Array(10)}
        renderItem={() => <CitySkeletonItem />}
        numColumns={2}
        contentContainerStyle={styles.container}
      ></FlatList>
    );
  }
  return (
    <FlatList
      data={cities}
      renderItem={({ item }) => <CityItem item={item} />}
      keyExtractor={(item) => item.name}
      numColumns={2}
      contentContainerStyle={styles.container}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  city: {
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
    aspectRatio: 1,
    marginHorizontal: 8,
    marginBottom: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: "70%",
    backgroundColor: "gainsboro",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 8,
  },
});

export default CityGrid;
