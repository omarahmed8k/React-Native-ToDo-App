import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddGoal = () => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify(courseGoals);
      await AsyncStorage.setItem("@courseGoals", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    storeData();
  }, [courseGoals]);

  function addGoalHandler() {
    if (enteredGoal.length > 0) {
      setCourseGoals([
        ...courseGoals,
        { text: enteredGoal, id: Math.random().toString() },
      ]);
      setEnteredGoal("");
    }
  }

  return (
    <View style={styles.inputGroup}>
      <View style={styles.inputGroup.labelBg}>
        <Text style={styles.inputGroup.label}>Task Name</Text>
      </View>
      <TextInput
        onChangeText={(enteredGoal) => setEnteredGoal(enteredGoal)}
        value={enteredGoal}
        placeholder="task"
        style={styles.inputGroup.input}
      />
      <Button
        onPress={(e) => {
          addGoalHandler(e);
        }}
        style={styles.inputGroup.button}
        title="Add"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputGroup: {
    position: "relative",
    marginBottom: 22,
    zIndex: 1,
    labelBg: {
      backgroundColor: "#fff",
      position: "absolute",
      top: -15,
      left: 10,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 10,
      zIndex: 3,
    },
    label: {
      fontSize: 20,
      width: "100%",
      height: "100%",
      textAlign: "center",
      fontWeight: "bold",
      color: "#999",
    },
    input: {
      fontSize: 20,
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 8,
      marginBottom: 16,
      borderRadius: 10,
      color: "#212121",
      width: "100%",
      zIndex: 2,
    },
  },
});

export default AddGoal;
