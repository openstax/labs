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
 * @interface Study
 */
export interface Study {
    /**
     * The study ID.
     * @type {number}
     * @memberof Study
     */
    readonly id: number;
    /**
     * The study name that participants see.
     * @type {string}
     * @memberof Study
     */
    titleForParticipants?: string;
    /**
     * The study name that only researchers see.
     * @type {string}
     * @memberof Study
     */
    titleForResearchers: string;
    /**
     * A short study description.
     * @type {string}
     * @memberof Study
     */
    shortDescription?: string;
    /**
     * A long study description.
     * @type {string}
     * @memberof Study
     */
    longDescription?: string;
    /**
     * An internal study description for researchers.
     * @type {string}
     * @memberof Study
     */
    internalDescription: string;
    /**
     * The tags of the study object, used for grouping and filtering.
     * @type {Array<string>}
     * @memberof Study
     */
    tags?: Array<string>;
    /**
     * Description of feedback displayed to the user upon study completion
     * @type {string}
     * @memberof Study
     */
    feedbackDescription?: string;
    /**
     * Freeform id of image that should be displayed on study card
     * @type {string}
     * @memberof Study
     */
    imageId?: string;
    /**
     * Description of how the study benefits participants
     * @type {string}
     * @memberof Study
     */
    benefits?: string;
    /**
     * Is the study hidden from participants
     * @type {boolean}
     * @memberof Study
     */
    isHidden?: boolean;
    /**
     * When the study opens for participation; null means not open.
     * @type {Date}
     * @memberof Study
     */
    opensAt?: Date | null;
    /**
     * When the study closes for participation; null means does not close.
     * @type {Date}
     * @memberof Study
     */
    closesAt?: Date | null;
    /**
     * When the study was launched; null means not launched
     * @type {Date}
     * @memberof Study
     */
    firstLaunchedAt?: Date;
    /**
     * The study's researchers.
     * @type {Array<Researcher>}
     * @memberof Study
     */
    researchers?: Array<Researcher>;
    /**
     * Mandatory studies must be completed by all users
     * @type {boolean}
     * @memberof Study
     */
    isMandatory?: boolean;
    /**
     * Status of the study
     * @type {string}
     * @memberof Study
     */
    status?: StudyStatusEnum;
    /**
     * How many times the study has been viewed
     * @type {number}
     * @memberof Study
     */
    viewCount?: number;
    /**
     * Number of times this study has been completed
     * @type {number}
     * @memberof Study
     */
    readonly completedCount?: number;
    /**
     * The type of study
     * @type {string}
     * @memberof Study
     */
    studyType?: string;
    /**
     * The study topic
     * @type {string}
     * @memberof Study
     */
    studyTopic?: string;
    /**
     * The study's subject
     * @type {string}
     * @memberof Study
     */
    studySubject?: string;
    /**
     * The study's stages.
     * @type {Array<Stage>}
     * @memberof Study
     */
    stages?: Array<Stage>;
    /**
     * Desired sample size set by researcher
     * @type {number}
     * @memberof Study
     */
    targetSampleSize?: number;
    /**
     * How many times the study has been launched
     * @type {number}
     * @memberof Study
     */
    readonly launchedCount?: number;
    /**
     * The URL to which stages should return after completing
     * @type {string}
     * @memberof Study
     */
    readonly returnUrl?: string;
}


/**
 * @export
 */
export const StudyStatusEnum = {
    Active: 'active',
    Paused: 'paused',
    Scheduled: 'scheduled',
    Draft: 'draft',
    Completed: 'completed'
} as const;
export type StudyStatusEnum = typeof StudyStatusEnum[keyof typeof StudyStatusEnum];


/**
 * Check if a given object implements the Study interface.
 */
export function instanceOfStudy(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "titleForResearchers" in value;
    isInstance = isInstance && "internalDescription" in value;

    return isInstance;
}

export function StudyFromJSON(json: any): Study {
    return StudyFromJSONTyped(json, false);
}

export function StudyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Study {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'titleForParticipants': !exists(json, 'title_for_participants') ? undefined : json['title_for_participants'],
        'titleForResearchers': json['title_for_researchers'],
        'shortDescription': !exists(json, 'short_description') ? undefined : json['short_description'],
        'longDescription': !exists(json, 'long_description') ? undefined : json['long_description'],
        'internalDescription': json['internal_description'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'feedbackDescription': !exists(json, 'feedback_description') ? undefined : json['feedback_description'],
        'imageId': !exists(json, 'image_id') ? undefined : json['image_id'],
        'benefits': !exists(json, 'benefits') ? undefined : json['benefits'],
        'isHidden': !exists(json, 'is_hidden') ? undefined : json['is_hidden'],
        'opensAt': !exists(json, 'opens_at') ? undefined : (json['opens_at'] === null ? null : new Date(json['opens_at'])),
        'closesAt': !exists(json, 'closes_at') ? undefined : (json['closes_at'] === null ? null : new Date(json['closes_at'])),
        'firstLaunchedAt': !exists(json, 'first_launched_at') ? undefined : (new Date(json['first_launched_at'])),
        'researchers': !exists(json, 'researchers') ? undefined : ((json['researchers'] as Array<any>).map(ResearcherFromJSON)),
        'isMandatory': !exists(json, 'is_mandatory') ? undefined : json['is_mandatory'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'viewCount': !exists(json, 'view_count') ? undefined : json['view_count'],
        'completedCount': !exists(json, 'completed_count') ? undefined : json['completed_count'],
        'studyType': !exists(json, 'study_type') ? undefined : json['study_type'],
        'studyTopic': !exists(json, 'study_topic') ? undefined : json['study_topic'],
        'studySubject': !exists(json, 'study_subject') ? undefined : json['study_subject'],
        'stages': !exists(json, 'stages') ? undefined : ((json['stages'] as Array<any>).map(StageFromJSON)),
        'targetSampleSize': !exists(json, 'target_sample_size') ? undefined : json['target_sample_size'],
        'launchedCount': !exists(json, 'launched_count') ? undefined : json['launched_count'],
        'returnUrl': !exists(json, 'return_url') ? undefined : json['return_url'],
    };
}

export function StudyToJSON(value?: Study | null): any {
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
        'tags': value.tags,
        'feedback_description': value.feedbackDescription,
        'image_id': value.imageId,
        'benefits': value.benefits,
        'is_hidden': value.isHidden,
        'opens_at': value.opensAt === undefined ? undefined : (value.opensAt === null ? null : value.opensAt.toISOString()),
        'closes_at': value.closesAt === undefined ? undefined : (value.closesAt === null ? null : value.closesAt.toISOString()),
        'first_launched_at': value.firstLaunchedAt === undefined ? undefined : (value.firstLaunchedAt.toISOString()),
        'researchers': value.researchers === undefined ? undefined : ((value.researchers as Array<any>).map(ResearcherToJSON)),
        'is_mandatory': value.isMandatory,
        'status': value.status,
        'view_count': value.viewCount,
        'study_type': value.studyType,
        'study_topic': value.studyTopic,
        'study_subject': value.studySubject,
        'stages': value.stages === undefined ? undefined : ((value.stages as Array<any>).map(StageToJSON)),
        'target_sample_size': value.targetSampleSize,
    };
}

