import * as React from 'react';
import {StyleSheet, Text, SafeAreaView} from 'react-native';
import {Checkbox} from 'react-native-paper';
const CustomCheckbox = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
        color={'green'}
      />
      <Text>Checkbox</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {},
});
export default CustomCheckbox;
