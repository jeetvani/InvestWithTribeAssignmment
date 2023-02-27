// Write axios codes for API calls
import axios from 'axios';
import {BASE_URL} from '../Constants/API';
const axiosClient = axios.create({
  baseURL: BASE_URL,
});

export default axiosClient;
