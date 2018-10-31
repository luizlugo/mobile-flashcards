import { INIT_DATA } from '../actions/shared';
import { NEW_DECK } from '../actions/decks';

export default function decks(state = {}, action = {}) {
    switch (action.type) {
        case INIT_DATA:
            return {
                ...state, 
                ...action.decks
            };
        case NEW_DECK:
            return {
                ...state,
                [action.deck.id] : action.deck
            }
        default: 
            return state;
    }
}