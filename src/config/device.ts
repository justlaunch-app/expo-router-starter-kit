import * as Device from 'expo-device'

export const deviceBrand = Device.brand;
export const deviceModel = Device.modelName;
export const deviceOS = Device.osName;
export const deviceOSVersion = Device.osVersion;
export const deviceType = Device.deviceType;
export const deviceYearClass = Device.deviceYearClass;
export const deviceTotalMemory = Device.totalMemory;
export const deviceSupportedCpuArchitectures = Device.supportedCpuArchitectures;
export const deviceIsDevice = Device.isDevice;
export const deviceName = Device.deviceName;

export const deviceInfo = {
  deviceBrand,
  deviceModel,
  deviceOS,
  deviceOSVersion,
  deviceType,
  deviceYearClass,
  deviceTotalMemory,
  deviceSupportedCpuArchitectures,
  deviceIsDevice,
  deviceName,
};
