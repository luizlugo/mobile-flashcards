import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class StartQuiz extends React.Component {
    render() {
        return (
            <View>
                <Text>Start Quiz</Text>
            </View>
        );
    }
}
export default connect()(StartQuiz);