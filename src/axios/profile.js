import ourAxios from "./ourAxios";
import {
  deleteWithToken,
  getWithToken,
  postWithToken,
  putWithToken,
} from "./auth";

export const getProfile = (nickname) => async () => {
  const response = await getWithToken(`api/users/${nickname}`);
  return response;
};

export const getProfileEdit = async () => {
  const response = await getWithToken(`api/users/profile`);
  return response;
};
