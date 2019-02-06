import { IUserState } from 'src/containers/User';

export const REQUEST_TYPES = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH'
};

// a request helper which reads the access_token from the redux state and passes it in its HTTP request
export default async function apiRequest(
    url: string,
    body: any,
    user: IUserState,
    method?: string
) {
    if (method === null || method === undefined) method = REQUEST_TYPES.GET;
    const headers = new Headers();
    // const userId = user === null ? '' : user.id;
    // headers.append('UserId', userId);
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${user.token}`);
    const stringifiedBody =
        body === null || body === undefined ? null : JSON.stringify(body);

    const options = {
        method,
        headers,
        body: stringifiedBody
    };

    const response = await fetch(url, options);

    if (response.ok) {
        return parseJSON(response) as Promise<any>;
    } else {
        return pareError(response);
    }
}

const parseJSON = (response: any) => {
    return response.text().then((text: string) => {
        return text ? JSON.parse(text) : {};
    });
};

const pareError = (response: any) => {
    return response.text().then((error: string) => {
        let fetchError: string;
        fetchError = error;
        // ? error
        // : JSON.stringify({
        //       httpStatusCode: response.status,
        //       errorId: null,
        //       lpuErrorCode: null,
        //       message: ''
        //   } as IResponseError);
        throw new Error(fetchError);
    });
};
