// tslint:disable
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

import { exists } from '../runtime';
import {
    InlineResponse2003UnconfirmedVerifyTransaction,
    InlineResponse2003UnconfirmedVerifyTransactionFromJSON,
    InlineResponse2003UnconfirmedVerifyTransactionToJSON,
} from './';

/**
 * 
 * @export
 * @interface InlineResponse2003
 */
export interface InlineResponse2003 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2003
     */
    lastReceived?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2003
     */
    lastSent?: number;
    /**
     * 
     * @type {boolean}
     * @memberof InlineResponse2003
     */
    outgoing?: boolean;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2003
     */
    mirror?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2003
     */
    address?: string;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2003
     */
    listenPort?: number;
    /**
     * 
     * @type {boolean}
     * @memberof InlineResponse2003
     */
    isTrustedPeer?: boolean;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2003
     */
    connectedAt?: number;
    /**
     * 
     * @type {InlineResponse2003UnconfirmedVerifyTransaction}
     * @memberof InlineResponse2003
     */
    unconfirmedVerifyTransaction?: InlineResponse2003UnconfirmedVerifyTransaction;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2003
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2003
     */
    state?: InlineResponse2003.StateEnum;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2003
     */
    userAgent?: string;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2003
     */
    height?: number;
}

export function InlineResponse2003FromJSON(json: any): InlineResponse2003 {
    return {
        'lastReceived': !exists(json, 'last_received') ? undefined : json['last_received'],
        'lastSent': !exists(json, 'last_sent') ? undefined : json['last_sent'],
        'outgoing': !exists(json, 'outgoing') ? undefined : json['outgoing'],
        'mirror': !exists(json, 'mirror') ? undefined : json['mirror'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'listenPort': !exists(json, 'listen_port') ? undefined : json['listen_port'],
        'isTrustedPeer': !exists(json, 'is_trusted_peer') ? undefined : json['is_trusted_peer'],
        'connectedAt': !exists(json, 'connected_at') ? undefined : json['connected_at'],
        'unconfirmedVerifyTransaction': !exists(json, 'unconfirmed_verify_transaction') ? undefined : InlineResponse2003UnconfirmedVerifyTransactionFromJSON(json['unconfirmed_verify_transaction']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'userAgent': !exists(json, 'user_agent') ? undefined : json['user_agent'],
        'height': !exists(json, 'height') ? undefined : json['height'],
    };
}

export function InlineResponse2003ToJSON(value?: InlineResponse2003): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'last_received': value.lastReceived,
        'last_sent': value.lastSent,
        'outgoing': value.outgoing,
        'mirror': value.mirror,
        'address': value.address,
        'listen_port': value.listenPort,
        'is_trusted_peer': value.isTrustedPeer,
        'connected_at': value.connectedAt,
        'unconfirmed_verify_transaction': InlineResponse2003UnconfirmedVerifyTransactionToJSON(value.unconfirmedVerifyTransaction),
        'id': value.id,
        'state': value.state,
        'user_agent': value.userAgent,
        'height': value.height,
    };
}

/**
 * @export
 * @namespace InlineResponse2003
 */
export namespace InlineResponse2003 {
    /**
     * @export
     * @enum {string}
     */
    export enum StateEnum {
        Pending = 'pending',
        Connected = 'connected',
        Introduced = 'introduced'
    }
}
