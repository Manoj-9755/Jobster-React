import axios from 'axios'
import { clearStore } from '../featureuser/userslice';
const customfetch=axios.create({
    baseURL:'https://jobify-prod.herokuapp.com/api/v1/toolkit'
})

export default customfetch;
