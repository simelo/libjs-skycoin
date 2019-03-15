/**
 * Skycoin REST API.
 * Skycoin is a next-generation cryptocurrency.
 *
 * OpenAPI spec version: 0.25.1
 * Contact: skycoin.doe@example.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as models from './models';

export interface InlineObject {
    "changeAddress"?: string;
    "hoursSelection"?: models.ApiV1WalletTransactionHoursSelection;
    "ignoreUnconfirmed"?: boolean;
    "to"?: Array<models.ApiV1WalletTransactionTo>;
    "wallet"?: models.ApiV1WalletTransactionWallet;
}

