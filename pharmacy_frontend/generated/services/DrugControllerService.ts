/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Drug } from '../models/Drug';
import type { MedicineList } from '../models/MedicineList';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DrugControllerService {

    /**
     * addDrug
     * @param drug drug
     * @returns any OK
     * @throws ApiError
     */
    public static addDrugUsingPost(
        drug: Drug,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/drugs/add',
            body: drug,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getAllDrugs
     * @returns Drug OK
     * @throws ApiError
     */
    public static getAllDrugsUsingGet(): CancelablePromise<Array<Drug>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/drugs/all',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteDrug
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteDrugUsingDelete(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/drugs/delete/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getdrugs
     * @param cId c_id
     * @returns MedicineList OK
     * @throws ApiError
     */
    public static getdrugsUsingGet(
        cId?: number,
    ): CancelablePromise<Array<MedicineList>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/drugs/get drugs',
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
     * updateDrug
     * @param drug drug
     * @returns any OK
     * @throws ApiError
     */
    public static updateDrugUsingPut(
        drug: Drug,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/drugs/update',
            body: drug,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getDrugById
     * @param id id
     * @returns Drug OK
     * @throws ApiError
     */
    public static getDrugByIdUsingGet(
        id: number,
    ): CancelablePromise<Drug> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/drugs/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
