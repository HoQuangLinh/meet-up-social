import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Cart from "../components/groupCard";
import Icon from "react-native-vector-icons/Entypo";
import TabViewHome from "../navigation/TabViewHome";
let ScreenHeight = Dimensions.get("window").height;
const Home = () => {
  return (
    <ScrollView>
      <View style={styles.containerGroup}>
        <View style={styles.headerTitle}>
          <Text style={styles.sectionTitle}>Your groups</Text>
          <TouchableOpacity>
            <Text style={styles.buttonText}>See all</Text>
          </TouchableOpacity>
        </View>
        <View>
          <ScrollView horizontal={true} style={styles.containerCart}>
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
          </ScrollView>
          <TouchableOpacity style={styles.buttonAddGroup}>
            <Image
              style={styles.imageAddGroup}
              source={require("../../assets/trophy.png")}
            />
            <View>
              <Text style={styles.titleAddGroup}>Start a new group</Text>
              <Text>Organize your own events</Text>
            </View>
            <Icon name="chevron-small-right" size={30} color={"#c4c4c4"} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerCalendar}>
        <View style={styles.banner}>
          <Image
            style={styles.ImageBanner}
            source={require("../../assets/banner.jpg")}
          />
        </View>
        <View>
          <Text style={styles.sectionTitle2}>Your calendar</Text>
        </View>
        <TabViewHome />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerGroup: {
    backgroundColor: "white",
  },
  headerTitle: {
    flexDirection: "row",
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
  },
  buttonText: {
    fontSize: 20,
    color: "#50C7C7",
    fontWeight: "bold",
  },
  containerCart: {
    paddingBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  buttonAddGroup: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    width: "100%",
    height: 80,
    justifyContent: "space-between",
  },
  imageAddGroup: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  titleAddGroup: {
    fontWeight: "bold",
    paddingBottom: 3,
  },
  containerCalendar: {
    backgroundColor: "white",
    marginTop: 10,
    height: ScreenHeight,
  },
  banner: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    padding: 10,
    height: 150,
  },
  ImageBanner: {
    width: "100%",
    height: "100%",
  },
  sectionTitle2: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
});

export default Home;
