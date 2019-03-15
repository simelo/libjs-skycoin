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

export interface InlineResponse2003 {
    "lastReceived"?: number;
    "lastSent"?: number;
    "outgoing"?: boolean;
    "mirror"?: number;
    "address"?: string;
    "listenPort"?: number;
    "isTrustedPeer"?: boolean;
    "connectedAt"?: number;
    "unconfirmedVerifyTransaction"?: models.InlineResponse2003UnconfirmedVerifyTransaction;
    "id"?: number;
    "state"?: InlineResponse2003.StateEnum;
    "userAgent"?: string;
    "height"?: number;
}

export namespace InlineResponse2003 {
    export enum StateEnum {
        Pending = <any> 'pending',
        Connected = <any> 'connected',
        Introduced = <any> 'introduced'
    }
}