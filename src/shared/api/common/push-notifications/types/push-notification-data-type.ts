import { PushNotificationTypeEnum } from './push-notification-type-enum';

type PushNotificationGradeUpdatedDataType = {
	type: PushNotificationTypeEnum.GRADE_UPDATED;
	subjectId: string;
};

type PushNotificationEventCreatedDataType = {
	type: PushNotificationTypeEnum.EVENT_CREATED;
	subjectId: string;
};

type PushNotificationEventUpdatedDataType = {
	type: PushNotificationTypeEnum.EVENT_UPDATED;
	subjectId: string;
};

export type PushNotificationDataType =
	| PushNotificationGradeUpdatedDataType
	| PushNotificationEventCreatedDataType
	| PushNotificationEventUpdatedDataType;
