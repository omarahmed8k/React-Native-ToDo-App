import { StyleSheet, View } from "react-native";
import AddGoal from "../../components/AddGoal";
import ListGoals from "../../components/ListGoals";

const Home = () => {
  return (
    <View style={styles.container}>
      <AddGoal />
      <ListGoals />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: 50,
    marginBottom: 325,
  },
});

export default Home;
