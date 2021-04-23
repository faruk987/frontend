import { get, post, put, destroy } from './base';

export const Team = {
    // basic CRUD API usage

    index: () =>
        get('api/team'),
    single: (id) =>
        get(`/api/team/${id}`),

    // basic CRUD examples

    // create: (params) =>
    //     post('/users', params),
    // update: (id, params) =>
    //     put(`/users/${id}`, params),
    // remove: (id) =>
    //     destroy(`/users/${id}`),

    // specific API usage

    // single: (id) =>
    //     get(`/users/${id}`),
    // singleByEmail: (email) =>
    //     get(`/users?email=${email}`),
};