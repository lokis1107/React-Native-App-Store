import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  ArrowDownIcon,
  ArrowDownTrayIcon,
  HeartIcon,
} from "react-native-heroicons/solid";
import StarRating from "react-native-star-svg-rating";

const GameCard = ({ game }) => {
  const [heart, setHeart] = useState(false);

  return (
    <View className="mr-4 relative">
      <Image source={game.image} className="h-60 w-80 rounded-3xl" />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.6)"]}
        className="p-4 h-full w-full absolute rounded-3xl justify-between"
      >
        <View className="flex-row justify-end">
          <TouchableOpacity
            className="p-3 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
          >
            <HeartIcon
              size={25}
              color={heart ? "red" : "white"}
              onPress={() => setHeart(!heart)}
            />
          </TouchableOpacity>
        </View>
        <View>
          <StarRating
            disabled={true}
            starSize={15}
            containerStyle={{ width: 90 }}
            maxStars={5}
            rating={game.star}
            emptyColor="white"
          />
          <Text className="text-xl font-bold text-gray-300 mt-2 ml-2">
            {game.title}
          </Text>
          <View className="ml-2 mt-2 flex-row">
            <ArrowDownTrayIcon size={18} color={"white"} />
            <Text className="text-white ml-2">{game.download} Downloads</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default GameCard;
