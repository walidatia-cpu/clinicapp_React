import useInsertData from "../../hooks/useInsertData";
import { Add_Patient } from "../type";
//AddPatient
export const addPatient = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/Patient/v1/Add`, data);
        dispatch({
            type: Add_Patient,
            payload: response,
            loading: true
        })

    } catch (e) {
        dispatch({
            type: Add_Patient,
            payload: e.response,
        })
    }
}


