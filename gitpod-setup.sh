#!/bin/bash

function setupTable() {
  if [[ -z "$ASTRA_DB_APPLICATION_TOKEN" ]]; then
    echo "What is your Astra DB username? 🚀"
    read -r ASTRA_DB_APPLICATION_TOKEN
    export ASTRA_DB_APPLICATION_TOKEN="${ASTRA_DB_APPLICATION_TOKEN// /}"
    gp env ASTRA_DB_APPLICATION_TOKEN="${ASTRA_DB_APPLICATION_TOKEN// /}" &>/dev/null
  fi

  if [[ -z "$ASTRA_DB_KEYSPACE" ]]; then
    echo "What is your Astra keyspace name? 🔑"
    read -r ASTRA_DB_KEYSPACE
    export ASTRA_DB_KEYSPACE="${ASTRA_DB_KEYSPACE// /}"
    gp env ASTRA_DB_KEYSPACE="${ASTRA_DB_KEYSPACE// /}" &>/dev/null
  fi

  if [[ -z "$ASTRA_DB_ID" ]]; then
    echo "What is your Astra database id? Example: 4e62bc79-0e12-4667-bd7d-2191ece2a32c ☁️"
    read -r ASTRA_DB_ID
    export ASTRA_DB_ID="${ASTRA_DB_ID// /}"
    gp env ASTRA_DB_ID="${ASTRA_DB_ID// /}" &>/dev/null
  fi

  if [[ -z "$ASTRA_DB_REGION" ]]; then
    echo "What is your Astra database region? Example: us-east1 🌍"
    read -r ASTRA_DB_REGION
    export ASTRA_DB_REGION="${ASTRA_DB_REGION// /}"
    gp env ASTRA_DB_REGION="${ASTRA_DB_REGION// /}" &>/dev/null
  fi

  # Create tables
  echo "Creating Astra tables..."
  TABLE_CREATION=$(curl --request POST \
    --url "https://${ASTRA_DB_ID}-${ASTRA_DB_REGION}.apps.astra.datastax.com/api/rest/v1/keyspaces/${ASTRA_DB_KEYSPACE}/tables" \
    --header 'content-type: application/json' \
    --header "x-cassandra-token: ${ASTRA_DB_APPLICATION_TOKEN}" \
    --data '{"ifNotExists":true,"columnDefinitions":[{"static":false,"name":"name","typeDefinition":"text"},{"static":false,"name":"id","typeDefinition":"int"},{"static":false,"name":"actor_name","typeDefinition":"text"},{"static":false,"name":"house_name","typeDefinition":"text"},{"static":false,"name":"royal","typeDefinition":"boolean"}],"primaryKey":{"partitionKey":["name"]},"tableOptions":{"defaultTimeToLive":0},"name":"nextjs_characters"}')

  curl --request POST \
    --url "https://${ASTRA_DB_ID}-${ASTRA_DB_REGION}.apps.astra.datastax.com/api/rest/v1/keyspaces/${ASTRA_DB_KEYSPACE}/tables/nextjs_characters/rows" \
    --header 'content-type: application/json' \
    --header "x-cassandra-token: ${ASTRA_DB_APPLICATION_TOKEN}" \
    --data '{"columns":[{"name":"id","value":1},{"name":"name","value":"Jon Snow"},{"name":"actor_name","value":"Kit Harington"},{"name":"house_name","value":"Stark"},{"name":"royal","value":true}]}'

    curl --request POST \
    --url "https://${ASTRA_DB_ID}-${ASTRA_DB_REGION}.apps.astra.datastax.com/api/rest/v1/keyspaces/${ASTRA_DB_KEYSPACE}/tables/nextjs_characters/rows" \
    --header 'content-type: application/json' \
    --header "x-cassandra-token: ${ASTRA_DB_APPLICATION_TOKEN}" \
    --data '{"columns":[{"name":"id","value":2},{"name":"name","value":"Daenerys Targaryen"},{"name":"actor_name","value":"Emilia Clark"},{"name":"house_name","value":"Targaryen"},{"name":"royal","value":true}]}'

    curl --request POST \
    --url "https://${ASTRA_DB_ID}-${ASTRA_DB_REGION}.apps.astra.datastax.com/api/rest/v1/keyspaces/${ASTRA_DB_KEYSPACE}/tables/nextjs_characters/rows" \
    --header 'content-type: application/json' \
    --header "x-cassandra-token: ${ASTRA_DB_APPLICATION_TOKEN}" \
    --data '{"columns":[{"name":"id","value":3},{"name":"name","value":"Tyrion Lannister"},{"name":"actor_name","value":"Peter Dinklage"},{"name":"house_name","value":"Lannister"},{"name":"royal","value":false}]}'
}

setupTable

echo $TABLE_CREATION

while [ ! "$TABLE_CREATION" = '{"success":true}' ]; do
  echo "Your Database details were invalid. Trying again:"
  unset ASTRA_DB_ID
  unset ASTRA_DB_REGION
  unset ASTRA_DB_KEYSPACE
  unset ASTRA_DB_APPLICATION_TOKEN
  setupTable
done
