/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PatientControllerService {

    /**
     * deletePatient
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deletePatientUsingGet(
        id?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/PatientController/deletePatient',
            query: {
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
     * deletePatient
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deletePatientUsingHead(
        id?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/PatientController/deletePatient',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * deletePatient
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deletePatientUsingPost(
        id?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/PatientController/deletePatient',
            body: id,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deletePatient
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deletePatientUsingPut(
        id?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/PatientController/deletePatient',
            body: id,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deletePatient
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deletePatientUsingDelete(
        id?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/PatientController/deletePatient',
            body: id,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * deletePatient
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deletePatientUsingOptions(
        id?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/PatientController/deletePatient',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * deletePatient
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deletePatientUsingPatch(
        id?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/PatientController/deletePatient',
            body: id,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getLoginUserUsingGet
     * @param pId p_id
     * @returns number OK
     * @throws ApiError
     */
    public static getLoginUserUsingGetUsingGet2(
        pId?: number,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/PatientController/getLoginUserUsingGet',
            query: {
                'p_id': pId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getLoginUserUsingGet
     * @param pId p_id
     * @returns number OK
     * @throws ApiError
     */
    public static getLoginUserUsingGetUsingHead2(
        pId?: number,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/PatientController/getLoginUserUsingGet',
            query: {
                'p_id': pId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getLoginUserUsingGet
     * @param pId p_id
     * @returns number OK
     * @returns any Created
     * @throws ApiError
     */
    public static getLoginUserUsingGetUsingPost2(
        pId?: number,
    ): CancelablePromise<number | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/PatientController/getLoginUserUsingGet',
            query: {
                'p_id': pId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getLoginUserUsingGet
     * @param pId p_id
     * @returns number OK
     * @returns any Created
     * @throws ApiError
     */
    public static getLoginUserUsingGetUsingPut2(
        pId?: number,
    ): CancelablePromise<number | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/PatientController/getLoginUserUsingGet',
            query: {
                'p_id': pId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getLoginUserUsingGet
     * @param pId p_id
     * @returns number OK
     * @throws ApiError
     */
    public static getLoginUserUsingGetUsingDelete2(
        pId?: number,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/PatientController/getLoginUserUsingGet',
            query: {
                'p_id': pId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getLoginUserUsingGet
     * @param pId p_id
     * @returns number OK
     * @throws ApiError
     */
    public static getLoginUserUsingGetUsingOptions2(
        pId?: number,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/PatientController/getLoginUserUsingGet',
            query: {
                'p_id': pId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getLoginUserUsingGet
     * @param pId p_id
     * @returns number OK
     * @throws ApiError
     */
    public static getLoginUserUsingGetUsingPatch2(
        pId?: number,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/PatientController/getLoginUserUsingGet',
            query: {
                'p_id': pId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getNameById
     * @param id id
     * @returns string OK
     * @throws ApiError
     */
    public static getNameByIdUsingGet(
        id?: number,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/PatientController/getNameById',
            query: {
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
     * getNameById
     * @param id id
     * @returns string OK
     * @throws ApiError
     */
    public static getNameByIdUsingHead(
        id?: number,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/PatientController/getNameById',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getNameById
     * @param id id
     * @returns string OK
     * @returns any Created
     * @throws ApiError
     */
    public static getNameByIdUsingPost(
        id?: number,
    ): CancelablePromise<string | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/PatientController/getNameById',
            body: id,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getNameById
     * @param id id
     * @returns string OK
     * @returns any Created
     * @throws ApiError
     */
    public static getNameByIdUsingPut(
        id?: number,
    ): CancelablePromise<string | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/PatientController/getNameById',
            body: id,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getNameById
     * @param id id
     * @returns string OK
     * @throws ApiError
     */
    public static getNameByIdUsingDelete(
        id?: number,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/PatientController/getNameById',
            body: id,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getNameById
     * @param id id
     * @returns string OK
     * @throws ApiError
     */
    public static getNameByIdUsingOptions(
        id?: number,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/PatientController/getNameById',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getNameById
     * @param id id
     * @returns string OK
     * @throws ApiError
     */
    public static getNameByIdUsingPatch(
        id?: number,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/PatientController/getNameById',
            body: id,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * insertPatience
     * @param gender
     * @param name
     * @param password
     * @param pId
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static insertPatienceUsingGet(
        gender?: string,
        name?: string,
        password?: string,
        pId?: number,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/PatientController/insertPatience',
            query: {
                'gender': gender,
                'name': name,
                'password': password,
                'PId': pId,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * insertPatience
     * @param gender
     * @param name
     * @param password
     * @param pId
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static insertPatienceUsingHead(
        gender?: string,
        name?: string,
        password?: string,
        pId?: number,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/PatientController/insertPatience',
            query: {
                'gender': gender,
                'name': name,
                'password': password,
                'PId': pId,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * insertPatience
     * @param gender
     * @param name
     * @param password
     * @param pId
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static insertPatienceUsingPost(
        gender?: string,
        name?: string,
        password?: string,
        pId?: number,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/PatientController/insertPatience',
            query: {
                'gender': gender,
                'name': name,
                'password': password,
                'PId': pId,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * insertPatience
     * @param gender
     * @param name
     * @param password
     * @param pId
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static insertPatienceUsingPut(
        gender?: string,
        name?: string,
        password?: string,
        pId?: number,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/PatientController/insertPatience',
            query: {
                'gender': gender,
                'name': name,
                'password': password,
                'PId': pId,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * insertPatience
     * @param gender
     * @param name
     * @param password
     * @param pId
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static insertPatienceUsingDelete(
        gender?: string,
        name?: string,
        password?: string,
        pId?: number,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/PatientController/insertPatience',
            query: {
                'gender': gender,
                'name': name,
                'password': password,
                'PId': pId,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * insertPatience
     * @param gender
     * @param name
     * @param password
     * @param pId
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static insertPatienceUsingOptions(
        gender?: string,
        name?: string,
        password?: string,
        pId?: number,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/PatientController/insertPatience',
            query: {
                'gender': gender,
                'name': name,
                'password': password,
                'PId': pId,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * insertPatience
     * @param gender
     * @param name
     * @param password
     * @param pId
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static insertPatienceUsingPatch(
        gender?: string,
        name?: string,
        password?: string,
        pId?: number,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/PatientController/insertPatience',
            query: {
                'gender': gender,
                'name': name,
                'password': password,
                'PId': pId,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * updatePatient
     * @param gender
     * @param name
     * @param password
     * @param pId
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static updatePatientUsingGet(
        gender?: string,
        name?: string,
        password?: string,
        pId?: number,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/PatientController/updatePatient',
            query: {
                'gender': gender,
                'name': name,
                'password': password,
                'PId': pId,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updatePatient
     * @param gender
     * @param name
     * @param password
     * @param pId
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static updatePatientUsingHead(
        gender?: string,
        name?: string,
        password?: string,
        pId?: number,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/PatientController/updatePatient',
            query: {
                'gender': gender,
                'name': name,
                'password': password,
                'PId': pId,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * updatePatient
     * @param gender
     * @param name
     * @param password
     * @param pId
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static updatePatientUsingPost(
        gender?: string,
        name?: string,
        password?: string,
        pId?: number,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/PatientController/updatePatient',
            query: {
                'gender': gender,
                'name': name,
                'password': password,
                'PId': pId,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updatePatient
     * @param gender
     * @param name
     * @param password
     * @param pId
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static updatePatientUsingPut(
        gender?: string,
        name?: string,
        password?: string,
        pId?: number,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/PatientController/updatePatient',
            query: {
                'gender': gender,
                'name': name,
                'password': password,
                'PId': pId,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updatePatient
     * @param gender
     * @param name
     * @param password
     * @param pId
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static updatePatientUsingDelete(
        gender?: string,
        name?: string,
        password?: string,
        pId?: number,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/PatientController/updatePatient',
            query: {
                'gender': gender,
                'name': name,
                'password': password,
                'PId': pId,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * updatePatient
     * @param gender
     * @param name
     * @param password
     * @param pId
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static updatePatientUsingOptions(
        gender?: string,
        name?: string,
        password?: string,
        pId?: number,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/PatientController/updatePatient',
            query: {
                'gender': gender,
                'name': name,
                'password': password,
                'PId': pId,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * updatePatient
     * @param gender
     * @param name
     * @param password
     * @param pId
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static updatePatientUsingPatch(
        gender?: string,
        name?: string,
        password?: string,
        pId?: number,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/PatientController/updatePatient',
            query: {
                'gender': gender,
                'name': name,
                'password': password,
                'PId': pId,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
