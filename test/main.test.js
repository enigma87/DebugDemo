/**
 * Created by enigma on 6/9/16.
 */
import { Meteor } from 'meteor/meteor';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import { Promise } from 'meteor/promise';
import { assert } from 'meteor/practicalmeteor:chai';
import { Random } from 'meteor/random';
import { addObject } from '../server/main.js';

if (Meteor.isServer) {
    describe('test mocha promise', function() {
        before(function() {
            addObject(Random.id());
        });
        it('collects  myCollection test', function() {
            const collector = new PublicationCollector({ userId: Random.id()});

            return new Promise(function(resolve) {
                    collector.collect('mycollection', function (collections) {
                        resolve(collections);
                    });
            }).then(function(coll) {
                chai.assert.notEqual(coll, null);
                chai.assert.equal(coll, null);
            }).catch(function(err){
                console.log(err.stack);
                throw new Error(err);
            });
        });
    });
}