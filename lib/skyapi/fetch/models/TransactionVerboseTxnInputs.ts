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
/**
 * 
 * @export
 * @interface TransactionVerboseTxnInputs
 */
export interface TransactionVerboseTxnInputs {
    /**
     * 
     * @type {string}
     * @memberof TransactionVerboseTxnInputs
     */
    uxid?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionVerboseTxnInputs
     */
    owner?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionVerboseTxnInputs
     */
    coins?: string;
    /**
     * 
     * @type {number}
     * @memberof TransactionVerboseTxnInputs
     */
    hours?: number;
    /**
     * 
     * @type {number}
     * @memberof TransactionVerboseTxnInputs
     */
    calculatedHours?: number;
}

export function TransactionVerboseTxnInputsFromJSON(json: any): TransactionVerboseTxnInputs {
    return {
        'uxid': !exists(json, 'uxid') ? undefined : json['uxid'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'coins': !exists(json, 'coins') ? undefined : json['coins'],
        'hours': !exists(json, 'hours') ? undefined : json['hours'],
        'calculatedHours': !exists(json, 'calculated_hours') ? undefined : json['calculated_hours'],
    };
}

export function TransactionVerboseTxnInputsToJSON(value?: TransactionVerboseTxnInputs): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'uxid': value.uxid,
        'owner': value.owner,
        'coins': value.coins,
        'hours': value.hours,
        'calculated_hours': value.calculatedHours,
    };
}


