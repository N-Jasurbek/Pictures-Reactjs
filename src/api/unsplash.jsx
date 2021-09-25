import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID OgoIBjz6UO1gi4HoeN24ERtNIloCrxysHkeOgcFdVj8'    
    }

});