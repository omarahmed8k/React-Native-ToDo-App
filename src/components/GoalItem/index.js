import { View, Text, StyleSheet } from "react-native";
import React from "react";

const GoalItem = (props) => {
  return (
    <View style={styles.listGroup.li}>
      <Text style={styles.listGroup.li.text}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listGroup: {
    label: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#999",
      marginBottom: 16,
    },
    li: {
      text: {
        fontSize: 16,
        marginBottom: 22,
        color: "#212121",
        padding: 12,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        backgroundColor: "#ffffff",
        width: "100%",
        overflow: "hidden",
        borderRadius: 10,
      },
    },
  },
});

export default GoalItem;
