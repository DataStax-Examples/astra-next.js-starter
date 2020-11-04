const getAstraToken = async () => {
  const {ASTRA_DB_ID, ASTRA_DB_REGION} = process.env;
  return await fetch(`https://${ASTRA_DB_ID}-${ASTRA_DB_REGION}.apps.astra.datastax.com/api/rest/v1/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: process.env.ASTRA_DB_USERNAME,
      password: process.env.ASTRA_DB_PASSWORD
    })
  }).then(res => {
    if (res.status >= 400) {
      throw new Error('Could not generate Astra credentials')
    }
    return res.json()
  }).then(body => {
    if (!body || !body.authToken) {
      throw new Error('Could not generate Astra credentials')
    }
    return body.authToken
  });
}

const fetchAPI = async (query, {variables} = {}) => {
  const {ASTRA_DB_ID, ASTRA_DB_REGION, ASTRA_DB_KEYSPACE} = process.env;
  const res = await fetch(`https://${ASTRA_DB_ID}-${ASTRA_DB_REGION}.apps.astra.datastax.com/api/graphql/${ASTRA_DB_KEYSPACE}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Cassandra-Token': await getAstraToken(),
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  if (res.status === 404) {
    throw new Error('Astra GraphQL endpoint is invalid');
  }

  const json = await res.json()

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export const getCharacters = async () => {
  const data = await fetchAPI(`query getCharacters {
      nextjsCharacters {
        values {
          id
          actorName
          houseName
          name
          royal
        }
      }
    }`)
  return data && data.nextjsCharacters && data.nextjsCharacters.values
};
