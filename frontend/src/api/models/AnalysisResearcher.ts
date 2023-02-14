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
/**
 * 
 * @export
 * @interface AnalysisResearcher
 */
export interface AnalysisResearcher {
    /**
     * UUID of researcher
     * @type {string}
     * @memberof AnalysisResearcher
     */
    userId?: string;
    /**
     * First name of researcher
     * @type {string}
     * @memberof AnalysisResearcher
     */
    firstName?: string;
    /**
     * Last name of researcher
     * @type {string}
     * @memberof AnalysisResearcher
     */
    lastName?: string;
}

/**
 * Check if a given object implements the AnalysisResearcher interface.
 */
export function instanceOfAnalysisResearcher(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AnalysisResearcherFromJSON(json: any): AnalysisResearcher {
    return AnalysisResearcherFromJSONTyped(json, false);
}

export function AnalysisResearcherFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalysisResearcher {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'userId': !exists(json, 'user_id') ? undefined : json['user_id'],
        'firstName': !exists(json, 'first_name') ? undefined : json['first_name'],
        'lastName': !exists(json, 'last_name') ? undefined : json['last_name'],
    };
}

export function AnalysisResearcherToJSON(value?: AnalysisResearcher | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user_id': value.userId,
        'first_name': value.firstName,
        'last_name': value.lastName,
    };
}

