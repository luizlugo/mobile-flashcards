import React from 'react';
import { KeyboardAvoidingView, Text, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { white, black, orange } from '../libs/colors';
import Button from './Common/Button';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontSize: 20,
        marginTop: 20,
        color: black
    },
    txt: {
        height: 60,
        borderColor: black,
        borderWidth: 1,
        color: orange,
        backgroundColor: white,
        marginTop: 10,
        alignSelf: 'stretch',
        marginLeft: 20,
        marginRight: 20,
        fontSize: 20,
        textAlign: 'center',
    }
});
class AddQuestion extends React.Component {
    static navigationOptions = () => {
        return {
            title: 'Add Question'
        };
    }
    state = {
        question: '',
        answer: '',
        invalidForm: true
    };

    onTextChanged = (_value, _key) => {
        this.setState(() => ({
            [_key]: _value
        }));

        this.isFormValid();
    }

    isFormValid = () => {
        console.log('isFormValid', this.state);
        
        if ((this.state.question !== '' && this.state.question) && (this.state.answer !== '' && this.state.answer)) {
            this.setState(() => ({
                invalidForm: false
            }));
        } else {
            this.setState(() => ({
                invalidForm: true
            }));
        }
    }

    onSavePressed = () => {
        console.log('save');
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <Text style={styles.label}>Enter your question:</Text>
                <TextInput 
                    style={styles.txt}
                    onChangeText={(_value) => this.onTextChanged(_value, 'question')}
                    value={this.state.question}
                />
                <Text style={styles.label}>Enter your answer:</Text>
                <TextInput 
                    style={styles.txt}
                    onChangeText={(_value) => this.onTextChanged(_value, 'answer')}
                    value={this.state.answer}
                />
                <Button name="Save Question" onPress={this.onSavePressed} disabled={this.state.invalidForm}></Button>
            </KeyboardAvoidingView>
        )
    }
}
export default connect()(AddQuestion);