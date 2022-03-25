import { GET_CATEGORIES  } from './constantes';
import axios from 'axios'

export const postLogin = (payload) => {
  console.log(payload, "PAYLOAD")
  return async function (dispatch) {
        const {data} = await axios.post('http://localhost:3003/auth/signin', payload)
        console.log(payload, '-> DATA ')
        return data
  }
}

export const postSubmit = (payload) => {
  console.log(payload,"action sumbit")
    return async function (dispatch) {
      const {data} = await axios.post('http://localhost:3003/auth/signup', payload)
      console.log(data,"LA DAATA")
      return data
    }
};


export const getCategories= ()=> {
  return async function(dispatch) {
    const {data} = await axios.get('http://localhost:3003/category')
      dispatch({ type: GET_CATEGORIES, payload: data });
  }
}