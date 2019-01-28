'use strict';

import {
  DeviceEventEmitter,
  NativeModules,
  requireNativeComponent,
} from 'react-native';

const {WebRTCModule} = NativeModules;

const RTCView = {
  name: 'RTCVideoView',
};

const View = requireNativeComponent('RTCVideoView', RTCView, {nativeOnly: {
  testID: true,
  accessibilityComponentType: true,
  renderToHardwareTextureAndroid: true,
  accessibilityLabel: true,
  accessibilityLiveRegion: true,
  importantForAccessibility: true,
  onLayout: true,
  onFirstFrame: true,
}});

export default View;
