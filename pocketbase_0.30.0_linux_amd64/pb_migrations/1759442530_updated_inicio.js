/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3936692868")

  // remove field
  collection.fields.removeById("text577089629")

  // remove field
  collection.fields.removeById("text2468560040")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "json577089629",
    "maxSize": 0,
    "name": "usuario",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "json2468560040",
    "maxSize": 0,
    "name": "contrasena",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3936692868")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text577089629",
    "max": 0,
    "min": 0,
    "name": "usuario",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2468560040",
    "max": 0,
    "min": 0,
    "name": "contrasena",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("json577089629")

  // remove field
  collection.fields.removeById("json2468560040")

  return app.save(collection)
})
