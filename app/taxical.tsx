import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Taxical() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/taxipic.png")}
        style={styles.image}
        resizeMode="contain"
      ></Image>
      <Text style={styles.titletxt}>คำนวณค่าแท็กซี่</Text>
      <View style={[styles.inputcontainer, { gap: 12 }]}>
        <Text style={[styles.txt, { color: "#5f5f5f" }]}>
          ระยะทาง (กิโลเมตร)
        </Text>
        <TextInput style={styles.textinput} placeholder="0.0"></TextInput>
        <Text style={[styles.txt, { color: "#5f5f5f" }]}>เวลารถติด (นาที)</Text>
        <TextInput style={styles.textinput} placeholder="0"></TextInput>
        <View
          style={{ flexDirection: "row", gap: 5, justifyContent: "center" }}
        >
          <TouchableOpacity style={styles.calbutton}>
            <Text style={[styles.txt, { color: "white" }]}>คำนวนราคา</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.clearbutton}>
            <Text style={[styles.txt, { color: "red" }]}>ล้างค่า</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#cdce81",
  },

  textinput: {
    backgroundColor: "#f8f5f5",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    padding: 13,
    borderRadius: 8,
  },

  image: {
    width: 150,
    height: 150,
  },

  titletxt: {
    fontSize: 30,
    fontFamily: "Kanit_700Bold",
    color: "#FBF3D5",
  },

  inputcontainer: {
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 12,
    padding: 14,
  },

  txt: {
    fontFamily: "Kanit_700Bold",
  },

  calbutton: {
    backgroundColor: "#A2AF9B",
    flex: 1,
    alignItems: "center",
    borderRadius: 6,
    padding: 13,
  },

  clearbutton: {
    backgroundColor: "#ffffff",
    width: "30%",
    alignItems: "center",
    borderRadius: 6,
    padding: 13,
    borderColor: "red",
    borderWidth: 1,
  },
});
