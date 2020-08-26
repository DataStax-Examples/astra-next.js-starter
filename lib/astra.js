const getAstraToken = async () => {
  return await fetch(`https://${process.env.ASTRA_DB_ID}-${process.env.ASTRA_DB_REGION}.apps.astra.datastax.com/api/rest/v1/auth`, {
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
  const res = await fetch(`https://${process.env.ASTRA_DB_ID}-${process.env.ASTRA_DB_REGION}.apps.astra.datastax.com/api/graphql`, {
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
          actorname
          housename
          name
          royal
        }
      }
    }`)
  return data && data.nextjsCharacters && data.nextjsCharacters.values
};
