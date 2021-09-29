/* tslint:disable */
/* eslint-disable */
/**
 * OpenStax Kenetic API
 * The kenetic API for OpenStax.  Requests to this API should include `application/json` in the `Accept` header.  The desired API version is specified in the request URL, e.g. `[domain]/api/v0/researcher/studies`. While the API does support a default version, that version will change over time and therefore should not be used in production code! 
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface StageUpdate
 */
export interface StageUpdate {
    /**
     * The configuration for a particular kind of stage, e.g. Qualtrics.  See `QualtricsStage`
     * @type {object}
     * @memberof StageUpdate
     */
    config: object;
}

export function StageUpdateFromJSON(json: any): StageUpdate {
    return StageUpdateFromJSONTyped(json, false);
}

export function StageUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): StageUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'config': json['config'],
    };
}

export function StageUpdateToJSON(value?: StageUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'config': value.config,
    };
}


