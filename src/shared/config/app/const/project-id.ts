import Constants from 'expo-constants';

const expoProjectId = Constants?.expoConfig?.extra?.eas?.projectId;
const easProjectId = Constants?.easConfig?.projectId;

export const PROJECT_ID = expoProjectId ?? easProjectId;
