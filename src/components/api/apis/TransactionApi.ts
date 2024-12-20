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
  Transaction,
  TransactionPaginatedResult,
} from '../models/index';
import {
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
    TransactionFromJSON,
    TransactionToJSON,
    TransactionPaginatedResultFromJSON,
    TransactionPaginatedResultToJSON,
} from '../models/index';

export interface TransactionCreateRequest {
    transaction?: Transaction;
}

export interface TransactionDeleteRequest {
    id: number;
}

export interface TransactionGetAllRequest {
    filter?: string;
    sort?: string;
    pageNo?: number;
    pageSize?: number;
}

export interface TransactionGetByIdRequest {
    id: number;
}

export interface TransactionUpdateRequest {
    id: number;
    transaction?: Transaction;
}

/**
 * 
 */
export class TransactionApi extends runtime.BaseAPI {

    /**
     */
    async transactionCreateRaw(requestParameters: TransactionCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transaction>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/Transaction/Create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TransactionToJSON(requestParameters['transaction']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionFromJSON(jsonValue));
    }

    /**
     */
    async transactionCreate(requestParameters: TransactionCreateRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transaction> {
        const response = await this.transactionCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async transactionDeleteRaw(requestParameters: TransactionDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling transactionDelete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Transaction/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async transactionDelete(requestParameters: TransactionDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.transactionDeleteRaw(requestParameters, initOverrides);
    }

    /**
     */
    async transactionGetAllRaw(requestParameters: TransactionGetAllRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TransactionPaginatedResult>> {
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
            path: `/Transaction/GetAll`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionPaginatedResultFromJSON(jsonValue));
    }

    /**
     */
    async transactionGetAll(requestParameters: TransactionGetAllRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TransactionPaginatedResult> {
        const response = await this.transactionGetAllRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async transactionGetByIdRaw(requestParameters: TransactionGetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transaction>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling transactionGetById().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/Transaction/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionFromJSON(jsonValue));
    }

    /**
     */
    async transactionGetById(requestParameters: TransactionGetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transaction> {
        const response = await this.transactionGetByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async transactionUpdateRaw(requestParameters: TransactionUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Transaction>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling transactionUpdate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/Transaction/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: TransactionToJSON(requestParameters['transaction']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionFromJSON(jsonValue));
    }

    /**
     */
    async transactionUpdate(requestParameters: TransactionUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Transaction> {
        const response = await this.transactionUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
