import { SERVER } from "../../setting";
import axios from "axios";
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export function loginUser(cred: any) {
  // console.log(cred);
  return new Promise<{ data: any }>((resolve) =>
    axios
      .post(SERVER + "login/", { username: cred.user, password: cred.pwd })
      .then((res) => resolve({ data: res.data }))
  );
}

export function logoutUser() {
  // console.log();
  return new Promise<{ data: any }>((resolve) => resolve({ data: false }));
}
