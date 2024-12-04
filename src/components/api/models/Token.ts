/* tslint:disable */
/* eslint-disable */
/**
 * PoenApi
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Token
 */
export interface Token {
    /**
     * 
     * @type {number}
     * @memberof Token
     */
    id?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    symbol?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    contract?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Token
     */
    decimalPlace?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Token
     */
    lastKnownPrice?: number | null;
}

/**
 * Check if a given object implements the Token interface.
 */
export function instanceOfToken(value: object): value is Token {
    return true;
}

export function TokenFromJSON(json: any): Token {
    return TokenFromJSONTyped(json, false);
}

export function TokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): Token {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'symbol': json['symbol'] == null ? undefined : json['symbol'],
        'contract': json['contract'] == null ? undefined : json['contract'],
        'decimalPlace': json['decimalPlace'] == null ? undefined : json['decimalPlace'],
        'lastKnownPrice': json['lastKnownPrice'] == null ? undefined : json['lastKnownPrice'],
    };
}

export function TokenToJSON(value?: Token | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'symbol': value['symbol'],
        'contract': value['contract'],
        'decimalPlace': value['decimalPlace'],
        'lastKnownPrice': value['lastKnownPrice'],
    };
}
