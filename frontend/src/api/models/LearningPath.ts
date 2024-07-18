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
import type { Badge } from './Badge';
import {
    BadgeFromJSON,
    BadgeFromJSONTyped,
    BadgeToJSON,
} from './Badge';
import type { Study } from './Study';
import {
    StudyFromJSON,
    StudyFromJSONTyped,
    StudyToJSON,
} from './Study';

/**
 * 
 * @export
 * @interface LearningPath
 */
export interface LearningPath {
    /**
     * The learning path ID
     * @type {number}
     * @memberof LearningPath
     */
    id?: number;
    /**
     * The learning path rendering order
     * @type {number}
     * @memberof LearningPath
     */
    order?: number;
    /**
     * Learning path label
     * @type {string}
     * @memberof LearningPath
     */
    label: string;
    /**
     * Learning path description
     * @type {string}
     * @memberof LearningPath
     */
    description: string;
    /**
     * Learning path color
     * @type {string}
     * @memberof LearningPath
     */
    color?: string;
    /**
     * Level 1 metadata
     * @type {Array<string>}
     * @memberof LearningPath
     */
    level1Metadata?: Array<string>;
    /**
     * Level 2 metadata
     * @type {Array<string>}
     * @memberof LearningPath
     */
    level2Metadata?: Array<string>;
    /**
     * Open badge factory badge_id value
     * @type {string}
     * @memberof LearningPath
     */
    badgeId?: string;
    /**
     * 
     * @type {Badge}
     * @memberof LearningPath
     */
    badge?: Badge;
    /**
     * Has the user completed this learning path?
     * @type {boolean}
     * @memberof LearningPath
     */
    completed?: boolean;
    /**
     * Studies with this learning path
     * @type {Array<Study>}
     * @memberof LearningPath
     */
    studies?: Array<Study>;
}

/**
 * Check if a given object implements the LearningPath interface.
 */
export function instanceOfLearningPath(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "label" in value;
    isInstance = isInstance && "description" in value;

    return isInstance;
}

export function LearningPathFromJSON(json: any): LearningPath {
    return LearningPathFromJSONTyped(json, false);
}

export function LearningPathFromJSONTyped(json: any, ignoreDiscriminator: boolean): LearningPath {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'label': json['label'],
        'description': json['description'],
        'color': !exists(json, 'color') ? undefined : json['color'],
        'level1Metadata': !exists(json, 'level_1_metadata') ? undefined : json['level_1_metadata'],
        'level2Metadata': !exists(json, 'level_2_metadata') ? undefined : json['level_2_metadata'],
        'badgeId': !exists(json, 'badge_id') ? undefined : json['badge_id'],
        'badge': !exists(json, 'badge') ? undefined : BadgeFromJSON(json['badge']),
        'completed': !exists(json, 'completed') ? undefined : json['completed'],
        'studies': !exists(json, 'studies') ? undefined : ((json['studies'] as Array<any>).map(StudyFromJSON)),
    };
}

export function LearningPathToJSON(value?: LearningPath | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'order': value.order,
        'label': value.label,
        'description': value.description,
        'color': value.color,
        'level_1_metadata': value.level1Metadata,
        'level_2_metadata': value.level2Metadata,
        'badge_id': value.badgeId,
        'badge': BadgeToJSON(value.badge),
        'completed': value.completed,
        'studies': value.studies === undefined ? undefined : ((value.studies as Array<any>).map(StudyToJSON)),
    };
}

