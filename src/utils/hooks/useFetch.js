import axios from 'axios';
import  { useState } from 'react';

const useFetch = () => {
    const [loading, setLoading] = useState(false);

    const header = {
        withCredentials: true,
    };

    const get = async (endpoint) =>{
     
        try{
            setLoading(true);
            const response = await axios.get(`${process.env.NEXT_SERVER_URL + endpoint}`, {headers:header})
            .then(res => res.data)
            .finally(()=> setLoading(false));
            return response;
        }catch(error){
            throw Error(error);
        }
    }
    const post = async (endpoint, payload) =>{
      
        try{
            setLoading(true);
            const response = await axios.post(`${process.env.NEXT_SERVER_URL + endpoint}`,{payload}, {headers:header})
            .then(res => res.data)
            .finally(()=> setLoading(false));
            return response;
        }catch(error){
            throw Error(error);
        }
    }
    
    const patch = async (endpoint, payload) =>{
      
        try{
            setLoading(true);
            const response = await axios.patch(`${process.env.NEXT_SERVER_URL + endpoint}`,{payload}, {headers:header})
            .then(res => res.data)
            .finally(()=> setLoading(false));
            return response;
        }catch(error){
            throw Error(error);
        }
    }

    const remove = async (endpoint) =>{
       
        try{
            setLoading(true);
            const response = await axios.delete(`${process.env.NEXT_SERVER_URL + endpoint}`,  {headers:header})
            .then(res => res.data)
            .finally(()=> setLoading(false));
            return response;
        }catch(error){
            throw Error(error);
        }
    }
    return {loading, get, post, patch, remove };
};

export default useFetch;