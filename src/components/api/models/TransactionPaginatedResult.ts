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
import type { Transaction } from './Transaction';
import {
    TransactionFromJSON,
    TransactionFromJSONTyped,
    TransactionToJSON,
} from './Transaction';

/**
 * 
 * @export
 * @interface TransactionPaginatedResult
 */
export interface TransactionPaginatedResult {
    /**
     * 
     * @type {number}
     * @memberof TransactionPaginatedResult
     */
    pageNo?: number;
    /**
     * 
     * @type {number}
     * @memberof TransactionPaginatedResult
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof TransactionPaginatedResult
     */
    totalPages?: number;
    /**
     * 
     * @type {number}
     * @memberof TransactionPaginatedResult
     */
    totalRecords?: number;
    /**
     * 
     * @type {Array<Transaction>}
     * @memberof TransactionPaginatedResult
     */
    data?: Array<Transaction> | null;
}

/**
 * Check if a given object implements the TransactionPaginatedResult interface.
 */
export function instanceOfTransactionPaginatedResult(value: object): value is TransactionPaginatedResult {
    return true;
}

export function TransactionPaginatedResultFromJSON(json: any): TransactionPaginatedResult {
    return TransactionPaginatedResultFromJSONTyped(json, false);
}

export function TransactionPaginatedResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionPaginatedResult {
    if (json == null) {
        return json;
    }
    return {
        
        'pageNo': json['pageNo'] == null ? undefined : json['pageNo'],
        'pageSize': json['pageSize'] == null ? undefined : json['pageSize'],
        'totalPages': json['totalPages'] == null ? undefined : json['totalPages'],
        'totalRecords': json['totalRecords'] == null ? undefined : json['totalRecords'],
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(TransactionFromJSON)),
    };
}

export function TransactionPaginatedResultToJSON(value?: TransactionPaginatedResult | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'pageNo': value['pageNo'],
        'pageSize': value['pageSize'],
        'totalPages': value['totalPages'],
        'totalRecords': value['totalRecords'],
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(TransactionToJSON)),
    };
}

