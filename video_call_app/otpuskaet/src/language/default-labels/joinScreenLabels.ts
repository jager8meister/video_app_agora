import {I18nBaseType} from '../i18nTypes';
import {room} from './createScreenLabels';

export const joinRoomHeading = `join${room}Heading`;
export const joinRoomInputLabel = `join${room}InputLabel`;
export const joinRoomInputPlaceHolderText = `join${room}InputPlaceHolderText`;
export const joinRoomBtnText = `join${room}BtnText`;
export const joinRoomCreateBtnText = `join${room}CreateBtnText`;

export const joinRoomErrorToastHeading = `join${room}ErrorToastHeading`;
export const joinRoomErrorToastSubHeading = `join${room}ErrorToastSubHeading`;

export interface I18nJoinScreenLabelsInterface {
  [joinRoomHeading]?: I18nBaseType;
  [joinRoomInputLabel]?: I18nBaseType;
  [joinRoomInputPlaceHolderText]?: I18nBaseType;
  [joinRoomBtnText]?: I18nBaseType;
  [joinRoomCreateBtnText]?: I18nBaseType;
  [joinRoomErrorToastHeading]?: I18nBaseType;
  [joinRoomErrorToastSubHeading]?: I18nBaseType;
}

export const JoinScreenLabels: I18nJoinScreenLabelsInterface = {
  [joinRoomHeading]: ({eventMode}) => {
    if (eventMode) {
      return 'Присоединиться к комнате';
    } else {
      return 'Присоединиться к трансляции';
    }
  },
  [joinRoomInputLabel]: ({eventMode}) => {
    if (eventMode) {
      return 'ID трансляции';
    } else {
      return 'ID комнаты';
    }
  },
  [joinRoomInputPlaceHolderText]: ({eventMode}) => {
    if (eventMode) {
      return 'Введите ID трансляции';
    } else {
      return 'Введите ID комнаты';
    }
  },
  [joinRoomBtnText]: ({eventMode}) => (eventMode ? 'Присоединиться к трансляции' : 'Присоединиться к комнате'),
  [joinRoomCreateBtnText]: ({eventMode}) =>
    eventMode ? 'Создать трансляцию' : 'Создать комнату',
  [joinRoomErrorToastHeading]: ({eventMode}) =>
    `Неверный ID ${eventMode ? 'трансляции' : 'комнаты'}.`,
  [joinRoomErrorToastSubHeading]: ({eventMode}) =>
    `Пожалуйста, введите корректный ID ${eventMode ? 'трансляции' : 'комнаты'}`,
};
