import axios from 'axios'

class Http {
    axios = null;

    requestDefault = {
        url: '',
        method: 'get',
        baseURL: '',
        headers: {},
        params: {},
        data: {}
    };

    cancelToken = null;
    source = null;

    constructor(axios) {
        this.axios = axios;
        this.cancelToken = axios.CancelToken;
    }

    install(Vue) {
        Vue.prototype.$http = this;
    }

    send() {
        this.source = this.cancelToken.source();
        let params = {
            url: '',
            method: 'get',
            baseURL: '',
            /*
            transformRequest: [function (data, headers) {
                // Do whatever you want to transform the data

                return data;
            }],
            */
            // `transformResponse` allows changes to the response data to be made before
            // it is passed to then/catch
            /*transformResponse: [function (data) {
                // Do whatever you want to transform the data

                return data;
            }],*/

            //headers: {'X-Requested-With': 'XMLHttpRequest'},
            params: {},
            /*paramsSerializer: function (params) {
                return Qs.stringify(params, {arrayFormat: 'brackets'})
            },*/
            data: {},
            //timeout: 1000, // default is `0` (no timeout)
            //withCredentials: false, // default
            /*
            adapter: function (config) {
                //
            },

            auth: {
                username: 'janedoe',
                password: 's00pers3cret'
            },
            responseType: 'json', // default
            responseEncoding: 'utf8', // default
            xsrfCookieName: 'XSRF-TOKEN', // default
            xsrfHeaderName: 'X-XSRF-TOKEN', // default

            onUploadProgress: function (progressEvent) {
                // Do whatever you want with the native progress event
            },

            onDownloadProgress: function (progressEvent) {
                // Do whatever you want with the native progress event
            },

            validateStatus: function (status) {
                return status >= 200 && status < 300; // default
            },
            maxRedirects: 5, // default
            socketPath: null, // default
            httpAgent: new http.Agent({ keepAlive: true }),
            httpsAgent: new https.Agent({ keepAlive: true }),

            proxy: {
                host: '127.0.0.1',
                port: 9000,
                auth: {
                    username: 'mikeymike',
                    password: 'rapunz3l'
                }
            },*/
            cancelToken: this.source.token
        };

        return this.axios(params);
    }

    cancel(msg = 'Operation canceled') {
        this.source || this.source.cancel(msg);
    }
}