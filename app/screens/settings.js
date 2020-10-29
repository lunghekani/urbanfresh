import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { ListItem, ListItemSeparator } from "../components/lists";
import colors from "../config/colors";
import Icon from "../components/Icon";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

const settingsmenu = [
  {
    title: "View My Account",
    icon: {
      name: "lock",
      backgroundColor: colors.primary,
    },
    targetScreen: routes.ACCOUNT,
  },
  {
    title: "Payment",
    icon: {
      name: "account",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
  {
    title: "Notification",
    icon: {
      name: "bell",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.ADDCARD,
  },
  {
    title: "Help",
    icon: {
      name: "help",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.HELP,
  },
  {
    title: "About",
    icon: {
      name: "help",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.ABOUT,
  },
];

function Settings({ navigation }) {
  return (
    <Screen style={styles.screen}>
      
      <View style={styles.container}>
        <FlatList
          data={settingsmenu}
          keyExtractor={(settingsitem) => settingsitem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default Settings;

