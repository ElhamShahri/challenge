import http from "./httpService";

export function LoginService(user) {
  return http.post("/users/login", {
    user: user,
  });
}

export function RegisterService(user) {
    return http.post("/users", {
      user: user,
    });
  }
