import useInsertData from "../../hooks/useInsertData";
import { Login } from "../type";
//login  user 
export const loginUser = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/Auth/v1/login`, data);
        dispatch({
            type: Login,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: Login,
            payload: e.response,
        })
    }
}