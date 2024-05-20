import axios from 'axios'

export const allUser = () => async (dispatch) => {
    const responce = await axios.get('https://jsonplaceholder.typicode.com/users')
    dispatch({type: 'allUser', payload: responce.data})
}