import 'react-native-gesture-handler';
import 'react-native-reanimated';

import * as React from 'react';
import {useState, useEffect} from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SigninScreen from '../AccountScreens/SigninScreen';


import HotelInventoryHomeScreen from '../HotelInventory/HotelInventoryHomeScreen';

import HotelCustomersHomeScreen from '../HotelCustomers/HotelCustomersHomeScreen';
import HotelInventoryOtherInventoryHomeScreen from '../HotelInventory/HotelInventoryOtherInventoryHomeScreen';

import HotelInventoryRoomsHomeScreen from '../HotelInventory/HotelInventoryRoomsHomeScreen';
//import HotelBookedRoomsHomeScreen from '../HotelInventory/HotelBookedRoomsHomeScreen'
import HotelReportsHomeScreen from '../HotelReports/HotelReportsHomeScreen';

import AllHotelProductsReportsHomeScreen from '../HotelReports/AllHotelProductsReportsHomeScreen';


import HotelRoomsReportsHomeScreen from '../HotelReports/HotelRoomsReportsHomeScreen';

import HotelReportsCustomerCategories from '../HotelReports/HotelReportsCustomerCategories';
import HotelGuestReportsHomeScreen from '../HotelReports/HotelGuestReportsHomeScreen';

//THIS IS FOR GUEST CUSTOMERS
import AllHotelProductsGuestReportsHomeScreen from '../HotelReports/AllHotelProductsGuestReportsHomeScreen';







import HotelNewSaleHomeScreen from '../HotelNewSale/HotelNewSaleHomeScreen'


import HotelNewSaleOtherNewSaleHomeScreen from '../HotelNewSale/HotelNewSaleOtherNewSaleHomeScreen';

import HotelNewSaleRoomsHomeScreen from '../HotelNewSale/HotelNewSaleRoomsHomeScreen';




import HotelInventoryProductsCategoriesHomeScreen from '../HotelInventory/HotelInventoryProductsCategoriesHomeScreen'
import HotelNewSaleProductsCategoriesHomeScreen from '../HotelNewSale/HotelNewSaleProductsCategoriesHomeScreen'

import RestaurantInventoryProductsCategoriesHomeScreen from '../RestaurantInventory/RestaurantInventoryProductsCategoriesHomeScreen'
import RestaurantNewSaleProductsCategoriesHomeScreen from '../RestaurantNewSale/RestaurantNewSaleProductsCategoriesHomeScreen'


import RetailsInventoryProductsCategoriesHomeScreen from '../RetailsInventory/RetailsInventoryProductsCategoriesHomeScreen'
import RetailsNewSaleProductsCategoriesHomeScreen from '../RetailsNewSale/RetailsNewSaleProductsCategoriesHomeScreen'










import PreLoaderScreen from '../Screens/PreLoaderScreen';






import InventoryHotelProducts from '../ViewProductsInventory/InventoryHotelProducts';

import InventoryHotelRooms from '../ViewProductsInventory/InventoryHotelRooms';



import ViewHotelBookedRooms from '../ViewProductsInventory/ViewHotelBookedRooms';
import HotelViewUnBookedRoomsHomeScreen from '../ViewProductsInventory/HotelViewUnBookedRoomsHomeScreen';
import HotelViewBookedRoomsHomeScreen from '../ViewProductsInventory/HotelViewBookedRoomsHomeScreen';


import ViewHotelOrders from '../ViewOrders/ViewHotelOrders';
import ViewHotelRoomsOrders from '../ViewOrders/ViewHotelRoomsOrders';


//VIEW FOR GUEST CUSTOMERS
import ViewHotelGuestOrders from '../ViewOrders/ViewHotelGuestOrders';

//-----------------GUEST AND WALKING CUSTOMERS--------------


//HIZI NI CATEGORIES
import HotelRoomsGuestCustomersHomeScreen from '../HotelNewSale/HotelRoomsGuestCustomersHomeScreen';





//HIZI NI PRODUCTS ZENYEWE
import AllHotelWalkingRooms from '../ViewProductsNewSale/AllHotelWalkingRooms';
import AllHotelGuestRooms from '../ViewProductsNewSale/AllHotelGuestRooms';





import HotelProducts from '../ViewProductsNewSale/HotelProducts';

//---------------WAITERS--------------
import HotelWaitersHomeScreen from '../WaitersScreen/HotelWaitersHomeScreen';

import RoomsHotelWaitersHomeScreen from '../WaitersScreen/RoomsHotelWaitersHomeScreen';


//WAITERS FOR GUEST CUSTOMERS
import HotelGuestWaitersHomeScreen from '../WaitersScreen/HotelGuestWaitersHomeScreen';





import RestaurantCategoriesHomeScreen from '../Restaurant/RestaurantCategoriesHomeScreen';
import RestaurantCustomersHomeScreen from '../RestaurantCustomers/RestaurantCustomersHomeScreen';

import RestaurantInventoryHomeScreen from '../RestaurantInventory/RestaurantInventoryHomeScreen';


import RestaurantReportsHomeScreen from '../RestaurantReports/RestaurantReportsHomeScreen'
import AllRestaurantProductsReportsHomeScreen from '../RestaurantReports/AllRestaurantProductsReportsHomeScreen';



import RestaurantNewSaleHomeScreen from '../RestaurantNewSale/RestaurantNewSaleHomeScreen'







import RestaurantProducts from '../ViewProductsNewSale/RestaurantProducts';



import InventoryRestaurantProducts from '../ViewProductsInventory/InventoryRestaurantProducts';

import ViewRestaurantOrders from '../ViewOrders/ViewRestaurantOrders';


import RestaurantWaitersHomeScreen from '../WaitersScreen/RestaurantWaitersHomeScreen';


import RetailsCategoriesHomeScreen from '../Retails/RetailsCategoriesHomeScreen';
import RetailsCustomersHomeScreen from '../RetailsCustomers/RetailsCustomersHomeScreen';

import RetailsInventoryHomeScreen from '../RetailsInventory/RetailsInventoryHomeScreen';



import RetailsReportsHomeScreen from '../RetailsReports/RetailsReportsHomeScreen'
import AllRetailsProductsReportsHomeScreen from '../RetailsReports/AllRetailsProductsReportsHomeScreen';


import RetailsNewSaleHomeScreen from '../RetailsNewSale/RetailsNewSaleHomeScreen'












import RetailsProducts from '../ViewProductsNewSale/RetailsProducts';


import InventoryRetailsProducts from '../ViewProductsInventory/InventoryRetailsProducts';


import ViewRetailsOrders from '../ViewOrders/ViewRetailsOrders';


import RetailsWaitersHomeScreen from '../WaitersScreen/RetailsWaitersHomeScreen';









//VIEW ALL ORDERS WITHOUT CATEGORIES PRODUCTS
import AllHotelOrders from '../AllOrders/AllHotelOrders';
import HotelOrdersDetailScreen from '../AllOrderDetailScreens/HotelOrdersDetailScreen';
import HotelGuestOrdersDetailScreen from '../AllOrderDetailScreens/HotelGuestOrdersDetailScreen';

import AllHotelClosedOrders from '../AllOrders/AllHotelClosedOrders';
import HotelClosedOrdersDetailScreen from '../AllOrderDetailScreens/HotelClosedOrdersDetailScreen';
import HotelGuestClosedOrdersDetailScreen from '../AllOrderDetailScreens/HotelGuestClosedOrdersDetailScreen';

//VIEW ALL ORDERS WITHOUT CATEGORIES PRODUCTS
import AllRestaurantOrders from '../AllOrders/AllRestaurantOrders';
import RestaurantOrdersDetailScreen from '../AllOrderDetailScreens/RestaurantOrdersDetailScreen';

import AllRestaurantClosedOrders from '../AllOrders/AllRestaurantClosedOrders';
import RestaurantClosedOrdersDetailScreen from '../AllOrderDetailScreens/RestaurantClosedOrdersDetailScreen';

//VIEW ALL ORDERS WITHOUT CATEGORIES PRODUCTS
import AllRetailsOrders from '../AllOrders/AllRetailsOrders';
import RetailsOrdersDetailScreen from '../AllOrderDetailScreens/RetailsOrdersDetailScreen';

import AllRetailsClosedOrders from '../AllOrders/AllRetailsClosedOrders';
import RetailsClosedOrdersDetailScreen from '../AllOrderDetailScreens/RetailsClosedOrdersDetailScreen';




import OnboardingScreen from '../Screens/OnboardingScreen';
import ShareScreen from '../Screens/ShareScreen';
import UsersScreen from '../Screens/UsersScreen';
import MyDrawer from '../Drawer/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

function MyStack({ naigation }) {

      // hii ni kwa ajili ya zile slide za mwanzo km mtu ameshaingia na akaziona
// basi akiingia kwa mara ya pili asizione tena
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);
  
  useEffect(() => {
    async function check(){

     const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    console.log(appData);
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched', 'false');
    }else {
      setIsAppFirstLaunched(false);
    }



    }
    check()
   
  }, []);

// mwisho hap wa hizo codes za slides za mwanzo
      return (

            //isAppFirstLaunched != null &&(
            //kama unatumia drawer navigator na stack navigator haina haja ya kus
            //sorround hii stack.navigator na NavigationContainer ila km unatumia
            //stack navigation peke yake basi tumia NavigationContainer

            <NavigationContainer>
                  <Stack.Navigator
                        //initialRouteName="Home Stack"
                        screenOptions={{
                              headerShown: false,
                              headerStyle: {
                                    backgroundColor: "green",
                                    //height:100,

                              },
                              headerTintColor: "white",
                              headerTitleStyle: {
                                    fontWeight: 'bold',
                              },
                        }}
                  >

                
                   

                        <Stack.Screen
                              name="PreLoader Stack"
                              component={PreLoaderScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />



                        <Stack.Screen
                              name="Signin Stack"
                              component={SigninScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />


                        <Stack.Screen
                              name="Home Stack"
                              component={MyDrawer}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />



                        <Stack.Screen
                              name="Hotel Inventory"
                              component={HotelInventoryHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />


                          <Stack.Screen
                              name="Hotel Reports Customer Categories"
                              component={HotelReportsCustomerCategories}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                        <Stack.Screen
                              name="Hotel Guest Reports"
                              component={HotelGuestReportsHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />


                        <Stack.Screen
                              name="Hotel Products Reports"
                              component={AllHotelProductsReportsHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                         <Stack.Screen
                              name="Hotel Products Guest Reports"
                              component={AllHotelProductsGuestReportsHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />




                       
                        


                        <Stack.Screen
                              name="Hotel Reports"
                              component={HotelReportsHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                       

                        

                        <Stack.Screen
                              name="Hotel Rooms Reports"
                              component={HotelRoomsReportsHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />





                        <Stack.Screen
                              name="Hotel Customers"
                              component={HotelCustomersHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                       {/* <Stack.Screen
                              name="Hotel Inventory Others"
                              component={HotelInventoryOtherInventoryHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />*/}


                        <Stack.Screen
                              name="Hotel Inventory Rooms"
                              component={HotelInventoryRoomsHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />





                        <Stack.Screen
                              name="Hotel NewSale"
                              component={HotelNewSaleHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                          <Stack.Screen
                              name="Hotel Inventory Products Categories"
                              component={HotelInventoryProductsCategoriesHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                         <Stack.Screen
                              name="Hotel NewSale Products Categories"
                              component={HotelNewSaleProductsCategoriesHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />


                       


                        <Stack.Screen
                              name="Hotel NewSale Rooms"
                              component={HotelNewSaleRoomsHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />


















                       









                        <Stack.Screen
                              name="Hotel Inventory Products"
                              component={InventoryHotelProducts}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                       


                        <Stack.Screen
                              name="Inventory Hotel Rooms"
                              component={InventoryHotelRooms}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />



                        <Stack.Screen
                              name="View Hotel Booked Rooms"
                              component={ViewHotelBookedRooms}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />



                        <Stack.Screen
                              name="Hotel UnBookedRooms All Classes"
                              component={HotelViewUnBookedRoomsHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />


                        <Stack.Screen
                              name="Hotel BookedRooms All Classes"
                              component={HotelViewBookedRoomsHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />






                       <Stack.Screen
                        name="Hotel Products"
                        component={HotelProducts}
                  // options={ () => ({ 
                  //       headerLeft: () => <Header  title='About Page' />,
                  //     })}
                        />

                       


                        {/*GUEST ANG WALKING CUSTOMERS*/}

                        <Stack.Screen
                              name="Hotel Rooms Guest Customers"
                              component={HotelRoomsGuestCustomersHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />


                       





                        {/*----------PRODUCTS ZENYEWE------------------*/}

                        <Stack.Screen
                              name="All Hotel Walking Rooms"
                              component={AllHotelWalkingRooms}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                        <Stack.Screen
                              name="All Hotel Guest Rooms"
                              component={AllHotelGuestRooms}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />




                       














                      





                        <Stack.Screen
                              name="View Hotel Orders"
                              component={ViewHotelOrders}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                      

                         <Stack.Screen
                              name="View Hotel Guest Orders"
                              component={ViewHotelGuestOrders}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />




                        


                        <Stack.Screen
                              name="View Hotel Rooms Orders"
                              component={ViewHotelRoomsOrders}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />




                        {/*-----------------ALL  WAITERS------------------*/}




                       <Stack.Screen
                              name="Hotel Guest Waiters"
                              component={HotelGuestWaitersHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                       

                        

                        <Stack.Screen
                              name="Hotel Waiters"
                              component={HotelWaitersHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                        



                        <Stack.Screen
                              name="Rooms Hotel Waiters"
                              component={RoomsHotelWaitersHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />


                          <Stack.Screen
                              name="All Hotel Orders"
                              component={AllHotelOrders}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                         <Stack.Screen
                              name="All Hotel Closed Orders"
                              component={AllHotelClosedOrders}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />



                          <Stack.Screen
                              name="Hotel Orders Detail Screen"
                              component={HotelOrdersDetailScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                         <Stack.Screen
                              name="Hotel Closed Orders Detail Screen"
                              component={HotelClosedOrdersDetailScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                          <Stack.Screen
                              name="Hotel Guest Orders Detail Screen"
                              component={HotelGuestOrdersDetailScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                          <Stack.Screen
                              name="Hotel Guest Closed Orders Detail Screen"
                              component={HotelGuestClosedOrdersDetailScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />







                        <Stack.Screen
                              name="Restaurants Category"
                              component={RestaurantCategoriesHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                        <Stack.Screen
                              name="Restaurant Customers"
                              component={RestaurantCustomersHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                        <Stack.Screen
                              name="Restaurant Inventory"
                              component={RestaurantInventoryHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />


                        <Stack.Screen
                              name="Restaurant Reports"
                              component={RestaurantReportsHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                        <Stack.Screen
                              name="Restaurant Products Reports"
                              component={AllRestaurantProductsReportsHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                      


                         <Stack.Screen
                              name="Restaurant Inventory Products Categories"
                              component={RestaurantInventoryProductsCategoriesHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                         <Stack.Screen
                              name="Restaurant NewSale Products Categories"
                              component={RestaurantNewSaleProductsCategoriesHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />


                       

                       


                        











                        <Stack.Screen
                              name="Restaurant NewSale"
                              component={RestaurantNewSaleHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />


                      


                        












                        <Stack.Screen
                              name="Restaurant Inventory Products"
                              component={InventoryRestaurantProducts}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                       









                        <Stack.Screen
                              name="Restaurant Products"
                              component={RestaurantProducts}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />


                      





                        <Stack.Screen
                              name="View Restaurant Orders"
                              component={ViewRestaurantOrders}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                       


                        











                        <Stack.Screen
                              name="Restaurant Waiters"
                              component={RestaurantWaitersHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />


                         <Stack.Screen
                              name="All Restaurant Orders"
                              component={AllRestaurantOrders}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />



                          <Stack.Screen
                              name="Restaurant Orders Detail Screen"
                              component={RestaurantOrdersDetailScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />


                         <Stack.Screen
                              name="All Restaurant Closed Orders"
                              component={AllRestaurantClosedOrders}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                          <Stack.Screen
                              name="Restaurant Closed Orders Detail Screen"
                              component={RestaurantClosedOrdersDetailScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                      


                        <Stack.Screen
                              name="Retails Category"
                              component={RetailsCategoriesHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />


                        <Stack.Screen
                              name="Retails Customers"
                              component={RetailsCustomersHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                        <Stack.Screen
                              name="Retails Inventory"
                              component={RetailsInventoryHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />
                        <Stack.Screen
                              name="Retails Reports"
                              component={RetailsReportsHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />


                        <Stack.Screen
                              name="Retails Products Reports"
                              component={AllRetailsProductsReportsHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                       

                           <Stack.Screen
                              name="Retails Inventory Products Categories"
                              component={RetailsInventoryProductsCategoriesHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                         <Stack.Screen
                              name="Retails NewSale Products Categories"
                              component={RetailsNewSaleProductsCategoriesHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                       











                        <Stack.Screen
                              name="Retails NewSale"
                              component={RetailsNewSaleHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />


                      

                       
















                        <Stack.Screen
                              name="Retails Inventory Products"
                              component={InventoryRetailsProducts}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                       







                        <Stack.Screen
                              name="Retails Products"
                              component={RetailsProducts}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />


                       




                        <Stack.Screen
                              name="View Retails Orders"
                              component={ViewRetailsOrders}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                      

                        <Stack.Screen
                              name="Retails Waiters"
                              component={RetailsWaitersHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />


                         <Stack.Screen
                              name="All Retails Orders"
                              component={AllRetailsOrders}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />



                          <Stack.Screen
                              name="Retails Orders Detail Screen"
                              component={RetailsOrdersDetailScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />


                         <Stack.Screen
                              name="All Retails Closed Orders"
                              component={AllRetailsClosedOrders}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                          <Stack.Screen
                              name="Retails Closed Orders Detail Screen"
                              component={RetailsClosedOrdersDetailScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                       

                        <Stack.Screen
                              name="Share Stack"
                              component={ShareScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                        <Stack.Screen
                              name="Users Stack"
                              component={UsersScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                  </Stack.Navigator>
                  <StatusBar style='auto' />
            </NavigationContainer>


  
      );
}
export default MyStack;