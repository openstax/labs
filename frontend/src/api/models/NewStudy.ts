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
 * @interface NewStudy
 */
export interface NewStudy {
    /**
     * The study name that participants see.
     * @type {string}
     * @memberof NewStudy
     */
    titleForParticipants?: string;
    /**
     * The study name that only researchers see.
     * @type {string}
     * @memberof NewStudy
     */
    titleForResearchers: string;
    /**
     * A short study description.
     * @type {string}
     * @memberof NewStudy
     */
    shortDescription?: string;
    /**
     * A long study description.
     * @type {string}
     * @memberof NewStudy
     */
    longDescription?: string;
    /**
     * An internal study description for researchers.
     * @type {string}
     * @memberof NewStudy
     */
    internalDescription: string;
    /**
     * Freeform id of image that should be displayed on study card
     * @type {string}
     * @memberof NewStudy
     */
    imageId?: string;
    /**
     * Description of how the study benefits participants
     * @type {string}
     * @memberof NewStudy
     */
    benefits?: string;
    /**
     * Is the study hidden from participants
     * @type {boolean}
     * @memberof NewStudy
     */
    isHidden?: boolean;
    /**
     * When the study was launched; null means not launched
     * @type {Date}
     * @memberof NewStudy
     */
    readonly firstLaunchedAt?: Date;
    /**
     * When the study opens for participation; null means not open.
     * @type {Date}
     * @memberof NewStudy
     */
    opensAt?: Date | null;
    /**
     * When the study closes for participation; null means does not close.
     * @type {Date}
     * @memberof NewStudy
     */
    closesAt?: Date | null;
    /**
     * Desired sample size set by researcher
     * @type {number}
     * @memberof NewStudy
     */
    targetSampleSize?: number | null;
    /**
     * Status of the study
     * @type {string}
     * @memberof NewStudy
     */
    readonly status?: NewStudyStatusEnum;
    /**
     * The study's researchers.
     * @type {Array<Researcher>}
     * @memberof NewStudy
     */
    researchers?: Array<Researcher>;
    /**
     * Mandatory studies must be completed by all users
     * @type {boolean}
     * @memberof NewStudy
     */
    isMandatory?: boolean;
    /**
     * How many times the study has been viewed
     * @type {number}
     * @memberof NewStudy
     */
    viewCount?: number;
    /**
     * When the study becomes public for sharing with other researchers. Null means not shareable.
     * @type {Date}
     * @memberof NewStudy
     */
    publicOn?: Date | null;
    /**
     * Number of times this study has been completed
     * @type {number}
     * @memberof NewStudy
     */
    readonly completedCount?: number;
    /**
     * The category (type of) study
     * @type {string}
     * @memberof NewStudy
     */
    category?: string;
    /**
     * The study topic
     * @type {string}
     * @memberof NewStudy
     */
    topic?: string;
    /**
     * The study's subject
     * @type {string}
     * @memberof NewStudy
     */
    subject?: string;
    /**
     * The study's stages.
     * @type {Array<Stage>}
     * @memberof NewStudy
     */
    stages?: Array<Stage>;
    /**
     * How many times the study has been launched
     * @type {number}
     * @memberof NewStudy
     */
    readonly launchedCount?: number;
    /**
     * The URL to which stages should return after completing
     * @type {string}
     * @memberof NewStudy
     */
    readonly returnUrl?: string;
}


/**
 * @export
 */
export const NewStudyStatusEnum = {
    Active: 'active',
    Paused: 'paused',
    Scheduled: 'scheduled',
    Draft: 'draft',
    WaitingPeriod: 'waiting_period',
    ReadyForLaunch: 'ready_for_launch',
    Completed: 'completed'
} as const;
export type NewStudyStatusEnum = typeof NewStudyStatusEnum[keyof typeof NewStudyStatusEnum];


/**
 * Check if a given object implements the NewStudy interface.
 */
export function instanceOfNewStudy(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "titleForResearchers" in value;
    isInstance = isInstance && "internalDescription" in value;

    return isInstance;
}

export function NewStudyFromJSON(json: any): NewStudy {
    return NewStudyFromJSONTyped(json, false);
}

export function NewStudyFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewStudy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'titleForParticipants': !exists(json, 'title_for_participants') ? undefined : json['title_for_participants'],
        'titleForResearchers': json['title_for_researchers'],
        'shortDescription': !exists(json, 'short_description') ? undefined : json['short_description'],
        'longDescription': !exists(json, 'long_description') ? undefined : json['long_description'],
        'internalDescription': json['internal_description'],
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
        'publicOn': !exists(json, 'public_on') ? undefined : (json['public_on'] === null ? null : new Date(json['public_on'])),
        'completedCount': !exists(json, 'completed_count') ? undefined : json['completed_count'],
        'category': !exists(json, 'category') ? undefined : json['category'],
        'topic': !exists(json, 'topic') ? undefined : json['topic'],
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'stages': !exists(json, 'stages') ? undefined : ((json['stages'] as Array<any>).map(StageFromJSON)),
        'launchedCount': !exists(json, 'launched_count') ? undefined : json['launched_count'],
        'returnUrl': !exists(json, 'return_url') ? undefined : json['return_url'],
    };
}

export function NewStudyToJSON(value?: NewStudy | null): any {
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
        'opens_at': value.opensAt === undefined ? undefined : (value.opensAt === null ? null : value.opensAt.toISOString()),
        'closes_at': value.closesAt === undefined ? undefined : (value.closesAt === null ? null : value.closesAt.toISOString()),
        'target_sample_size': value.targetSampleSize,
        'researchers': value.researchers === undefined ? undefined : ((value.researchers as Array<any>).map(ResearcherToJSON)),
        'is_mandatory': value.isMandatory,
        'view_count': value.viewCount,
        'public_on': value.publicOn === undefined ? undefined : (value.publicOn === null ? null : value.publicOn.toISOString()),
        'category': value.category,
        'topic': value.topic,
        'subject': value.subject,
        'stages': value.stages === undefined ? undefined : ((value.stages as Array<any>).map(StageToJSON)),
    };
}

