import { Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Styles from '../../Utilities/AppStyle';
import Colors from '../../Utilities/AppColors';

const Result = (props) => {
    const Result = props.route.params.Result;
    const CountOfQuestions = props.route.params.CountOfQuestions;
    const [isSucceeded, setIsSucceeded] = useState(CountOfQuestions / 2 > Result.length)
    const GetColor = () => {
        if (!isSucceeded) {
            return Colors.red;
        }
        return Colors.green;
    }
    return (
        <View style={Styles.ResultContainer}>
            <View style={[Styles.Header, { backgroundColor: GetColor(), justifyContent: 'flex-end' }]}>
                <View style={Styles.HeaderImgView}>
                    <Image source={require('../../../assets/images/logo.png')} style={Styles.HeaderImg} resizeMode='contain' />
                </View>
            </View>
            {
                isSucceeded ? (
                    <View style={Styles.Result}>
                        <View style={Styles.ResultMessage}>
                            <Text style={[Styles.TitleResult, { color: GetColor() }]}>GREAT JOB !</Text>
                            <Text style={Styles.TextResult}>You answered{
                                Result.length == 0 ?
                                    (<Text> all questions correctly 💯🌹 </Text>)
                                    : (
                                        <Text> {CountOfQuestions - (Result.length)}/{CountOfQuestions} questions correctly </Text>
                                    )
                            }</Text>
                        </View>
                        <View style={Styles.ResultImgView}>
                            <Image source={require('../../../assets/images/success_character.png')} style={Styles.ResultImg} resizeMode='contain' />
                        </View>
                    </View>
                )
                    :
                    (
                        <View style={Styles.Result}>
                            <View style={Styles.ResultMessage}>
                                <Text style={[Styles.TitleResult, { color: GetColor() }]}>FAILED !</Text>
                                <Text style={[Styles.TextResult, { textAlign: 'center', lineHeight: 29 }]}>You answered {CountOfQuestions - (Result.length)}/{CountOfQuestions} questions correctly{'\n'}<Text style={{ fontSize: 20 }}>You need to answer {(CountOfQuestions / 2).toFixed(0)} correct answers</Text></Text>
                            </View>
                            <View style={Styles.ResultImgView}>
                                <Image source={require('../../../assets/images/failed_character.png')} style={Styles.ResultImg} resizeMode='contain' />
                            </View>
                        </View>
                    )
            }
            <View style={Styles.BtnsView}>
                {
                    Result.length > 0 ? (// אם כל השאלות נכון  הוא לא מציג את הכפתור
                        <TouchableOpacity style={[Styles.Btn, { height: '35%' }]} onPress={() => props.navigation.navigate('QuizWrongAnswers', { HeaderColor: GetColor(), WrongQuestions: Result })}>
                            <Text style={Styles.BtnText}>Wrong Answers <Text style={{color: Colors.red}}>✘</Text></Text>
                        </TouchableOpacity>
                    ) : (<View></View>)
                }
                <TouchableOpacity style={[Styles.Btn, { marginTop: 15, height: '35%' }]} onPress={() => props.navigation.navigate('Logo')}>
                    <Text style={Styles.BtnText}>Home 🏠</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


export const screenOptions = navData => {
    return {
        headerShown: false,
        gestureEnabled: false //No Back
    }
}

export default Result;
