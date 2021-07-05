// import { db } from "../database";

// export const getAllListingsRoute = {
//     method: 'GET',
//     path: '/api/listings',
//     handler: async(req,h) => {
//         // to query from the db to get all the record listing
//         const {results} = await db.query(
//             'SELECT * FROM listings'
//         )
//         return results
//     }
// }

import { db } from '../database';

export const getAllListingsRoute = {
    method: 'GET',
    path: '/api/listings',
    handler: async (req, h) => {
        const { results } = await db.query(
            'SELECT * FROM listings'
        );
        return results;
    }
}