import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
    Address: a
    .model({
      address1: a.string(),
      address2: a.string(),
      city: a.string(),
      state: a.string(),
      zip: a.string(),
      country: a.string(),
      users: a.hasMany('User', 'addressId'),
      vendors: a.hasMany('Vendor', 'addressId'), 
    }),
    User: a
    .model({
      salutation: a.string(),
      firstName:  a.string().required(),
      middleName: a.string(),
      lastName: a.string().required(),
      email: a.string().required(),
      username: a.string().required(),
      password: a.string(),
      addressId: a.id(),
      address: a.belongsTo('Address', 'addressId'),
      vendor: a.hasOne('Vendor', 'adminUserId'),
    }),
    VendorType: a
    .model({
      name: a.string(),
      description: a.string(),
      vendors: a.hasMany('Vendor', 'vendorTypeId'),
    }),
    Vendor: a
    .model({
      legalId: a.string(),
      vendorTypeId: a.id(),
      vendorType: a.belongsTo('VendorType', 'vendorTypeId'),
      vendorName: a.string(),
      description: a.string(),
      adminUserId: a.id(), 
      adminUser: a.belongsTo('User', 'adminUserId'), 
      email: a.email(),
      phone: a.phone(),
      addressId: a.id(),
      address: a.belongsTo('Address', 'addressId'),
      website: a.url(),
      status: a.string(),
    }),
}).authorization((allow) => [allow.publicApiKey()]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
