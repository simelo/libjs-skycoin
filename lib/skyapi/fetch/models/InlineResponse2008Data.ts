// tslint:disable
/**
 * Skycoin REST API.
 * Skycoin is a next-generation cryptocurrency.
 *
 * The version of the OpenAPI document: 0.27.0
 * Contact: contact@skycoin.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Transaction,
    TransactionFromJSON,
    TransactionToJSON,
} from './';

/**
 * 
 * @export
 * @interface InlineResponse2008Data
 */
export interface InlineResponse2008Data {
    /**
     * 
     * @type {Transaction}
     * @memberof InlineResponse2008Data
     */
    transaction?: Transaction;
}

export function InlineResponse2008DataFromJSON(json: any): InlineResponse2008Data {
    return {
        'transaction': !exists(json, 'transaction') ? undefined : TransactionFromJSON(json['transaction']),
    };
}

export function InlineResponse2008DataToJSON(value?: InlineResponse2008Data): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'transaction': TransactionToJSON(value.transaction),
    };
}


