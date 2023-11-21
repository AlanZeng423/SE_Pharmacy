/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NumberFormat = {
    currency?: number;
    groupingUsed?: boolean;
    maximumFractionDigits?: number;
    maximumIntegerDigits?: number;
    minimumFractionDigits?: number;
    minimumIntegerDigits?: number;
    parseIntegerOnly?: boolean;
    roundingMode?: NumberFormat.roundingMode;
};

export namespace NumberFormat {

    export enum roundingMode {
        CEILING = 'CEILING',
        DOWN = 'DOWN',
        FLOOR = 'FLOOR',
        HALF_DOWN = 'HALF_DOWN',
        HALF_EVEN = 'HALF_EVEN',
        HALF_UP = 'HALF_UP',
        UNNECESSARY = 'UNNECESSARY',
        UP = 'UP',
    }


}

