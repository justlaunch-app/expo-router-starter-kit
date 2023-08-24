import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import React from 'react';
import { useLocalSearchParams, Stack } from 'expo-router';
import { blurhash } from '_utils/blurhash';
import * as Sharing from 'expo-sharing';
import TouchableOpacity from '_components/Button/TouchableOpacity';
import Ionicons from '@expo/vector-icons/Ionicons';

const DetailFeed = () => {
  const props = useLocalSearchParams();

  return (
    <ScrollView>
      <Stack.Screen
        options={{
          headerTitle: `FEED ${props.id}`,
          headerRight: () => (
            <TouchableOpacity
              onPress={() =>
                Sharing.shareAsync('https://linktr.zoltanfodor.dev/')
              }
            >
              <Ionicons name="share" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Image
        style={styles.image}
        source={props.imgSrc}
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
      />
      <View className="px-4 pt-5">
        <Text className="text-2xl uppercase">DetailFeed</Text>
        <Text className="py-4 text-xl font-bold">ID: {props.id}</Text>
        <Text className="italic text-lg py-4">{props.title}</Text>
        <Text className="text-lg">{props.author}</Text>
        <Text className="italic py-4">Created: {props.datePublished}</Text>
        <Text className="px-4 pt-4">{props.content}</Text>
      </View>
    </ScrollView>
  );
};

export default DetailFeed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: 300,
    backgroundColor: '#0553',
    paddingBottom: 20,
  },
});
