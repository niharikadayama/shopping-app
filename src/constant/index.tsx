import {Colors} from 'theme';

export const categories = {
  man: 'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  women:
    'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  kids: 'https://images.pexels.com/photos/5080167/pexels-photo-5080167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  sale: 'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
};

export const EmailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const supportMaterial = [
  {
    iconName: 'wallet-giftcard',
    backgroundColor: Colors.lightblue,
    textColor: Colors.steelblue,
    heading: 'Your Orders',
    subHeading: ['Track', 'Return', 'View an order'],
  },
  {
    iconName: 'comment-question-outline',
    backgroundColor: Colors.lightYellow,
    textColor: Colors.orange,
    heading: 'FAQs',
    subHeading: ['What is No-Contact Deliver', 'How can I return the product'],
  },
  {
    iconName: 'arrow-left-right',
    backgroundColor: Colors.lightPurple,
    textColor: Colors.purple,
    heading: 'Returns & Refunds',
    subHeading: ['Return Policies', 'Refund Policies'],
  },
  {
    iconName: 'cash-usd',
    backgroundColor: Colors.lightGreen,
    textColor: Colors.dullGreen,
    heading: 'Payment',
    subHeading: ['View Cashback details', 'Other Transactions'],
  },
  {
    iconName: 'account',
    backgroundColor: Colors.lightBrown,
    textColor: Colors.brown,
    heading: 'Account Setting',
    subHeading: ['Edit Password', 'Address details', 'Payment details'],
  },
];
