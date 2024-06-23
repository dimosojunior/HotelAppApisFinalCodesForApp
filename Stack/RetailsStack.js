import 'react-native-gesture-handler';
import 'react-native-reanimated';

import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import MinorHeader from '../Headers/MinorHeader';



import RetailsCategoriesHomeScreen from '../Retails/RetailsCategoriesHomeScreen';
import RetailsCustomersHomeScreen from '../RetailsCustomers/RetailsCustomersHomeScreen';

import RetailsInventoryHomeScreen from '../RetailsInventory/RetailsInventoryHomeScreen';



import RetailsReportsHomeScreen from '../RetailsReports/RetailsReportsHomeScreen'
import AllRetailsProductsReportsHomeScreen from '../RetailsReports/AllRetailsProductsReportsHomeScreen';


import RetailsNewSaleHomeScreen from '../RetailsNewSale/RetailsNewSaleHomeScreen'



import RetailsInventoryProductsCategoriesHomeScreen from '../RetailsInventory/RetailsInventoryProductsCategoriesHomeScreen'
import RetailsNewSaleProductsCategoriesHomeScreen from '../RetailsNewSale/RetailsNewSaleProductsCategoriesHomeScreen'










import RetailsNewSaleOtherNewSaleHomeScreen from '../RetailsNewSale/RetailsNewSaleOtherNewSaleHomeScreen';
import RetailsInventoryOtherInventoryHomeScreen from '../RetailsInventory/RetailsInventoryOtherInventoryHomeScreen';

import { NavigationContainer } from '@react-navigation/native';

import RetailsProducts from '../ViewProductsNewSale/RetailsProducts';


import InventoryRetailsProducts from '../ViewProductsInventory/InventoryRetailsProducts';


import ViewRetailsOrders from '../ViewOrders/ViewRetailsOrders';


import RetailsWaitersHomeScreen from '../WaitersScreen/RetailsWaitersHomeScreen';


//VIEW ALL ORDERS WITHOUT CATEGORIES PRODUCTS
import AllRetailsOrders from '../AllOrders/AllRetailsOrders';
import RetailsOrdersDetailScreen from '../AllOrderDetailScreens/RetailsOrdersDetailScreen';


import AllRetailsClosedOrders from '../AllOrders/AllRetailsClosedOrders';
import RetailsClosedOrdersDetailScreen from '../AllOrderDetailScreens/RetailsClosedOrdersDetailScreen';


const Stack = createStackNavigator();

function RetailsStack({ naigation }) {
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
                              name="Retails Products Reports"
                              component={AllRetailsProductsReportsHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />

             



                


               {/* <Stack.Screen
                              name="Retails Inventory Others"
                              component={RetailsInventoryOtherInventoryHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />
*/}


















               <Stack.Screen
                    name="Retails NewSale"
                    component={RetailsNewSaleHomeScreen}
               // options={ () => ({ 
               //       headerLeft: () => <Header  title='About Page' />,
               //     })}
               />


              






                {/*<Stack.Screen
                              name="Retails NewSale Others"
                              component={RetailsNewSaleOtherNewSaleHomeScreen}
                        // options={ () => ({ 
                        //       headerLeft: () => <Header  title='About Page' />,
                        //     })}
                        />*/}

















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

               



          </Stack.Navigator>
          // </NavigationContainer>

     );
}
export default RetailsStack;