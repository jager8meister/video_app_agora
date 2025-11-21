import {I18nBaseType, I18nDynamicType} from '../i18nTypes';

export const room = 'Room';
export const createRoomHeading = `create${room}Heading`;
export const createRoomInputLabel = `create${room}InputLabel`;
export const createRoomInputPlaceholderText = `create${room}InputPlaceholderText`;
export const createRoomMakeEveryOneCoHost = `create${room}MakeEveryOneCoHost`;
export const createRoomMakeEveryOneCoHostTooltipText = `create${room}MakeEveryOneCoHostTooltipText`;

export const createRoomAllowPhoneNumberJoining = `create${room}AllowPhoneNumberJoining`;
export const createRoomAllowPhoneNumberJoiningTooltipText = `create${room}AllowPhoneNumberJoiningTooltipText`;

export const createRoomBtnText = `create${room}BtnText`;
export const createRoomJoinWithID = `create${room}JoinWithID`;

export const createRoomSuccessToastHeading = `create${room}SuccessToastHeading`;
export const createRoomSuccessToastSubHeading = `create${room}SuccessToastSubHeading`;

export const createRoomErrorToastHeading = `create${room}ErrorToastHeading`;
export const createRoomErrorToastSubHeading = `create${room}ErrorToastSubHeading`;
// [screen/[sidepanel/chat/setting/vb]] [room or action] [where is placed/label/text/heading/subheading/tooltiptext/content]
//label for buttons
//heading/subheading for toast
//text inside button text
//text outside button called label
//btn use chatPanel
//chatPanelInputPlaceHolder
//settingPanelHeading

export interface I18nCreateScreenLabelsInterface {
  [createRoomHeading]?: I18nBaseType;
  [createRoomInputLabel]?: I18nBaseType;
  [createRoomInputPlaceholderText]?: I18nBaseType;
  [createRoomMakeEveryOneCoHost]?: I18nBaseType; //
  [createRoomMakeEveryOneCoHostTooltipText]?: I18nBaseType; //
  [createRoomAllowPhoneNumberJoining]?: I18nBaseType; //
  [createRoomAllowPhoneNumberJoiningTooltipText]?: I18nBaseType; //
  [createRoomBtnText]?: I18nBaseType;
  [createRoomJoinWithID]?: I18nBaseType; //
  [createRoomSuccessToastHeading]?: I18nDynamicType; //
  [createRoomSuccessToastSubHeading]?: I18nBaseType; //
  [createRoomErrorToastHeading]?: I18nBaseType; //
  [createRoomErrorToastSubHeading]?: I18nBaseType; //
}
export const CreateScreenLabels: I18nCreateScreenLabelsInterface = {
  [createRoomHeading]: ({eventMode, audioRoom}) => {
    if (audioRoom) {
      if (eventMode) {
        return 'Создать аудио трансляцию';
      } else {
        return 'Создать голосовой чат';
      }
    } else {
      if (eventMode) {
        return 'Создать трансляцию';
      } else {
        return 'Создать комнату';
      }
    }
  },
  [createRoomInputLabel]: ({eventMode, audioRoom}) => {
    if (audioRoom) {
      if (eventMode) {
        return 'Название аудио трансляции';
      } else {
        return 'Название голосового чата';
      }
    } else {
      if (eventMode) {
        return 'Название трансляции';
      } else {
        return 'Название комнаты';
      }
    }
  },
  [createRoomInputPlaceholderText]: 'Ежегодная галактическая встреча',
  [createRoomMakeEveryOneCoHost]: 'Сделать всех организаторами',
  [createRoomMakeEveryOneCoHostTooltipText]:
    'При включении все участники получат права управления этой комнатой',
  [createRoomAllowPhoneNumberJoining]: 'Разрешить присоединение по телефону',
  [createRoomAllowPhoneNumberJoiningTooltipText]:
    'Участники смогут позвонить и присоединиться через PSTN',
  [createRoomBtnText]: ({eventMode, audioRoom}) => {
    if (audioRoom) {
      if (eventMode) {
        return 'СОЗДАТЬ АУДИО ТРАНСЛЯЦИЮ';
      } else {
        return 'СОЗДАТЬ ГОЛОСОВОЙ ЧАТ';
      }
    } else {
      if (eventMode) {
        return 'СОЗДАТЬ ТРАНСЛЯЦИЮ';
      } else {
        return 'СОЗДАТЬ КОМНАТУ';
      }
    }
  },
  [createRoomJoinWithID]: 'Зайти по идентификатору встречи',
  [createRoomSuccessToastHeading]: (meetingName: string) =>
    `${meetingName} была создана`,
  [createRoomSuccessToastSubHeading]: 'Ваша новая комната теперь активна',
};
