/* tslint:disable */
/* eslint-disable */
/**
 * Pinecone Control Plane API
 * Pinecone is a vector database that makes it easy to search and retrieve billions of high-dimensional vectors.
 *
 * The version of the OpenAPI document: 2024-07
 * Contact: support@pinecone.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CollectionModel } from './CollectionModel';
import {
  CollectionModelFromJSON,
  CollectionModelFromJSONTyped,
  CollectionModelToJSON,
} from './CollectionModel';

/**
 * The list of collections that exist in the project.
 * @export
 * @interface CollectionList
 */
export interface CollectionList {
  /**
   *
   * @type {Array<CollectionModel>}
   * @memberof CollectionList
   */
  collections?: Array<CollectionModel>;
}

/**
 * Check if a given object implements the CollectionList interface.
 */
export function instanceOfCollectionList(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function CollectionListFromJSON(json: any): CollectionList {
  return CollectionListFromJSONTyped(json, false);
}

export function CollectionListFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CollectionList {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    collections: !exists(json, 'collections')
      ? undefined
      : (json['collections'] as Array<any>).map(CollectionModelFromJSON),
  };
}

export function CollectionListToJSON(value?: CollectionList | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    collections:
      value.collections === undefined
        ? undefined
        : (value.collections as Array<any>).map(CollectionModelToJSON),
  };
}