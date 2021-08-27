/* tslint:disable */
/* eslint-disable */
/**
 * OpenStax Labs API
 * The labs API for OpenStax.  Requests to this API should include `application/json` in the `Accept` header.  The desired API version is specified in the request URL, e.g. `[domain]/api/v0/researcher/studies`. While the API does support a default version, that version will change over time and therefore should not be used in production code! 
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Researcher,
    ResearcherFromJSON,
    ResearcherFromJSONTyped,
    ResearcherToJSON,
    Stage,
    StageFromJSON,
    StageFromJSONTyped,
    StageToJSON,
} from './';

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
    titleForParticipants: string;
    /**
     * An study name that only researchers see.
     * @type {string}
     * @memberof Study
     */
    titleForResearchers?: string;
    /**
     * A short study description.
     * @type {string}
     * @memberof Study
     */
    shortDescription: string;
    /**
     * A long study description.
     * @type {string}
     * @memberof Study
     */
    longDescription?: string;
    /**
     * The category of the study object, used for grouping.
     * @type {string}
     * @memberof Study
     */
    category: StudyCategoryEnum;
    /**
     * The expected study duration in minutes.
     * @type {number}
     * @memberof Study
     */
    durationMinutes?: number;
    /**
     * When the study opens for participation; null means not open.
     * @type {Date}
     * @memberof Study
     */
    opensAt?: Date;
    /**
     * When the study closes for participation; null means does not close.
     * @type {Date}
     * @memberof Study
     */
    closesAt?: Date;
    /**
     * Mandatory studies must be completed by all users
     * @type {boolean}
     * @memberof Study
     */
    isMandatory: boolean;
    /**
     * How many points will be awarded for participation in the study
     * @type {number}
     * @memberof Study
     */
    participationPoints?: number;
    /**
     * The URL to which stages should return after completing
     * @type {string}
     * @memberof Study
     */
    readonly returnUrl?: string;
    /**
     * The study's researchers.
     * @type {Array<Researcher>}
     * @memberof Study
     */
    researchers?: Array<Researcher>;
    /**
     * The study's stages.
     * @type {Array<Stage>}
     * @memberof Study
     */
    stages?: Array<Stage>;
}

/**
* @export
* @enum {string}
*/
export enum StudyCategoryEnum {
    ResearchStudy = 'research_study',
    CognitiveTask = 'cognitive_task',
    Survey = 'survey'
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
        'titleForParticipants': json['title_for_participants'],
        'titleForResearchers': !exists(json, 'title_for_researchers') ? undefined : json['title_for_researchers'],
        'shortDescription': json['short_description'],
        'longDescription': !exists(json, 'long_description') ? undefined : json['long_description'],
        'category': json['category'],
        'durationMinutes': !exists(json, 'duration_minutes') ? undefined : json['duration_minutes'],
        'opensAt': !exists(json, 'opens_at') ? undefined : (new Date(json['opens_at'])),
        'closesAt': !exists(json, 'closes_at') ? undefined : (new Date(json['closes_at'])),
        'isMandatory': json['is_mandatory'],
        'participationPoints': !exists(json, 'participation_points') ? undefined : json['participation_points'],
        'returnUrl': !exists(json, 'return_url') ? undefined : json['return_url'],
        'researchers': !exists(json, 'researchers') ? undefined : ((json['researchers'] as Array<any>).map(ResearcherFromJSON)),
        'stages': !exists(json, 'stages') ? undefined : ((json['stages'] as Array<any>).map(StageFromJSON)),
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
        'category': value.category,
        'duration_minutes': value.durationMinutes,
        'opens_at': value.opensAt === undefined ? undefined : (value.opensAt.toISOString()),
        'closes_at': value.closesAt === undefined ? undefined : (value.closesAt.toISOString()),
        'is_mandatory': value.isMandatory,
        'participation_points': value.participationPoints,
        'researchers': value.researchers === undefined ? undefined : ((value.researchers as Array<any>).map(ResearcherToJSON)),
        'stages': value.stages === undefined ? undefined : ((value.stages as Array<any>).map(StageToJSON)),
    };
}


