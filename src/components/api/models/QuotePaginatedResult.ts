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
import type { Quote } from './Quote';
import {
    QuoteFromJSON,
    QuoteFromJSONTyped,
    QuoteToJSON,
} from './Quote';

/**
 * 
 * @export
 * @interface QuotePaginatedResult
 */
export interface QuotePaginatedResult {
    /**
     * 
     * @type {number}
     * @memberof QuotePaginatedResult
     */
    pageNo?: number;
    /**
     * 
     * @type {number}
     * @memberof QuotePaginatedResult
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof QuotePaginatedResult
     */
    totalPages?: number;
    /**
     * 
     * @type {number}
     * @memberof QuotePaginatedResult
     */
    totalRecords?: number;
    /**
     * 
     * @type {Array<Quote>}
     * @memberof QuotePaginatedResult
     */
    data?: Array<Quote> | null;
}

/**
 * Check if a given object implements the QuotePaginatedResult interface.
 */
export function instanceOfQuotePaginatedResult(value: object): value is QuotePaginatedResult {
    return true;
}

export function QuotePaginatedResultFromJSON(json: any): QuotePaginatedResult {
    return QuotePaginatedResultFromJSONTyped(json, false);
}

export function QuotePaginatedResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuotePaginatedResult {
    if (json == null) {
        return json;
    }
    return {
        
        'pageNo': json['pageNo'] == null ? undefined : json['pageNo'],
        'pageSize': json['pageSize'] == null ? undefined : json['pageSize'],
        'totalPages': json['totalPages'] == null ? undefined : json['totalPages'],
        'totalRecords': json['totalRecords'] == null ? undefined : json['totalRecords'],
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(QuoteFromJSON)),
    };
}

export function QuotePaginatedResultToJSON(value?: QuotePaginatedResult | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'pageNo': value['pageNo'],
        'pageSize': value['pageSize'],
        'totalPages': value['totalPages'],
        'totalRecords': value['totalRecords'],
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(QuoteToJSON)),
    };
}
