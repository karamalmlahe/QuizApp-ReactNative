import { Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import Styles from '../../Utilities/AppStyle';
import Colors from '../../Utilities/AppColors';
import { decode } from 'html-entities'// ב(api)&quot; במקום לחזיר גרש אז השתמשתי בתוסף הזה היה מחזיר לי 



const Quiz = (props) => {
  const Questions = props.route.params.Questions.results;

  let [index, setIndex] = useState(0);
  const [borderTimer, setBorderTimer] = useState(Colors.lighGreen);
  const [Result, setResult] = useState([])
  const [Timer, setTimer] = useState(30);

  const AnswersRandom = () => {
    let RandomAnswers = [];
    RandomAnswers = RandomAnswers.concat(Questions[index].incorrect_answers,Questions[index].correct_answer);
    const NewRandomAnswers =[]
    while(RandomAnswers.length>0){
      const randomIndex = Math.floor(Math.random() * (RandomAnswers.length));
      NewRandomAnswers.push(RandomAnswers[randomIndex]);
      RandomAnswers.splice(randomIndex,1)
    }
    return NewRandomAnswers
  }
  const [Answers, setAnswers] = useState(AnswersRandom);


  const getColorOfLevel = () => {
    switch (Questions[index].difficulty) {
      case 'easy':
        return Colors.lighGreen
      case 'medium':
        return Colors.yellow
      case 'hard':
        return Colors.red
      default:
        break;
    }
  }

  const getColorOfTimer = () => {
    if (Timer > 15) {
      setBorderTimer(Colors.lighGreen)
    }
    else if (Timer > 5) {
      setBorderTimer(Colors.yellow)
    }
    else
      setBorderTimer(Colors.red)
  }
    useEffect(()=>{
      const inter =setInterval(() => { 
       if(!props.navigation.isFocused()){//כדי לעצור את הטימר אם עברנו לדף הבא
         return clearInterval(inter);
      }
        else{
         setTimer((Timer)=>Timer-=1);//כאן לא יכלתי לבדוק אם הוא קטן מ 0 ,כי הערך לא משתנה בפנקציה
       }
      }, 1000);

  },[])

  const checkAnswer = (answer) => {
        let tmp = Result
        if (Questions[index].correct_answer != answer) {
          tmp.push({ 'Question': decode(Questions[index].question), 'correct_answer': decode(Questions[index].correct_answer), 'ClientAnswer': decode(answer) })
          setResult(tmp)
        }
        if (index < Questions.length - 1) {
          setIndex(index += 1);
          setAnswers(AnswersRandom)

          if(index<(Questions.length/2)-1)// בחצי הראשון יהיה הטימר 30
            setTimer(30);
          else if(index<(Questions.length-Questions.length/4)-1)//ברבע האחרי החצי  יהי הטימר 15
            setTimer(15);
          else// ברבע האחרון יהיה הטימר 10
            setTimer(10);
        }
        else {
         return  props.navigation.navigate('QuizResult', { Result, 'CountOfQuestions': Questions.length })
        }
  }

  useEffect(()=>{ //כל הזמן בודקים את הזמן כדי לשמות את הצבע של הגבוים של הטימר ו אם הטימר 0 להתקדם לשאלה הבא
      if(Timer==0){
        checkAnswer('N/A')
      }
      getColorOfTimer();

  })

  return (
    <View style={Styles.QuizScreen}>

      <View style={Styles.Header}>
        <View style={Styles.QuestNumView}>
          <Text style={Styles.QuestNumText}>Question {index + 1}/{Questions.length}</Text>
        </View>
        <View style={Styles.HeaderImgView}>
          <Image source={require('../../../assets/images/logo.png')} style={Styles.HeaderImg} resizeMode='contain' />
        </View>
      </View>
      <View style={Styles.QuestionZone}>
        <View style={Styles.QuestionLevelView}>
          <Text style={Styles.QuestionLevelText}>Level : </Text>
          <Text style={[Styles.QuestionLevel, { color: getColorOfLevel() }]}>{Questions[index].difficulty.toUpperCase()}</Text>
        </View>

        <View style={Styles.QuestionView}>
          <Text style={Styles.QuestionText}>{decode(Questions[index].question)}</Text>
        </View>

        <View style={Styles.AnswersView}>
          {
            (Answers).map(answer => (
              <TouchableOpacity key={answer} style={Styles.BtnAnswer} onPress={() => checkAnswer(answer)}>
                <Text style={Styles.Answer}>{decode(answer)}</Text>
              </TouchableOpacity>
            ))
          }
        </View>

      </View>
      <View style={[Styles.TimeView, { backgroundColor: borderTimer }]}>
        <View style={Styles.TimeView2}>
          <Text style={Styles.Timer}>0:{String(Timer).padStart(2, '0')}</Text>
        </View>
      </View>
    </View>
  );
};

export const screenOptions = navData => {
  return {
    headerShown: false,
    gestureEnabled: false //No Back
  }
}

export default Quiz;