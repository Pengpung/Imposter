import { Haptics } from '@capacitor/haptics';
import { App } from '@capacitor/app';
import { Keyboard } from '@capacitor/keyboard';

// 振动反馈
export async function vibrate() {
  try {
    await Haptics.impact({ style: 'Heavy' });
  } catch (e) {
    console.log('Haptics not available');
  }
}

// 轻微振动
export async function lightVibrate() {
  try {
    await Haptics.impact({ style: 'Light' });
  } catch (e) {
    console.log('Haptics not available');
  }
}

// 处理返回按钮
export function setupBackButton(callback: () => void) {
  try {
    App.addListener('backButton', () => {
      callback();
    });
  } catch (e) {
    console.log('Back button not available');
  }
}

// 隐藏键盘
export async function hideKeyboard() {
  try {
    await Keyboard.hide();
  } catch (e) {
    console.log('Keyboard not available');
  }
}
