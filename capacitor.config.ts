import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gpsapp.bat',
  appName: 'gpsApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
