/* tslint:disable */
/* eslint-disable */
/**
 * OpenStax Kinetic API
 * The Kinetic API for OpenStax.  Requests to this API should include `application/json` in the `Accept` header.  The desired API version is specified in the request URL, e.g. `[domain]/api/v1/researcher/studies`. While the API does support a default version, that version will change over time and therefore should not be used in production code! 
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Researcher } from './Researcher';
import {
    ResearcherFromJSON,
    ResearcherFromJSONTyped,
    ResearcherToJSON,
} from './Researcher';
import type { Stage } from './Stage';
import {
    StageFromJSON,
    StageFromJSONTyped,
    StageToJSON,
} from './Stage';

/**
 * 
 * @export
 * @interface StudyUpdate
 */
export interface StudyUpdate {
    /**
     * The study ID.
     * @type {number}
     * @memberof StudyUpdate
     */
    readonly id?: number;
    /**
     * The study name that participants see.
     * @type {string}
     * @memberof StudyUpdate
     */
    titleForParticipants?: string;
    /**
     * The study name that only researchers see.
     * @type {string}
     * @memberof StudyUpdate
     */
    titleForResearchers?: string;
    /**
     * A short study description.
     * @type {string}
     * @memberof StudyUpdate
     */
    shortDescription?: string;
    /**
     * A long study description.
     * @type {string}
     * @memberof StudyUpdate
     */
    longDescription?: string;
    /**
     * An internal study description for researchers.
     * @type {string}
     * @memberof StudyUpdate
     */
    internalDescription?: string;
    /**
     * Freeform id of image that should be displayed on study card
     * @type {string}
     * @memberof StudyUpdate
     */
    imageId?: string;
    /**
     * Description of how the study benefits participants
     * @type {string}
     * @memberof StudyUpdate
     */
    benefits?: string;
    /**
     * Is the study hidden from participants
     * @type {boolean}
     * @memberof StudyUpdate
     */
    isHidden?: boolean;
    /**
     * When the study was launched; null means not launched
     * @type {Date}
     * @memberof StudyUpdate
     */
    firstLaunchedAt?: Date;
    /**
     * When the study opens for participation; null means not open.
     * @type {Date}
     * @memberof StudyUpdate
     */
    opensAt?: Date | null;
    /**
     * When the study closes for participation; null means does not close.
     * @type {Date}
     * @memberof StudyUpdate
     */
    closesAt?: Date | null;
    /**
     * Desired sample size set by researcher
     * @type {number}
     * @memberof StudyUpdate
     */
    targetSampleSize?: number | null;
    /**
     * Status of the study
     * @type {string}
     * @memberof StudyUpdate
     */
    readonly status?: StudyUpdateStatusEnum;
    /**
     * The study's researchers.
     * @type {Array<Researcher>}
     * @memberof StudyUpdate
     */
    researchers?: Array<Researcher>;
    /**
     * Mandatory studies must be completed by all users
     * @type {boolean}
     * @memberof StudyUpdate
     */
    isMandatory?: boolean;
    /**
     * How many times the study has been viewed
     * @type {number}
     * @memberof StudyUpdate
     */
    viewCount?: number;
    /**
     * How many months until the study is public
     * @type {number}
     * @memberof StudyUpdate
     */
    shareableAfterMonths?: number | null;
    /**
     * Number of times this study has been completed
     * @type {number}
     * @memberof StudyUpdate
     */
    readonly completedCount?: number;
    /**
     * The type of study
     * @type {string}
     * @memberof StudyUpdate
     */
    studyType?: string;
    /**
     * The study topic
     * @type {string}
     * @memberof StudyUpdate
     */
    studyTopic?: string;
    /**
     * The study's subject
     * @type {string}
     * @memberof StudyUpdate
     */
    studySubject?: string;
    /**
     * The study's stages.
     * @type {Array<Stage>}
     * @memberof StudyUpdate
     */
    stages?: Array<Stage>;
    /**
     * How many times the study has been launched
     * @type {number}
     * @memberof StudyUpdate
     */
    readonly launchedCount?: number;
    /**
     * The URL to which stages should return after completing
     * @type {string}
     * @memberof StudyUpdate
     */
    readonly returnUrl?: string;
}


/**
 * @export
 */
export const StudyUpdateStatusEnum = {
    Active: 'active',
    Paused: 'paused',
    Scheduled: 'scheduled',
    Draft: 'draft',
    WaitingPeriod: 'waiting_period',
    ReadyForLaunch: 'ready_for_launch',
    Completed: 'completed'
} as const;
export type StudyUpdateStatusEnum = typeof StudyUpdateStatusEnum[keyof typeof StudyUpdateStatusEnum];


/**
 * Check if a given object implements the StudyUpdate interface.
 */
export function instanceOfStudyUpdate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StudyUpdateFromJSON(json: any): StudyUpdate {
    return StudyUpdateFromJSONTyped(json, false);
}

export function StudyUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): StudyUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'titleForParticipants': !exists(json, 'title_for_participants') ? undefined : json['title_for_participants'],
        'titleForResearchers': !exists(json, 'title_for_researchers') ? undefined : json['title_for_researchers'],
        'shortDescription': !exists(json, 'short_description') ? undefined : json['short_description'],
        'longDescription': !exists(json, 'long_description') ? undefined : json['long_description'],
        'internalDescription': !exists(json, 'internal_description') ? undefined : json['internal_description'],
        'imageId': !exists(json, 'image_id') ? undefined : json['image_id'],
        'benefits': !exists(json, 'benefits') ? undefined : json['benefits'],
        'isHidden': !exists(json, 'is_hidden') ? undefined : json['is_hidden'],
        'firstLaunchedAt': !exists(json, 'first_launched_at') ? undefined : (new Date(json['first_launched_at'])),
        'opensAt': !exists(json, 'opens_at') ? undefined : (json['opens_at'] === null ? null : new Date(json['opens_at'])),
        'closesAt': !exists(json, 'closes_at') ? undefined : (json['closes_at'] === null ? null : new Date(json['closes_at'])),
        'targetSampleSize': !exists(json, 'target_sample_size') ? undefined : json['target_sample_size'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'researchers': !exists(json, 'researchers') ? undefined : ((json['researchers'] as Array<any>).map(ResearcherFromJSON)),
        'isMandatory': !exists(json, 'is_mandatory') ? undefined : json['is_mandatory'],
        'viewCount': !exists(json, 'view_count') ? undefined : json['view_count'],
        'shareableAfterMonths': !exists(json, 'shareable_after_months') ? undefined : json['shareable_after_months'],
        'completedCount': !exists(json, 'completed_count') ? undefined : json['completed_count'],
        'studyType': !exists(json, 'study_type') ? undefined : json['study_type'],
        'studyTopic': !exists(json, 'study_topic') ? undefined : json['study_topic'],
        'studySubject': !exists(json, 'study_subject') ? undefined : json['study_subject'],
        'stages': !exists(json, 'stages') ? undefined : ((json['stages'] as Array<any>).map(StageFromJSON)),
        'launchedCount': !exists(json, 'launched_count') ? undefined : json['launched_count'],
        'returnUrl': !exists(json, 'return_url') ? undefined : json['return_url'],
    };
}

export function StudyUpdateToJSON(value?: StudyUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title_for_participants': value.titleForParticipants,
        'title_for_researchers': value.titleForResearchers,
        'short_description': value.shortDescription,
        'long_description': value.longDescription,
        'internal_description': value.internalDescription,
        'image_id': value.imageId,
        'benefits': value.benefits,
        'is_hidden': value.isHidden,
        'first_launched_at': value.firstLaunchedAt === undefined ? undefined : (value.firstLaunchedAt.toISOString()),
        'opens_at': value.opensAt === undefined ? undefined : (value.opensAt === null ? null : value.opensAt.toISOString()),
        'closes_at': value.closesAt === undefined ? undefined : (value.closesAt === null ? null : value.closesAt.toISOString()),
        'target_sample_size': value.targetSampleSize,
        'researchers': value.researchers === undefined ? undefined : ((value.researchers as Array<any>).map(ResearcherToJSON)),
        'is_mandatory': value.isMandatory,
        'view_count': value.viewCount,
        'shareable_after_months': value.shareableAfterMonths,
        'study_type': value.studyType,
        'study_topic': value.studyTopic,
        'study_subject': value.studySubject,
        'stages': value.stages === undefined ? undefined : ((value.stages as Array<any>).map(StageToJSON)),
    };
}

