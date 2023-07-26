import ourAxios from "./ourAxios";

export const signUp = async ({ email, password, birthday }) => {
    const response = ourAxios.post(`/api/users/signup`, { email, password, birthday });
    console.log(response);
    return response;
};