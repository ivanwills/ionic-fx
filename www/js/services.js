angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
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
})

.factory('Sounds', function() {

    if (!localStorage.getItem('sounds') || localStorage.getItem('sounds').length === 0) {
        localStorage.setItem('sounds', JSON.stringify([
            { id: 0, name: 'Bell'       , wav: 'bell.ogg'        },
            { id: 1, name: 'Error'      , wav: 'error.ogg'       },
            { id: 2, name: 'Information', wav: 'information.ogg' },
            { id: 3, name: 'Message'    , wav: 'message.ogg'     },
            { id: 4, name: 'Question'   , wav: 'question.ogg'    },
            { id: 5, name: 'Slide'      , wav: 'slide.ogg'       }
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
