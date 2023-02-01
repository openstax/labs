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
 * @interface Researcher
 */
export interface Researcher {
    /**
     * The researcher's ID.
     * @type {number}
     * @memberof Researcher
     */
    id?: number;
    /**
     * The researcher's user ID.
     * @type {string}
     * @memberof Researcher
     */
    userId?: string;
    /**
     * The researcher's name.
     * @type {string}
     * @memberof Researcher
     */
    name?: string;
    /**
     * The researcher's institution.
     * @type {string}
     * @memberof Researcher
     */
    institution?: string;
    /**
     * The researcher's bio.
     * @type {string}
     * @memberof Researcher
     */
    bio?: string;
    /**
     * The researcher's lab page.
     * @type {string}
     * @memberof Researcher
     */
    labPage?: string;
    /**
     * The researcher's interest (1).
     * @type {string}
     * @memberof Researcher
     */
    researchInterest1?: string;
    /**
     * The researcher's interest (2).
     * @type {string}
     * @memberof Researcher
     */
    researchInterest2?: string;
    /**
     * The researcher's interest (3).
     * @type {string}
     * @memberof Researcher
     */
    researchInterest3?: string;
    /**
     * The researcher's invite code.
     * @type {boolean}
     * @memberof Researcher
     */
    inviteCode?: boolean;
}

/**
 * Check if a given object implements the Researcher interface.
 */
export function instanceOfResearcher(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResearcherFromJSON(json: any): Researcher {
    return ResearcherFromJSONTyped(json, false);
}

export function ResearcherFromJSONTyped(json: any, ignoreDiscriminator: boolean): Researcher {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'userId': !exists(json, 'user_id') ? undefined : json['user_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'institution': !exists(json, 'institution') ? undefined : json['institution'],
        'bio': !exists(json, 'bio') ? undefined : json['bio'],
        'labPage': !exists(json, 'lab_page') ? undefined : json['lab_page'],
        'researchInterest1': !exists(json, 'research_interest_1') ? undefined : json['research_interest_1'],
        'researchInterest2': !exists(json, 'research_interest_2') ? undefined : json['research_interest_2'],
        'researchInterest3': !exists(json, 'research_interest_3') ? undefined : json['research_interest_3'],
        'inviteCode': !exists(json, 'invite_code') ? undefined : json['invite_code'],
    };
}

export function ResearcherToJSON(value?: Researcher | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'user_id': value.userId,
        'name': value.name,
        'institution': value.institution,
        'bio': value.bio,
        'lab_page': value.labPage,
        'research_interest_1': value.researchInterest1,
        'research_interest_2': value.researchInterest2,
        'research_interest_3': value.researchInterest3,
        'invite_code': value.inviteCode,
    };
}

