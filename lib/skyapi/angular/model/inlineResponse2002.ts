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


export interface InlineResponse2002 { 
    /**
     * CurrentCoinHourSupply is coins hours in non distribution addresses.
     */
    currentCoinhourSupply?: string;
    /**
     * Coins distributed beyond the project.
     */
    currentSupply?: string;
    /**
     * Distribution addresses which are locked and do not count towards total supply.
     */
    lockedDistributionAddresses?: Array<string>;
    /**
     * MaxSupply is the maximum number of coins to be distributed ever.
     */
    maxSupply?: string;
    /**
     * TotalCoinHourSupply is coin hours in all addresses including unlocked distribution addresses.
     */
    totalCoinhourSupply?: string;
    /**
     * TotalSupply is CurrentSupply plus coins held by the distribution addresses that are spendable.
     */
    totalSupply?: string;
    /**
     * Distribution addresses which count towards total supply.
     */
    unlockedDistributionAddresses?: Array<string>;
}
