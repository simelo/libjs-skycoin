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


export class WalletTransactionRequestHoursSelection {
    'mode'?: string;
    'shareFactor'?: string;
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "mode",
            "baseName": "mode",
            "type": "string"
        },
        {
            "name": "shareFactor",
            "baseName": "share_factor",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WalletTransactionRequestHoursSelection.attributeTypeMap;
    }
}

