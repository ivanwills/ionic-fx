var services = angular.module('starter.services', []);

/**
 * A simple example service that returns some data.
 */
services.factory('Friends', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var friends = [
        { id: 0, name: 'Scruff McGruff' },
        { id: 1, name: 'G.I. Joe' },
        { id: 2, name: 'Miss Frizzle' },
        { id: 3, name: 'Ash Ketchum' }
    ];

    return {
        all: function() {
            return friends;
        },
        get: function(friendId) {
            // Simple index lookup
            return friends[friendId];
        }
    };
});

services.factory('Sounds', function() {
    debugger;
    if (!localStorage.getItem('sounds') || localStorage.getItem('sounds').length === 0) {
        localStorage.setItem('sounds', JSON.stringify([
            { id: 0, name: 'Tada' , wav: 'tada.wav' },
            { id: 1, name: 'Fair' , wav: 'fair.wav' },
            { id: 2, name: 'Think', wav: 'think.wav' },
            { id: 3, name: 'Other', wav: 'other.wav' },
        ]));
    }

    return {
        all: function() {
            return JSON.parse(localStorage.getItem('sounds'));
        },
        get: function(soundId) {
            // Simple index lookup
            return JSON.parse(localStorage.getItem('sounds'))[soundId];
        }
    };
});
