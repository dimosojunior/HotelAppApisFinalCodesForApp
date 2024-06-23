import { useEffect, useState } from "react";
import HotelHomeScreen from "../HomeScreens/HotelHomeScreen";
import RestaurantCategoriesHomeScreen from "../Restaurant/RestaurantCategoriesHomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RetailsCategoriesHomeScreen from "../Retails/RetailsCategoriesHomeScreen";

export default function HomeScreen({ navigation }) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const userDataJSON = await AsyncStorage.getItem('userData');
      if (userDataJSON) {
        const parsedUserData = JSON.parse(userDataJSON);
        setUserData(parsedUserData);

        //console.log(parsedUserData);
        //console.log(userDataJSON);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {userData.is_hotel_user === true && (
        <HotelHomeScreen navigation={navigation} />
      )}
      {userData.is_restaurant_user === true && (
        <RestaurantCategoriesHomeScreen navigation={navigation} />
      )}
      {userData.is_retails_user === true && (
        <RetailsCategoriesHomeScreen navigation={navigation} />
      )}

       {userData.is_admin === true && (
        <HotelHomeScreen navigation={navigation} />
      )}
    </>
  );
}