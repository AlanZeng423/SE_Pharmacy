/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DoctorControllerService {

    /**
     * deleteDoctor
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteDoctorUsingGet(
        id?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/DoctorController/deleteDoctor',
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
     * deleteDoctor
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteDoctorUsingHead(
        id?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/DoctorController/deleteDoctor',
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
     * deleteDoctor
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteDoctorUsingPost(
        id?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/DoctorController/deleteDoctor',
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
     * deleteDoctor
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteDoctorUsingPut(
        id?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/DoctorController/deleteDoctor',
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
     * deleteDoctor
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteDoctorUsingDelete(
        id?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/DoctorController/deleteDoctor',
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
     * deleteDoctor
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteDoctorUsingOptions(
        id?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/DoctorController/deleteDoctor',
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
     * deleteDoctor
     * @param id id
     * @returns any OK
     * @throws ApiError
     */
    public static deleteDoctorUsingPatch(
        id?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/DoctorController/deleteDoctor',
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
     * getDoctorNameById
     * @param id id
     * @returns string OK
     * @throws ApiError
     */
    public static getDoctorNameByIdUsingGet(
        id?: number,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/DoctorController/getDoctorName',
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
     * getDoctorNameById
     * @param id id
     * @returns string OK
     * @throws ApiError
     */
    public static getDoctorNameByIdUsingHead(
        id?: number,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/DoctorController/getDoctorName',
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
     * getDoctorNameById
     * @param id id
     * @returns string OK
     * @returns any Created
     * @throws ApiError
     */
    public static getDoctorNameByIdUsingPost(
        id?: number,
    ): CancelablePromise<string | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/DoctorController/getDoctorName',
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
     * getDoctorNameById
     * @param id id
     * @returns string OK
     * @returns any Created
     * @throws ApiError
     */
    public static getDoctorNameByIdUsingPut(
        id?: number,
    ): CancelablePromise<string | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/DoctorController/getDoctorName',
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
     * getDoctorNameById
     * @param id id
     * @returns string OK
     * @throws ApiError
     */
    public static getDoctorNameByIdUsingDelete(
        id?: number,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/DoctorController/getDoctorName',
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
     * getDoctorNameById
     * @param id id
     * @returns string OK
     * @throws ApiError
     */
    public static getDoctorNameByIdUsingOptions(
        id?: number,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/DoctorController/getDoctorName',
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
     * getDoctorNameById
     * @param id id
     * @returns string OK
     * @throws ApiError
     */
    public static getDoctorNameByIdUsingPatch(
        id?: number,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/DoctorController/getDoctorName',
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
     * getLoginUserUsingGet
     * @param dId d_id
     * @returns number OK
     * @throws ApiError
     */
    public static getLoginUserUsingGetUsingGet1(
        dId?: number,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/DoctorController/getLoginUserUsingGet',
            query: {
                'd_id': dId,
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
     * @param dId d_id
     * @returns number OK
     * @throws ApiError
     */
    public static getLoginUserUsingGetUsingHead1(
        dId?: number,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/DoctorController/getLoginUserUsingGet',
            query: {
                'd_id': dId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getLoginUserUsingGet
     * @param dId d_id
     * @returns number OK
     * @returns any Created
     * @throws ApiError
     */
    public static getLoginUserUsingGetUsingPost1(
        dId?: number,
    ): CancelablePromise<number | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/DoctorController/getLoginUserUsingGet',
            query: {
                'd_id': dId,
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
     * @param dId d_id
     * @returns number OK
     * @returns any Created
     * @throws ApiError
     */
    public static getLoginUserUsingGetUsingPut1(
        dId?: number,
    ): CancelablePromise<number | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/DoctorController/getLoginUserUsingGet',
            query: {
                'd_id': dId,
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
     * @param dId d_id
     * @returns number OK
     * @throws ApiError
     */
    public static getLoginUserUsingGetUsingDelete1(
        dId?: number,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/DoctorController/getLoginUserUsingGet',
            query: {
                'd_id': dId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getLoginUserUsingGet
     * @param dId d_id
     * @returns number OK
     * @throws ApiError
     */
    public static getLoginUserUsingGetUsingOptions1(
        dId?: number,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/DoctorController/getLoginUserUsingGet',
            query: {
                'd_id': dId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * getLoginUserUsingGet
     * @param dId d_id
     * @returns number OK
     * @throws ApiError
     */
    public static getLoginUserUsingGetUsingPatch1(
        dId?: number,
    ): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/DoctorController/getLoginUserUsingGet',
            query: {
                'd_id': dId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * addDoctor
     * @param dId
     * @param name
     * @param pw
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static addDoctorUsingGet(
        dId?: number,
        name?: string,
        pw?: string,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/DoctorController/insertDoctor',
            query: {
                'd_id': dId,
                'name': name,
                'pw': pw,
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
     * addDoctor
     * @param dId
     * @param name
     * @param pw
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static addDoctorUsingHead(
        dId?: number,
        name?: string,
        pw?: string,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/DoctorController/insertDoctor',
            query: {
                'd_id': dId,
                'name': name,
                'pw': pw,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * addDoctor
     * @param dId
     * @param name
     * @param pw
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static addDoctorUsingPost(
        dId?: number,
        name?: string,
        pw?: string,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/DoctorController/insertDoctor',
            query: {
                'd_id': dId,
                'name': name,
                'pw': pw,
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
     * addDoctor
     * @param dId
     * @param name
     * @param pw
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static addDoctorUsingPut(
        dId?: number,
        name?: string,
        pw?: string,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/DoctorController/insertDoctor',
            query: {
                'd_id': dId,
                'name': name,
                'pw': pw,
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
     * addDoctor
     * @param dId
     * @param name
     * @param pw
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static addDoctorUsingDelete(
        dId?: number,
        name?: string,
        pw?: string,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/DoctorController/insertDoctor',
            query: {
                'd_id': dId,
                'name': name,
                'pw': pw,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * addDoctor
     * @param dId
     * @param name
     * @param pw
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static addDoctorUsingOptions(
        dId?: number,
        name?: string,
        pw?: string,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/DoctorController/insertDoctor',
            query: {
                'd_id': dId,
                'name': name,
                'pw': pw,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * addDoctor
     * @param dId
     * @param name
     * @param pw
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static addDoctorUsingPatch(
        dId?: number,
        name?: string,
        pw?: string,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/DoctorController/insertDoctor',
            query: {
                'd_id': dId,
                'name': name,
                'pw': pw,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * updateDoctor
     * @param dId
     * @param name
     * @param pw
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static updateDoctorUsingGet(
        dId?: number,
        name?: string,
        pw?: string,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/DoctorController/updateDoctor',
            query: {
                'd_id': dId,
                'name': name,
                'pw': pw,
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
     * updateDoctor
     * @param dId
     * @param name
     * @param pw
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static updateDoctorUsingHead(
        dId?: number,
        name?: string,
        pw?: string,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'HEAD',
            url: '/api/DoctorController/updateDoctor',
            query: {
                'd_id': dId,
                'name': name,
                'pw': pw,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * updateDoctor
     * @param dId
     * @param name
     * @param pw
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static updateDoctorUsingPost(
        dId?: number,
        name?: string,
        pw?: string,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/DoctorController/updateDoctor',
            query: {
                'd_id': dId,
                'name': name,
                'pw': pw,
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
     * updateDoctor
     * @param dId
     * @param name
     * @param pw
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static updateDoctorUsingPut(
        dId?: number,
        name?: string,
        pw?: string,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/DoctorController/updateDoctor',
            query: {
                'd_id': dId,
                'name': name,
                'pw': pw,
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
     * updateDoctor
     * @param dId
     * @param name
     * @param pw
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static updateDoctorUsingDelete(
        dId?: number,
        name?: string,
        pw?: string,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/DoctorController/updateDoctor',
            query: {
                'd_id': dId,
                'name': name,
                'pw': pw,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * updateDoctor
     * @param dId
     * @param name
     * @param pw
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static updateDoctorUsingOptions(
        dId?: number,
        name?: string,
        pw?: string,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'OPTIONS',
            url: '/api/DoctorController/updateDoctor',
            query: {
                'd_id': dId,
                'name': name,
                'pw': pw,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * updateDoctor
     * @param dId
     * @param name
     * @param pw
     * @param role
     * @returns any OK
     * @throws ApiError
     */
    public static updateDoctorUsingPatch(
        dId?: number,
        name?: string,
        pw?: string,
        role?: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/DoctorController/updateDoctor',
            query: {
                'd_id': dId,
                'name': name,
                'pw': pw,
                'role': role,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
