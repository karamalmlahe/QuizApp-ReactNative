import { StyleSheet } from 'react-native';
import Colors from './AppColors';

export default StyleSheet.create({
    Background: {
        flex: 1,
        backgroundColor: Colors.blue,
    },
    Logo: {
        alignItems: 'center',
        width: '100%',
        height: '80%',
        justifyContent: 'center',
    },
    LogoImg: {
        width: '90%',
        height: '80%',
    },
    ModalView: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4B88A2',
    },
    Modal: {
        width: '85%',
        height: '85%',
        backgroundColor: '#ebebeb',
        borderRadius:20,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 20,
        alignItems: 'center',
        padding:10,
    },
    CloseIconView:{
        width: '100%',
        height: '5%',
        paddingRight:10,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    CloseText:{
        fontSize:20,
    },
    ViewTitleModel:{
        height: '30%',
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth:0.5,
    },
    TitleModelText:{
        fontSize:50,
        fontFamily: 'Cairo-Light',
    },
    PickerV:{
        height: '45%',
        width: '100%',
        paddingTop:10,
    },
    ViewPicker:{
        height: '40%',
        width: '100%',
    },
    PickerText:{
        fontSize:18,
        fontFamily: 'Cairo-Medium'
    },
    ModelBtnView:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height:'20%',
    },
    ModelBtn:{
        backgroundColor: Colors.white,
        width: '90%',
        height: '35%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Colors.black,
        shadowOpacity: 0.8,
        shadowRadius: 15,
        backgroundColor: Colors.blue,
    },
    ModelBtnText:{
        color: Colors.white,
        fontSize: 28,
        fontFamily: 'Cairo-Regular'
    },
    BtnView: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '20%',
    },
    Btn: {
        backgroundColor: Colors.white,
        width: '80%',
        height: '35%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Colors.black,
        shadowOpacity: 0.8,
        shadowRadius: 15,
    },
    BtnText: {
        color: Colors.gray,
        fontSize: 28,
        fontFamily: 'Cairo-ExtraBold'
    },




    //Quiz screen
    QuizScreen: {
        flex: 1,
    },
    Header: {
        width: '100%',
        height: '10%',
        backgroundColor: Colors.blue,
        paddingTop: 18,
        paddingBottom: 5,
        paddingLeft: 20,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    QuestNumView: {
        width: '80%',
    },
    QuestNumText: {
        color: Colors.white,
        fontSize: 24,
        fontFamily: 'Cairo-Regular'
    },
    HeaderImgView: {
        width: '20%',
    },
    HeaderImg: {
        width: '80%',
        height: '80%',
    },
    QuestionZone: {
        padding: 30,
        height: '70%',
    },
    QuestionLevelView: {
        paddingBottom: 10,
        flexDirection: 'row'
    },
    QuestionLevelText: {
        fontFamily: 'Cairo-Light',
        fontSize: 18
    },
    QuestionLevel: {
        fontFamily: 'Cairo-Bold',
        fontSize: 18
    },
    QuestionView: {
        //
    },
    QuestionText: {
        fontFamily: 'Cairo-Regular',
        lineHeight: 32,
        fontSize: 24
    },
    AnswersView: {
        paddingVertical: 10,
    },
    BtnAnswer: {
        backgroundColor: Colors.snow,
        width: '100%',
        marginVertical: 10,
        justifyContent: 'center',
        padding: 15,
        borderRadius: 20,
        shadowColor: Colors.black,
        shadowOpacity: 0.8,
        shadowRadius: 15,

    },
    Answer: {
        fontFamily: 'Cairo-Bold',
        fontSize: 20
    },

    TimeView: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: 150,
        width: 150,
        borderRadius: 150,
    },
    TimeView2: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: 125,
        width: 125,
        borderRadius: 130,
        backgroundColor: Colors.white,
    },
    Timer: {
        alignSelf: 'center',
        fontSize: 38,
        fontFamily: 'Cairo-ExtraBold',
    },







    //Result Pages
    ResultContainer: {
        flex: 1,
    },
    Result: {
        height: '70%',
        alignItems: 'center',
        //backgroundColor:'red'
        // padding: 20

    },
    ResultMessage: {
        width: '100%',
        height: '25%',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    TitleResult: {
        fontSize: 50,
        fontFamily: 'Cairo-ExtraBold',
    },
    TextResult: {
        fontSize: 22,
        fontFamily: 'Cairo-Light'
    },
    TextResultView: {
        height: '50%',
    },
    ResultImgView: {
        height: '75%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ResultImg: {
        height: '100%',
        width: '100%',
    },
    BtnsView: {
        height: '20%',
        width: '100%',
        justifyContent: 'center',
        paddingBottom: 10,
        alignItems: 'center',
        //backgroundColor: Colors.red
    },



    //Wrong Answers
    TitleOfWrongAnswersView: {
        paddingLeft: 5,
        height: '8%',
        justifyContent: 'center',
    },
    TitleOfWrongAnswersText: {
        fontSize: 28,
        fontFamily: 'Cairo-Light'
    },
    incorrectQuestions: {
        paddingTop: 10,
        height: '70%',
        paddingHorizontal: 10,
    },
    incorrectQuestionsTable: {
        flexDirection: 'row',
        width: '100%',
    },
    TableColumn_Question: {
        justifyContent: 'center',
        //alignItems: 'center',
        paddingHorizontal: 5,
        width: '50%',
        borderWidth: 0.5,
    },
    TableColumn_ClientChoice: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 2,
        width: '25%',
        borderBottomWidth: 0.5,
        borderTopWidth: 0.5,
    },
    TableColumn_CorrectChoice: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 2,
        width: '25%',
        borderWidth: 0.5,
    },
    TableColumn_Text: {
        fontSize: 14,
        fontFamily: 'Cairo-Light'
    },
    BtnHomeView: {
        marginTop: 5,
        borderTopWidth: 10,
        height: '12%',
        justifyContent: 'center',
        alignItems: 'center',
    }

})