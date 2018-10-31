import * as api from '../libs/api';
export const NEW_DECK = 'NEW_DECK';

export function newDeck(deck) {
    return {
        type: NEW_DECK,
        deck
    }
}

export function handleNewDeck(deck) {
    return (dispatch) => {
        return api
        .saveDeck(deck)
        .then((deck) => {
            dispatch(newDeck(deck))
            return deck.id;
        });
    }
}
