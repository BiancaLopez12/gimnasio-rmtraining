/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1736455494")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": "",
    "listRule": "",
    "updateRule": "",
    "viewRule": null
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1736455494")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": null,
    "listRule": null,
    "updateRule": null,
    "viewRule": ""
  }, collection)

  return app.save(collection)
})
