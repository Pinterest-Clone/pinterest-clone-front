import ourAxios from "./ourAxios";

export const getPinbyId = (id) => async () => {
  const response = await ourAxios.get(`api/pin/${id}`);
  return response;
};
