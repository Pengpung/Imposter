import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { App } from '@capacitor/app';
import { Keyboard } from '@capacitor/keyboard';

export async function vibrate() {
  try {
    await Haptics.impact({ style: ImpactStyle.Heavy });
  } catch (e) {
    console.log('Haptics not available');
  }
}

export async function lightVibrate() {
  try {
    await Haptics.impact({ style: ImpactStyle.Light });
  } catch (e) {
    console.log('Haptics not available');
  }
}

export function setupBackButton(callback: () => void) {
  try {
    App.addListener('backButton', () => {
      callback();
    });
  } catch (e) {
    console.log('Back button not available');
  }
}

export async function hideKeyboard() {
  try {
    await Keyboard.hide();
  } catch (e) {
    console.log('Keyboard not available');
  }
}
