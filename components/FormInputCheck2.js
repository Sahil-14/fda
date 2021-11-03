import React from 'react';
import { View, Image } from 'react-native';
import { COLORS, icons } from '../constants';

export default function FormInputCheck2({ value, error }) {
    return (
        <View style={{
            justifyContent: 'center'
        }}>
            <Image
                source={(value == "" || (value != "" && error == "") ? icons.correct : icons.cancel)}
                style={{
                    height: 20,
                    width: 20,
                    tintColor: (value == "") ? COLORS.gray : (value != "" && error == "") ? COLORS.green : COLORS.red
                }}
            />
        </View>
    )
}
