import {I18nBaseType} from '../i18nTypes';
import {room} from './createScreenLabels';
import {MeetingInviteInterface} from './videoCallScreenLabels';

export const shareRoomAttendeeLinkLabel = `share${room}AttendeeLinkLabel`;
export const shareRoomAttendeeLinkSubText = `share${room}AttendeeLinkSubText`;
export const shareRoomHostLinkLabel = `share${room}HostLinkLabel`;
export const shareRoomHostLinkSubText = `share${room}HostLinkSubText`;
export const shareRoomPSTNLabel = `share${room}PSTNLabel`;
export const shareRoomPSTNNumberLabel = `share${room}PSTNNumberLabel`;
export const shareRoomPSTNPinLabel = `share${room}PSTNPinLabel`;
export const shareRoomPSTNSubText = `share${room}PSTNSubText`;
export const shareRoomCopyBtnText = `share${room}CopyBtnText`;
export const shareRoomCopyBtnTooltipText = `share${room}CopyBtnTooltipText`;
export const shareRoomStartBtnText = `share${room}StartBtnText`;
export const shareRoomCopyInviteToClipboardContent = `share${room}CopyInviteToClipboardContent`;
export interface I18nShareLinkScreenLabelsInterface {
  [shareRoomAttendeeLinkLabel]?: I18nBaseType;
  [shareRoomAttendeeLinkSubText]?: I18nBaseType;
  [shareRoomHostLinkLabel]?: I18nBaseType;
  [shareRoomHostLinkSubText]?: I18nBaseType;
  [shareRoomPSTNLabel]?: I18nBaseType;
  [shareRoomPSTNNumberLabel]?: I18nBaseType;
  [shareRoomPSTNPinLabel]?: I18nBaseType;
  [shareRoomPSTNSubText]?: I18nBaseType;
  [shareRoomCopyBtnText]?: I18nBaseType; // need to discuss
  [shareRoomCopyBtnTooltipText]?: I18nBaseType; // need to discuss
  [shareRoomStartBtnText]?: I18nBaseType;
  [shareRoomCopyInviteToClipboardContent]?: I18nBaseType<MeetingInviteInterface>; //
}

export const ShareLinkScreenLabels: I18nShareLinkScreenLabelsInterface = {
  [shareRoomAttendeeLinkLabel]: isWeb =>
    isWeb ? 'Ссылка для участников' : 'ID для участников',
  [shareRoomAttendeeLinkSubText]:
    'Поделитесь этим с участниками, которых хотите пригласить.',
  [shareRoomHostLinkLabel]: isWeb => (isWeb ? 'Ссылка для организатора' : 'ID организатора'),
  [shareRoomHostLinkSubText]:
    'Поделитесь этим с другими со-организаторами, которых хотите пригласить.',
  [shareRoomPSTNLabel]: 'PSTN',
  [shareRoomPSTNNumberLabel]: 'Номер',
  [shareRoomPSTNPinLabel]: 'PIN-код',
  [shareRoomPSTNSubText]: 'Поделитесь этим номером телефона и PIN-кодом для звонка с телефона.',

  [shareRoomCopyBtnText]: 'Скопировать приглашение в буфер обмена',
  [shareRoomCopyBtnTooltipText]: 'Скопировано в буфер обмена',
  [shareRoomStartBtnText]: ({eventMode}) =>
    eventMode ? 'Начать трансляцию (как организатор)' : 'Начать встречу (как организатор)',

  [shareRoomCopyInviteToClipboardContent]: ({
    meetingName,
    id,
    url,
    pstn,
    isHost,
    isSeparateHostLink,
  }) => {
    let inviteContent = '';
    if (url) {
      //for host
      if (isHost) {
        if (isSeparateHostLink) {
          //seperate link for host and attendee
          inviteContent += `Комната: ${meetingName}\n\nСсылка для организатора:\n${url?.host}\n\nСсылка для участников:\n${url?.attendee}`;
        } else {
          //single link for everyone
          inviteContent += `Комната: ${meetingName}\n\nСсылка на встречу:\n${url?.host}`;
        }
      }
      //for attendee
      else {
        inviteContent += `Комната: ${meetingName}\n\nСсылка для участников:\n${url?.attendee}`;
      }
    } else {
      if (isHost) {
        if (isSeparateHostLink) {
          inviteContent += `Комната: ${meetingName}\n\nID комнаты для организатора:\n${id?.host}\n\nID комнаты для участников:\n${id?.attendee}`;
        } else {
          inviteContent += `Комната: ${meetingName}\n\nID комнаты:\n${id?.host}`;
        }
      } else {
        //copy this label on videocall screen
        inviteContent += `Комната: ${meetingName}\n\nID комнаты для участников:\n${id?.attendee}`;
      }
    }
    // Adding pstn data into meeting data if present
    if (pstn?.number && pstn?.pin) {
      inviteContent += `\n\nНомер PSTN:\n${pstn.number}\n\nPIN-код PSTN:\n${pstn.pin}`;
    }
    return inviteContent;
  },
};
