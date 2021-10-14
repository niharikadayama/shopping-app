import { Dimensions } from "react-native";

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export const colors = {
    darkGrey: '#353d5e',
    lightGrey: '#F5F5F5',
    white: 'white',
    transparentdarkBg: 'rgba(0,0,0,0.5)',
    buttonBglight: 'rgba(255, 99, 71, 0.5)',
    buttonBgdark: 'rgb(60, 60, 60)',
    yellow: '#FFDB58',
    coral: '#E77471',
    darkbg: 'rgba(0,0,0,0.3)',
    mediumGrey: '#B0B0B0',
    coralbg: 'rgba(255, 99, 71, 0.1)',
    pink: 'hsla(0, 100%, 30%, 0.3)',
    offwhite : '#FDF7EE',
    transparentlightBg: 'rgba(240,240,240,0.8)',
    red: '#F67280',
    darkCoral:'#ce8f86',
}

export const images = {
    logo:  require('assets/images/Nida.png'),
    woman: require('assets/images/woman.jpg'),
    man:   require('assets/images/man.jpg'),
    kid:   require('assets/images/Kid.jpg'),
    new:   require('assets/images/new.jpg'),
    w1:    require('assets/woman/w1.jpg'),
    w2:    require('assets/woman/w2.jpg'),
    w3:    require('assets/woman/w3.jpg'),
    w4:    require('assets/woman/w4.jpg'),
    w5:    require('assets/woman/w5.jpg'),
    w6:    require('assets/woman/w6.jpg'),
}

export const size = [
   32,34,36,38
]



