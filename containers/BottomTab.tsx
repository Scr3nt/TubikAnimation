import * as React from "react";
import { Dimensions, View, StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomBottomTab from "@/components/atoms/CustomBottomTab";

import HomeScreen from "@/screens/HomeScreen";
import MenuScreen from "@/screens/MenuScreen";
import NotifsScreen from "@/screens/NotifsScreen";
import CreateScreen from "@/screens/CreateScreen";
import CircleScreen from "@/screens/CircleScreen";

import colors from "@/theme/colors";

import Circle from "@/assets/svg/icons/bottom-bar-icons/Circle";
import Create from "@/assets/svg/icons/bottom-bar-icons/Create";
import Home from "@/assets/svg/icons/bottom-bar-icons/Home";
import Menu from "@/assets/svg/icons/bottom-bar-icons/Menu";
import Notifs from "@/assets/svg/icons/bottom-bar-icons/Notifs";

const Tab = createBottomTabNavigator();

const BOTTOM_TAB_WIDTH = Dimensions.get("screen").width - 45;

export default function BottomTab() {
  return (
    <Tab.Navigator
      tabBar={(props) => (
        <CustomBottomTab width={BOTTOM_TAB_WIDTH} height={70} {...props} />
      )}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return <Home size={20} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Circle"
        component={CircleScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return <Circle size={20} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreateScreen}
        options={{
          tabBarIcon: () => {
            return (
              <View style={styles.custom_icon}>
                <Create size={18} color={"white"} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotifsScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return <Notifs size={20} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return <Menu size={20} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  custom_icon: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: colors.red,
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
