import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GoalItem from "../GoalItem";

const ListGoals = () => {
  const [courseGoals, setCourseGoals] = useState([]);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@courseGoals");
      if (value !== null) {
        setCourseGoals(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, [courseGoals]);

  return (
    <View style={styles.listGroup}>
      <Text style={styles.listGroup.label}>Goals</Text>
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text} />;
        }}
        keyExtractor={(item) => item.id}
        style={styles.listGroup.scroll}
      />
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
  },
});

export default ListGoals;
