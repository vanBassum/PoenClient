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
import type { Token } from './Token';
import {
    TokenFromJSON,
    TokenFromJSONTyped,
    TokenToJSON,
} from './Token';

/**
 * 
 * @export
 * @interface Quote
 */
export interface Quote {
    /**
     * 
     * @type {number}
     * @memberof Quote
     */
    id?: number | null;
    /**
     * 
     * @type {Token}
     * @memberof Quote
     */
    fromToken?: Token;
    /**
     * 
     * @type {Token}
     * @memberof Quote
     */
    toToken?: Token;
    /**
     * 
     * @type {number}
     * @memberof Quote
     */
    price?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof Quote
     */
    lastUpdated?: Date | null;
}

/**
 * Check if a given object implements the Quote interface.
 */
export function instanceOfQuote(value: object): value is Quote {
    return true;
}

export function QuoteFromJSON(json: any): Quote {
    return QuoteFromJSONTyped(json, false);
}

export function QuoteFromJSONTyped(json: any, ignoreDiscriminator: boolean): Quote {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'fromToken': json['fromToken'] == null ? undefined : TokenFromJSON(json['fromToken']),
        'toToken': json['toToken'] == null ? undefined : TokenFromJSON(json['toToken']),
        'price': json['price'] == null ? undefined : json['price'],
        'lastUpdated': json['lastUpdated'] == null ? undefined : (new Date(json['lastUpdated'])),
    };
}

export function QuoteToJSON(value?: Quote | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'fromToken': TokenToJSON(value['fromToken']),
        'toToken': TokenToJSON(value['toToken']),
        'price': value['price'],
        'lastUpdated': value['lastUpdated'] == null ? undefined : ((value['lastUpdated'] as any).toISOString()),
    };
}
