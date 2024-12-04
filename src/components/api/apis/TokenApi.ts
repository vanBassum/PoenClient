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


import * as runtime from '../runtime';
import type {
  ProblemDetails,
  Token,
  TokenPaginatedResult,
} from '../models/index';
import {
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
    TokenFromJSON,
    TokenToJSON,
    TokenPaginatedResultFromJSON,
    TokenPaginatedResultToJSON,
} from '../models/index';

export interface TokenCreateRequest {
    token?: Token;
}

export interface TokenDeleteRequest {
    id: number;
}

export interface TokenGetAllRequest {
    filter?: string;
    sort?: string;
    pageNo?: number;
    pageSize?: number;
}

export interface TokenGetByIdRequest {
    id: number;
}

export interface TokenUpdateRequest {
    id: number;
    token?: Token;
}

/**
 * 
 */
export class TokenApi extends runtime.BaseAPI {

    /**
     */
    async tokenCreateRaw(requestParameters: TokenCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Token>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/Token/Create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TokenToJSON(requestParameters['token']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenFromJSON(jsonValue));
    }

    /**
     */
    async tokenCreate(requestParameters: TokenCreateRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Token> {
        const response = await this.tokenCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async tokenDeleteRaw(requestParameters: TokenDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling tokenDelete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Token/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async tokenDelete(requestParameters: TokenDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.tokenDeleteRaw(requestParameters, initOverrides);
    }

    /**
     */
    async tokenGetAllRaw(requestParameters: TokenGetAllRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TokenPaginatedResult>> {
        const queryParameters: any = {};

        if (requestParameters['filter'] != null) {
            queryParameters['filter'] = requestParameters['filter'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        if (requestParameters['pageNo'] != null) {
            queryParameters['pageNo'] = requestParameters['pageNo'];
        }

        if (requestParameters['pageSize'] != null) {
            queryParameters['pageSize'] = requestParameters['pageSize'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Token/GetAll`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenPaginatedResultFromJSON(jsonValue));
    }

    /**
     */
    async tokenGetAll(requestParameters: TokenGetAllRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TokenPaginatedResult> {
        const response = await this.tokenGetAllRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async tokenGetByIdRaw(requestParameters: TokenGetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Token>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling tokenGetById().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Token/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenFromJSON(jsonValue));
    }

    /**
     */
    async tokenGetById(requestParameters: TokenGetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Token> {
        const response = await this.tokenGetByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async tokenUpdateRaw(requestParameters: TokenUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Token>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling tokenUpdate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/Token/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: TokenToJSON(requestParameters['token']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenFromJSON(jsonValue));
    }

    /**
     */
    async tokenUpdate(requestParameters: TokenUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Token> {
        const response = await this.tokenUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
