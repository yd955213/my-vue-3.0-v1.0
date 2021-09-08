import { axios } from "../util/request";

export function login(parameter) {
  return axios({
    url: "/signIn",
    method: "post",
    data: parameter,
  });
}
