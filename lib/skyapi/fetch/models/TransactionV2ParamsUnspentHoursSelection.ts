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
 * @interface TransactionV2ParamsUnspentHoursSelection
 */
export interface TransactionV2ParamsUnspentHoursSelection {
    /**
     * 
     * @type {string}
     * @memberof TransactionV2ParamsUnspentHoursSelection
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionV2ParamsUnspentHoursSelection
     */
    mode?: string;
    /**
     * 
     * @type {string}
     * @memberof TransactionV2ParamsUnspentHoursSelection
     */
    shareFactor?: string;
}

export function TransactionV2ParamsUnspentHoursSelectionFromJSON(json: any): TransactionV2ParamsUnspentHoursSelection {
    return {
        'type': !exists(json, 'type') ? undefined : json['type'],
        'mode': !exists(json, 'mode') ? undefined : json['mode'],
        'shareFactor': !exists(json, 'share_factor') ? undefined : json['share_factor'],
    };
}

export function TransactionV2ParamsUnspentHoursSelectionToJSON(value?: TransactionV2ParamsUnspentHoursSelection): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'type': value.type,
        'mode': value.mode,
        'share_factor': value.shareFactor,
    };
}


