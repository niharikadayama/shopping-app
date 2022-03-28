import React, {Component} from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import {Colors} from 'theme/colors';

export default class CustomRadioButton extends Component {
  state = {
    value: null,
  };

  render() {
    const {PROP} = this.props;
    const {value} = this.state;

    return (
      <View>
        {PROP.map(res => {
          return (
            <View style={{flexDirection: 'row'}}>
              <View key={res.key} style={styles.rbWrapper}>
                <Text style={styles.textStyle}>{res.text}</Text>
                <TouchableOpacity
                  style={styles.rbStyle}
                  onPress={() => {
                    this.setState({
                      value: res.key,
                    });
                  }}>
                  {value === res.key && <View style={styles.selected} />}
                </TouchableOpacity>
              </View>
            </View>
          );
        })}

        {/* <Text> Selected values: {this.state.value}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rbWrapper: {
    marginBottom: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    marginRight: 12,
    fontSize: 16,
    color: Colors.darkGrey,
  },
  rbStyle: {
    height: 32,
    width: 32,
    borderRadius: 90,
    borderWidth: 2,
    borderColor: '#2750aa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    width: 16,
    height: 16,
    borderRadius: 45,
    backgroundColor: Colors.darkGrey,
  },
  result: {
    marginTop: 22,
    color: 'white',
    fontWeight: '600',
    backgroundColor: 'blue',
  },
});
