import axios from 'axios';


export default axios.create ({
    baseURL : "https://api.unsplash.com/",
    headers : {
        Authorization : "Client-ID -YrvfkCCcdSMngyR_v0ReDMsbinmpArxkS01J9HsVFY"
    }
})

