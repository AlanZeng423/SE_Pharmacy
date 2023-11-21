/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DrugStock } from '../models/DrugStock';
import type { Medicine } from '../models/Medicine';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MedicineControllerService {

    /**
     * getMedicines
     * @returns Medicine OK
     * @throws ApiError
     */
    public static getMedicinesUsingGet(): CancelablePromise<Array<Medicine>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/medicines',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * addMedicine
     * @param medicine medicine
     * @returns any OK
     * @throws ApiError
     */
    public static addMedicineUsingPost(
        medicine: Medicine,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/medicines/add',
            body: medicine,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteMedicineByname
     * @param name name
     * @returns any OK
     * @throws ApiError
     */
    public static deleteMedicineBynameUsingDelete(
        name: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/medicines/delete/{name}',
            path: {
                'name': name,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getStock
     * @returns DrugStock OK
     * @throws ApiError
     */
    public static getStockUsingGet(): CancelablePromise<Array<DrugStock>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/medicines/get stock',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateMedicineByname
     * @param name name
     * @returns any OK
     * @throws ApiError
     */
    public static updateMedicineBynameUsingPut(
        name: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/medicines/update',
            body: name,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getMedicineById
     * @param id id
     * @returns Medicine OK
     * @throws ApiError
     */
    public static getMedicineByIdUsingGet(
        id: number,
    ): CancelablePromise<Medicine> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/medicines/{id}',
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

    /**
     * getMedicineByName
     * @param name name
     * @returns Medicine OK
     * @throws ApiError
     */
    public static getMedicineByNameUsingGet(
        name: string,
    ): CancelablePromise<Medicine> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/medicines/{name}',
            path: {
                'name': name,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
