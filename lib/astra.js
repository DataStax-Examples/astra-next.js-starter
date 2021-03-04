const { createClient } = require("@astrajs/rest");

let astraClient = null;
const getAstraClient = async () => {
  if (astraClient === null) {
    astraClient = await createClient(
      {
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
      },
      30000
    );
  }
  return astraClient;
};

const fetchAPI = async (query, { variables } = {}) => {
  const client = await getAstraClient();
  const { data, status } = client.post(
    `/api/graphql/${process.env.ASTRA_DB_KEYSPACE}`,
    {
      query,
      variables,
    }
  );
  if (status === 404) {
    throw new Error("Astra GraphQL endpoint is invalid");
  }
  return data;
};

export const getCharacters = async () => {
  const data = await fetchAPI(`query getCharacters {
      nextjs_characters {
        values {
          id
          actor_name
          house_name
          name
          royal
        }
      }
    }`);
  return data && data.nextjs_characters && data.nextjs_characters.values;
};
