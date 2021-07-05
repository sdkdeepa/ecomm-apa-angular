import { db } from '../database';

export const deleteListingRoute = {
    method: 'DELETE',
    path: '/api/listings/{id}',
    handler: async (req, h) => {
        const id = req.params.id
        // to increment the number of views to a particular id with the above url
        await db.query(
            'DELETE FROM listings WHERE id=?',
            [id],
        )
        return {message: 'Sucess !'}
    }
}