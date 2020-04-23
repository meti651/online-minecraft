export const prefix = "https://localhost:5001";

export const controllerPrefix = "/api/auth";

export const endpoints = {
    registration: prefix + controllerPrefix + "/signup",
    login: prefix + controllerPrefix + "/login"
};