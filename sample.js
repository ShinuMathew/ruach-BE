const ScriptureApi = require('scripture-api');
const scriptureApi = new ScriptureApi('8157749a58280dc083af37c19ce513fe');

const params = {
    // ISO 639-3 three digit langage code used to filter results, (optional)
    language: 'eng',

    // Bible abbreviation to search for (optional)
    abbreviation: 'kjv',

    // Bible name to search for (optional)
    name: 'king james version',

    // Comma separated list of Bible Ids to return (optional)
    ids: 'de4e12af7f28f599-01,...'
}

scriptureApi.getBibleVerses(params)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });