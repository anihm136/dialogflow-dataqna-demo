# Dialogflow-Data QnA integration demo
This repository contains the exported agent and fulfilment code to demonstrate integration of dialogflow with Data QnA

## What does it do?
This demonstration sets up a dialogflow agent with two intents - a default welcome intent and a catch-all fallback intent. The fallback intent passes all queries to the Data QnA API to convert it to a BigQuery SQL query. If the query is valid, it returns the result of the query. If not, it notifies the user that the query is invalid.

## Setup
Clone the source code to a folder, say `dialogflow-dataqna-demo`. Then, follow the steps in the given order
### Infrastructure and Services
1. [Create](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-zonal-cluster) a new Dialogflow agent
2. Select a BigQuery table to query, and [enable](https://cloud.google.com/blog/products/data-analytics/introducing-data-qna) Data QnA on it
3. Enable the BigQuery and Data QnA APIs
_Note_: The Data QnA API is currently in Alpha, and needs to be allowlisted on your project before it can be used. Contact the Data QnA product team for support

### Dialogflow agent
In the new agent, under `Settings > Export and Import`, select 'Restore from ZIP'. Select the `agent.zip` file from the repository

### Fulfilments
1. Enable the inline editor under `Fulfilments`
2. Extract the `fulfilments.zip` file from the repository. It will contain two files - `index.js` and `package.json`. Copy the two files to the respecctive destinations in the inline editor
3. Fill in the credentials and information under the "Credentials and Info" section as directed by the comments
4. Click on 'Deploy' to create a new Cloud Function to handle the fulfilments

