import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { StyleSheet, View } from "react-native";

const CitySkeletonItem = () => {
  const opacity = useSharedValue(1);
  useEffect(() => {
    opacity.value = withRepeat(
      withSequence(
        withDelay(1000, withTiming(0.2, { duration: 1000 })),
        withTiming(1, { duration: 1000 })
      ),
      -1,
      false
    );
  }, []);
  return (
    <View style={styles.city}>
      <Animated.View style={[styles.image, { opacity }]}></Animated.View>
      <Animated.View
        style={{
          height: 20,
          width: "50%",
          backgroundColor: "gainsboro",
          marginTop: 8,
          opacity: opacity,
        }}
      ></Animated.View>
    </View>
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

export default CitySkeletonItem;
