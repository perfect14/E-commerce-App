import { Text, View, Image, StyleSheet,  TouchableOpacity,  } from 'react-native';
import React, { Component } from "react";
import Red from "./assets/casual.jpg";
import {AntDesign, Feather} from "@expo/vector-icons";
import StarRating from 'react-native-star-rating';



class Single extends React.Component {  
constructor(props) {
  
    super(props);
    this.state = {
      generalStarCount:32,
      customStarCount:2.5,
    }

  }

  onGeneralStarRatingPress(rating) {
    this.setState({
      generalStarCount:rating,
    })
  }

  onCustomStarRatingPress(rating) {
    this.setState({
      customStarCount:rating,
    })
  }



    render(){    
    return (
        <View style={styles.container}>


          <View style={styles.iconContainer}> 
          <View  style={styles.Iconone}>     
                <AntDesign
                name="arrowleft"
                size={25}
                color="black"
               
                />
                </View>  
              
                <View  style={styles.Icontwo}> 
                 <Feather
                name="shopping-cart"
                size={25}
                color="#845EC2"
               
                />              
                   </View>  
               
          </View>
          <View  style={styles.Iconthree}>     
                <AntDesign
                name="hearto"
                size={25}
                color="#845EC2"
               
                />
                </View>   
                
          <View style={styles.shopContainer}>
              <Image source={Red} style={styles.image}></Image>            
          </View>

          <Text style={styles.header}>Red Casual Hoodie</Text>
          <View style={styles.reviewContainer}>
              <Text>Review:</Text>
              <StarRating
                    disabled={false}
                    emptyStar="ios-star-outline"
                    fullStar="ios-star"
                    halfStar="ios-star-half"
                    iconSet="Ionicons"
                    maxStars={5}
                    starSize={12}
                    rating={this.state.customStarCount}
                    selectedStar={rating => this.onCustomStarRatingPress(rating)}
                    fullStarColor="red"
                    halfStarColor="green"
                    emptyStarColor="blue"
                    halfStarEnabled
                    starPadding={10}
                    style={styles.rating}/>
          </View>
          <View style={styles.line}></View>
          
          <Text style={styles.statement}>
              it is long established fact that a reader will be
              distracted by the readable content of a page.
          </Text>

          <View style={styles.materialContainer}>
              <Text style={styles.materiialText}>Material: 91% polyester, 9% elastane</Text>
          </View>
            


          <View style={styles.sizeContainer}>
              <TouchableOpacity style={styles.singleSizeButton}>
                  <Text>XS</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.singleSizeButton}>
                  <Text>S</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.singleSizeButton,styles.mediumsize] } >
                  <Text>M</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.singleSizeButton}>
                  <Text>L</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.singleSizeButton}>
                  <Text>XL</Text>
              </TouchableOpacity>
          </View>



          <View style={styles.addContainer}>
              <View>
                  <Text style={styles.totaltexxt}>Total Amount</Text>
                  <Text style={styles.totalValue}>$99</Text>
              </View>
              <TouchableOpacity style={styles.addButton}>
                  <Text style={styles.addbuttontext}>Add to cart</Text>
              </TouchableOpacity>
          </View>


        </View>
    
       );
      }
  }










  const styles = StyleSheet.create({
    container: {
         marginTop:10,
         marginHorizontal:30
    },

     iconContainer:{
        flexDirection:"row",
        marginBottom:0,
        
        
     },
    
    Iconone:{
        alignSelf:"flex-start",
        padding:10,
        backgroundColor:"#fff",
        borderRadius:50,
        
    },
     
    Icontwo:{
      alignSelf:"flex-end",
      marginLeft:260,
      padding:10,
      backgroundColor:"#fff",
      borderRadius:50,
    },
   
    Iconthree:{
       padding:10,
       backgroundColor:"#fff",
        borderRadius:50,
      alignItems:"flex-end",
      position:"absolute",
      marginTop:60,
      zIndex:2,
      marginLeft:308

       

    },

    image:{
         borderRadius:20,
         marginLeft:10
    },

    header:{
          fontWeight:"bold",
          fontSize:20,
          marginVertical:12
    },
    reviewContainer:{
          flexDirection:"row"
    },

    materialContainer:{
            marginVertical:10,
             paddingVertical:20,
             backgroundColor:"#fff"
    },
    materiialText:{
            color:"#9370DB"
    }, 

    statement:{
         marginTop:20,
         lineHeight:30,
         fontWeight:"bold"
    },

    sizeContainer:{
        flexDirection:"row",
        marginBottom:20
    }, 
    singleSizeButton:{
       padding:15,
       backgroundColor:"#fff",
       borderRadius:10,
       marginRight:15
    },
    mediumsize:{
      backgroundColor:"#9370DB"
    },

    

    addContainer:{
        flexDirection:"row",
        padding:10,
        backgroundColor:"#9370DB",
        borderRadius:15,
     
        
        
    },
    addButton:{
        marginLeft:150,
        paddingHorizontal:12,
         justifyContent:"center",
        backgroundColor:"#8A2BE2",
        borderRadius:10,
      
    }
     ,
     addbuttontext:{
       color:"#fff"
     },
     totaltexxt:{
       color:"#fff"
     },

     totalValue:{
              color:"#fff",
              fontSize:25,
              fontWeight:"bold"
     },
    

     line:{
       paddingVertical:2,
       backgroundColor:"#8A2BE2",
       width:50,
       borderRadius:10,
       marginTop:10,

     }

    
     
    
    
   });
  

export default Single;










