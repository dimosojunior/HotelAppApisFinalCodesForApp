import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

const Test = () => {
  const [showAlert, setShowAlert] = useState(false);

  const showAlertFunction = () => {
    setShowAlert(true);
  };

  const hideAlert = () => {
    setShowAlert(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={showAlertFunction}>
        <Text>Show Success Alert</Text>
      </TouchableOpacity>

      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Success!"
        message="Your operation was successful."
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="OK"
        confirmButtonColor="#DD6B55"
        onConfirmPressed={hideAlert}
      />
    </View>
  );
};

export default Test;
