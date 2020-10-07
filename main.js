/** @format */

import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import Blue from "./assets/Royal_Blue_Pullover.jpg";
import Casual from "./assets/pink.jpg";
import Classic from "./assets/classic.jpg";
import Red from "./assets/casual.jpg";
import { AntDesign, Feather } from "@expo/vector-icons";
import StarRating from "react-native-star-rating";

class main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generalStarCount: 32,
      customStarCount: 2.5,
    };
  }

  onGeneralStarRatingPress(rating) {
    this.setState({
      generalStarCount: rating,
    });
  }

  onCustomStarRatingPress(rating) {
    this.setState({
      customStarCount: rating,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <View style={styles.Iconone}>
            <AntDesign name="arrowleft" size={25} color="black" />
          </View>

          <View style={styles.Icontwo}>
            <Feather name="shopping-cart" size={25} color="#845EC2" />
          </View>
        </View>

        <Text style={styles.heading}>Woman Jacket</Text>

        <TextInput placeholder="Search Jacket" style={styles.TextInput} />
        <TouchableOpacity>
          <Text style={styles.filter}>Filter</Text>
        </TouchableOpacity>

        <View style={styles.shopContainer}>
          <Image source={Blue} style={styles.image}></Image>
          <View>
            <Text style={styles.Name}>Royal Blue Pullover</Text>
            <StarRating
              disabled={false}
              emptyStar="ios-star-outline"
              fullStar="ios-star"
              halfStar="ios-star-half"
              iconSet="Ionicons"
              maxStars={5}
              starSize={19}
              rating={this.state.customStarCount}
              selectedStar={(rating) => this.onCustomStarRatingPress(rating)}
              fullStarColor="red"
              halfStarColor="green"
              emptyStarColor="blue"
              halfStarEnabled
              starPadding={5}
              style={styles.rating}
            />
            <Text style={styles.price}>$99</Text>
          </View>
        </View>

        <View style={styles.shopContainer}>
          <Image source={Casual} style={styles.image}></Image>
          <View>
            <Text style={styles.Name}>Pink Hoodie</Text>
            <StarRating
              disabled={false}
              emptyStar="ios-star-outline"
              fullStar="ios-star"
              halfStar="ios-star-half"
              iconSet="Ionicons"
              maxStars={5}
              starSize={19}
              rating={this.state.customStarCount}
              selectedStar={(rating) => this.onCustomStarRatingPress(rating)}
              fullStarColor="red"
              halfStarColor="green"
              emptyStarColor="blue"
              halfStarEnabled
              starPadding={5}
              style={styles.rating}
            />
            <Text style={styles.price}>$112</Text>
          </View>
        </View>

        <View style={styles.shopContainer}>
          <Image source={Classic} style={styles.image}></Image>
          <View>
            <Text style={styles.Name}>Faded Lime Hoodie</Text>
            <StarRating
              disabled={false}
              emptyStar="ios-star-outline"
              fullStar="ios-star"
              halfStar="ios-star-half"
              iconSet="Ionicons"
              maxStars={5}
              starSize={19}
              rating={this.state.customStarCount}
              selectedStar={(rating) => this.onCustomStarRatingPress(rating)}
              fullStarColor="red"
              halfStarColor="green"
              emptyStarColor="blue"
              halfStarEnabled
              starPadding={5}
              style={styles.rating}
            />
            <Text style={styles.price}>$119</Text>
          </View>
        </View>

        <View style={styles.shopContainer}>
          <Image source={Red} style={styles.image}></Image>
          <View>
            <Text style={styles.Name}> Red Casual Hoodie</Text>
            <StarRating
              disabled={false}
              emptyStar="ios-star-outline"
              fullStar="ios-star"
              halfStar="ios-star-half"
              iconSet="Ionicons"
              maxStars={5}
              starSize={19}
              rating={this.state.customStarCount}
              selectedStar={(rating) => this.onCustomStarRatingPress(rating)}
              fullStarColor="red"
              halfStarColor="green"
              emptyStarColor="blue"
              halfStarEnabled
              starPadding={10}
              style={styles.rating}
            />
            <Text style={styles.price}>$59</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  iconContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },

  Iconone: {
    alignSelf: "flex-start",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
  },

  Icontwo: {
    alignSelf: "flex-end",
    marginLeft: 270,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 50,
  },

  heading: {
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 20,
  },
  TextInput: {
    height: 50,
    backgroundColor: "#fff",
    marginBottom: 30,
    borderRadius: 15,
    marginHorizontal: 10,
    paddingLeft: 15,
  },

  image: {
    width: 100,
    height: 100,
    marginRight: 30,
    borderRadius: 10,
  },

  shopContainer: {
    flexDirection: "row",
    marginBottom: 40,
  },

  Name: {
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 10,
  },
  price: {
    color: "#9370DB",
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 18,
  },
  filter: {
    alignSelf: "flex-end",
    marginTop: -61,
    marginRight: 20,
    color: "#9370DB",
    fontWeight: "bold",
  },
});

export default main;
