/* tslint:disable */
/* eslint-disable */
/**
 * PoenApi
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
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
 * @interface CoinInfoDto
 */
export interface CoinInfoDto {
    /**
     * 
     * @type {number}
     * @memberof CoinInfoDto
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof CoinInfoDto
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CoinInfoDto
     */
    symbol?: string | null;
}

/**
 * Check if a given object implements the CoinInfoDto interface.
 */
export function instanceOfCoinInfoDto(value: object): value is CoinInfoDto {
    return true;
}

export function CoinInfoDtoFromJSON(json: any): CoinInfoDto {
    return CoinInfoDtoFromJSONTyped(json, false);
}

export function CoinInfoDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoinInfoDto {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'symbol': json['symbol'] == null ? undefined : json['symbol'],
    };
}

export function CoinInfoDtoToJSON(value?: CoinInfoDto | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'symbol': value['symbol'],
    };
}

