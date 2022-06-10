import { createClient } from "next-sanity";

//...

export const client = createClient({
  projectId: "fzcuecdg",
  dataset: "production",
  apiVersion: "2022-06-09",
  token:
    "sku2G99AxHSDmwIEuYdKbipL1VEFoJyhmfMYIq5mY4tFQS1mU2Qsd73hAUXJtMxosPQS2XnJW7ZsdacmNHGf0XD2Qct5w7Fm3xheXdXuhKzxfrotluZmpmoJNukQgdwzyPZjF00jFtkPQTPyFN9gxBz8TAbqo2uRFxVpWckgRWPdKuO4LFOg",
  useCdn: false,
});
