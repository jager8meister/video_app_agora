import {I18nBaseType, I18nConditionalType, I18nDynamicType} from '../i18nTypes';
import {room} from './createScreenLabels';

export interface deviceDetectionToastSubHeadingDataInterface {
  name: string;
  label: string;
}

export type sttSpokenLanguageToastHeadingDataType = 'Set' | 'Changed';
export interface sttSpokenLanguageToastSubHeadingDataInterface {
  action: sttSpokenLanguageToastHeadingDataType;
  newLanguage: string;
  oldLanguage: string;
  username: string;
}

export type whiteboardFileUploadToastDataType = 'File' | 'Image';
export interface publicChatToastSubHeadingDataInterface {
  count: number;
  from: string;
}
export interface privateChatToastHeadingDataInterface {
  count: number;
}

export interface publicAndPrivateChatToastSubHeadingDataInterface {
  publicChatCount: number;
  privateChatCount: number;
  from: string;
}
interface NetworkQualityStatusInterface {
  unknown?: 'Unknown';
  excellent?: 'Excellent';
  good?: 'Good';
  bad?: 'Bad';
  veryBad?: 'Very Bad';
  unpublished?: 'Unpublished';
  loading?: 'Loading';
}
export type NetworkQualities = keyof NetworkQualityStatusInterface;
export interface MeetingInviteInterface {
  isHost: boolean;
  isSeparateHostLink: boolean;
  meetingName?: string;
  pstn?: {
    number: string;
    pin: string;
  };
  url?: {
    host?: string;
    attendee?: string;
  };
  id?: {
    host?: string;
    attendee?: string;
  };
}

export enum I18nMuteType {
  audio = 'audio',
  video = 'video',
}

export interface I18nRequestConfirmation {
  name: string;
  type: I18nMuteType;
}
export interface I18nFileSize {
  name: string;
  size: number;
}
export interface I18nMuteConfirmation {
  name: string;
  type: I18nMuteType;
}

export enum I18nDeviceStatus {
  PERMISSION_DENIED = -1,
  OFF = 0,
  ON = 1,
}

export const blockLandscapeModeMessageText = 'blockLandscapeModeMessageText';

export const toolbarItemPeopleText = 'toolbarItemPeopleText';
export const toolbarItemChatText = 'toolbarItemChatText';
export const toolbarItemSettingText = 'toolbarItemSettingText';

export const toolbarItemLayoutText = 'toolbarItemLayoutText';
export const toolbarItemLayoutOptionGridText =
  'toolbarItemLayoutOptionGridText';
export const toolbarItemLayoutOptionSidebarText =
  'toolbarItemLayoutOptionSidebarText';
export const toolbarItemInviteText = 'toolbarItemInviteText';

export const toolbarItemMicrophoneText = 'toolbarItemMicrophoneText';
export const toolbarItemMicrophoneTooltipText =
  'toolbarItemMicrophoneTooltipText';
export const toolbarItemCameraText = 'toolbarItemCameraText';
export const toolbarItemCameraTooltipText = 'toolbarItemCameraTooltipText';
export const toolbarItemSwitchCameraText = 'toolbarItemSwitchCameraText';
export const toolbarItemShareText = 'toolbarItemShareText';
export const toolbarItemRecordingText = 'toolbarItemRecordingText';
export const toolbarItemLeaveText = 'toolbarItemLeaveText';

export const toolbarItemMoreText = 'toolbarItemMoreText';
export const toolbarItemNoiseCancellationText =
  'toolbarItemNoiseCancellationText';
export const toolbarItemWhiteboardText = 'toolbarItemWhiteboardText';
export const toolbarItemCaptionText = 'toolbarItemCaptionText';
export const toolbarItemTranscriptText = 'toolbarItemTranscriptText';
export const toolbarItemManageTextTracksText =
  'toolbarItemManageTextTracksText';
export const toolbarItemVirtualBackgroundText =
  'toolbarItemVirtualBackgroundText';
export const toolbarItemViewRecordingText = 'toolbarItemViewRecordingText';

export const toolbarItemRaiseHandText = 'toolbarItemRaiseHandText';

export const inviteTileWelcomeText = 'inviteTileWelcomeText';
export const inviteTileNoElseJoinedYetText = 'inviteTileNoElseJoinedYetText';
export const inviteTileCopyInviteBtnText = 'inviteTileCopyInviteBtnText';

export const settingPanelNameCantbeChangedInfo =
  'settingPanelNameCantbeChangedInfo';
export const settingPanelNameInputLabel = 'settingPanelNameInputLabel';

export const invitePopupHeading = 'invitePopupHeading';
export const invitePopupPrimaryBtnText = 'invitePopupPrimaryBtnText';

export const PSTNUserLabel = 'pstnUserLabel';

export const vbPanelApplyBtnText = 'vbPanelApplyBtnText';
export const vbPanelAppliedBtnText = 'vbPanelAppliedBtnText';

export const videoTileNetworkQuailtyLabel = 'videoTileNetworkQuailtyLabel';

export const nativeScreensharePopupHeading = 'nativeScreensharePopupHeading';
export const nativeScreensharePopupSubHeading =
  'nativeScreensharePopupSubHeading';
export const nativeScreensharePopupPrimaryBtnText =
  'nativeScreensharePopupPrimaryBtnText';
export const nativeScreensharePopupIncludeDeviceAudioText =
  'nativeScreensharePopupIncludeDeviceAudioText';

export const nativeStopScreensharePopupHeading =
  'nativeStopScreensharePopupHeading';
export const nativeStopScreensharePopupSubHeading =
  'nativeStopScreensharePopupSubHeading';
export const nativeStopScreensharePopupPrimaryBtnText =
  'nativeStopScreensharePopupPrimaryBtnText';

export const recordingModalTitleIntn = 'recordingModalTitleIntn';
export const textTrackModalTitleIntn = 'textTrackModalTitleIntn';
export const stopRecordingPopupHeading = 'stopRecordingPopupHeading';
export const stopRecordingPopupSubHeading = 'stopRecordingPopupSubHeading';
export const stopRecordingPopupPrimaryBtnText =
  'stopRecordingPopupPrimaryBtnText';

export const clearAllWhiteboardPopupHeading = 'clearAllWhiteboardPopupHeading';
export const clearAllWhiteboardPopupSubHeading =
  'clearAllWhiteboardPopupSubHeading';
export const clearAllWhiteboardPopupPrimaryBtnText =
  'clearAllWhiteboardPopupPrimaryBtnText';

export const leavePopupHeading = `leave${room}PopupHeading` as const;
export const leavePopupSubHeading = `leave${room}PopupSubHeading` as const;
export const leavePopupPrimaryBtnText =
  `leave${room}PopupPrimaryBtnText` as const;

export const removeUserFromRoomPopupHeading =
  `removeUserFrom${room}PopupHeading` as const;
export const removeUserFromRoomPopupSubHeading =
  `removeUserFrom${room}PopupSubHeading` as const;
export const removeUserFromRoomPopupPrimaryBtnText =
  `removeUserFrom${room}PopupPrimaryBtnText` as const;

export const removeScreenshareFromRoomPopupHeading =
  `removeScreenshareFrom${room}PopupHeading` as const;
export const removeScreenshareFromRoomPopupSubHeading =
  `removeScreenshareFrom${room}PopupSubHeading` as const;
export const removeScreenshareFromRoomPopupPrimaryBtnText =
  `removeScreenshareFrom${room}PopupPrimaryBtnText` as const;

export const stt = 'stt';

export const sttChangeLanguagePopupHeading =
  `${stt}ChangeSpokenLanguagePopupHeading` as const;
export const sttChangeLanguagePopupSubHeading =
  `${stt}ChangeSpokenLanguagePopupSubHeading` as const;
export const sttChangeLanguagePopupDropdownError =
  `${stt}ChangeSpokenLanguagePopupDropdownError` as const;
export const sttChangeLanguagePopupDropdownInfo =
  `${stt}ChangeSpokenLanguagePopupDropdownInfo` as const;
export const sttChangeLanguagePopupPrimaryBtnText =
  `${stt}ChangeSpokenLanguagePopupPrimaryBtnText` as const;

export const sttChangeSpokenLanguageText =
  `${stt}ChangeSpokenLanguageText` as const;
export const sttSettingSpokenLanguageText =
  `${stt}SettingSpokenLanguageText` as const;
export const sttTranscriptPanelHeaderText =
  `${stt}TranscriptPanelHeaderText` as const;
export const sttDownloadBtnText = `${stt}DownloadBtnText` as const;
export const sttDownloadTranscriptBtnText =
  `${stt}DownloadTranscriptBtnText` as const;
export const sttLanguageChangeInProgress =
  `${stt}LanguageChangeInProgress` as const;

export const chatPanelGroupTabText = 'chatPanelGroupTabText';
export const chatPanelPrivateTabText = 'chatPanelPrivateTabText';

export const groupChatWelcomeContent = 'groupChatWelcomeContent';

export const peoplePanelHeaderText = 'peoplePanelHeaderText';

export const groupChatMeetingInputPlaceHolderText =
  'groupChatMeetingInputPlaceHolderText';
export const groupChatLiveInputPlaceHolderText =
  'groupChatLiveInputPlaceHolderText';
export const privateChatInputPlaceHolderText =
  'privateChatInputPlaceHolderText';

export const chatActionMenuDownloadText = 'chatActionMenuDownloadText';
export const chatActionMenuCopyLinkText = 'chatActionMenuCopyLinkText';
export const chatActionMenuDeleteText = 'chatActionMenuDeleteText';
export const chatMsgDeletedText = 'chatMsgDeletedText';
export const chatSendMessageBtnText = 'chatSendMessageBtnText';
export const chatUploadErrorToastHeading = 'chatUploadErrorToastHeading';
export const chatUploadErrorFileSizeToastHeading =
  'chatUploadErrorFileSizeToastHeading';
export const chatUploadErrorFileSizeToastSubHeading =
  'chatUploadErrorFileSizeToastSubHeading';
export const chatUploadErrorFileTypeToastSubHeading =
  'chatUploadErrorFileTypeToastSubHeading';
export const chatSendErrorTextSizeToastHeading =
  'chatSendErrorTextSizeToastHeading';
export const chatSendErrorTextSizeToastSubHeading =
  'chatSendErrorTextSizeToastSubHeading';

export const chatMessageDeleteConfirmBtnText =
  'chatMessageDeleteConfirmBtnText';
export const chatPublicMessageDeletePopupText =
  'chatPublicMessageDeletePopupText';
export const chatPrivateMessageDeletePopupText =
  'chatPrivateMessageDeletePopupText';
export const chatUploadStatusInProgress = 'chatUploadStatusInProgress';
export const chatUploadStatusFailure = 'chatUploadStatusFailure';
export const chatUploadMaxLimit = 'chatUploadMaxLimit';
export const chatErrorNoToken = 'chatErrorNoToken';
export const chatErrorNotConnected = 'chatErrorNotConnected';

export const peoplePanelTurnoffAllCameraBtnText =
  'peoplePanelTurnoffAllCameraBtnText';
export const peoplePanelMuteAllMicBtnText = 'peoplePanelMuteAllMicBtnText';

export const peoplePanelHostSectionHeaderText =
  'peoplePanelHostSectionHeaderText';
export const peoplePanelAudienceSectionHeaderText =
  'peoplePanelAudienceSectionHeaderText';

export const peoplePanelInThisMeetingLabel = 'peoplePanelInThisMeetingLabel';
export const peoplePanelNoHostJoinedContent = 'peoplePanelNoHostJoinedContent';
export const peoplePanelNoUsersJoinedContent =
  'peoplePanelNoUsersJoinedContent';
export const peoplePanelNoAudienceJoinedContent =
  'peoplePanelNoAudienceJoinedContent';

export const moreBtnViewWhiteboard = 'moreBtnViewWhiteboard';
export const moreBtnViewInLarge = 'moreBtnViewInLarge';
export const moreBtnRemoveFromLarge = 'moreBtnRemoveFromLarge';
export const moreBtnPinToTop = 'moreBtnPinToTop';
export const moreBtnRemoveFromTop = 'moreBtnRemoveFromTop';
export const moreBtnMessagePrivately = 'moreBtnMessagePrivately';
export const moreBtnSpotlight = 'moreBtnSpotlight';

export const moreBtnAudio = 'moreBtnAudio';
export const moreBtnVideo = 'moreBtnVideo';

export const moreBtnAddAsPresenter = 'moreBtnAddAsPresenter';
export const moreBtnRemoveAsPresenter = 'moreBtnRemoveAsPresenter';

export const moreBtnRemoveFromRoom = 'moreBtnRemoveFromRoom';
export const moreBtnChangeName = 'moreBtnChangeName';
export const moreBtnStopScreenShare = 'moreBtnStopScreenShare';
export const moreBtnRemoveScreenShare = 'moreBtnRemoveScreenShare';

export const muteAllConfirmationPopoverContent =
  'muteAllConfirmationPopoverContent';
export const muteAllConfirmationPopoverPrimaryBtnText =
  'muteAllConfirmationPopoverPrimaryBtnText';

export const muteConfirmationPopoverContent = 'muteConfirmationPopoverContent';
export const muteConfirmationPopoverPrimaryBtnText =
  'muteConfirmationPopoverPrimaryBtnText';

export const requestConfirmationPopoverContent =
  'requestConfirmationPopoverContent';
export const requestConfirmationPopoverPrimaryBtnText =
  'requestConfirmationPopoverPrimaryBtnText';

export const peoplePanelWantToJoinText = 'peoplePanelWantToJoinText';
export const peoplePanelWaitingText = 'peoplePanelWaitingText';

export const livestreamingAttendeeRaiseHandInfoHeading =
  'livestreamingAttendeeRaiseHandInfoHeading';
export const livestreamingAttendeeRaiseHandInfoSubHeading =
  'livestreamingAttendeeRaiseHandInfoSubHeading';

export const livestreamingAttendeeChatWithOthersInfoHeading =
  'livestreamingAttendeeChatWithOthersInfoHeading';
export const livestreamingAttendeeChatWithOthersInfoSubHeading =
  'livestreamingAttendeeChatWithOthersInfoSubHeading';

export const livestreamingAttendeePresentYourScreenInfoHeading =
  'livestreamingAttendeePresentYourScreenInfoHeading';
export const livestreamingAttendeePresentYourScreenInfoSubHeading =
  'livestreamingAttendeePresentYourScreenInfoSubHeading';

export const livestreamingAttendeeJoinWithActivitiesInfoHeading =
  'livestreamingAttendeeJoinWithActivitiesInfoHeading';
export const livestreamingAttendeeJoinWithActivitiesInfoSubHeading =
  'livestreamingAttendeeJoinWithActivitiesInfoSubHeading';

export const livestreamingAttendeeInviteOthersText =
  'livestreamingAttendeeInviteOthersText';

export const livestreamingAttendeeWhatYouCanDoText =
  'livestreamingAttendeeWhatYouCanDoText';

export const livestreamingAttendeeWaitingForHostToJoinText =
  'livestreamingAttendeeWaitingForHostToJoinText';

export const publicChatToastHeading = 'publicChatToastHeading';
export const publicChatImgToastHeading = 'publicChatImgToastHeading';
export const publicChatFileToastHeading = 'publicChatFileToastHeading';

export const multiplePublicChatToastHeading = 'multiplePublicChatToastHeading';
export const multiplePublicChatToastSubHeading =
  'multiplePublicChatToastSubHeading';

export const privateChatToastHeading = 'privateChatToastHeading';
export const multiplePrivateChatToastHeading =
  'multiplePrivateChatToastHeading';

export const multiplePublicAndPrivateChatToastHeading =
  'multiplePublicAndPrivateChatToastHeading';
export const multiplePublicAndPrivateChatToastSubHeading =
  'multiplePublicAndPrivateChatToastSubHeading';

export const livestreamToastApprovalBtnText = 'livestreamToastApprovalBtnText';
export const livestreamToastDenyBtnText = 'livestreamToastDenyBtnText';

export const livestreamRaiseHandRequestToastHeading =
  'livestreamRaiseHandRequestToastHeading';

export const livestreamRaiseHandRequestToastSubHeading =
  'livestreamRaiseHandRequestToastSubHeading';

export const livestreamRaiseHandRequestReceivedToastHeading =
  'livestreamRaiseHandRequestReceivedToastHeading';

export const livestreamRaiseHandRequestReceivedToastSubHeading =
  'livestreamRaiseHandRequestReceivedToastSubHeading';

export const livestreamRaiseHandRequestAcceptedToastHeading =
  'livestreamRaiseHandRequestAcceptedToastHeading';
export const livestreamRaiseHandRequestAcceptedToastSubHeading =
  'livestreamRaiseHandRequestAcceptedToastSubHeading';

export const livestreamRaiseHandRequestRejectedToastHeading =
  'livestreamRaiseHandRequestRejectedToastHeading';

export const livestreamRaiseHandRequestRecallToastHeading =
  'livestreamRaiseHandRequestRecallToastHeading';

export const livestreamRaiseHandRequestRecallLocalToastHeading =
  'livestreamRaiseHandRequestRecallLocalToastHeading';

export const livestreamRaiseHandApprovedRequestRecallToastHeading =
  'livestreamRaiseHandApprovedRequestRecallToastHeading';

export const livestreamPromoteAsCoHostToastHeading =
  'livestreamPromoteAsCoHostToastHeading';

export const livestreamRequestAlreadyProcessed =
  'livestreamRequestAlreadyProcessed';

export const videoRoomInTheSpotlightText =
  `video${room}InTheSpotlightText` as const;
export const videoRoomUserFallbackText =
  `video${room}UserFallbackText` as const;

export const peoplePanelMeText = 'peoplePanelMeText';
export const peoplePanelPresenterText = 'peoplePanelPresenterText';

export const userRemovedFromTheRoomToastHeading =
  `userRemovedFromThe${room}ToastHeading` as const;

export const vbPanelImageUploadErrorToastHeading =
  'vbPanelImageUploadErrorToastHeading';
export const vbPanelImageUploadErrorToastSubHeading =
  'vbPanelImageUploadErrorToastSubHeading';
export const vbPanelImageTypeErrorToastHeading =
  'vbPanelImageTypeErrorToastHeading';
export const vbPanelImageTypeErrorToastSubHeading =
  'vbPanelImageTypeErrorToastSubHeading';
export const vbPanelImageSizeLimitErrorToastHeading =
  'vbPanelImageSizeLimitErrorToastHeading';
export const vbPanelImageSizeLimitErrorToastSubHeading =
  'vbPanelImageSizeLimitErrorToastSubHeading';

export const whiteboardToolboxWidthLabel = 'whiteboardToolboxWidthLabel';
export const whiteboardToolboxPxLabel = 'whiteboardToolboxPxLabel';
export const whiteboardInitializingText = 'whiteboardInitializingText';
export const whiteboardExportErrorToastHeading =
  'whiteboardExportErrorToastHeading';
export const whiteboardExportInfoToastHeading =
  'whiteboardExportInfoToastHeading';
export const whiteboardExportSuccessToastHeading =
  'whiteboardExportSuccessToastHeading';
export const whiteboardWidgetViewOnlyText = 'whiteboardWidgetViewOnlyText';
export const whiteboardWidgetExportToCloudText =
  'whiteboardWidgetExportToCloudText';
export const whiteboardWidgetZoomInText = 'whiteboardWidgetZoomInText';
export const whiteboardWidgetZoomOutText = 'whiteboardWidgetZoomOutText';
export const whiteboardWidgetFitToScreenText =
  'whiteboardWidgetFitToScreenText';
export const whiteboardWidgetUndoText = 'whiteboardWidgetUndoText';
export const whiteboardWidgetRedoText = 'whiteboardWidgetRedoText';

export const whiteboardFileUploadErrorToastHeading =
  'whiteboardFileUploadErrorToastHeading';
export const whiteboardFileUploadInfoToastHeading =
  'whiteboardFileUploadInfoToastHeading';
export const whiteboardFileUploadTypeErrorToastHeading =
  'whiteboardFileUploadTypeErrorToastHeading';
export const whiteboardFileUploadTypeErrorToastSubHeading =
  'whiteboardFileUploadTypeErrorToastSubHeading';

export const whiteboardToolboxSelectText = 'whiteboardToolboxSelectText';
export const whiteboardToolboxTextFormatting =
  'whiteboardToolboxTextFormatting';
export const whiteboardToolboxMoveText = 'whiteboardToolboxMoveText';
export const whiteboardToolboxLaserText = 'whiteboardToolboxLaserText';
export const whiteboardToolboxEraseText = 'whiteboardToolboxEraseText';
export const whiteboardToolboxUploadText = 'whiteboardToolboxUploadText';
export const whiteboardToolboxClearAllText = 'whiteboardToolboxClearAllText';

export const whiteboardNativeInfoToastHeading =
  'whiteboardNativeInfoToastHeading';

export const sttSpokenLanguageToastHeading = `${stt}SpokenLanguageToastHeading`;
export const sttSpokenLanguageToastSubHeading = `${stt}SpokenLanguageToastSubHeading`;

export const deviceDetectionToastHeading = 'deviceDetectionToastHeading';
export const deviceDetectionToastSubHeading = 'deviceDetectionToastSubHeading';
export const deviceDetectionPrimaryBtnText = 'deviceDetectionPrimaryBtnText';
export const deviceDetectionSecondaryBtnText =
  'deviceDetectionSecondaryBtnText';
export const deviceDetectionCheckboxText = 'deviceDetectionCheckboxText';

export const hostMutedUserToastHeading = 'hostMutedUserToastHeading';
export const hostRequestedUserToastHeading = 'hostRequestedUserToastHeading';
export const hostRequestedUserToastPrimaryBtnText =
  'hostRequestedUserToastPrimaryBtnText';
export const hostRequestedUserToastSecondaryBtnText =
  'hostRequestedUserToastSecondaryBtnText';

export const hostRemovedUserToastHeading = 'hostRemovedUserToastHeading';

export const waitingRoomApprovalRequiredToastHeading =
  'waitingRoomApprovalRequiredToastHeading';
export const waitingRoomApprovalRequiredToastSubHeading =
  'waitingRoomApprovalRequiredToastSubHeading';
export const waitingRoomApprovalRequiredPrimaryBtnText =
  'waitingRoomApprovalRequiredPrimaryBtnText';
export const waitingRoomApprovalRequiredSecondaryBtnText =
  'waitingRoomApprovalRequiredSecondaryBtnText';

export const waitingRoomApprovalRejectionToastHeading =
  'waitingRoomApprovalRejectionToastHeading';
export const waitingRoomApprovalRejectionToastSubHeading =
  'waitingRoomApprovalRejectionToastSubHeading';
export const waitingRoomHostNotJoined = 'waitingRoomHostNotJoined';
export const waitingRoomUsersInCall = 'waitingRoomUsersInCall';

export const videoRoomRecordingText = `video${room}RecordingText` as const;
export const videoRoomGoToActiveSpeakerText =
  `video${room}GoToActiveSpeakerText` as const;
export const videoRoomScreenshareText = `video${room}ScreenshareText` as const;
export const videoRoomStartingCallText =
  `video${room}StartingCallText` as const;
export const videoRoomScreenshareOverlayText =
  `video${room}ScreenshareOverlayText` as const;
export const videoRoomScreenshareStopSharingBtnText =
  `video${room}ScreenshareStopSharingBtnText` as const;

export const chatPanelUserOfflineText = 'chatPanelUserOfflineText';
export const chatPanelUnreadMessageText = 'chatPanelUnreadMessageText';

export const livestreamingMicrophoneTooltipText =
  'livestreamingMicrophoneTooltipText';
export const livestreamingCameraTooltipText = 'livestreamingCameraTooltipText';
export const livestreamingShareTooltipText = 'livestreamingShareTooltipText';

export const peoplePanelWaitingRoomRequestApprovalBtnTxt =
  'peoplePanelWaitingRoomRequestApprovalBtnTxt';
export const peoplePanelWaitingRoomRequestDenyBtnTxt =
  'peoplePanelWaitingRoomRequestDenyBtnTxt';

export const videoRoomScreenShareErrorToastHeading =
  `video${room}ScreenShareErrorToastHeading` as const;
export const videoRoomScreenShareErrorToastSubHeading =
  `video${room}ScreenShareErrorToastSubHeading` as const;

export const videoRoomRecordingToastHeading =
  `video${room}RecordingToastHeading` as const;
export const videoRoomRecordingToastSubHeading =
  `video${room}RecordingToastSubHeading` as const;
export const videoRoomRecordingStartErrorToastHeading =
  'videoRoomRecordingStartErrorToastHeading';
export const videoRoomRecordingStopErrorToastHeading =
  'videoRoomRecordingStopErrorToastHeading';
export const videoRoomRecordingErrorToastSubHeading =
  'videoRoomRecordingErrorToastSubHeading';

export const peoplePanelUserNotFoundLabel = 'peoplePanelUserNotFoundLabel';
export const peoplePanelStreamingRequestSectionHeader =
  'peoplePanelStreamingRequestSectionHeader';
export const peoplePanelLivestreamingApprovalBtnText =
  'peoplePanelLivestreamingApprovalBtnText';
export const peoplePanelLivestreamingDenyBtnText =
  'peoplePanelLivestreamingDenyBtnText';

export const sttTranscriptPanelSearchText =
  `${stt}TranscriptPanelSearchText` as const;
export const sttTranscriptPanelNoSearchResultsFoundText =
  `${stt}TranscriptPanelNoSearchResultsFoundText` as const;
export const sttTranscriptPanelViewLatestText =
  `${stt}TranscriptPanelViewLatestText` as const;

export const videoRoomPeopleCountTooltipHostText =
  `video${room}PeopleCountTooltipHostText` as const;
export const videoRoomPeopleCountTooltipAttendeeText =
  `video${room}PeopleCountTooltipAttendeeText` as const;

export const userBannedText = 'userBannedText';

export interface I18nVideoCallScreenLabelsInterface {
  [blockLandscapeModeMessageText]?: I18nBaseType;

  [toolbarItemPeopleText]?: I18nBaseType;
  [toolbarItemChatText]?: I18nBaseType;
  [toolbarItemSettingText]?: I18nBaseType;

  [toolbarItemLayoutText]?: I18nBaseType;
  [toolbarItemInviteText]?: I18nBaseType;

  [toolbarItemMicrophoneText]?: I18nBaseType<I18nDeviceStatus>;
  [toolbarItemMicrophoneTooltipText]?: I18nBaseType<I18nDeviceStatus>;
  [toolbarItemCameraText]?: I18nBaseType<I18nDeviceStatus>;
  [toolbarItemCameraTooltipText]?: I18nBaseType<I18nDeviceStatus>;
  [toolbarItemSwitchCameraText]?: I18nBaseType;

  [toolbarItemShareText]?: I18nConditionalType;
  [toolbarItemRecordingText]?: I18nConditionalType;
  [toolbarItemLeaveText]?: I18nBaseType;

  [toolbarItemMoreText]?: I18nBaseType;

  [toolbarItemNoiseCancellationText]?: I18nBaseType;
  [toolbarItemWhiteboardText]?: I18nConditionalType;
  [toolbarItemCaptionText]?: I18nConditionalType;
  [toolbarItemTranscriptText]?: I18nConditionalType;
  [toolbarItemManageTextTracksText]?: I18nConditionalType;
  [toolbarItemVirtualBackgroundText]?: I18nBaseType;
  [toolbarItemViewRecordingText]?: I18nConditionalType;

  [toolbarItemRaiseHandText]?: I18nConditionalType;

  [inviteTileWelcomeText]?: I18nBaseType;
  [inviteTileNoElseJoinedYetText]?: I18nBaseType;
  [inviteTileCopyInviteBtnText]?: I18nBaseType;

  [settingPanelNameCantbeChangedInfo]?: I18nBaseType;
  [settingPanelNameInputLabel]?: I18nBaseType;

  [invitePopupHeading]?: I18nBaseType;
  [invitePopupPrimaryBtnText]?: I18nBaseType;

  [PSTNUserLabel]?: I18nBaseType; //

  [vbPanelApplyBtnText]?: I18nBaseType;
  [vbPanelAppliedBtnText]?: I18nBaseType;

  [videoTileNetworkQuailtyLabel]?: I18nBaseType<NetworkQualities>; //

  [toolbarItemLayoutOptionGridText]?: I18nBaseType;
  [toolbarItemLayoutOptionSidebarText]?: I18nBaseType;

  [nativeScreensharePopupHeading]?: I18nBaseType;
  [nativeScreensharePopupSubHeading]?: I18nConditionalType;
  [nativeScreensharePopupPrimaryBtnText]?: I18nBaseType;
  [nativeScreensharePopupIncludeDeviceAudioText]?: I18nBaseType;

  [nativeStopScreensharePopupHeading]?: I18nBaseType;
  [nativeStopScreensharePopupSubHeading]?: I18nBaseType;
  [nativeStopScreensharePopupPrimaryBtnText]?: I18nBaseType;

  [recordingModalTitleIntn]?: I18nBaseType;
  [textTrackModalTitleIntn]?: I18nBaseType;
  [stopRecordingPopupHeading]?: I18nBaseType;
  [stopRecordingPopupSubHeading]?: I18nBaseType;
  [stopRecordingPopupPrimaryBtnText]?: I18nBaseType;

  [clearAllWhiteboardPopupHeading]?: I18nBaseType;
  [clearAllWhiteboardPopupSubHeading]?: I18nBaseType;
  [clearAllWhiteboardPopupPrimaryBtnText]?: I18nBaseType;

  [leavePopupHeading]?: I18nBaseType;
  [leavePopupSubHeading]?: I18nConditionalType;
  [leavePopupPrimaryBtnText]?: I18nBaseType;

  [removeUserFromRoomPopupHeading]?: I18nDynamicType;
  [removeUserFromRoomPopupSubHeading]?: I18nDynamicType;
  [removeUserFromRoomPopupPrimaryBtnText]?: I18nBaseType;

  [removeScreenshareFromRoomPopupHeading]?: I18nBaseType;
  [removeScreenshareFromRoomPopupSubHeading]?: I18nDynamicType;
  [removeScreenshareFromRoomPopupPrimaryBtnText]?: I18nBaseType;

  [sttChangeLanguagePopupHeading]?: I18nConditionalType;
  [sttChangeLanguagePopupSubHeading]?: I18nBaseType;
  [sttChangeLanguagePopupDropdownError]?: I18nBaseType;
  [sttChangeLanguagePopupDropdownInfo]?: I18nBaseType;
  [sttChangeLanguagePopupPrimaryBtnText]?: I18nBaseType;

  [sttChangeSpokenLanguageText]?: I18nBaseType;
  [sttSettingSpokenLanguageText]?: I18nBaseType;
  [sttTranscriptPanelHeaderText]?: I18nBaseType;
  [sttDownloadBtnText]?: I18nBaseType;
  [sttDownloadTranscriptBtnText]?: I18nBaseType;
  [sttLanguageChangeInProgress]?: I18nBaseType;

  [peoplePanelHeaderText]?: I18nBaseType;

  [chatPanelGroupTabText]?: I18nBaseType;
  [chatPanelPrivateTabText]?: I18nBaseType;

  [groupChatWelcomeContent]?: I18nConditionalType;

  [groupChatLiveInputPlaceHolderText]?: I18nBaseType;
  [groupChatMeetingInputPlaceHolderText]?: I18nBaseType;
  [privateChatInputPlaceHolderText]?: I18nBaseType;

  [chatActionMenuDownloadText]?: I18nBaseType;
  [chatActionMenuCopyLinkText]?: I18nBaseType;
  [chatActionMenuDeleteText]?: I18nBaseType;
  [chatSendMessageBtnText]?: I18nBaseType;
  [chatMsgDeletedText]?: I18nBaseType;
  [chatMessageDeleteConfirmBtnText]?: I18nBaseType;
  [chatPublicMessageDeletePopupText]?: I18nBaseType;
  [chatPrivateMessageDeletePopupText]?: I18nBaseType;
  [chatUploadErrorToastHeading]?: I18nBaseType;
  [chatUploadErrorFileSizeToastHeading]?: I18nBaseType;
  [chatSendErrorTextSizeToastHeading]?: I18nBaseType;
  [chatUploadErrorFileSizeToastSubHeading]?: I18nBaseType;
  [chatSendErrorTextSizeToastSubHeading]?: I18nBaseType;
  [chatUploadErrorFileTypeToastSubHeading]?: I18nBaseType;
  [chatUploadStatusInProgress]?: I18nBaseType;
  [chatUploadStatusFailure]?: I18nBaseType;
  [chatUploadMaxLimit]?: I18nBaseType;
  [chatErrorNoToken]?: I18nBaseType;
  [chatErrorNotConnected]?: I18nBaseType;

  [peoplePanelTurnoffAllCameraBtnText]?: I18nBaseType;
  [peoplePanelMuteAllMicBtnText]?: I18nBaseType;

  [peoplePanelHostSectionHeaderText]?: I18nBaseType;
  [peoplePanelAudienceSectionHeaderText]?: I18nBaseType;
  [peoplePanelInThisMeetingLabel]?: I18nBaseType;
  [peoplePanelNoHostJoinedContent]?: I18nBaseType;
  [peoplePanelNoUsersJoinedContent]?: I18nBaseType;
  [peoplePanelNoAudienceJoinedContent]?: I18nBaseType;

  [moreBtnViewWhiteboard]?: I18nBaseType;
  [moreBtnViewInLarge]?: I18nBaseType;
  [moreBtnRemoveFromLarge]?: I18nBaseType;
  [moreBtnPinToTop]?: I18nBaseType;
  [moreBtnRemoveFromTop]?: I18nBaseType;
  [moreBtnMessagePrivately]?: I18nBaseType;
  [moreBtnAudio]?: I18nConditionalType;
  [moreBtnVideo]?: I18nConditionalType;
  [moreBtnAddAsPresenter]?: I18nBaseType;
  [moreBtnRemoveAsPresenter]?: I18nBaseType;
  [moreBtnRemoveFromRoom]?: I18nBaseType;
  [moreBtnChangeName]?: I18nBaseType;
  [moreBtnStopScreenShare]?: I18nBaseType;
  [moreBtnRemoveScreenShare]?: I18nBaseType;
  [moreBtnSpotlight]?: I18nConditionalType;
  [videoRoomInTheSpotlightText]?: I18nBaseType;

  [muteAllConfirmationPopoverContent]?: I18nBaseType<I18nMuteType>;
  [muteAllConfirmationPopoverPrimaryBtnText]?: I18nBaseType;

  [requestConfirmationPopoverContent]?: I18nBaseType<I18nRequestConfirmation>;
  [requestConfirmationPopoverPrimaryBtnText]?: I18nBaseType;

  [muteConfirmationPopoverContent]?: I18nBaseType<I18nMuteConfirmation>;
  [muteConfirmationPopoverPrimaryBtnText]?: I18nBaseType;

  [peoplePanelWantToJoinText]?: I18nBaseType;
  [peoplePanelWaitingText]?: I18nBaseType;

  [livestreamingAttendeeRaiseHandInfoHeading]?: I18nBaseType;
  [livestreamingAttendeeRaiseHandInfoSubHeading]?: I18nBaseType;
  [livestreamingAttendeeChatWithOthersInfoHeading]?: I18nBaseType;
  [livestreamingAttendeeChatWithOthersInfoSubHeading]?: I18nBaseType;
  [livestreamingAttendeePresentYourScreenInfoHeading]?: I18nBaseType;
  [livestreamingAttendeePresentYourScreenInfoSubHeading]?: I18nBaseType;
  [livestreamingAttendeeJoinWithActivitiesInfoHeading]?: I18nBaseType;
  [livestreamingAttendeeJoinWithActivitiesInfoSubHeading]?: I18nBaseType;

  [livestreamingAttendeeWaitingForHostToJoinText]?: I18nBaseType;
  [livestreamingAttendeeWhatYouCanDoText]?: I18nBaseType;
  [livestreamingAttendeeInviteOthersText]?: I18nBaseType;

  [publicChatToastHeading]?: I18nBaseType;
  [publicChatImgToastHeading]?: I18nBaseType;
  [publicChatFileToastHeading]?: I18nBaseType;

  [multiplePublicChatToastHeading]?: I18nBaseType;
  [multiplePublicChatToastSubHeading]?: I18nBaseType<publicChatToastSubHeadingDataInterface>;

  [privateChatToastHeading]?: I18nBaseType;
  [multiplePrivateChatToastHeading]?: I18nBaseType<privateChatToastHeadingDataInterface>;

  [multiplePublicAndPrivateChatToastHeading]?: I18nBaseType;
  [multiplePublicAndPrivateChatToastSubHeading]?: I18nBaseType<publicAndPrivateChatToastSubHeadingDataInterface>;

  [livestreamToastApprovalBtnText]?: I18nBaseType;
  [livestreamToastDenyBtnText]?: I18nBaseType;

  [livestreamRaiseHandRequestToastHeading]?: I18nBaseType;
  [livestreamRaiseHandRequestToastSubHeading]?: I18nBaseType;

  [livestreamRaiseHandRequestReceivedToastHeading]?: I18nBaseType;
  [livestreamRaiseHandRequestReceivedToastSubHeading]?: I18nBaseType;

  [livestreamRaiseHandRequestAcceptedToastHeading]?: I18nBaseType;
  [livestreamRaiseHandRequestAcceptedToastSubHeading]?: I18nBaseType;

  [livestreamRaiseHandRequestRejectedToastHeading]?: I18nBaseType;

  [livestreamRaiseHandRequestRecallToastHeading]?: I18nBaseType;

  [livestreamRaiseHandRequestRecallLocalToastHeading]?: I18nBaseType;

  [livestreamRaiseHandApprovedRequestRecallToastHeading]?: I18nBaseType;

  [livestreamPromoteAsCoHostToastHeading]?: I18nBaseType;

  [livestreamRequestAlreadyProcessed]?: I18nBaseType;
  [videoRoomUserFallbackText]?: I18nBaseType;

  [peoplePanelMeText]?: I18nBaseType;
  [peoplePanelPresenterText]?: I18nBaseType;
  [userRemovedFromTheRoomToastHeading]?: I18nDynamicType;

  [vbPanelImageUploadErrorToastHeading]?: I18nBaseType;
  [vbPanelImageUploadErrorToastSubHeading]?: I18nBaseType;
  [vbPanelImageSizeLimitErrorToastHeading]?: I18nBaseType;
  [vbPanelImageSizeLimitErrorToastSubHeading]?: I18nBaseType;
  [vbPanelImageTypeErrorToastHeading]?: I18nBaseType;
  [vbPanelImageTypeErrorToastSubHeading]?: I18nBaseType;

  [whiteboardToolboxWidthLabel]?: I18nBaseType;
  [whiteboardToolboxPxLabel]?: I18nBaseType;

  [whiteboardInitializingText]?: I18nBaseType;

  [whiteboardWidgetViewOnlyText]?: I18nBaseType;
  [whiteboardWidgetZoomInText]?: I18nBaseType;
  [whiteboardWidgetZoomOutText]?: I18nBaseType;
  [whiteboardWidgetFitToScreenText]?: I18nBaseType;
  [whiteboardWidgetRedoText]?: I18nBaseType;
  [whiteboardWidgetUndoText]?: I18nBaseType;
  [whiteboardWidgetExportToCloudText]?: I18nBaseType;

  [whiteboardExportErrorToastHeading]?: I18nBaseType;
  [whiteboardExportInfoToastHeading]?: I18nBaseType;
  [whiteboardExportSuccessToastHeading]?: I18nBaseType;

  [whiteboardToolboxSelectText]?: I18nBaseType;
  [whiteboardToolboxTextFormatting]?: I18nBaseType;
  [whiteboardToolboxMoveText]?: I18nBaseType;
  [whiteboardToolboxLaserText]?: I18nBaseType;
  [whiteboardToolboxEraseText]?: I18nBaseType;
  [whiteboardToolboxUploadText]?: I18nBaseType;
  [whiteboardToolboxClearAllText]?: I18nBaseType;

  [whiteboardFileUploadErrorToastHeading]?: I18nBaseType<whiteboardFileUploadToastDataType>;
  [whiteboardFileUploadInfoToastHeading]?: I18nBaseType<whiteboardFileUploadToastDataType>;
  [whiteboardFileUploadTypeErrorToastHeading]?: I18nBaseType<whiteboardFileUploadToastDataType>;
  [whiteboardFileUploadTypeErrorToastSubHeading]?: I18nBaseType<whiteboardFileUploadToastDataType>;
  [whiteboardNativeInfoToastHeading]?: I18nBaseType;

  [sttSpokenLanguageToastHeading]?: I18nBaseType<sttSpokenLanguageToastHeadingDataType>;
  [sttSpokenLanguageToastSubHeading]?: I18nBaseType<sttSpokenLanguageToastSubHeadingDataInterface>;

  [deviceDetectionToastHeading]?: I18nDynamicType;
  [deviceDetectionToastSubHeading]?: I18nBaseType<deviceDetectionToastSubHeadingDataInterface>;
  [deviceDetectionPrimaryBtnText]?: I18nBaseType;
  [deviceDetectionSecondaryBtnText]?: I18nBaseType;
  [deviceDetectionCheckboxText]?: I18nBaseType;

  [hostMutedUserToastHeading]?: I18nBaseType<I18nMuteType>;

  [hostRequestedUserToastHeading]?: I18nBaseType<I18nMuteType>;
  [hostRequestedUserToastPrimaryBtnText]?: I18nBaseType<I18nMuteType>;
  [hostRequestedUserToastSecondaryBtnText]?: I18nBaseType<I18nMuteType>;
  [hostRemovedUserToastHeading]?: I18nBaseType;
  [waitingRoomApprovalRequiredToastHeading]?: I18nBaseType;
  [waitingRoomApprovalRequiredToastSubHeading]?: I18nDynamicType;
  [waitingRoomApprovalRequiredPrimaryBtnText]?: I18nBaseType;
  [waitingRoomApprovalRequiredSecondaryBtnText]?: I18nBaseType;

  [waitingRoomApprovalRejectionToastHeading]?: I18nBaseType;
  [waitingRoomUsersInCall]?: I18nBaseType;
  [waitingRoomApprovalRejectionToastSubHeading]?: I18nBaseType;
  [waitingRoomHostNotJoined]?: I18nBaseType;

  [videoRoomRecordingText]?: I18nBaseType;
  [videoRoomGoToActiveSpeakerText]?: I18nBaseType;
  [videoRoomScreenshareText]?: I18nDynamicType;
  [videoRoomStartingCallText]?: I18nBaseType;

  [videoRoomScreenshareOverlayText]?: I18nBaseType;
  [videoRoomScreenshareStopSharingBtnText]?: I18nBaseType;

  [chatPanelUserOfflineText]?: I18nBaseType;
  [chatPanelUnreadMessageText]?: I18nBaseType;

  [livestreamingMicrophoneTooltipText]?: I18nConditionalType;
  [livestreamingCameraTooltipText]?: I18nConditionalType;
  [livestreamingShareTooltipText]?: I18nConditionalType;

  [peoplePanelWaitingRoomRequestApprovalBtnTxt]?: I18nBaseType;
  [peoplePanelWaitingRoomRequestDenyBtnTxt]?: I18nBaseType;

  [videoRoomScreenShareErrorToastHeading]?: I18nBaseType;
  [videoRoomScreenShareErrorToastSubHeading]?: I18nBaseType;
  [videoRoomRecordingToastHeading]?: I18nConditionalType;
  [videoRoomRecordingToastSubHeading]?: I18nDynamicType;
  [videoRoomRecordingStartErrorToastHeading]?: I18nBaseType;
  [videoRoomRecordingStopErrorToastHeading]?: I18nBaseType;
  [videoRoomRecordingErrorToastSubHeading]?: I18nBaseType;

  [peoplePanelUserNotFoundLabel]?: I18nBaseType;
  [peoplePanelStreamingRequestSectionHeader]?: I18nBaseType;
  [peoplePanelLivestreamingApprovalBtnText]?: I18nBaseType;
  [peoplePanelLivestreamingDenyBtnText]?: I18nBaseType;
  [sttTranscriptPanelSearchText]?: I18nBaseType;
  [sttTranscriptPanelNoSearchResultsFoundText]?: I18nBaseType;
  [sttTranscriptPanelViewLatestText]?: I18nBaseType;

  [videoRoomPeopleCountTooltipHostText]?: I18nBaseType;
  [videoRoomPeopleCountTooltipAttendeeText]?: I18nBaseType;
  [userBannedText]?: I18nBaseType;
}

export const VideoCallScreenLabels: I18nVideoCallScreenLabelsInterface = {
  [blockLandscapeModeMessageText]:
    'Please change to portrait mode to further access our application.',

  [toolbarItemPeopleText]: 'Пользователи',
  [toolbarItemChatText]: 'Чат',
  [toolbarItemSettingText]: 'Настройки',
  [toolbarItemLayoutText]: 'Расположение',
  [toolbarItemInviteText]: 'Пригласить',

  [toolbarItemMicrophoneText]: deviceStatus => {
    switch (deviceStatus) {
      case I18nDeviceStatus.ON:
        return 'Микрофон включен';
      case I18nDeviceStatus.OFF:
        return 'Микрофон выключен';
      case I18nDeviceStatus.PERMISSION_DENIED:
        return 'Микрофон';
      default:
        return 'Микрофон';
    }
  },
  [toolbarItemMicrophoneTooltipText]: deviceStatus => {
    switch (deviceStatus) {
      case I18nDeviceStatus.ON:
        return 'Выключить микрофон';
      case I18nDeviceStatus.OFF:
        return 'Включить микрофон';
      case I18nDeviceStatus.PERMISSION_DENIED:
        return 'Предоставить разрешения';
      default:
        return 'Микрофон';
    }
  },
  [toolbarItemCameraText]: deviceStatus => {
    switch (deviceStatus) {
      case I18nDeviceStatus.ON:
        return 'Видео включено';
      case I18nDeviceStatus.OFF:
        return 'Видео выключено';
      case I18nDeviceStatus.PERMISSION_DENIED:
        return 'Видео';
      default:
        return 'Видео';
    }
  },
  [toolbarItemCameraTooltipText]: deviceStatus => {
    switch (deviceStatus) {
      case I18nDeviceStatus.ON:
        return 'Выключить камеру';
      case I18nDeviceStatus.OFF:
        return 'Включить камеру';
      case I18nDeviceStatus.PERMISSION_DENIED:
        return 'Предоставить разрешения';
      default:
        return 'Видео';
    }
  },
  [toolbarItemShareText]: active => (active ? 'Остановить демонстрацию' : 'Демонстрация экрана'),
  [toolbarItemRecordingText]: active => (active ? 'Остановить запись' : 'Запись'),
  [toolbarItemLeaveText]: 'Выйти',
  [toolbarItemMoreText]: 'Ещё',

  [toolbarItemNoiseCancellationText]: 'Шумоподавление',
  [toolbarItemVirtualBackgroundText]: 'Виртуальный фон',
  [toolbarItemWhiteboardText]: active =>
    active ? 'Скрыть доску' : 'Показать доску',
  [toolbarItemCaptionText]: active =>
    active ? 'Скрыть субтитры' : 'Показать субтитры',
  [toolbarItemTranscriptText]: active =>
    active ? 'Скрыть расшифровку' : 'Показать расшифровку',
  [toolbarItemViewRecordingText]: 'Просмотр записей',
  [toolbarItemManageTextTracksText]: 'Просмотр текстовых дорожек',

  [toolbarItemRaiseHandText]: active => (active ? 'Опустить руку' : 'Поднять руку'),
  [toolbarItemSwitchCameraText]: 'Переключить камеру',

  [inviteTileWelcomeText]: 'Добро пожаловать',
  [inviteTileNoElseJoinedYetText]: 'Никто больше не присоединился',
  [inviteTileCopyInviteBtnText]: 'СКОПИРОВАТЬ ПРИГЛАШЕНИЕ',

  [settingPanelNameCantbeChangedInfo]: `Имя нельзя изменить, пока активна доска`,
  [settingPanelNameInputLabel]: 'Ваше имя',

  [invitePopupHeading]: 'Пригласить других в эту комнату',
  [invitePopupPrimaryBtnText]: 'СКОПИРОВАТЬ ПРИГЛАШЕНИЕ',

  [PSTNUserLabel]: 'Пользователь PSTN',
  [videoTileNetworkQuailtyLabel]: (quality: NetworkQualities) => {
    switch (quality) {
      case 'unknown':
        return 'Сеть не поддерживается';
      case 'excellent':
        return 'Отличная сеть';
      case 'good':
        return 'Хорошая сеть';
      case 'bad':
        return 'Плохая сеть';
      case 'veryBad':
        return 'Очень плохая сеть';
      case 'unpublished':
        return 'Сеть не опубликована';
      case 'loading':
        return 'Загрузка сети';
      default:
        return 'Загрузка';
    }
  },

  [vbPanelAppliedBtnText]: 'Применено',
  [vbPanelApplyBtnText]: 'Применить',
  [toolbarItemLayoutOptionGridText]: 'Сетка',
  [toolbarItemLayoutOptionSidebarText]: 'Боковая панель',

  [nativeScreensharePopupHeading]: 'Демонстрация экрана',
  [nativeScreensharePopupSubHeading]: camActive =>
    camActive
      ? 'ВНИМАНИЕ: Камера и все входящие видео будут ВЫКЛЮЧЕНЫ для оптимизации производительности. Продолжить?'
      : 'ВНИМАНИЕ: Все входящие видео будут ВЫКЛЮЧЕНЫ для оптимизации производительности. Продолжить?',
  [nativeScreensharePopupPrimaryBtnText]: 'ПРОДОЛЖИТЬ',
  [nativeScreensharePopupIncludeDeviceAudioText]: 'Включить звук устройства',

  [nativeStopScreensharePopupHeading]: 'Остановить демонстрацию экрана?',
  [nativeStopScreensharePopupSubHeading]:
    'Необходимо остановить демонстрацию экрана, чтобы включить камеру',
  [nativeStopScreensharePopupPrimaryBtnText]: 'ОСТАНОВИТЬ ДЕМОНСТРАЦИЮ И ВКЛЮЧИТЬ КАМЕРУ',

  [recordingModalTitleIntn]: 'Записи',
  [stopRecordingPopupHeading]: 'Остановить запись?',
  [stopRecordingPopupSubHeading]:
    'Вы уверены, что хотите остановить запись? Это действие нельзя отменить.',
  [stopRecordingPopupPrimaryBtnText]: 'ЗАВЕРШИТЬ ЗАПИСЬ',

  [clearAllWhiteboardPopupHeading]: 'Очистить доску?',
  [clearAllWhiteboardPopupSubHeading]:
    'Вы уверены, что хотите очистить доску?',
  [clearAllWhiteboardPopupPrimaryBtnText]: 'ОЧИСТИТЬ ВСЁ',

  [leavePopupHeading]: 'Покинуть комнату?',
  [leavePopupSubHeading]: transcriptDownloadAvailable =>
    transcriptDownloadAvailable
      ? `Вы уверены, что хотите выйти? Вы ещё не скачали расшифровку.`
      : 'Вы уверены, что хотите покинуть встречу?',
  [leavePopupPrimaryBtnText]: 'ВЫЙТИ',

  [removeUserFromRoomPopupHeading]: name => `Удалить ${name}?`,
  [removeUserFromRoomPopupSubHeading]: name =>
    `После удаления ${name} всё ещё сможет снова присоединиться к комнате.`,
  [removeUserFromRoomPopupPrimaryBtnText]: 'УДАЛИТЬ',

  [removeScreenshareFromRoomPopupHeading]: 'Удалить демонстрацию экрана?',
  [removeScreenshareFromRoomPopupSubHeading]: name =>
    `После удаления ${name} всё ещё сможет демонстрировать экран позже.`,
  [removeScreenshareFromRoomPopupPrimaryBtnText]: 'УДАЛИТЬ',

  [textTrackModalTitleIntn]: 'Текстовые дорожки',
  [sttChangeLanguagePopupHeading]: isFirstTimeOpened =>
    isFirstTimeOpened ? 'Установить язык речи' : 'Изменить язык речи',
  [sttChangeLanguagePopupSubHeading]:
    'На каких языках говорят все участники этой встречи?',
  [sttChangeLanguagePopupPrimaryBtnText]: 'ПОДТВЕРДИТЬ',
  [sttChangeLanguagePopupDropdownInfo]:
    'Вы можете выбрать максимум два языка',
  [sttChangeLanguagePopupDropdownError]:
    'Выберите хотя бы один язык для продолжения',
  [sttChangeSpokenLanguageText]: 'Изменить язык речи',

  [sttTranscriptPanelHeaderText]: 'Расшифровка встречи',
  [sttDownloadBtnText]: 'Скачать',
  [sttDownloadTranscriptBtnText]: 'Скачать расшифровку',
  [sttSettingSpokenLanguageText]: 'Установка языка речи',
  [sttLanguageChangeInProgress]: 'Изменение языка...',

  [peoplePanelHeaderText]: 'Пользователи',

  [chatPanelGroupTabText]: 'Публичный',
  [chatPanelPrivateTabText]: 'Приватный',

  [groupChatWelcomeContent]: noMessage =>
    noMessage
      ? 'Добро пожаловать в чат!\nВсе сообщения удаляются после завершения звонка.'
      : 'Все сообщения удаляются после завершения звонка.',

  [groupChatLiveInputPlaceHolderText]: name => `Публичное сообщение от ${name}...`,
  [groupChatMeetingInputPlaceHolderText]: name => `Введите сообщение`,
  [privateChatInputPlaceHolderText]: name => `Приватное сообщение для ${name}`,

  [chatActionMenuDownloadText]: 'Скачать',
  [chatActionMenuCopyLinkText]: 'Копировать ссылку на файл',
  [chatActionMenuDeleteText]: 'Удалить',
  [chatSendMessageBtnText]: 'Отправить',
  [chatMsgDeletedText]: name => `${name} удалил(а) это сообщение`,

  [chatUploadErrorToastHeading]: 'Ошибка загрузки вложения',
  [chatUploadErrorFileSizeToastHeading]: 'Размер файла слишком большой',
  [chatSendErrorTextSizeToastHeading]: 'Размер текста слишком большой',
  [chatUploadErrorFileSizeToastSubHeading]: (size, fileName) =>
    ` ${fileName} превышает лимит ${size}МБ`,
  [chatSendErrorTextSizeToastSubHeading]: size =>
    `Вы можете отправить текстовое сообщение размером до ${size}КБ`,
  [chatUploadErrorFileTypeToastSubHeading]: type => `${type} не поддерживается`,
  [chatUploadStatusInProgress]: `Загрузка... Пожалуйста, подождите`,
  [chatUploadStatusFailure]: `Что-то пошло не так при отправке. Попробуйте ещё раз`,
  [chatUploadMaxLimit]: `Можно загрузить до 5 файлов за раз`,
  [chatMessageDeleteConfirmBtnText]: `Удалить`,
  [chatPublicMessageDeletePopupText]: `Вы уверены, что хотите удалить это сообщение для всех в публичном чате? `,
  [chatPrivateMessageDeletePopupText]: (name: string) =>
    `Вы уверены, что хотите удалить это сообщение для ${name}`,
  [chatErrorNoToken]:
    'Чат сейчас недоступен. Попробуйте снова подключиться к сессии или обратитесь в поддержку',
  [chatErrorNotConnected]:
    'Не удалось подключиться к чату. Попробуйте снова подключиться к сессии или обратитесь в поддержку',

  [peoplePanelTurnoffAllCameraBtnText]: 'Выключить все камеры',
  [peoplePanelMuteAllMicBtnText]: 'Выключить всем микрофон',

  [peoplePanelHostSectionHeaderText]: 'ОРГАНИЗАТОР',
  [peoplePanelAudienceSectionHeaderText]: 'АУДИТОРИЯ',
  [peoplePanelInThisMeetingLabel]: 'НА ЭТОЙ ВСТРЕЧЕ',
  [peoplePanelNoHostJoinedContent]: 'Организатор ещё не присоединился.',
  [peoplePanelNoAudienceJoinedContent]: 'Аудитория ещё не присоединилась.',
  [peoplePanelNoUsersJoinedContent]: 'Пользователи ещё не присоединились.',

  [moreBtnViewWhiteboard]: 'Просмотреть доску',
  [moreBtnRemoveFromLarge]: 'Убрать из большого',
  [moreBtnViewInLarge]: 'Просмотреть в большом',
  [moreBtnPinToTop]: 'Закрепить вверху',
  [moreBtnRemoveFromTop]: 'Открепить сверху',
  [moreBtnMessagePrivately]: 'Написать приватно',
  [moreBtnAudio]: audio => (audio ? 'Выключить звук' : 'Запросить звук'),
  [moreBtnVideo]: video => (video ? 'Выключить видео' : 'Запросить видео'),
  [moreBtnAddAsPresenter]: 'Добавить как докладчика',
  [moreBtnRemoveAsPresenter]: 'Удалить как докладчика',
  [moreBtnRemoveFromRoom]: 'Удалить из комнаты',
  [moreBtnChangeName]: 'Изменить имя',
  [moreBtnStopScreenShare]: 'Остановить демонстрацию',
  [moreBtnRemoveScreenShare]: 'Удалить демонстрацию',
  [moreBtnSpotlight]: spotlightOn =>
    spotlightOn ? 'Убрать из центра внимания' : 'Поместить в центр внимания',
  [videoRoomInTheSpotlightText]: 'В центре внимания',

  [muteAllConfirmationPopoverContent]: (type: I18nMuteType) =>
    `Выключить ${type === I18nMuteType.audio ? 'микрофон' : 'видео'} для всех на звонке?`,
  [requestConfirmationPopoverContent]: ({
    name,
    type,
  }: I18nRequestConfirmation) =>
    `Запросить у ${name} включить ${
      type === I18nMuteType.audio ? 'микрофон' : 'камеру'
    }?`,
  [muteConfirmationPopoverContent]: ({name, type}: I18nMuteConfirmation) =>
    `Выключить ${type === I18nMuteType.audio ? 'микрофон' : 'видео'} для ${name} для всех на звонке? Только ${name} сможет включить обратно.`,

  [muteAllConfirmationPopoverPrimaryBtnText]: 'Выключить всем',
  [muteConfirmationPopoverPrimaryBtnText]: 'Выключить',
  [requestConfirmationPopoverPrimaryBtnText]: 'Запросить',

  [peoplePanelWantToJoinText]: 'ХОТЯТ ПРИСОЕДИНИТЬСЯ',
  [peoplePanelWaitingText]: 'ОЖИДАНИЕ',

  [livestreamingAttendeeRaiseHandInfoHeading]: 'Поднимите руку',
  [livestreamingAttendeeRaiseHandInfoSubHeading]:
    "Дайте всем знать, что хотите что-то сказать",
  [livestreamingAttendeeChatWithOthersInfoHeading]: 'Общайтесь с другими',
  [livestreamingAttendeeChatWithOthersInfoSubHeading]:
    'Отправляйте сообщения другим участникам или организаторам',
  [livestreamingAttendeePresentYourScreenInfoHeading]: 'Демонстрируйте экран',
  [livestreamingAttendeePresentYourScreenInfoSubHeading]:
    'Станьте докладчиком после одобрения организатора',
  [livestreamingAttendeeJoinWithActivitiesInfoHeading]: 'Участвуйте в активностях',
  [livestreamingAttendeeJoinWithActivitiesInfoSubHeading]:
    'Работайте вместе со всеми на доске',

  [livestreamingAttendeeInviteOthersText]: 'ПРИГЛАСИТЬ ДРУГИХ УЧАСТНИКОВ',
  [livestreamingAttendeeWaitingForHostToJoinText]:
    'Ожидание присоединения организатора',
  [livestreamingAttendeeWhatYouCanDoText]: "Вот что вы можете сделать здесь:",

  [publicChatToastHeading]: (name: string) =>
    `${name} прокомментировал(а) в публичном чате`,

  [publicChatImgToastHeading]: (name: string) =>
    `${name} отправил(а) изображение в публичный чат`,

  [publicChatFileToastHeading]: (name: string) =>
    `${name} отправил(а) файл в публичный чат`,

  [multiplePublicChatToastHeading]: 'Новые сообщения в публичном чате',
  [multiplePublicChatToastSubHeading]: ({count, from}) =>
    `У вас ${count} новых сообщений от ${from}`,

  [privateChatToastHeading]: 'Вы получили приватное сообщение',

  [multiplePrivateChatToastHeading]: ({count}) =>
    `Вы получили ${count} приватных сообщений`,

  [multiplePublicAndPrivateChatToastHeading]:
    'Новые сообщения в публичном и приватном чате',
  [multiplePublicAndPrivateChatToastSubHeading]: ({
    publicChatCount,
    privateChatCount,
    from,
  }) =>
    `У вас ${publicChatCount} новых сообщений от ${from} и ${privateChatCount} в приватном чате`,

  [livestreamToastApprovalBtnText]: 'РАЗРЕШИТЬ БЫТЬ ДОКЛАДЧИКОМ',
  [livestreamToastDenyBtnText]: 'ОТКЛОНИТЬ',

  [livestreamRaiseHandRequestToastHeading]: 'Вы подняли руку.',
  [livestreamRaiseHandRequestToastSubHeading]:
    'Ожидание одобрения организатором',

  [livestreamRaiseHandRequestReceivedToastHeading]: name =>
    `${name} поднял(а) руку, чтобы стать докладчиком`,
  [livestreamRaiseHandRequestReceivedToastSubHeading]:
    'После одобрения они смогут говорить, делиться видео и выступать во время этого звонка.',

  [livestreamRaiseHandRequestAcceptedToastHeading]:
    'Организатор одобрил ваш запрос.',
  [livestreamRaiseHandRequestAcceptedToastSubHeading]:
    'Теперь вы докладчик',

  [livestreamRaiseHandRequestRejectedToastHeading]:
    'Ваш запрос был отклонен организатором',

  [livestreamRaiseHandRequestRecallToastHeading]: name =>
    `${name} опустил(а) руку`,

  [livestreamRaiseHandRequestRecallLocalToastHeading]:
    'Вы опустили руку.',

  [livestreamRaiseHandApprovedRequestRecallToastHeading]:
    'Организатор отозвал права на трансляцию.',

  [livestreamPromoteAsCoHostToastHeading]: 'Организатор повысил вас до докладчика',
  [livestreamRequestAlreadyProcessed]: 'Запрос уже обработан.',

  [videoRoomUserFallbackText]: 'Пользователь',
  [peoplePanelMeText]: 'Я',
  [peoplePanelPresenterText]: 'Докладчик',

  [userRemovedFromTheRoomToastHeading]: (name, time) =>
    `Система удалит ${name} из этого звонка через ${time} сек.`,

  [vbPanelImageUploadErrorToastHeading]: 'Ошибка загрузки',
  [vbPanelImageUploadErrorToastSubHeading]:
    'Выбранное изображение уже загружено',
  [vbPanelImageTypeErrorToastHeading]: 'Ошибка загрузки',
  [vbPanelImageTypeErrorToastSubHeading]: 'Пожалуйста, выберите файл JPG или PNG',
  [vbPanelImageSizeLimitErrorToastHeading]: 'Ошибка загрузки',
  [vbPanelImageSizeLimitErrorToastSubHeading]:
    'Размер файла должен быть менее 1МБ.',

  [whiteboardToolboxWidthLabel]: 'Ширина',
  [whiteboardToolboxPxLabel]: ' пкс',
  [whiteboardInitializingText]: 'Доска инициализируется',

  [whiteboardWidgetViewOnlyText]: 'Только просмотр',
  [whiteboardWidgetZoomInText]: 'Увеличить',
  [whiteboardWidgetZoomOutText]: 'Уменьшить',
  [whiteboardWidgetFitToScreenText]: 'Подогнать под экран',
  [whiteboardWidgetRedoText]: 'Повторить',
  [whiteboardWidgetUndoText]: 'Отменить',
  [whiteboardWidgetExportToCloudText]: 'Экспортировать в облако',

  [whiteboardExportErrorToastHeading]: 'Не удалось экспортировать доску',
  [whiteboardExportInfoToastHeading]:
    'Пожалуйста, подождите несколько секунд, чтобы получить ссылку на скриншот доски',
  [whiteboardExportSuccessToastHeading]:
    'Доска экспортирована как изображение. Ссылка скопирована в буфер обмена.',

  [whiteboardToolboxSelectText]: 'Выбрать',
  [whiteboardToolboxTextFormatting]: 'Текст',
  [whiteboardToolboxMoveText]: 'Переместить',
  [whiteboardToolboxLaserText]: 'Лазер',
  [whiteboardToolboxEraseText]: 'Ластик',
  [whiteboardToolboxUploadText]: 'Загрузить документ или изображение',

  [whiteboardToolboxClearAllText]: 'Очистить всё',

  [whiteboardFileUploadErrorToastHeading]: type =>
    `Ошибка загрузки ${type}, попробуйте ещё раз.`,
  [whiteboardFileUploadInfoToastHeading]: type =>
    `Загрузка ${type} займет несколько секунд, чтобы появиться на доске`,
  [whiteboardFileUploadTypeErrorToastHeading]: () => 'Неподдерживаемый файл',
  [whiteboardFileUploadTypeErrorToastSubHeading]: () =>
    'Пожалуйста, выберите файл формата pdf, doc, docx, ppt, pptx, png, jpg, jpeg',

  [sttSpokenLanguageToastHeading]: action => `Язык речи ${action === 'Set' ? 'установлен' : 'изменен'}`,
  [sttSpokenLanguageToastSubHeading]: ({
    action,
    newLanguage,
    oldLanguage,
    username,
  }) =>
    action === 'Set'
      ? `${username} установил(а) язык речи "${newLanguage}"`
      : `${username} изменил(а) язык речи с "${oldLanguage}" на ${newLanguage}`,

  [deviceDetectionToastHeading]: name => `Обнаружено новое устройство ${name}`,
  [deviceDetectionToastSubHeading]: ({name, label}) =>
    `Обнаружено новое устройство ${name} с названием ${label}. Хотите переключиться?`,
  [deviceDetectionPrimaryBtnText]: 'ПЕРЕКЛЮЧИТЬ УСТРОЙСТВО',
  [deviceDetectionSecondaryBtnText]: 'ИГНОРИРОВАТЬ',
  [deviceDetectionCheckboxText]: 'Запомнить мой выбор',

  [hostMutedUserToastHeading]: type =>
    type === 'audio'
      ? 'Организатор выключил ваш микрофон.'
      : 'Организатор выключил ваше видео.',
  [hostRequestedUserToastHeading]: type =>
    type === 'audio'
      ? 'Организатор попросил вас включить микрофон'
      : 'Организатор попросил вас включить видео.',
  [hostRequestedUserToastPrimaryBtnText]: () => 'ВКЛЮЧИТЬ',
  [hostRequestedUserToastSecondaryBtnText]: () => 'ПОЗЖЕ',
  [hostRemovedUserToastHeading]: 'Организатор удалил вас из комнаты.',

  [waitingRoomApprovalRequiredToastHeading]: 'Требуется одобрение',
  [waitingRoomApprovalRequiredToastSubHeading]: username =>
    `${username} ожидает одобрения для присоединения к звонку`,
  [waitingRoomApprovalRequiredPrimaryBtnText]: 'Принять',
  [waitingRoomApprovalRequiredSecondaryBtnText]: 'Отклонить',

  [waitingRoomApprovalRejectionToastHeading]: 'Требуется одобрение',
  [waitingRoomApprovalRejectionToastSubHeading]:
    'Организатор отклонил разрешение на вход на встречу',
  [waitingRoomHostNotJoined]: 'Ожидание организатора, пожалуйста подождите...',
  [waitingRoomUsersInCall]: `Встреча началась, присоединяйтесь!`,

  [videoRoomRecordingText]: 'ЗАП',

  [videoRoomGoToActiveSpeakerText]: 'Перейти к активному говорящему',
  [videoRoomScreenshareText]: username => `Демонстрация экрана ${username}`,
  [videoRoomStartingCallText]: 'Начало звонка. Секунду.',

  [videoRoomScreenshareOverlayText]: 'Вы демонстрируете экран',
  [videoRoomScreenshareStopSharingBtnText]: 'Остановить демонстрацию',

  [chatPanelUserOfflineText]: 'Пользователь не в сети',
  [chatPanelUnreadMessageText]: 'Непрочитанное сообщение',

  [livestreamingMicrophoneTooltipText]: isHandRaised =>
    isHandRaised
      ? 'Ожидание одобрения организатором'
      : 'Поднимите руку, чтобы включить микрофон',
  [livestreamingCameraTooltipText]: isHandRaised =>
    isHandRaised
      ? 'Ожидание одобрения организатором'
      : 'Поднимите руку, чтобы включить видео',
  [livestreamingShareTooltipText]: isHandRaised =>
    isHandRaised
      ? 'Ожидание одобрения организатором'
      : 'Поднимите руку, чтобы начать презентацию',

  [peoplePanelWaitingRoomRequestApprovalBtnTxt]: 'Принять',
  [peoplePanelWaitingRoomRequestDenyBtnTxt]: 'Отклонить',
  [videoRoomScreenShareErrorToastHeading]: 'Не удалось начать демонстрацию экрана',
  [videoRoomScreenShareErrorToastSubHeading]: 'Доступ запрещен',

  [videoRoomRecordingToastHeading]: active =>
    active ? 'Запись начата' : 'Запись остановлена',
  [videoRoomRecordingToastSubHeading]: name =>
    `Эта комната записывается пользователем ${name}`,
  [videoRoomRecordingStartErrorToastHeading]: 'Не удалось начать запись',
  [videoRoomRecordingStopErrorToastHeading]: 'Не удалось остановить запись',
  [videoRoomRecordingErrorToastSubHeading]: 'Произошла внутренняя ошибка.',

  [peoplePanelUserNotFoundLabel]: 'Пользователь не найден',
  [peoplePanelStreamingRequestSectionHeader]: 'ЗАПРОСЫ НА ТРАНСЛЯЦИЮ',
  [peoplePanelLivestreamingApprovalBtnText]: 'Принять',
  [peoplePanelLivestreamingDenyBtnText]: 'Отклонить',

  [sttTranscriptPanelSearchText]: 'Поиск',
  [sttTranscriptPanelNoSearchResultsFoundText]: 'Результаты поиска не найдены',
  [sttTranscriptPanelViewLatestText]: 'Показать последние',

  [videoRoomPeopleCountTooltipHostText]: 'Организатор',
  [videoRoomPeopleCountTooltipAttendeeText]: ({eventMode}) =>
    eventMode ? 'Аудитория' : 'Участник',
  [whiteboardNativeInfoToastHeading]:
    'Используйте два пальца для перемещения по доске',
  [userBannedText]: 'Вам запрещено присоединяться к звонку',
};
