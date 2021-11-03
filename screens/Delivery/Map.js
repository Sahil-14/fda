import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet,
    Platform,

} from 'react-native';
import { IconButton } from '../../components';
import { COLORS, FONTS, icons, images, SIZES } from '../../constants';
import LinearGradient from 'react-native-linear-gradient';

const Map = ({ navigation }) => {
    const renderHeaderButtons = () => {
        return (
            <>
                <IconButton
                    icon={icons.back}
                    containerStyle={{
                        position: "absolute",
                        top: SIZES.padding * 2,
                        left: SIZES.padding,
                        ...styles.buttonStyle
                    }}
                    iconStyle={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.gray2
                    }}
                    onPress={() => navigation.goBack()}
                />

                <View style={{
                    position: 'absolute',
                    top: SIZES.padding * 2,
                    right: SIZES.padding
                }}>
                    <IconButton
                        icon={icons.globe}
                        containerStyle={{
                            ...styles.buttonStyle
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray
                        }}
                    />
                    <IconButton
                        icon={icons.location1}
                        containerStyle={{
                            marginTop: SIZES.radius,
                            ...styles.buttonStyle
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray
                        }}
                    />
                </View>
            </>
        )
    }

    const renderInfo = () => {
        return (
            <View style={{
                position: 'absolute',
                bottom: 0,
                width: '100%'
            }}>
                {/* Linear gradient */}
                <LinearGradient 
                start={{x:0,y:0}}
                end={{x:0,y:1}}
                colors={[
                    COLORS.transparent,
                    COLORS.lightGray1
                ]}
                style={{
                    position:'absolute',
                    top:-20,
                    left:0,
                    right:0,
                    height:Platform.OS == 'ios' ? 200 :50
                }}
                />
                {/* Info container */}
                <View style={{
                    padding: SIZES.padding,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    backgroundColor: COLORS.white
                }}>
                    {/* Delivary time */}
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={icons.clock}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: COLORS.black
                            }}
                        />
                        <View style={{
                            marginLeft: SIZES.padding,

                        }}>
                            <Text style={{
                                color: COLORS.gray,
                                ...FONTS.body4
                            }}>Your delivary time</Text>
                            <Text style={{
                                ...FONTS.h3
                            }}>30 minutes</Text>

                        </View>
                    </View>

                    {/* Address */}

                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: SIZES.padding

                    }}>
                        <Image source={icons.focus} style={{
                            width: 40,
                            height: 40,
                            tintColor: COLORS.black
                        }} />
                        <View style={{ marginLeft: SIZES.padding }}>
                            <Text style={{
                                color: COLORS.gray,
                                ...FONTS.body4
                            }}>Your address</Text>
                            <Text style={{
                                ...FONTS.h3
                            }}>302-Sadaship peth,pune</Text>
                        </View>

                    </View>

                    {/* Delivary Man Details */}
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        height: 70,
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        paddingHorizontal: SIZES.radius,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS.primary
                    }}>
                        <Image source={images.profile} style={{ width: 40, height: 40, borderRadius: 5 }} />
                        <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                            <Text style={{
                                color: COLORS.white,
                                ...FONTS.h3
                            }}>Jon Snow</Text>
                            <Text style={{
                                color: COLORS.white,
                                ...FONTS.body4
                            }}>Delivary Man</Text>
                        </View>
                        <View style={{
                            height:40,
                            width:40,
                            alignItems:'center',
                            justifyContent:'center',
                            borderWidth:1,
                            borderRadius:5,
                            borderColor:COLORS.white,
                            backgroundColor:COLORS.transparentWhite1
                        }}>
                            <Image 
                            source={icons.call}
                            style={{
                                width:30,
                                height:30
                            }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    React.useEffect(() => {
        let initialRegion = {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02
        }

        let destination = {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922,
        }
    }, [])

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            {/* Map */}

            {/* Header */}
            {renderHeaderButtons()}
            {/* footer */}
            {renderInfo()}
        </View>
    )
}
const styles = StyleSheet.create({
    buttonStyle: {
        width: 40,
        height: 40,
        borderRadius: SIZES.radius,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: COLORS.grat2,
        backgroundColor: COLORS.white
    }

})
export default Map;
