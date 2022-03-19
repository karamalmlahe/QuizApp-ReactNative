import { Text, View,Image,ScrollView ,TouchableOpacity} from 'react-native';
import React from 'react';
import Styles from '../../Utilities/AppStyle';
import Colors from '../../Utilities/AppColors';
import QuestionComponent from '../../Components/incorrectQuestion';

//Components

const WrongAnswers = (props) => {
    const incorrectAnswer = props.route.params.WrongQuestions;
    return (
        <View style={{flex:1}}>
            <View style={[Styles.Header, { backgroundColor:props.route.params.HeaderColor, justifyContent: 'flex-end' }]}>
                <View style={Styles.HeaderImgView}>
                    <Image source={require('../../../assets/images/logo.png')} style={Styles.HeaderImg} resizeMode='contain' />
                </View>
            </View>
            <View style={Styles.TitleOfWrongAnswersView}>
                <Text style={Styles.TitleOfWrongAnswersText}> You have <Text style={{color:Colors.red,fontFamily:'Cairo-Bold'}}>{incorrectAnswer.length}</Text> incorrect answer</Text>
            </View>
            <View style={Styles.incorrectQuestions}>
                <View style={Styles.incorrectQuestionsTable}>
                    <View style={[Styles.TableColumn_Question,{alignItems: 'center'}]}>
                        <Text style={Styles.TableColumn_Text}>Question</Text>
                    </View>
                    <View style={Styles.TableColumn_ClientChoice}>
                        <Text style={Styles.TableColumn_Text}>Your Choice</Text>
                    </View>
                    <View style={Styles.TableColumn_CorrectChoice}>
                        <Text style={Styles.TableColumn_Text}>Correct Choice</Text>
                    </View>
                </View>
                <ScrollView bounces={false}>
                {
                    incorrectAnswer.map(quest =>(
                            <QuestionComponent key={quest.Question} Question={quest.Question} CorrectAnswer={quest.correct_answer} ClientAnswer={quest.ClientAnswer} />//key= השאלה
                       
                    ))
                }
                 </ScrollView>
            </View>
            <View style={[Styles.BtnHomeView,{borderColor:props.route.params.HeaderColor}]}>
                <TouchableOpacity style={[Styles.Btn,{height:'50%'}]} onPress={()=>props.navigation.navigate('Logo')}>
                    <Text style={Styles.BtnText}>Home 🏠</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export const screenOptions = navData => {
    return {
        headerShown: false,
    }
}

export default WrongAnswers;
