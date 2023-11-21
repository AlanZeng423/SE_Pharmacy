/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Cases } from '../models/Cases';
import type { CasesInformation } from '../models/CasesInformation';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CasesControllerService {

    /**
     * deleteMedicines
     * @param cId c_id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteMedicinesUsingGet(
        cId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/CasesController/deCases',
            query: {
                'c_id': cId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteMedicines
     * @param cId c_id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteMedicinesUsingHead(
        cId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/CasesController/deCases',
            query: {
                'c_id': cId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * deleteMedicines
     * @param cId c_id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteMedicinesUsingPost(
        cId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/CasesController/deCases',
            body: cId,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteMedicines
     * @param cId c_id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteMedicinesUsingPut(
        cId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/CasesController/deCases',
            body: cId,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteMedicines
     * @param cId c_id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteMedicinesUsingDelete(
        cId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/CasesController/deCases',
            body: cId,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * deleteMedicines
     * @param cId c_id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteMedicinesUsingOptions(
        cId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/CasesController/deCases',
            query: {
                'c_id': cId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * deleteMedicines
     * @param cId c_id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteMedicinesUsingPatch(
        cId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/CasesController/deCases',
            body: cId,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * deleteCases
     * @param advice
     * @param cId
     * @param date
     * @param dId
     * @param gender
     * @param medicineId
     * @param pId
     * @returns any OK
     * @throws ApiError
     */
    public static deleteCasesUsingGet(
        advice?: string,
        cId?: number,
        date?: string,
        dId?: number,
        gender?: string,
        medicineId?: number,
        pId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/CasesController/deleteCases',
            query: {
                'advice': advice,
                'cId': cId,
                'date': date,
                'dId': dId,
                'gender': gender,
                'medicineId': medicineId,
                'pId': pId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteCases
     * @param advice
     * @param cId
     * @param date
     * @param dId
     * @param gender
     * @param medicineId
     * @param pId
     * @returns any OK
     * @throws ApiError
     */
    public static deleteCasesUsingHead(
        advice?: string,
        cId?: number,
        date?: string,
        dId?: number,
        gender?: string,
        medicineId?: number,
        pId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/CasesController/deleteCases',
            query: {
                'advice': advice,
                'cId': cId,
                'date': date,
                'dId': dId,
                'gender': gender,
                'medicineId': medicineId,
                'pId': pId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * deleteCases
     * @param advice
     * @param cId
     * @param date
     * @param dId
     * @param gender
     * @param medicineId
     * @param pId
     * @returns any OK
     * @throws ApiError
     */
    public static deleteCasesUsingPost(
        advice?: string,
        cId?: number,
        date?: string,
        dId?: number,
        gender?: string,
        medicineId?: number,
        pId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/CasesController/deleteCases',
            query: {
                'advice': advice,
                'cId': cId,
                'date': date,
                'dId': dId,
                'gender': gender,
                'medicineId': medicineId,
                'pId': pId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteCases
     * @param advice
     * @param cId
     * @param date
     * @param dId
     * @param gender
     * @param medicineId
     * @param pId
     * @returns any OK
     * @throws ApiError
     */
    public static deleteCasesUsingPut(
        advice?: string,
        cId?: number,
        date?: string,
        dId?: number,
        gender?: string,
        medicineId?: number,
        pId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/CasesController/deleteCases',
            query: {
                'advice': advice,
                'cId': cId,
                'date': date,
                'dId': dId,
                'gender': gender,
                'medicineId': medicineId,
                'pId': pId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteCases
     * @param advice
     * @param cId
     * @param date
     * @param dId
     * @param gender
     * @param medicineId
     * @param pId
     * @returns any OK
     * @throws ApiError
     */
    public static deleteCasesUsingDelete(
        advice?: string,
        cId?: number,
        date?: string,
        dId?: number,
        gender?: string,
        medicineId?: number,
        pId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/CasesController/deleteCases',
            query: {
                'advice': advice,
                'cId': cId,
                'date': date,
                'dId': dId,
                'gender': gender,
                'medicineId': medicineId,
                'pId': pId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * deleteCases
     * @param advice
     * @param cId
     * @param date
     * @param dId
     * @param gender
     * @param medicineId
     * @param pId
     * @returns any OK
     * @throws ApiError
     */
    public static deleteCasesUsingOptions(
        advice?: string,
        cId?: number,
        date?: string,
        dId?: number,
        gender?: string,
        medicineId?: number,
        pId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/CasesController/deleteCases',
            query: {
                'advice': advice,
                'cId': cId,
                'date': date,
                'dId': dId,
                'gender': gender,
                'medicineId': medicineId,
                'pId': pId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * deleteCases
     * @param advice
     * @param cId
     * @param date
     * @param dId
     * @param gender
     * @param medicineId
     * @param pId
     * @returns any OK
     * @throws ApiError
     */
    public static deleteCasesUsingPatch(
        advice?: string,
        cId?: number,
        date?: string,
        dId?: number,
        gender?: string,
        medicineId?: number,
        pId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/CasesController/deleteCases',
            query: {
                'advice': advice,
                'cId': cId,
                'date': date,
                'dId': dId,
                'gender': gender,
                'medicineId': medicineId,
                'pId': pId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getCase
     * @param cId c_id
     * @returns CasesInformation OK
     * @throws ApiError
     */
    public static getCaseUsingGet(
        cId?: number,
    ): CancelablePromise<CasesInformation> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/CasesController/getCase',
            query: {
                'c_id': cId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getCase
     * @param cId c_id
     * @returns CasesInformation OK
     * @throws ApiError
     */
    public static getCaseUsingHead(
        cId?: number,
    ): CancelablePromise<CasesInformation> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/CasesController/getCase',
            query: {
                'c_id': cId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getCase
     * @param cId c_id
     * @returns CasesInformation OK
     * @returns any Created
     * @throws ApiError
     */
    public static getCaseUsingPost(
        cId?: number,
    ): CancelablePromise<CasesInformation | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/CasesController/getCase',
            body: cId,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getCase
     * @param cId c_id
     * @returns CasesInformation OK
     * @returns any Created
     * @throws ApiError
     */
    public static getCaseUsingPut(
        cId?: number,
    ): CancelablePromise<CasesInformation | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/CasesController/getCase',
            body: cId,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getCase
     * @param cId c_id
     * @returns CasesInformation OK
     * @throws ApiError
     */
    public static getCaseUsingDelete(
        cId?: number,
    ): CancelablePromise<CasesInformation> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/CasesController/getCase',
            body: cId,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getCase
     * @param cId c_id
     * @returns CasesInformation OK
     * @throws ApiError
     */
    public static getCaseUsingOptions(
        cId?: number,
    ): CancelablePromise<CasesInformation> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/CasesController/getCase',
            query: {
                'c_id': cId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getCase
     * @param cId c_id
     * @returns CasesInformation OK
     * @throws ApiError
     */
    public static getCaseUsingPatch(
        cId?: number,
    ): CancelablePromise<CasesInformation> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/CasesController/getCase',
            body: cId,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getMedicine
     * @param cId c_id
     * @returns Cases OK
     * @throws ApiError
     */
    public static getMedicineUsingGet(
        cId?: number,
    ): CancelablePromise<Array<Cases>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/CasesController/getMedicine',
            query: {
                'c_id': cId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getMedicine
     * @param cId c_id
     * @returns Cases OK
     * @throws ApiError
     */
    public static getMedicineUsingHead(
        cId?: number,
    ): CancelablePromise<Array<Cases>> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/CasesController/getMedicine',
            query: {
                'c_id': cId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getMedicine
     * @param cId c_id
     * @returns Cases OK
     * @returns any Created
     * @throws ApiError
     */
    public static getMedicineUsingPost(
        cId?: number,
    ): CancelablePromise<Array<Cases> | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/CasesController/getMedicine',
            body: cId,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getMedicine
     * @param cId c_id
     * @returns Cases OK
     * @returns any Created
     * @throws ApiError
     */
    public static getMedicineUsingPut(
        cId?: number,
    ): CancelablePromise<Array<Cases> | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/CasesController/getMedicine',
            body: cId,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getMedicine
     * @param cId c_id
     * @returns Cases OK
     * @throws ApiError
     */
    public static getMedicineUsingDelete(
        cId?: number,
    ): CancelablePromise<Array<Cases>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/CasesController/getMedicine',
            body: cId,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getMedicine
     * @param cId c_id
     * @returns Cases OK
     * @throws ApiError
     */
    public static getMedicineUsingOptions(
        cId?: number,
    ): CancelablePromise<Array<Cases>> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/CasesController/getMedicine',
            query: {
                'c_id': cId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getMedicine
     * @param cId c_id
     * @returns Cases OK
     * @throws ApiError
     */
    public static getMedicineUsingPatch(
        cId?: number,
    ): CancelablePromise<Array<Cases>> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/CasesController/getMedicine',
            body: cId,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * insertCases
     * @param advice
     * @param cId
     * @param date
     * @param dId
     * @param gender
     * @param medicineId
     * @param pId
     * @returns any OK
     * @throws ApiError
     */
    public static insertCasesUsingGet(
        advice?: string,
        cId?: number,
        date?: string,
        dId?: number,
        gender?: string,
        medicineId?: number,
        pId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/CasesController/insertCases',
            query: {
                'advice': advice,
                'cId': cId,
                'date': date,
                'dId': dId,
                'gender': gender,
                'medicineId': medicineId,
                'pId': pId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * insertCases
     * @param advice
     * @param cId
     * @param date
     * @param dId
     * @param gender
     * @param medicineId
     * @param pId
     * @returns any OK
     * @throws ApiError
     */
    public static insertCasesUsingHead(
        advice?: string,
        cId?: number,
        date?: string,
        dId?: number,
        gender?: string,
        medicineId?: number,
        pId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/CasesController/insertCases',
            query: {
                'advice': advice,
                'cId': cId,
                'date': date,
                'dId': dId,
                'gender': gender,
                'medicineId': medicineId,
                'pId': pId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * insertCases
     * @param advice
     * @param cId
     * @param date
     * @param dId
     * @param gender
     * @param medicineId
     * @param pId
     * @returns any OK
     * @throws ApiError
     */
    public static insertCasesUsingPost(
        advice?: string,
        cId?: number,
        date?: string,
        dId?: number,
        gender?: string,
        medicineId?: number,
        pId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/CasesController/insertCases',
            query: {
                'advice': advice,
                'cId': cId,
                'date': date,
                'dId': dId,
                'gender': gender,
                'medicineId': medicineId,
                'pId': pId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * insertCases
     * @param advice
     * @param cId
     * @param date
     * @param dId
     * @param gender
     * @param medicineId
     * @param pId
     * @returns any OK
     * @throws ApiError
     */
    public static insertCasesUsingPut(
        advice?: string,
        cId?: number,
        date?: string,
        dId?: number,
        gender?: string,
        medicineId?: number,
        pId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/CasesController/insertCases',
            query: {
                'advice': advice,
                'cId': cId,
                'date': date,
                'dId': dId,
                'gender': gender,
                'medicineId': medicineId,
                'pId': pId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * insertCases
     * @param advice
     * @param cId
     * @param date
     * @param dId
     * @param gender
     * @param medicineId
     * @param pId
     * @returns any OK
     * @throws ApiError
     */
    public static insertCasesUsingDelete(
        advice?: string,
        cId?: number,
        date?: string,
        dId?: number,
        gender?: string,
        medicineId?: number,
        pId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/CasesController/insertCases',
            query: {
                'advice': advice,
                'cId': cId,
                'date': date,
                'dId': dId,
                'gender': gender,
                'medicineId': medicineId,
                'pId': pId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * insertCases
     * @param advice
     * @param cId
     * @param date
     * @param dId
     * @param gender
     * @param medicineId
     * @param pId
     * @returns any OK
     * @throws ApiError
     */
    public static insertCasesUsingOptions(
        advice?: string,
        cId?: number,
        date?: string,
        dId?: number,
        gender?: string,
        medicineId?: number,
        pId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/CasesController/insertCases',
            query: {
                'advice': advice,
                'cId': cId,
                'date': date,
                'dId': dId,
                'gender': gender,
                'medicineId': medicineId,
                'pId': pId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * insertCases
     * @param advice
     * @param cId
     * @param date
     * @param dId
     * @param gender
     * @param medicineId
     * @param pId
     * @returns any OK
     * @throws ApiError
     */
    public static insertCasesUsingPatch(
        advice?: string,
        cId?: number,
        date?: string,
        dId?: number,
        gender?: string,
        medicineId?: number,
        pId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/CasesController/insertCases',
            query: {
                'advice': advice,
                'cId': cId,
                'date': date,
                'dId': dId,
                'gender': gender,
                'medicineId': medicineId,
                'pId': pId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * updateCases
     * @param advice
     * @param cId
     * @param date
     * @param dId
     * @param gender
     * @param medicineId
     * @param pId
     * @returns any OK
     * @throws ApiError
     */
    public static updateCasesUsingGet(
        advice?: string,
        cId?: number,
        date?: string,
        dId?: number,
        gender?: string,
        medicineId?: number,
        pId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/CasesController/updateCases',
            query: {
                'advice': advice,
                'cId': cId,
                'date': date,
                'dId': dId,
                'gender': gender,
                'medicineId': medicineId,
                'pId': pId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateCases
     * @param advice
     * @param cId
     * @param date
     * @param dId
     * @param gender
     * @param medicineId
     * @param pId
     * @returns any OK
     * @throws ApiError
     */
    public static updateCasesUsingHead(
        advice?: string,
        cId?: number,
        date?: string,
        dId?: number,
        gender?: string,
        medicineId?: number,
        pId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/CasesController/updateCases',
            query: {
                'advice': advice,
                'cId': cId,
                'date': date,
                'dId': dId,
                'gender': gender,
                'medicineId': medicineId,
                'pId': pId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * updateCases
     * @param advice
     * @param cId
     * @param date
     * @param dId
     * @param gender
     * @param medicineId
     * @param pId
     * @returns any OK
     * @throws ApiError
     */
    public static updateCasesUsingPost(
        advice?: string,
        cId?: number,
        date?: string,
        dId?: number,
        gender?: string,
        medicineId?: number,
        pId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/CasesController/updateCases',
            query: {
                'advice': advice,
                'cId': cId,
                'date': date,
                'dId': dId,
                'gender': gender,
                'medicineId': medicineId,
                'pId': pId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateCases
     * @param advice
     * @param cId
     * @param date
     * @param dId
     * @param gender
     * @param medicineId
     * @param pId
     * @returns any OK
     * @throws ApiError
     */
    public static updateCasesUsingPut(
        advice?: string,
        cId?: number,
        date?: string,
        dId?: number,
        gender?: string,
        medicineId?: number,
        pId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/CasesController/updateCases',
            query: {
                'advice': advice,
                'cId': cId,
                'date': date,
                'dId': dId,
                'gender': gender,
                'medicineId': medicineId,
                'pId': pId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateCases
     * @param advice
     * @param cId
     * @param date
     * @param dId
     * @param gender
     * @param medicineId
     * @param pId
     * @returns any OK
     * @throws ApiError
     */
    public static updateCasesUsingDelete(
        advice?: string,
        cId?: number,
        date?: string,
        dId?: number,
        gender?: string,
        medicineId?: number,
        pId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/CasesController/updateCases',
            query: {
                'advice': advice,
                'cId': cId,
                'date': date,
                'dId': dId,
                'gender': gender,
                'medicineId': medicineId,
                'pId': pId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * updateCases
     * @param advice
     * @param cId
     * @param date
     * @param dId
     * @param gender
     * @param medicineId
     * @param pId
     * @returns any OK
     * @throws ApiError
     */
    public static updateCasesUsingOptions(
        advice?: string,
        cId?: number,
        date?: string,
        dId?: number,
        gender?: string,
        medicineId?: number,
        pId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/CasesController/updateCases',
            query: {
                'advice': advice,
                'cId': cId,
                'date': date,
                'dId': dId,
                'gender': gender,
                'medicineId': medicineId,
                'pId': pId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * updateCases
     * @param advice
     * @param cId
     * @param date
     * @param dId
     * @param gender
     * @param medicineId
     * @param pId
     * @returns any OK
     * @throws ApiError
     */
    public static updateCasesUsingPatch(
        advice?: string,
        cId?: number,
        date?: string,
        dId?: number,
        gender?: string,
        medicineId?: number,
        pId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/CasesController/updateCases',
            query: {
                'advice': advice,
                'cId': cId,
                'date': date,
                'dId': dId,
                'gender': gender,
                'medicineId': medicineId,
                'pId': pId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
