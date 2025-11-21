import {ClientRoleType} from '../../../agora-rn-uikit';
import {I18nBaseType, I18nConditionalType} from '../i18nTypes';
import {VBMode} from '../../components/virtual-background/useVB';

export interface PrecallJoinBtnTextInterface {
  ready: boolean;
  role?: ClientRoleType;
  waitingRoom?: boolean;
}
export interface PrecallWaitingRoomJoinBtnTextInterface {
  ready: boolean;
  isAutoRequest: boolean;
  isAutoApproval: boolean;
}

export const permissionPopupHeading = `permissionPopupHeading`;
export const permissionPopupSubHeading = `permissionPopupSubHeading`;
export const permissionPopupDismissBtnText = `permissionPopupDismissBtnText`;
export const permissionPopupErrorToastHeading = `permissionPopupErrorToastHeading`;
export const permissionPopupErrorToastSubHeading = `permissionPopupErrorToastSubHeading`;

export const settingsPanelHeading = `settingsPanelHeading`;
export const settingsPanelMicrophoneLabel = 'settingsPanelMicrophoneLabel';
export const settingsPanelNoMicrophoneDetectedText =
  'settingsPanelNoMicrophoneDetectedText';
export const settingsPanelNoMicrophoneSelectedText =
  'settingsPanelNoMicrophoneSelectedText';
export const settingsPanelCameraLabel = 'settingsPanelCameraLabel';
export const settingsPanelNoCameraDetectedText =
  'settingsPanelNoCameraDetectedText';
export const settingsPanelNoCameraSelectedText =
  'settingsPanelNoCameraSelectedText';
export const settingsPanelSpeakerLabel = 'settingsPanelSpeakerLabel';
export const settingsPanelNoSpeakerDetectedText =
  'settingsPanelNoSpeakerDetectedText';
export const settingsPanelNoSpeakerSelectedText =
  'settingsPanelNoSpeakerSelectedText';
export const settingsPanelSystemDefaultSpeakerText =
  'settingsPanelSystemDefaultSpeakerText';
export const settingsPanelLiveStreamingAttendeeInfo =
  'settingsPanelLiveStreamingAttendeeInfo';
export const settingsPanelUpdatingText = 'settingsPanelUpdatingText';

export const settingsPanelLanguageLabel = 'settingsPanelLanguageLabel';

export const precallYouAreJoiningAsHeading = 'precallYouAreJoiningAsHeading';
export const precallNameInputPlaceholderText =
  'precallNameInputPlaceholderText';
export const precallJoinBtnText = 'precallJoinBtnText';
export const precallWaitingRoomJoinBtnText = 'precallWaitingRoomJoinBtnText';
export const precallInputGettingName = 'precallInputGettingName';

export const vbPanelHeading = 'vbPanelHeading';
export const vbPanelInfo = 'vbPanelInfo';

export const vbOptionText = 'vbOptionText';

export interface I18nPrecallScreenLabelsInterface {
  [permissionPopupHeading]?: I18nBaseType;
  [permissionPopupSubHeading]?: I18nBaseType;
  [permissionPopupDismissBtnText]?: I18nBaseType;
  [permissionPopupErrorToastHeading]?: I18nBaseType;
  [permissionPopupErrorToastSubHeading]?: I18nBaseType;

  [settingsPanelHeading]?: I18nBaseType;

  [settingsPanelCameraLabel]?: I18nBaseType;
  [settingsPanelNoCameraDetectedText]?: I18nBaseType;
  [settingsPanelNoCameraSelectedText]?: I18nBaseType;

  [settingsPanelMicrophoneLabel]?: I18nBaseType;
  [settingsPanelNoMicrophoneDetectedText]?: I18nBaseType;
  [settingsPanelNoMicrophoneSelectedText]?: I18nBaseType;

  [settingsPanelSpeakerLabel]?: I18nBaseType;
  [settingsPanelNoSpeakerDetectedText]?: I18nBaseType;
  [settingsPanelNoSpeakerSelectedText]?: I18nBaseType;
  [settingsPanelSystemDefaultSpeakerText]?: I18nBaseType;

  [settingsPanelLiveStreamingAttendeeInfo]?: I18nBaseType;
  [settingsPanelUpdatingText]?: I18nBaseType;
  [settingsPanelLanguageLabel]?: I18nBaseType;

  [precallYouAreJoiningAsHeading]?: I18nBaseType;
  [precallNameInputPlaceholderText]?: I18nBaseType;
  [precallJoinBtnText]?: I18nBaseType<PrecallJoinBtnTextInterface>;
  [precallWaitingRoomJoinBtnText]?: I18nBaseType<PrecallWaitingRoomJoinBtnTextInterface>;

  [vbPanelHeading]?: I18nBaseType;
  [vbPanelInfo]?: I18nConditionalType;

  [vbOptionText]?: I18nBaseType<VBMode>;

  [precallInputGettingName]?: I18nBaseType;
}

export const PrecallScreenLabels: I18nPrecallScreenLabelsInterface = {
  //permission popup
  [permissionPopupHeading]: ({audioRoom}) =>
    audioRoom
      ? 'Разрешить доступ к микрофону'
      : 'Разрешить доступ к камере и микрофону',
  [permissionPopupSubHeading]: ({audioRoom}) =>
    audioRoom
      ? 'Выберите "Разрешить", чтобы другие могли вас слышать'
      : 'Выберите "Разрешить", чтобы другие могли вас видеть и слышать',
  [permissionPopupDismissBtnText]: 'Закрыть',
  [permissionPopupErrorToastHeading]: ({audioRoom}) =>
    `Не удалось найти ${audioRoom ? 'микрофон' : 'камеру'}`,
  [permissionPopupErrorToastSubHeading]: audioRoom =>
    `Проверьте системные настройки, чтобы убедиться, что ${
      audioRoom ? 'микрофон' : 'камера'
    } доступен(а). Если нет, подключите и перезапустите браузер`,

  [settingsPanelHeading]: 'Настройки',

  [settingsPanelCameraLabel]: 'Камера',
  [settingsPanelNoCameraDetectedText]: 'Камера не обнаружена',
  [settingsPanelNoCameraSelectedText]: 'Камера не выбрана',

  [settingsPanelMicrophoneLabel]: 'Микрофон',
  [settingsPanelNoMicrophoneDetectedText]: 'Микрофон не обнаружен',
  [settingsPanelNoMicrophoneSelectedText]: 'Микрофон не выбран',

  [settingsPanelSpeakerLabel]: 'Динамик',
  [settingsPanelNoSpeakerDetectedText]: 'Динамик не обнаружен',
  [settingsPanelNoSpeakerSelectedText]: 'Динамик не выбран',
  [settingsPanelSystemDefaultSpeakerText]: 'Системный динамик по умолчанию',

  [settingsPanelLiveStreamingAttendeeInfo]:
    'Участникам нужно поднять руку для доступа к устройствам.',
  [settingsPanelUpdatingText]: 'Обновление',

  [settingsPanelLanguageLabel]: 'Язык',

  [precallYouAreJoiningAsHeading]: 'Вы присоединяетесь',
  [precallNameInputPlaceholderText]: 'Введите ваше имя',
  [precallInputGettingName]: 'Получение имени...',
  [precallWaitingRoomJoinBtnText]: ({ready, isAutoRequest, isAutoApproval}) => {
    return  ready
      ? isAutoRequest? 'Встреча началась, присоединяйтесь!': 'Попросить присоединиться'
      : isAutoApproval?'Присоединение...': `Ожидание одобрения...`
  },

  [precallJoinBtnText]: ({waitingRoom, ready, role}) => {
    if (waitingRoom) {
      return ready ? 'Попросить присоединиться' : `Ожидание одобрения...`;
    } else {
      return ready
        ? !role
          ? 'ВОЙТИ В КОМНАТУ'
          : `ВОЙТИ В КОМНАТУ КАК ${
              role === ClientRoleType.ClientRoleBroadcaster
                ? 'ОРГАНИЗАТОР'
                : 'АУДИТОРИЯ'
            }`
        : `Загрузка...`;
    }
  },

  [vbPanelHeading]: 'Виртуальный фон',
  [vbPanelInfo]: (isCamOn: boolean) =>
    isCamOn
      ? 'Камера сейчас выключена. Выбранный фон будет применен, как только вы включите камеру.'
      : 'Ваша камера выключена. Сохраните фон, чтобы применить его после включения камеры.',

  [vbOptionText]: mode => {
    switch (mode) {
      case 'none':
        return 'Нет';
      case 'custom':
        return 'Пользовательский';
      case 'blur':
        return 'Размытие';
      default:
        return '';
    }
  },
};
