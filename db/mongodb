# select matching element from array
db.topchart.find({ 'apps.id': 'org.zooper.zwpro'}, {category: 1, collection: 1, _id: 0, country: 1, 'apps.$': 1})[0]

# does property exist
db.inventory.find( { qty: { $exists: true} } )

# Update
db.getCollection('subscriptions').update({default_driver_gratuity: { $ne: 0, $exists: true} }, {$set: {default_driver_gratuity: 0}}, { multi: true });


# compare 2 values
db.getCollection('subscriptions').find({$where : "this.end_date != this.resume_date"})

# not in array
db.getCollection('subscriptions').find({subscription_status: { $nin: ['ACTIVE', 'CANCELLED']}})

# in array
$in: ['SKIPPED', 'PAUSE']

db.getCollection('preferences').find({'log.change': 'creating the missing preference'})
