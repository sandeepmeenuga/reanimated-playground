import { useRouter, useSearchParams } from "expo-router";
import React from "react";
import cities from "../data/index";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated from "react-native-reanimated";

const CityDetails = () => {
  const { id } = useSearchParams();
  const city = cities.find((c) => c.id == id);
  const router = useRouter();

  const handlePressBack = () => {
    router.back();
  };
  return (
    <View style={styles.container}>
      <Animated.Image
        sharedTransitionTag={`image-${city.id}`}
        style={styles.image}
        source={{ uri: city.image }}
      ></Animated.Image>

      <Animated.Text
        sharedTransitionTag={`title-${city.id}`}
        style={styles.name}
      >
        {city.name}
      </Animated.Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Details: </Text>
        <Text style={styles.detailsText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at purus
          euismod, vestibulum dolor a, pulvinar odio. Nunc suscipit felis eget
          est consequat, ac consequat metus aliquet. Vivamus faucibus libero sit
          amet semper molestie. Sed euismod ligula sit amet urna maximus
          dignissim. Praesent aliquam, nunc vel interdum dignissim, risus neque
          dignissim elit, id posuere mauris tortor at quam. Duis euismod
          lobortis enim, vel sollicitudin purus bibendum eu. Pellentesque luctus
          leo id elit congue faucibus. Morbi vel nulla enim.
        </Text>
      </View>
      <TouchableOpacity style={styles.backbutton} onPress={handlePressBack}>
        <Ionicons name="arrow-back" size={24} color={"white"}></Ionicons>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginTop: 16,
  },
  detailsContainer: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  detailsText: {
    fontSize: 16,
    lineHeight: 24,
  },
  backbutton: {
    position: "absolute",
    top: 30,
    left: 20,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#000000",
    opacity: 0.8,
  },
});

export default CityDetails;
