/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MedicineAmount } from '../models/MedicineAmount';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MedicineAmountControllerService {

    /**
     * deleteMedicineAmount
     * @param cId cId
     * @param medicineId medicineId
     * @returns any OK
     * @throws ApiError
     */
    public static deleteMedicineAmountUsingGet(
        cId?: number,
        medicineId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/MedicineAmountController/deleteMedicineAmount',
            query: {
                'cId': cId,
                'medicineId': medicineId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteMedicineAmount
     * @param cId cId
     * @param medicineId medicineId
     * @returns any OK
     * @throws ApiError
     */
    public static deleteMedicineAmountUsingHead(
        cId?: number,
        medicineId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/MedicineAmountController/deleteMedicineAmount',
            query: {
                'cId': cId,
                'medicineId': medicineId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * deleteMedicineAmount
     * @param cId cId
     * @param medicineId medicineId
     * @returns any OK
     * @throws ApiError
     */
    public static deleteMedicineAmountUsingPost(
        cId?: number,
        medicineId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/MedicineAmountController/deleteMedicineAmount',
            body: medicineId,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteMedicineAmount
     * @param cId cId
     * @param medicineId medicineId
     * @returns any OK
     * @throws ApiError
     */
    public static deleteMedicineAmountUsingPut(
        cId?: number,
        medicineId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/MedicineAmountController/deleteMedicineAmount',
            body: medicineId,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteMedicineAmount
     * @param cId cId
     * @param medicineId medicineId
     * @returns any OK
     * @throws ApiError
     */
    public static deleteMedicineAmountUsingDelete(
        cId?: number,
        medicineId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/MedicineAmountController/deleteMedicineAmount',
            body: medicineId,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * deleteMedicineAmount
     * @param cId cId
     * @param medicineId medicineId
     * @returns any OK
     * @throws ApiError
     */
    public static deleteMedicineAmountUsingOptions(
        cId?: number,
        medicineId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/MedicineAmountController/deleteMedicineAmount',
            query: {
                'cId': cId,
                'medicineId': medicineId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * deleteMedicineAmount
     * @param cId cId
     * @param medicineId medicineId
     * @returns any OK
     * @throws ApiError
     */
    public static deleteMedicineAmountUsingPatch(
        cId?: number,
        medicineId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/MedicineAmountController/deleteMedicineAmount',
            body: medicineId,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getMedicineAmountByCId
     * @param cId cId
     * @returns MedicineAmount OK
     * @throws ApiError
     */
    public static getMedicineAmountByCIdUsingGet(
        cId?: number,
    ): CancelablePromise<Array<MedicineAmount>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/MedicineAmountController/getMedicineAmountByCId',
            query: {
                'cId': cId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getMedicineAmountByCId
     * @param cId cId
     * @returns MedicineAmount OK
     * @throws ApiError
     */
    public static getMedicineAmountByCIdUsingHead(
        cId?: number,
    ): CancelablePromise<Array<MedicineAmount>> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/MedicineAmountController/getMedicineAmountByCId',
            query: {
                'cId': cId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getMedicineAmountByCId
     * @param cId cId
     * @returns MedicineAmount OK
     * @returns any Created
     * @throws ApiError
     */
    public static getMedicineAmountByCIdUsingPost(
        cId?: number,
    ): CancelablePromise<Array<MedicineAmount> | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/MedicineAmountController/getMedicineAmountByCId',
            body: cId,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getMedicineAmountByCId
     * @param cId cId
     * @returns MedicineAmount OK
     * @returns any Created
     * @throws ApiError
     */
    public static getMedicineAmountByCIdUsingPut(
        cId?: number,
    ): CancelablePromise<Array<MedicineAmount> | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/MedicineAmountController/getMedicineAmountByCId',
            body: cId,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getMedicineAmountByCId
     * @param cId cId
     * @returns MedicineAmount OK
     * @throws ApiError
     */
    public static getMedicineAmountByCIdUsingDelete(
        cId?: number,
    ): CancelablePromise<Array<MedicineAmount>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/MedicineAmountController/getMedicineAmountByCId',
            body: cId,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getMedicineAmountByCId
     * @param cId cId
     * @returns MedicineAmount OK
     * @throws ApiError
     */
    public static getMedicineAmountByCIdUsingOptions(
        cId?: number,
    ): CancelablePromise<Array<MedicineAmount>> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/MedicineAmountController/getMedicineAmountByCId',
            query: {
                'cId': cId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getMedicineAmountByCId
     * @param cId cId
     * @returns MedicineAmount OK
     * @throws ApiError
     */
    public static getMedicineAmountByCIdUsingPatch(
        cId?: number,
    ): CancelablePromise<Array<MedicineAmount>> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/MedicineAmountController/getMedicineAmountByCId',
            body: cId,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * insertMedicineAmount
     * @param amount
     * @param cId
     * @param medicineId
     * @returns any OK
     * @throws ApiError
     */
    public static insertMedicineAmountUsingGet(
        amount?: number,
        cId?: number,
        medicineId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/MedicineAmountController/insertMedicineAmount',
            query: {
                'amount': amount,
                'CId': cId,
                'medicineId': medicineId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * insertMedicineAmount
     * @param amount
     * @param cId
     * @param medicineId
     * @returns any OK
     * @throws ApiError
     */
    public static insertMedicineAmountUsingHead(
        amount?: number,
        cId?: number,
        medicineId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/MedicineAmountController/insertMedicineAmount',
            query: {
                'amount': amount,
                'CId': cId,
                'medicineId': medicineId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * insertMedicineAmount
     * @param amount
     * @param cId
     * @param medicineId
     * @returns any OK
     * @throws ApiError
     */
    public static insertMedicineAmountUsingPost(
        amount?: number,
        cId?: number,
        medicineId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/MedicineAmountController/insertMedicineAmount',
            query: {
                'amount': amount,
                'CId': cId,
                'medicineId': medicineId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * insertMedicineAmount
     * @param amount
     * @param cId
     * @param medicineId
     * @returns any OK
     * @throws ApiError
     */
    public static insertMedicineAmountUsingPut(
        amount?: number,
        cId?: number,
        medicineId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/MedicineAmountController/insertMedicineAmount',
            query: {
                'amount': amount,
                'CId': cId,
                'medicineId': medicineId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * insertMedicineAmount
     * @param amount
     * @param cId
     * @param medicineId
     * @returns any OK
     * @throws ApiError
     */
    public static insertMedicineAmountUsingDelete(
        amount?: number,
        cId?: number,
        medicineId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/MedicineAmountController/insertMedicineAmount',
            query: {
                'amount': amount,
                'CId': cId,
                'medicineId': medicineId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * insertMedicineAmount
     * @param amount
     * @param cId
     * @param medicineId
     * @returns any OK
     * @throws ApiError
     */
    public static insertMedicineAmountUsingOptions(
        amount?: number,
        cId?: number,
        medicineId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/MedicineAmountController/insertMedicineAmount',
            query: {
                'amount': amount,
                'CId': cId,
                'medicineId': medicineId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * insertMedicineAmount
     * @param amount
     * @param cId
     * @param medicineId
     * @returns any OK
     * @throws ApiError
     */
    public static insertMedicineAmountUsingPatch(
        amount?: number,
        cId?: number,
        medicineId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/MedicineAmountController/insertMedicineAmount',
            query: {
                'amount': amount,
                'CId': cId,
                'medicineId': medicineId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * updateMedicineAmount
     * @param amount
     * @param cId
     * @param medicineId
     * @returns any OK
     * @throws ApiError
     */
    public static updateMedicineAmountUsingGet(
        amount?: number,
        cId?: number,
        medicineId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/MedicineAmountController/updateMedicineAmount',
            query: {
                'amount': amount,
                'CId': cId,
                'medicineId': medicineId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateMedicineAmount
     * @param amount
     * @param cId
     * @param medicineId
     * @returns any OK
     * @throws ApiError
     */
    public static updateMedicineAmountUsingHead(
        amount?: number,
        cId?: number,
        medicineId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/MedicineAmountController/updateMedicineAmount',
            query: {
                'amount': amount,
                'CId': cId,
                'medicineId': medicineId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * updateMedicineAmount
     * @param amount
     * @param cId
     * @param medicineId
     * @returns any OK
     * @throws ApiError
     */
    public static updateMedicineAmountUsingPost(
        amount?: number,
        cId?: number,
        medicineId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/MedicineAmountController/updateMedicineAmount',
            query: {
                'amount': amount,
                'CId': cId,
                'medicineId': medicineId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateMedicineAmount
     * @param amount
     * @param cId
     * @param medicineId
     * @returns any OK
     * @throws ApiError
     */
    public static updateMedicineAmountUsingPut(
        amount?: number,
        cId?: number,
        medicineId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/MedicineAmountController/updateMedicineAmount',
            query: {
                'amount': amount,
                'CId': cId,
                'medicineId': medicineId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateMedicineAmount
     * @param amount
     * @param cId
     * @param medicineId
     * @returns any OK
     * @throws ApiError
     */
    public static updateMedicineAmountUsingDelete(
        amount?: number,
        cId?: number,
        medicineId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/MedicineAmountController/updateMedicineAmount',
            query: {
                'amount': amount,
                'CId': cId,
                'medicineId': medicineId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * updateMedicineAmount
     * @param amount
     * @param cId
     * @param medicineId
     * @returns any OK
     * @throws ApiError
     */
    public static updateMedicineAmountUsingOptions(
        amount?: number,
        cId?: number,
        medicineId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/MedicineAmountController/updateMedicineAmount',
            query: {
                'amount': amount,
                'CId': cId,
                'medicineId': medicineId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * updateMedicineAmount
     * @param amount
     * @param cId
     * @param medicineId
     * @returns any OK
     * @throws ApiError
     */
    public static updateMedicineAmountUsingPatch(
        amount?: number,
        cId?: number,
        medicineId?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/MedicineAmountController/updateMedicineAmount',
            query: {
                'amount': amount,
                'CId': cId,
                'medicineId': medicineId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
