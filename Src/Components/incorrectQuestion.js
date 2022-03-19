import { Text, View} from 'react-native';
import React from 'react';
import Styles from '../Utilities/AppStyle';
import Colors from '../Utilities/AppColors';

const incorrectQuestion = (props) => {
    return (
        <View>
            <View style={Styles.incorrectQuestionsTable}>
                <View style={[Styles.TableColumn_Question,{borderTopWidth:0}]}>
                    <Text style={Styles.TableColumn_Text}>{props.Question}</Text>
                </View>
                <View style={[Styles.TableColumn_ClientChoice,{borderTopWidth:0}]}>
                    <Text style={[Styles.TableColumn_Text,{color:Colors.red,fontFamily:'Cairo-Medium',textAlign: 'center'}]}>{props.ClientAnswer}</Text>
                </View>
                <View style={[Styles.TableColumn_CorrectChoice,{borderTopWidth:0}]}>
                    <Text style={[Styles.TableColumn_Text,{color:Colors.green,fontFamily:'Cairo-Medium',textAlign: 'center'}]}>{props.CorrectAnswer}</Text>
                </View>
            </View>
        </View>
    )
}
export default incorrectQuestion