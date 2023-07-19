import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  ArrowDownTrayIcon,
  Bars3BottomLeftIcon,
} from "react-native-heroicons/solid";
import { BellIcon } from "react-native-heroicons/solid";
import ButtonColor from "../components/ButtonColor";
import GameCard from "../components/GameCard";
import StarRating from "react-native-star-rating";

const HomeScreen = () => {
  const categories = [
    "Action",
    "Family",
    "Puzzle",
    "Adventure",
    "Racing",
    "Education",
    "Other",
  ];

  const featuredGame = [
    {
      id: 1,
      image: require("../image/game1.png"),
      title: "The Golden Curse",
      download: "29M",
      star: "4",
    },
    {
      id: 2,
      image: require("../image/game2.jpg"),
      title: "Angry Birds",
      download: "23M",
      star: "4",
    },
    {
      id: 3,
      image: require("../image/game3.jpg"),
      title: "Subway Surfers",
      download: "20M",
      star: "5",
    },
    {
      id: 4,
      image: require("../image/game4.jpg"),
      title: "Free Fire",
      download: "10M",
      star: "3",
    },
  ];

  const top = [
    {
      id: 1,
      image: require("../image/game6.png"),
      title: "Call Of Duty",
      download: "5M",
      star: "2",
    },
    {
      id: 2,
      image: require("../image/game7.jpg"),
      title: "Asphalt Legends 9",
      download: "12M",
      star: "4",
    },
    {
      id: 3,
      image: require("../image/game8.jpg"),
      title: "Asphalt Legends 8",
      download: "17M",
      star: "5",
    },
    {
      id: 4,
      image: require("../image/game9.jpg"),
      title: "Shadow fight 3",
      download: "27M",
      star: "5",
    },
    {
      id: 3,
      image: require("../image/game10.jpg"),
      title: "Shadow fight 4",
      download: "7M",
      star: "5",
    },
  ];

  const [activePath, setActivePath] = useState("Action");

  return (
    <LinearGradient
      colors={["rgba(58,131,244,0.4)", "rgba(9,181,211,0.4)"]}
      className="w-full h-full"
    >
      <SafeAreaView>
        <View className="flex-row p-5 justify-between items-center">
          <Bars3BottomLeftIcon
            size={30}
            color={"black"}
            className="font-bold"
          />
          <BellIcon size={30} color={"black"} />
        </View>
        <View>
          <Text className="font-bold text-3xl ml-5 text-gray-900">
            Browse Games
          </Text>
        </View>
        <View className="mt-5 ml-3">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((cat) => {
              if (cat == activePath) {
                // Change the color
                return (
                  <ButtonColor key={cat} containerColor="mr-2" value={cat} />
                );
              } else {
                // Default color
                return (
                  <TouchableOpacity
                    onPress={() => setActivePath(cat)}
                    key={cat}
                    className="bg-blue-200 p-4 px-5 mr-2 rounded-full"
                  >
                    <Text>{cat}</Text>
                  </TouchableOpacity>
                );
              }
            })}
          </ScrollView>
        </View>

        {/* Featured Game List */}

        <View className="mt-4">
          <Text className="font-bold text-2xl text-gray-900 ml-4">
            Featured Game
          </Text>
          <View className="mt-3 ml-5">
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {featuredGame.map((item, index) => {
                return <GameCard key={index} game={item} />;
              })}
            </ScrollView>
          </View>
        </View>

        {/* Top Action Game */}

        <View className="mt-4">
          <View className="ml-4 flex-row justify-between p-2">
            <Text className="text-2xl font-bold text-gray-900">
              Top Action Game
            </Text>
            <TouchableOpacity>
              <Text className="text-lg font-bold text-blue-400 mr-2">
                See all
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            style={{ height: 280 }}
            showsVerticalScrollIndicator={false}
          >
            {top.map((item, index) => {
              return (
                <TouchableOpacity className="p-2 mx-4 flex-row">
                  <Image
                    source={item.image}
                    key={index}
                    style={{ height: 80, width: 80 }}
                    className="rounded-2xl"
                  />
                  <View className="space-x-2 p-2 justify-between">
                    <View className="mb-1">
                      <Text className="font-bold ml-2">{item.title}</Text>
                    </View>
                    <View>
                      <StarRating
                        disabled={true}
                        starSize={15}
                        containerStyle={{ width: 90 }}
                        maxStars={5}
                        rating={item.star}
                        fullStarColor="gold"
                        emptyStarColor="white"
                      />
                      <View className="flex-row mt-1 py">
                        <ArrowDownTrayIcon size={18} color={"white"} />
                        <Text className="ml-1">{item.download} Downloads</Text>
                      </View>
                    </View>
                  </View>
                  <View className="mx-16">
                    <ButtonColor value="play" />
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;
