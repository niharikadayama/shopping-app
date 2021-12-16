import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer eRO8ulFWKr66S5qZ3KWv42-2Ac_ztgnlY9rfrtYTiNGJ5oqpaJkxvi18N5rowDF2_sRbWEcqBKPX9LvpudRTpFP0eR6bAAs0-0ICN2HOC5ENE5yr5fi1hnBqpw1DYXYx'
    }
});

