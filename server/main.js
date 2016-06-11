import { Meteor } from 'meteor/meteor';

export const myCollection = new Mongo.Collection('mycollection');

export const addObject = function (id) {
    myCollection.insert({
        name: 'test ' + id
    });
}

Meteor.publish('mycollection', function() {
    return myCollection.find({});
});

