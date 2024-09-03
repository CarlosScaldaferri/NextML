import auth0 from "auth0-js";

const auth = new auth0.WebAuth({
  domain: "dev-bnvj80iah35gcv7r.us.auth0.com",
  clientID: "iN8abeoZHrAcFk3w35u9cRDpAJ7N1z05",
  redirectUri: "http://localhost:3000/api/auth/callback/",
  audience: null,
  responseType: "token id_token",
  scope: "openid profile",
});

export default auth;
