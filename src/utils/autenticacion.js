const { ApolloError } = require("apollo-server");
const serverConfig = require("../server");
const fetch = require("node-fetch");

const authentication = async ({ req }) => {
  const token = req.headers.authorization || "";

  if (token == "") return { userIdToken: null };

  try {
    let requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
      redirect: "follow",
    };
    let response = await fetch(
      `${serverConfig.autenticacion_api_url}/verificaToken/`,
      requestOptions
    );

    if (response.status != 200) {
      throw new ApolloError(`SESION INACTIVA - ${401}` + response.status, 401);
    }
    return { userIdToken: (await response.json()).UserId };
  } catch (error) {
    throw new ApolloError(`TOKEN ERROR: ${500}: ${error}`, 500);
  }
};
module.exports = authentication;
