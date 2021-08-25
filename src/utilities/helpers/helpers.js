import NetInfo from "@react-native-community/netinfo";
import { Platform } from "react-native";
import React from "react";
// import Toast from "react-native-root-toast";
import { SkypeIndicator, DotIndicator } from "react-native-indicators";
import ImagePicker from "react-native-image-picker";
import ImagePicker2 from "react-native-image-crop-picker";
export const INTERNET_CONNECTION_ERROR =
  "Please check your internet connection and try again !";

export const emailValidator = (val) => {
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
    val
  );
};

export const getPicture = (success, reject) => {
  const options = {
    quality: 0.1,
    storageOptions: {
      skipBackup: true,
    },
  };
  ImagePicker.showImagePicker(options, (response) => {
    if (response.didCancel) {
      reject();
    } else if (response.error) {
      reject();
    } else {
      const source = { uri: `data:image/jpeg;base64,${response.data}` };
      success(source);
    }
  });
};

export const multiPictureSelect = (success) => {
  ImagePicker2.openPicker({
    multiple: true,
    forceJpg: true,
  }).then((images) => {
    success(images);
  });
};
export const singlePictureSelect = (success) => {
  ImagePicker2.openPicker({
    cropperCircleOverlay: true,
    loadingLabelText: "Uploading",
    forceJpg: true,
    cropperChooseText: "Upload",
    cropping: true,
    compressImageQuality: 0.6,
  }).then((image) => {
    success(image);
  });
};
export const openCamera = (success) => {
  ImagePicker2.openCamera({
    // width: 600,
    // height: 900,
    compressImageQuality: 0.6,
    forceJpg: true,
    cropping: true,
    cropperChooseText: "Confirm",
  }).then((image) => {
    // console.log(image);
    success([image]);
  });
};

export const isOnline = (success, reject) => {
  NetInfo.fetch().then((state) => {
    if (state.isConnected) {
      success(true);
    } else reject(false);
  });
};

// export const showToast = (message) => {
//   if (Platform.OS === "ios") {
//     Toast.show(message, Toast.durations.SHORT, Toast.positions.BOTTOM);
//   } else {
//     Toast.show(message, Toast.durations.LONG, Toast.positions.BOTTOM);
//   }
// };
export const isIOS = () => {
  if (Platform.OS === "ios") {
    return true;
  }
  return false;
};

export const Loader = (props) => {
  const { style, color, size, lumper } = props;
  return lumper === true ? (
    <SkypeIndicator style={style} color={color} size={size} />
  ) : (
    <DotIndicator color="black" size={10} />
  );
};
