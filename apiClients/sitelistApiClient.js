
// example of a REST call

// We should refactor the URL assembly code so that all our calls can use ut
import { URL } from 'url';
import axios from 'axios';

const BASE_URL = 'http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/';
const API_KEY = 'bf5f5026-1766-49c3-9d9f-aff7ae95a8e6';

export default class SitelistApiClient {
    requestUrl(endpoint) {
        const requestUrl = new URL(endpoint, BASE_URL);
        requestUrl.searchParams.append("key", API_KEY);
        return requestUrl.href;
    }

    getLocations() {
            return axios.get(this.requestUrl('sitelist')).then(              
                result => result.data.Locations.Location
            );
    }
}