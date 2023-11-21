/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Administrator } from '../models/Administrator';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AdministratorControllerService {

    /**
     * deleteAdministrator
     * @param ano ano
     * @returns any OK
     * @throws ApiError
     */
    public static deleteAdministratorUsingGet(
        ano?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/AdministratorController/deleteAdministrator',
            query: {
                'ano': ano,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteAdministrator
     * @param ano ano
     * @returns any OK
     * @throws ApiError
     */
    public static deleteAdministratorUsingHead(
        ano?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/AdministratorController/deleteAdministrator',
            query: {
                'ano': ano,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * deleteAdministrator
     * @param ano ano
     * @returns any OK
     * @throws ApiError
     */
    public static deleteAdministratorUsingPost(
        ano?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/AdministratorController/deleteAdministrator',
            query: {
                'ano': ano,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteAdministrator
     * @param ano ano
     * @returns any OK
     * @throws ApiError
     */
    public static deleteAdministratorUsingPut(
        ano?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/AdministratorController/deleteAdministrator',
            query: {
                'ano': ano,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteAdministrator
     * @param ano ano
     * @returns any OK
     * @throws ApiError
     */
    public static deleteAdministratorUsingDelete(
        ano?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/AdministratorController/deleteAdministrator',
            query: {
                'ano': ano,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * deleteAdministrator
     * @param ano ano
     * @returns any OK
     * @throws ApiError
     */
    public static deleteAdministratorUsingOptions(
        ano?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/AdministratorController/deleteAdministrator',
            query: {
                'ano': ano,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * deleteAdministrator
     * @param ano ano
     * @returns any OK
     * @throws ApiError
     */
    public static deleteAdministratorUsingPatch(
        ano?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/AdministratorController/deleteAdministrator',
            query: {
                'ano': ano,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getAdministratorById
     * @param ano ano
     * @returns Administrator OK
     * @throws ApiError
     */
    public static getAdministratorByIdUsingGet(
        ano?: number,
    ): CancelablePromise<Administrator> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/AdministratorController/getAdministrator',
            query: {
                'ano': ano,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getAdministratorById
     * @param ano ano
     * @returns Administrator OK
     * @throws ApiError
     */
    public static getAdministratorByIdUsingHead(
        ano?: number,
    ): CancelablePromise<Administrator> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/AdministratorController/getAdministrator',
            query: {
                'ano': ano,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getAdministratorById
     * @param ano ano
     * @returns Administrator OK
     * @returns any Created
     * @throws ApiError
     */
    public static getAdministratorByIdUsingPost(
        ano?: number,
    ): CancelablePromise<Administrator | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/AdministratorController/getAdministrator',
            query: {
                'ano': ano,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getAdministratorById
     * @param ano ano
     * @returns Administrator OK
     * @returns any Created
     * @throws ApiError
     */
    public static getAdministratorByIdUsingPut(
        ano?: number,
    ): CancelablePromise<Administrator | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/AdministratorController/getAdministrator',
            query: {
                'ano': ano,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * getAdministratorById
     * @param ano ano
     * @returns Administrator OK
     * @throws ApiError
     */
    public static getAdministratorByIdUsingDelete(
        ano?: number,
    ): CancelablePromise<Administrator> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/AdministratorController/getAdministrator',
            query: {
                'ano': ano,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getAdministratorById
     * @param ano ano
     * @returns Administrator OK
     * @throws ApiError
     */
    public static getAdministratorByIdUsingOptions(
        ano?: number,
    ): CancelablePromise<Administrator> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/AdministratorController/getAdministrator',
            query: {
                'ano': ano,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getAdministratorById
     * @param ano ano
     * @returns Administrator OK
     * @throws ApiError
     */
    public static getAdministratorByIdUsingPatch(
        ano?: number,
    ): CancelablePromise<Administrator> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/AdministratorController/getAdministrator',
            query: {
                'ano': ano,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getLoginUserUsingGet
     * @param adId ad_id
     * @returns number OK
     * @throws ApiError
     */
    public static getLoginUserUsingGetUsingGet(
        adId?: number,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/AdministratorController/getLoginUserUsingGet',
            query: {
                'ad_id': adId,
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
     * @param adId ad_id
     * @returns number OK
     * @throws ApiError
     */
    public static getLoginUserUsingGetUsingHead(
        adId?: number,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/AdministratorController/getLoginUserUsingGet',
            query: {
                'ad_id': adId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getLoginUserUsingGet
     * @param adId ad_id
     * @returns number OK
     * @returns any Created
     * @throws ApiError
     */
    public static getLoginUserUsingGetUsingPost(
        adId?: number,
    ): CancelablePromise<number | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/AdministratorController/getLoginUserUsingGet',
            query: {
                'ad_id': adId,
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
     * @param adId ad_id
     * @returns number OK
     * @returns any Created
     * @throws ApiError
     */
    public static getLoginUserUsingGetUsingPut(
        adId?: number,
    ): CancelablePromise<number | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/AdministratorController/getLoginUserUsingGet',
            query: {
                'ad_id': adId,
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
     * @param adId ad_id
     * @returns number OK
     * @throws ApiError
     */
    public static getLoginUserUsingGetUsingDelete(
        adId?: number,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/AdministratorController/getLoginUserUsingGet',
            query: {
                'ad_id': adId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getLoginUserUsingGet
     * @param adId ad_id
     * @returns number OK
     * @throws ApiError
     */
    public static getLoginUserUsingGetUsingOptions(
        adId?: number,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/AdministratorController/getLoginUserUsingGet',
            query: {
                'ad_id': adId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getLoginUserUsingGet
     * @param adId ad_id
     * @returns number OK
     * @throws ApiError
     */
    public static getLoginUserUsingGetUsingPatch(
        adId?: number,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/AdministratorController/getLoginUserUsingGet',
            query: {
                'ad_id': adId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * insertAdministrator
     * @param adId
     * @param name
     * @param password
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static insertAdministratorUsingGet(
        adId?: number,
        name?: string,
        password?: string,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/AdministratorController/insertAdministrator',
            query: {
                'ad_id': adId,
                'name': name,
                'password': password,
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
     * insertAdministrator
     * @param adId
     * @param name
     * @param password
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static insertAdministratorUsingHead(
        adId?: number,
        name?: string,
        password?: string,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/AdministratorController/insertAdministrator',
            query: {
                'ad_id': adId,
                'name': name,
                'password': password,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * insertAdministrator
     * @param adId
     * @param name
     * @param password
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static insertAdministratorUsingPost(
        adId?: number,
        name?: string,
        password?: string,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/AdministratorController/insertAdministrator',
            query: {
                'ad_id': adId,
                'name': name,
                'password': password,
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
     * insertAdministrator
     * @param adId
     * @param name
     * @param password
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static insertAdministratorUsingPut(
        adId?: number,
        name?: string,
        password?: string,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/AdministratorController/insertAdministrator',
            query: {
                'ad_id': adId,
                'name': name,
                'password': password,
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
     * insertAdministrator
     * @param adId
     * @param name
     * @param password
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static insertAdministratorUsingDelete(
        adId?: number,
        name?: string,
        password?: string,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/AdministratorController/insertAdministrator',
            query: {
                'ad_id': adId,
                'name': name,
                'password': password,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * insertAdministrator
     * @param adId
     * @param name
     * @param password
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static insertAdministratorUsingOptions(
        adId?: number,
        name?: string,
        password?: string,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/AdministratorController/insertAdministrator',
            query: {
                'ad_id': adId,
                'name': name,
                'password': password,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * insertAdministrator
     * @param adId
     * @param name
     * @param password
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static insertAdministratorUsingPatch(
        adId?: number,
        name?: string,
        password?: string,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/AdministratorController/insertAdministrator',
            query: {
                'ad_id': adId,
                'name': name,
                'password': password,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * updateAdministrator
     * @param adId
     * @param name
     * @param password
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static updateAdministratorUsingGet(
        adId?: number,
        name?: string,
        password?: string,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/AdministratorController/updateAdministrator',
            query: {
                'ad_id': adId,
                'name': name,
                'password': password,
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
     * updateAdministrator
     * @param adId
     * @param name
     * @param password
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static updateAdministratorUsingHead(
        adId?: number,
        name?: string,
        password?: string,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/AdministratorController/updateAdministrator',
            query: {
                'ad_id': adId,
                'name': name,
                'password': password,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * updateAdministrator
     * @param adId
     * @param name
     * @param password
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static updateAdministratorUsingPost(
        adId?: number,
        name?: string,
        password?: string,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/AdministratorController/updateAdministrator',
            query: {
                'ad_id': adId,
                'name': name,
                'password': password,
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
     * updateAdministrator
     * @param adId
     * @param name
     * @param password
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static updateAdministratorUsingPut(
        adId?: number,
        name?: string,
        password?: string,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/AdministratorController/updateAdministrator',
            query: {
                'ad_id': adId,
                'name': name,
                'password': password,
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
     * updateAdministrator
     * @param adId
     * @param name
     * @param password
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static updateAdministratorUsingDelete(
        adId?: number,
        name?: string,
        password?: string,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/AdministratorController/updateAdministrator',
            query: {
                'ad_id': adId,
                'name': name,
                'password': password,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * updateAdministrator
     * @param adId
     * @param name
     * @param password
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static updateAdministratorUsingOptions(
        adId?: number,
        name?: string,
        password?: string,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/AdministratorController/updateAdministrator',
            query: {
                'ad_id': adId,
                'name': name,
                'password': password,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * updateAdministrator
     * @param adId
     * @param name
     * @param password
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static updateAdministratorUsingPatch(
        adId?: number,
        name?: string,
        password?: string,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/AdministratorController/updateAdministrator',
            query: {
                'ad_id': adId,
                'name': name,
                'password': password,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
