import 'react-native-gesture-handler';
import 'react-native-reanimated';

import { StyleSheet,TextInput,
  Pressable, Text,ScrollView, View,Image, Button, FlatList,TouchableOpacity,Modal,TouchableWithoutFeedback, Keyboard  } from 'react-native';
import {globalstyles} from '../Styles/globalstyles';


import useFetch from '../useFetch';
import axios from 'axios';
// import HomeScreenCard from '../Shared/HomeScreenCard';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {MotiView} from 'moti';
import Card from '../Shared/Card';
import Card2 from '../Shared/Card2';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';


// This import used to change color
import { EventRegister } from 'react-native-event-listeners';
import React, {useState, useEffect, useContext} from 'react';
import ListItemsCard from '../Shared/ListItemsCard';

import {Picker} from '@react-native-picker/picker';

const {width,height} = Dimensions.get('window');



const HomeScreenComponent =({hotelCategories}) => {

const [modalVisible, setModalVisible] = useState(false);

const navigation = useNavigation();

// HII NI FUNCTION YAKUNAVIGATE KWENDA KWENYE KOZI ZA CHUO HUSIKA
const [CategoryName, setCategoryName] = useState('');
    const move = (CategoryName) =>{
      setCategoryName(CategoryName);
      
      navigation.navigate('Hotel ' +CategoryName);
    }
//INAISHIA HAPA HII NI FUNCTION YAKUNAVIGATE KWENDA KWENYE KOZI ZA CHUO HUSIKA
  

 
  
 const {width, height} = Dimensions.get('window');
 



//FONTS

 
// MWANZO WA FLAT LIST COLUMN MBILI PAMOJA NA FUNCTION YAKE


  const renderItem = ({item, index}) => {




 
    return (


   
   

<>
{ item.CategoryName !== "New sale" ? (
       <TouchableOpacity 
         onPress={() => move(item.CategoryName)}>

      <MotiView
        style={globalstyles.listContainer}
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        transition={{delay: 1000 + index * 200}}>

      { item.CategoryName === "New sale" && (
        <View style={globalstyles.NewSalesimageContainer}>
        
          <Image 
          // kama unatumia APIS
          //source={{uri: item.CategoryImage}}
          source={item.CategoryImage} 
          style={globalstyles.NewSalesimage} 
          />
       
        </View>
        )}



       { item.CategoryName === "Inventory" && (
        <View style={globalstyles.InventoryimageContainer}>
        
          <Image 
          // kama unatumia APIS
          //source={{uri: item.CategoryImage}}
          source={item.CategoryImage} 
          style={globalstyles.Inventoryimage} 
          />
       
        </View>
        )}






 { item.CategoryName === "Customers" && (
        <View style={globalstyles.CustomersimageContainer}>
        
          <Image 
          // kama unatumia APIS
          //source={{uri: item.CategoryImage}}
          source={item.CategoryImage} 
          style={globalstyles.Customersimage} 
          />
       
        </View>
        )}

{ item.CategoryName === "Reports" && (
        <View style={globalstyles.ReportsimageContainer}>
        
          <Image 
          // kama unatumia APIS
          //source={{uri: item.CategoryImage}}
          source={item.CategoryImage} 
          style={globalstyles.Reportsimage} 
          />
       
        </View>
        )}










 { item.CategoryName === "New sale" && (
        <Text style={globalstyles.NewSalesnameText}>{item.CategoryName}</Text>
        )}

  { item.CategoryName === "Inventory" && (
        <Text style={globalstyles.InventorynameText}>{item.CategoryName}</Text>
        )}
         
   { item.CategoryName === "Customers" && (
        <Text style={globalstyles.CustomersnameText}>{item.CategoryName}</Text>
        )}

      { item.CategoryName === "Reports" && (
        <Text style={globalstyles.ReportsnameText}>{item.CategoryName}</Text>
        )}     
          
       


      </MotiView>
       </TouchableOpacity>


):(








  <TouchableOpacity 
         onPress={() => setModalVisible(true)}>

      <MotiView
        style={globalstyles.listContainer}
        from={{opacity: 0, translateY: 50}}
        animate={{opacity: 1, translateY: 0}}
        transition={{delay: 1000 + index * 200}}>

      { item.CategoryName === "New sale" && (
        <View style={globalstyles.NewSalesimageContainer}>
        
          <Image 
          // kama unatumia APIS
          //source={{uri: item.CategoryImage}}
          source={item.CategoryImage} 
          style={globalstyles.NewSalesimage} 
          />
       
        </View>
        )}



       { item.CategoryName === "Inventory" && (
        <View style={globalstyles.InventoryimageContainer}>
        
          <Image 
          // kama unatumia APIS
          //source={{uri: item.CategoryImage}}
          source={item.CategoryImage} 
          style={globalstyles.Inventoryimage} 
          />
       
        </View>
        )}




 { item.CategoryName === "New sale" && (
        <Text style={globalstyles.NewSalesnameText}>{item.CategoryName}</Text>
        )}

     
          
       


      </MotiView>
       </TouchableOpacity>






)}
</>


          );
  };

// MWISHO WA FLAT LIST COLUMN MBILI PAMOJA NA FUNCTION YAKE



  return (



    <View style={globalstyles.container}>
    




<Card2>
<Text style={globalstyles.categoriesComponentText}>HOTEL</Text>

</Card2>













{/*{MWANZO WA FLAT LIST COLUMN MBILI}*/}
      <FlatList
        data={hotelCategories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        //horizontal
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />



















{/*MODAL FOR MAKING ORDER*/}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <View style={globalstyles.ModalView}>
            <Text style={{ marginLeft:90,fontSize:15 }}>ADD NEW SALE</Text>

            <View style={globalstyles.form}>

                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:20, marginLeft:3 }}>Product Name</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.icon} name='pencil'/>
                        <TextInput style={globalstyles.textInput}  placeholder='Product Name' />
                    </View>
                </View>

                   
                <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:20, marginLeft:3 }}>Product Price</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.icon} name='pencil'/>
                        <TextInput style={globalstyles.textInput}  placeholder='Product Price' />
                    </View>
                </View>


                 <View style={{ marginTop:20 }}>
                    <Text style={{ fontSize:20, marginLeft:3 }}>Product Quantity</Text>
                    < View style={globalstyles.input}>
                        <FontAwesome style={globalstyles.icon} name='pencil'/>
                        <TextInput style={globalstyles.textInput}  placeholder='Product Quantity' />
                    </View>
                </View>





               

                


            </View>

            

          
            

            <View style={globalstyles.ButtonConatiner}>
                    <Pressable style={globalstyles.ButtonClose}  onPress={() => setModalVisible(false)} >
                        <Text>CLOSE</Text>
                    </Pressable>
                    <Pressable style={globalstyles.ButtonAdd}  onPress={() => setModalVisible(false)} >
                        <Text>ADD PRODUCT</Text>
                    </Pressable>
            </View>
          </View>
        </View>
      </Modal>

















    </View>






  );
};






  
export default HomeScreenComponent;



const styles = StyleSheet.create({
 
  
});