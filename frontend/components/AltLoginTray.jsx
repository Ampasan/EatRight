import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

const AltLoginTray = ({ ...props }) => {
    return (
        <View
            className="flex flex-row justify-center"
            {...props}
        >
            <TouchableOpacity>
                <Image
                    source={require('./../assets/images/social/google.png')}
                    className='w-10 h-10 mx-2'
                    resizeMode="cover"
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={require('./../assets/images/social/twitter.png')}
                    className='w-10 h-10 mx-2'
                    resizeMode="cover"
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={require('./../assets/images/social/facebook.png')}
                    className='w-10 h-10 mx-2'
                    resizeMode="cover"
                />
            </TouchableOpacity>
        </View>
    );
};

export default AltLoginTray;