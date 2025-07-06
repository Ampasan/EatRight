import { CameraView, CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { useRef, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function CustomCamera() {
    const cameraRef = useRef<CameraView>(null);
    const [image, setImage] = useState<string | null>(null);
    const [uri, setUri] = useState<string | null>(null);
    const [facing, setFacing] = useState<CameraType>('back');
    const [flash, setFlash] = useState(false);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const takePicture = async () => {
        const photo = await cameraRef.current?.takePictureAsync();
        setUri(photo?.uri ?? null);
        console.log(photo?.uri);
    };

    return (
        <View className="flex-1 justify-center">
            <CameraView ref={cameraRef} style={{ flex: 1 }} animateShutter flash={"auto"} facing={facing} />
            <View className="absolute top-12 left-5 right-5 flex-row justify-between items-center">
                <TouchableOpacity onPress={() => router.back()} className="bg-white rounded-full p-2">
                    <MaterialIcons name="arrow-back" size={24} color="#84cc16" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setFlash(!flash)}>
                    {flash ? (
                        <MaterialIcons name="flash-on" size={24} color="#fff" />
                    ) : (
                        <MaterialIcons name="flash-off" size={24} color="#fff" />
                    )}
                </TouchableOpacity>

                <TouchableOpacity onPress={pickImage} className="bg-white rounded-full p-2">
                    <MaterialIcons name="photo-library" size={26} color="#7ED321" />
                </TouchableOpacity>
            </View>

            <View className="absolute bottom-10 left-0 right-0 items-center">
                <View className="flex-row justify-center items-center gap-10">
                    <TouchableOpacity className="flex justify-center items-center bg-transparent rounded-full h-16 w-16">
                        <FontAwesome name="send" size={28} color="transparent" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={takePicture}>
                        <View className="flex justify-center items-center w-20 h-20 bg-white rounded-full">
                            <View className="w-16 h-16 border-[3px] border-lime-500 rounded-full" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity className="flex justify-center items-center bg-white rounded-full h-16 w-16">
                        <FontAwesome name="send" size={28} color="#84cc16" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
