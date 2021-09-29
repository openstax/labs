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
 * @interface PublicResearcher
 */
export interface PublicResearcher {
    /**
     * The researcher's name.
     * @type {string}
     * @memberof PublicResearcher
     */
    name?: string;
    /**
     * The researcher's institution.
     * @type {string}
     * @memberof PublicResearcher
     */
    institution?: string;
    /**
     * The researcher's bio.
     * @type {string}
     * @memberof PublicResearcher
     */
    bio?: string;
}

export function PublicResearcherFromJSON(json: any): PublicResearcher {
    return PublicResearcherFromJSONTyped(json, false);
}

export function PublicResearcherFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicResearcher {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'institution': !exists(json, 'institution') ? undefined : json['institution'],
        'bio': !exists(json, 'bio') ? undefined : json['bio'],
    };
}

export function PublicResearcherToJSON(value?: PublicResearcher | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'institution': value.institution,
        'bio': value.bio,
    };
}


