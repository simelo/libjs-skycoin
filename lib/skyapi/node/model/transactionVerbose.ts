/**
 * Skycoin REST API.
 * Skycoin is a next-generation cryptocurrency.
 *
 * OpenAPI spec version: 0.26.0
 * Contact: contact@skycoin.net
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TransactionStatus } from './transactionStatus';
import { TransactionVerboseTxn } from './transactionVerboseTxn';

export class TransactionVerbose {
    'time'?: number;
    'status'?: TransactionStatus;
    'txn'?: TransactionVerboseTxn;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "time",
            "baseName": "time",
            "type": "number"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TransactionStatus"
        },
        {
            "name": "txn",
            "baseName": "txn",
            "type": "TransactionVerboseTxn"
        }    ];

    static getAttributeTypeMap() {
        return TransactionVerbose.attributeTypeMap;
    }
}
