# EcoleDirecte-API-France

Sample code to get access to the API:
```js
const api = require("api-ecoledirecte-france")

api.login("username", "password")
    .then((token) => {
        console.log(token)
    })
    .catch((err) => {
        throw err
    })

api.accounts("username", "password")
    .then((accounts) => {
        console.log(account)
    })
    .catch((err) => {
        throw err
    })
```