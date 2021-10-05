const { createAstraClient } = require("@astrajs/client");

let astraClient = null;

export default async function handler(req, res) {
  if (!astraClient) {
    astraClient = await createAstraClient({
      astraDatabaseId: process.env.ASTRA_DB_ID,
      astraDatabaseRegion: process.env.ASTRA_DB_REGION,
      applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
    });
  }
  const keyspaces = await astraClient.schemas.getKeyspaces();
  res.status(200).json(keyspaces);
}
