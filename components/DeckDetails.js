import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { white, gray } from '../libs/colors';
import Button from './Common/Button';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: white
    },
    deckTitle: {
        fontSize: 50
    },
    cardsLength: {
        fontSize: 40,
        color: gray
    }
});

class DeckDetails extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.screenName ? navigation.state.params.screenName : 'Deck Details'
        }
    };

    componentDidMount() {
        const { deck, navigation } = this.props;
        // updating navigation params with deck name
        navigation.setParams({ screenName: deck.name});
    }
    
    

    onStartQuizPressed = () => {
        this.props.navigation.navigate('startQuiz', {
            deckId: this.props.deck.id
        });
    }

    onAddQuestionPressed = () => {
        this.props.navigation.navigate('addQuestion', {
            deckId: this.props.deck.id
        });
    }

    onDeleteDeckPressed = () => {
        console.log('onDeleteDeckPressed');
    }

    render() {
        const { deck } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.deckTitle}>{deck.name}</Text>
                <Text style={styles.cardsLength}>{`${deck.questions.length} cards`}</Text>
                <Button name="Start Quiz" onPress={this.onStartQuizPressed}></Button>
                <Button name="Add Question" onPress={this.onAddQuestionPressed}></Button>
                <Button name="Delete Deck" onPress={this.onDeleteDeckPressed} type="danger"></Button>
            </View>
        )
    }
}

const mapStateToProps = ({ decks }, { navigation }) => {
    const { deckId } = navigation.state.params;
    const deck = decks[deckId];
    return {
        deck
    };
}
export default connect(mapStateToProps)(DeckDetails);