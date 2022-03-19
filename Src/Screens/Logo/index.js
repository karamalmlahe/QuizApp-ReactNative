import { Text, View, Image, TouchableOpacity, ActivityIndicator, Modal } from 'react-native';
import React, { useState } from 'react';
import Styles from '../../Utilities/AppStyle';
import RNPicker from 'react-native-picker-select';


const Logo = (props) => {

    const [isLodding, SetIsLodding] = useState();
    const [isVisible, setIsVisible] = useState(false);
    const [Category, setCategory] = useState('')
    const [QuestionsCount, setQuestionsCount] = useState('')


    const GetQuestions = async () => {
        SetIsLodding(true);
        if (Category && QuestionsCount) {
            const url = `https://opentdb.com/api.php?amount=${QuestionsCount}&category=${Category}`;
            const response = await fetch(url, {
                method: 'GET',
            });
            const Questions = await response.json();
            if (Questions) {
                setIsVisible(false);
                props.navigation.navigate('Quiz', { Questions: Questions })
                setCategory('')
                setQuestionsCount('')
            }
            else
                alert('No Questions')
        }
        else
            alert('Please Select a Category and Questions Count')

        SetIsLodding(false)
    }
    const CategoryTypes = [
        { label: 'Computers', value: '18' },
        { label: 'Video Games', value: '15' },
        { label: 'Sports', value: '21' },
        { label: 'Vehicles', value: '28' },
        { label: 'Animals', value: '27' },
    ];
    const CountOfQuestions = [
        { label: '10', value: '10' },
        { label: '15', value: '15' },
        { label: '20', value: '20' },
        { label: '30', value: '30' },
    ]

    const PickerStyle = {
        inputIOS: {
            fontSize: 14,
            marginTop: 5,
            marginHorizontal: 10,
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderWidth: 0.5,
            borderColor: 'black',
            borderRadius: 8,
            color: 'black',
            paddingRight: 30,
            fontFamily: 'Cairo-SemiBold',
        },
        inputAndroid: {
            fontSize: 14,
            marginTop: 5,
            marginHorizontal: 10,
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderWidth: 0.5,
            borderColor: 'black',
            borderRadius: 8,
            color: 'black',
            paddingRight: 30,
            fontFamily: 'Cairo-SemiBold',
        },
    }
    return (
        <View style={Styles.Background}>
            <View style={Styles.Logo}>
                <Image source={require('../../../assets/images/splash_logo.png')} style={Styles.LogoImg} resizeMode='contain' />
            </View>
            <View style={Styles.BtnView}>
                <TouchableOpacity style={Styles.Btn} onPress={() => setIsVisible(true)}>
                    <Text style={Styles.BtnText}>Let's Play</Text>
                </TouchableOpacity>
            </View>



            <Modal
                animationType="slide"
                transparent={true}
                visible={isVisible}>
                <View style={Styles.ModalView}>
                    <View style={Styles.Modal}>
                        <View style={Styles.CloseIconView}>
                            <Text style={Styles.CloseText} onPress={() => setIsVisible(false)}>❌</Text>
                        </View>
                        <View style={Styles.ViewTitleModel}>
                            <Text style={Styles.TitleModelText}>Wellcome <Text style={{ fontSize: 40 }}>❤</Text></Text>
                        </View>
                        <View style={Styles.PickerV}>
                            <View style={Styles.ViewPicker}>
                                <Text style={Styles.PickerText}>Select a Category : </Text>
                                <RNPicker
                                    style={PickerStyle}
                                    items={CategoryTypes}
                                    onValueChange={val => setCategory(val)}
                                />
                            </View>
                            <View style={Styles.ViewPicker}>
                                <Text style={Styles.PickerText}>Select a Questions Count : </Text>
                                <RNPicker
                                    style={PickerStyle}
                                    items={CountOfQuestions}
                                    onValueChange={val => setQuestionsCount(val)}
                                />
                            </View>
                        </View>
                        <View style={Styles.ModelBtnView}>
                            {
                                isLodding ? (
                                    <ActivityIndicator size="large" color="black" />
                                ) : (
                                    <TouchableOpacity style={Styles.ModelBtn} onPress={() => GetQuestions()}>
                                        <Text style={Styles.ModelBtnText}>Ready</Text>
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                    </View>
                </View>
            </Modal>


        </View>
    );
};

export const screenOptions = navData => {
    return {
        headerShown: false,
        gestureEnabled: false //No Back
    }
}

export default Logo;
