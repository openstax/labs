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
import type { ParticipantStudyStage } from './ParticipantStudyStage';
import {
    ParticipantStudyStageFromJSON,
    ParticipantStudyStageFromJSONTyped,
    ParticipantStudyStageToJSON,
} from './ParticipantStudyStage';
import type { PublicResearcher } from './PublicResearcher';
import {
    PublicResearcherFromJSON,
    PublicResearcherFromJSONTyped,
    PublicResearcherToJSON,
} from './PublicResearcher';

/**
 * 
 * @export
 * @interface ParticipantStudy
 */
export interface ParticipantStudy {
    /**
     * The study ID.
     * @type {number}
     * @memberof ParticipantStudy
     */
    id: number;
    /**
     * The study title that participants see.
     * @type {string}
     * @memberof ParticipantStudy
     */
    title: string;
    /**
     * The shorty study description that participants see.
     * @type {string}
     * @memberof ParticipantStudy
     */
    shortDescription: string;
    /**
     * The long study description that participants see.
     * @type {string}
     * @memberof ParticipantStudy
     */
    longDescription?: string;
    /**
     * The tags of the study object, used for grouping and filtering.
     * @type {Array<string>}
     * @memberof ParticipantStudy
     */
    tags: Array<string>;
    /**
     * Description of feedback displayed to the user upon study completion
     * @type {string}
     * @memberof ParticipantStudy
     */
    feedbackDescription?: string;
    /**
     * Freeform id of image that should be displayed on study card
     * @type {string}
     * @memberof ParticipantStudy
     */
    imageId?: string;
    /**
     * Description of how the study benefits participants
     * @type {string}
     * @memberof ParticipantStudy
     */
    benefits?: string;
    /**
     * How popular the study is on a fractional scale of 0.0 to 1.0
     * @type {number}
     * @memberof ParticipantStudy
     */
    popularityRating?: number;
    /**
     * Should this study be feautured more prominently?
     * @type {boolean}
     * @memberof ParticipantStudy
     */
    readonly isFeatured?: boolean;
    /**
     * When the study was launched; null means not launched
     * @type {Date}
     * @memberof ParticipantStudy
     */
    firstLaunchedAt?: Date;
    /**
     * When the study was completed; null means not completed.
     * @type {Date}
     * @memberof ParticipantStudy
     */
    completedAt?: Date;
    /**
     * When the study ends; null means open indefinitely.
     * @type {Date}
     * @memberof ParticipantStudy
     */
    closesAt?: Date;
    /**
     * When the study was opted-out of; null means not opted out.
     * @type {Date}
     * @memberof ParticipantStudy
     */
    optedOutAt?: Date;
    /**
     * The study's researchers.
     * @type {Array<PublicResearcher>}
     * @memberof ParticipantStudy
     */
    researchers?: Array<PublicResearcher>;
    /**
     * The study's total point value.
     * @type {number}
     * @memberof ParticipantStudy
     */
    totalPoints: number;
    /**
     * The study's total duration in minutes.
     * @type {number}
     * @memberof ParticipantStudy
     */
    totalDuration: number;
    /**
     * The study's stages.
     * @type {Array<ParticipantStudyStage>}
     * @memberof ParticipantStudy
     */
    stages?: Array<ParticipantStudyStage>;
    /**
     * Mandatory studies must be completed by all users
     * @type {boolean}
     * @memberof ParticipantStudy
     */
    isMandatory?: boolean;
    /**
     * Status of the study
     * @type {string}
     * @memberof ParticipantStudy
     */
    status?: ParticipantStudyStatusEnum;
    /**
     * How many times the study has been viewed
     * @type {number}
     * @memberof ParticipantStudy
     */
    viewCount?: number;
}


/**
 * @export
 */
export const ParticipantStudyStatusEnum = {
    Active: 'active',
    Paused: 'paused',
    Scheduled: 'scheduled',
    Draft: 'draft',
    Completed: 'completed'
} as const;
export type ParticipantStudyStatusEnum = typeof ParticipantStudyStatusEnum[keyof typeof ParticipantStudyStatusEnum];


/**
 * Check if a given object implements the ParticipantStudy interface.
 */
export function instanceOfParticipantStudy(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "shortDescription" in value;
    isInstance = isInstance && "tags" in value;
    isInstance = isInstance && "totalPoints" in value;
    isInstance = isInstance && "totalDuration" in value;

    return isInstance;
}

export function ParticipantStudyFromJSON(json: any): ParticipantStudy {
    return ParticipantStudyFromJSONTyped(json, false);
}

export function ParticipantStudyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParticipantStudy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'title': json['title'],
        'shortDescription': json['short_description'],
        'longDescription': !exists(json, 'long_description') ? undefined : json['long_description'],
        'tags': json['tags'],
        'feedbackDescription': !exists(json, 'feedback_description') ? undefined : json['feedback_description'],
        'imageId': !exists(json, 'image_id') ? undefined : json['image_id'],
        'benefits': !exists(json, 'benefits') ? undefined : json['benefits'],
        'popularityRating': !exists(json, 'popularity_rating') ? undefined : json['popularity_rating'],
        'isFeatured': !exists(json, 'is_featured') ? undefined : json['is_featured'],
        'firstLaunchedAt': !exists(json, 'first_launched_at') ? undefined : (new Date(json['first_launched_at'])),
        'completedAt': !exists(json, 'completed_at') ? undefined : (new Date(json['completed_at'])),
        'closesAt': !exists(json, 'closes_at') ? undefined : (new Date(json['closes_at'])),
        'optedOutAt': !exists(json, 'opted_out_at') ? undefined : (new Date(json['opted_out_at'])),
        'researchers': !exists(json, 'researchers') ? undefined : ((json['researchers'] as Array<any>).map(PublicResearcherFromJSON)),
        'totalPoints': json['total_points'],
        'totalDuration': json['total_duration'],
        'stages': !exists(json, 'stages') ? undefined : ((json['stages'] as Array<any>).map(ParticipantStudyStageFromJSON)),
        'isMandatory': !exists(json, 'is_mandatory') ? undefined : json['is_mandatory'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'viewCount': !exists(json, 'view_count') ? undefined : json['view_count'],
    };
}

export function ParticipantStudyToJSON(value?: ParticipantStudy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'short_description': value.shortDescription,
        'long_description': value.longDescription,
        'tags': value.tags,
        'feedback_description': value.feedbackDescription,
        'image_id': value.imageId,
        'benefits': value.benefits,
        'popularity_rating': value.popularityRating,
        'first_launched_at': value.firstLaunchedAt === undefined ? undefined : (value.firstLaunchedAt.toISOString()),
        'completed_at': value.completedAt === undefined ? undefined : (value.completedAt.toISOString()),
        'closes_at': value.closesAt === undefined ? undefined : (value.closesAt.toISOString()),
        'opted_out_at': value.optedOutAt === undefined ? undefined : (value.optedOutAt.toISOString()),
        'researchers': value.researchers === undefined ? undefined : ((value.researchers as Array<any>).map(PublicResearcherToJSON)),
        'total_points': value.totalPoints,
        'total_duration': value.totalDuration,
        'stages': value.stages === undefined ? undefined : ((value.stages as Array<any>).map(ParticipantStudyStageToJSON)),
        'is_mandatory': value.isMandatory,
        'status': value.status,
        'view_count': value.viewCount,
    };
}

