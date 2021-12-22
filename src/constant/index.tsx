import {images,colors} from 'theme';
    
export const categories = {
  man:
    'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  women:
    'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  kids:
    'https://images.pexels.com/photos/5080167/pexels-photo-5080167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  sale:
    'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
};
export const woman = [
    {
        id:1,
        name: 'Indya Kurti',
        price: 1600,
        like: false, 
        img: images.w1,
        info: 'Blue mirror Work kurti',
        color:'blue'
       
    },
    {
        id:2,
        name: 'Crop Top',
        price: 600,
        like: false,
        img: images.w2,
        info: 'Black knotted crop top',
        color:'black'
  
    },
    {
        id:3,
        name: 'Stripped top',
        price: 700,
        like: false,
        img: images.w3,
        info: 'top with yellow Strips',
        color:'white',
  
    },
    {
        id:4,
        name: 'Roadstar ',
        price: 1200,
        like: false,
        img: images.w4,
        info: 'Orange top with woollen skirt',
        color:'coral'
  
    },
    {
        id:5,
        name: 'Asthetic shirt',
        price: 800,
        like: false,
        img: images.w5,
        info: 'Abstract shirt with half-sleeves',
        color:'pink'
  
    },
    {
        id:6,
        name: 'White Frock',
        price: 900,
        like: false,
        img: images.w6,
        info: 'Simple umbrella frock',
        color:'white'
  
    }
  ]

export const supportMaterial = [
  {
    iconName: "wallet-giftcard",
    bg:colors.coralbg,
    color:colors.pink,
    heading:"Your Orders",
    subHeading:['Track','Return','View an order'],
  },
  {
    iconName: "comment-question-outline",
    bg:"#FFECAC",
    color:colors.orange,
    heading:"FAQs",
    subHeading:['What is No-Contact Deliver'
    ,'How can I return the product'],
  },
  {
    iconName: "arrow-left-right",
    bg:"#EBDEF0",
    color:colors.purple,
    heading:"Returns & Refunds",
    subHeading:['Return Policies','Refund Policies'],
  },
  {
    iconName: "cash-usd",
    bg:"#D4EFDF",
    color:colors.dullGreen,
    heading:"Payment",
    subHeading:['View Cashback details','Other Transactions'],
  },
  {
    iconName: "account",
    bg:colors.coralbg,
    color:colors.coral,
    heading:"Account Setting",
    subHeading:['Edit Password','Adress details','Payment details'],
  }
] 