/* tslint:disable */
/* eslint-disable */
/**
 * Pinecone Inference API
 * Pinecone is a vector database that makes it easy to search and retrieve billions of high-dimensional vectors.
 *
 * The version of the OpenAPI document: 2024-10
 * Contact: support@pinecone.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface RerankRequest
 */
export interface RerankRequest {
    /**
     * The [model](https://docs.pinecone.io/guides/inference/understanding-inference#reranking-models) to use for reranking.
     * @type {string}
     * @memberof RerankRequest
     */
    model: string;
    /**
     * The query to rerank documents against.
     * @type {string}
     * @memberof RerankRequest
     */
    query: string;
    /**
     * The number of results to return sorted by relevance. Defaults to the number of inputs.
     * @type {number}
     * @memberof RerankRequest
     */
    topN?: number;
    /**
     * Whether to return the documents in the response.
     * @type {boolean}
     * @memberof RerankRequest
     */
    returnDocuments?: boolean;
    /**
     * The fields to rank the documents by. If not provided, the default is `"text"`.
     * @type {Array<string>}
     * @memberof RerankRequest
     */
    rankFields?: Array<string>;
    /**
     * The documents to rerank.
     * @type {Array<{ [key: string]: string; }>}
     * @memberof RerankRequest
     */
    documents: Array<{ [key: string]: string; }>;
    /**
     * Additional model-specific parameters for the reranker.
     * @type {{ [key: string]: string; }}
     * @memberof RerankRequest
     */
    parameters?: { [key: string]: string; };
}

/**
 * Check if a given object implements the RerankRequest interface.
 */
export function instanceOfRerankRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "model" in value;
    isInstance = isInstance && "query" in value;
    isInstance = isInstance && "documents" in value;

    return isInstance;
}

export function RerankRequestFromJSON(json: any): RerankRequest {
    return RerankRequestFromJSONTyped(json, false);
}

export function RerankRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RerankRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'model': json['model'],
        'query': json['query'],
        'topN': !exists(json, 'top_n') ? undefined : json['top_n'],
        'returnDocuments': !exists(json, 'return_documents') ? undefined : json['return_documents'],
        'rankFields': !exists(json, 'rank_fields') ? undefined : json['rank_fields'],
        'documents': json['documents'],
        'parameters': !exists(json, 'parameters') ? undefined : json['parameters'],
    };
}

export function RerankRequestToJSON(value?: RerankRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'model': value.model,
        'query': value.query,
        'top_n': value.topN,
        'return_documents': value.returnDocuments,
        'rank_fields': value.rankFields,
        'documents': value.documents,
        'parameters': value.parameters,
    };
}

