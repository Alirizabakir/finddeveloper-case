import API from '../utils/service';
import JobPostings from '@/mocks/job-postings.json'
import Partners from '@/mocks/partners.json'
import JobPostingsForYou from '@/mocks/job-postings-for-you.json'
import PopularSearches from '@/mocks/popular-searches.json'

export const Action_Start = (method, url, target, payload, params) => {
    return async (dispatch) => {
        try {
            let response = await API[method](url);
            switch (target) {
                case 'JobPostings':
                    return dispatch({type: target, payload: JobPostings.data});
                case 'Partners':
                    return dispatch({type: target, payload: Partners.data});
                case 'JobPostingsForYou':
                    return dispatch({type: target, payload: JobPostingsForYou.data});
                case 'PopularSearches':
                    return dispatch({type: target, payload: PopularSearches.data});
                default:
                    return response
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
};