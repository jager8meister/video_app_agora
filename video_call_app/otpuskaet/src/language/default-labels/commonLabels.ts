import {I18nBaseType} from '../i18nTypes';

export const cancelText = 'cancelText';
export const loadingText = 'loadingText';
export const initializingChatText = 'initializingChatText';
export const logoutText = 'logoutText';
export const authLogoutPopupHeading = 'authLogoutPopupHeading';
export const authLogoutPopupSubHeading = 'authLogoutPopupSubHeading';
export const authLogoutPopupPrimaryBtnText = 'authLogoutPopupPrimaryBtnText';
export const authLogInRequiredPopupHeading = 'authLogInRequiredPopupHeading';
export const authLogInRequiredPopupSubHeading =
  'authLogInRequiredPopupSubHeading';
export const authLogInRequiredPopupPrimaryBtnText =
  'authLogInRequiredPopupPrimaryBtnText';
export const authLogInRequiredPopupSecondaryBtnText =
  'authLogInRequiredPopupSecondaryBtnText';

export const authSessionTimeoutToastHeading = 'authSessionTimeoutToastHeading';
export const authErrorOnLoginToastHeading = 'authErrorOnLoginToastHeading';
export const authAuthenticationFailedText = 'authAuthenticationFailedText';
export const authAuthorizingApplicationText = 'authAuthorizingApplicationText';

export const copiedToClipboardText = 'copiedToClipboardText';
export interface I18nCommonLabelsInterface {
  [cancelText]?: I18nBaseType;
  [loadingText]?: I18nBaseType;
  [initializingChatText]?: I18nBaseType;
  [logoutText]?: I18nBaseType;
  [authLogoutPopupHeading]?: I18nBaseType;
  [authLogoutPopupSubHeading]?: I18nBaseType;
  [authLogoutPopupPrimaryBtnText]?: I18nBaseType;

  [authLogInRequiredPopupHeading]?: I18nBaseType;
  [authLogInRequiredPopupSubHeading]?: I18nBaseType;
  [authLogInRequiredPopupPrimaryBtnText]?: I18nBaseType;
  [authLogInRequiredPopupSecondaryBtnText]?: I18nBaseType;

  [authSessionTimeoutToastHeading]?: I18nBaseType;
  [authErrorOnLoginToastHeading]?: I18nBaseType;
  [authAuthenticationFailedText]?: I18nBaseType;
  [authAuthorizingApplicationText]?: I18nBaseType;

  [copiedToClipboardText]?: I18nBaseType;
}

export const CommonLabels: I18nCommonLabelsInterface = {
  [cancelText]: 'ОТМЕНА',
  [loadingText]: 'Загрузка...',
  [initializingChatText]: 'Инициализация чата ...',
  [logoutText]: 'Выйти',
  [authLogoutPopupHeading]: 'Выйти?',
  [authLogoutPopupSubHeading]: 'Вы уверены, что хотите выйти?',
  [authLogoutPopupPrimaryBtnText]: 'ПОДТВЕРДИТЬ',

  [authLogInRequiredPopupHeading]: 'Требуется вход',
  [authLogInRequiredPopupSubHeading]: 'Войдите в свою организацию для продолжения',
  [authLogInRequiredPopupPrimaryBtnText]: 'ВОЙТИ',
  [authLogInRequiredPopupSecondaryBtnText]: 'ЗАКРЫТЬ ПРИЛОЖЕНИЕ',

  [authSessionTimeoutToastHeading]: 'Время вашей сессии истекло, повторная попытка...',
  [authErrorOnLoginToastHeading]: 'Произошла ошибка при входе, пожалуйста, войдите снова.',
  [authAuthenticationFailedText]: 'Ошибка аутентификации',
  [authAuthorizingApplicationText]: 'Авторизация приложения...',

  [copiedToClipboardText]: 'Скопировано в буфер обмена',
};
