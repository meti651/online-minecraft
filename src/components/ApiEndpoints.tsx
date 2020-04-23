export const prefix = "https://localhost:5001";

export const authControllerPrefix = "/api/auth";
export const blocksControllerPrefix = "/api/blocks";

export const endpoints = {
    registration: prefix + authControllerPrefix + "/signup",
    login: prefix + authControllerPrefix + "/login",
    blocks: prefix + blocksControllerPrefix + "/blocks"
};