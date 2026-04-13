import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pengpung.imposter',
  appName: 'Imposter',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
      launchAutoHide: true,
    },
    StatusBar: {
      overlaysWebView: true,
      backgroundColor: '#000000',
      style: 'dark',
    },
    Keyboard: {
      resizeOnFullScreen: true,
    }
  }
};

export default config;
