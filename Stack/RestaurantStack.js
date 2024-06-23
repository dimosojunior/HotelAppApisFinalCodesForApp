import 'react-native-gesture-handler';
import 'react-native-reanimated';

import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import MinorHeader from '../Headers/MinorHeader';



import RestaurantCategoriesHomeScreen from '../Restaurant/RestaurantCategoriesHomeScreen';
import RestaurantCustomersHomeScreen from '../RestaurantCustomers/RestaurantCustomersHomeScreen';

import RestaurantInventoryHomeScreen from '../RestaurantInventory/RestaurantInventoryHomeScreen';


import RestaurantReportsHomeScreen from '../RestaurantReports/RestaurantReportsHomeScreen'
import AllRestaurantProductsReportsHomeScreen from '../RestaurantReports/AllRestaurantProductsReportsHomeScreen';

import RestaurantInventoryProductsCategoriesHomeScreen from '../RestaurantInventory/RestaurantInventoryProductsCategoriesHomeScreen'
import RestaurantNewSaleProductsCategoriesHomeScreen from '../RestaurantNewSale/RestaurantNewSaleProductsCategoriesHomeScreen'



import RestaurantNewSaleHomeScreen from '../RestaurantNewSale/RestaurantNewSaleHomeScreen'







import RestaurantProducts from '../ViewProductsNewSale/RestaurantProducts';



import InventoryRestaurantProducts from '../ViewProductsInventory/InventoryRestaurantProducts';

import ViewRestaurantOrders from '../ViewOrders/ViewRestaurantOrders';


import RestaurantWaitersHomeScreen from '../WaitersScreen/RestaurantWaitersHomeScreen';


import RestaurantNewSaleOtherNewSaleHomeScreen from '../RestaurantNewSale/RestaurantNewSaleOtherNewSaleHomeScreen';
import RestaurantInventoryOtherInventoryHomeScreen from '../RestaurantInventory/RestaurantInventoryOtherInventoryHomeScreen';


//VIEW ALL ORDERS WITHOUT CATEGORIES PRODUCTS
import AllRestaurantOrders from '../AllOrders/AllRestaurantOrders';
import RestaurantOrdersDetailScreen from '../AllOrderDetailScreens/RestaurantOrdersDetailScreen';

import AllRestaurantClosedOrders from '../AllOrders/AllRestaurantClosedOrders';
import RestaurantClosedOrdersDetailScreen from '../AllOrderDetailScreens/RestaurantClosedOrdersDetailScreen';



const Stack = createStackNavigator();

function RestaurantStack({ naigation }) {
      return (
            //kama unatumia drawer navigator na stack navigator haina haja ya kus
            //sorround hii stack.navigator na NavigationContainer ila km unatumia
            //stack navigation peke yake basi tumia NavigationContainer

            // <NavigationContainer>
            <Stack.Navigator
                  initialRouteName="Home Stack"
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
                              name="Restaurant Products Reports"
                              component={AllRestaurantProductsReportsHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

                 

                   


                  

                   


                  {/* <Stack.Screen
                              name="Restaurant Inventory Others"
                              component={RestaurantInventoryOtherInventoryHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />*/}














                  <Stack.Screen
                        name="Restaurant NewSale"
                        component={RestaurantNewSaleHomeScreen}
                  // options={ () => ({ 
                  //       headerLeft: () => <Header  title='About Page' />,
                  //     })}
                  />


                 



                   {/*<Stack.Screen
                              name="Restaurant NewSale Others"
                              component={RestaurantNewSaleOtherNewSaleHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />
*/}

















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

               



            </Stack.Navigator>
            // </NavigationContainer>

      );
}
export default RestaurantStack;