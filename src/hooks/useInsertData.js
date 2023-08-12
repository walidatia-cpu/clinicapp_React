import baseUrl from "../Api/baseUrl";

 const useInsertData = async (url, parmas) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    const res = await baseUrl.post(url, parmas, config);
    return res;
}
export default useInsertData
