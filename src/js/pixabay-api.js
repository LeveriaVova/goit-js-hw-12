

import axios from 'axios';


const API_KEY = "54778423-d145f1f321679e99c9163e3ff";



const getImagesByQuery = async (query, page) => {
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: query,
        page,
        per_page: 15,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true

});
    try {
        const response = await axios.get(`https://pixabay.com/api/?${searchParams}`);
        return response.data;
    } catch (error) { 
            throw error; }
    
 }




export { getImagesByQuery };


