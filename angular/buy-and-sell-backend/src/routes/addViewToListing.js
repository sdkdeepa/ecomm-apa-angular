import { db } from "../database";

export const addViewToListingRoute = {
    method: 'POST',
    path: '/api/listings/{id}/add-view',
    handler: async (req, h) => {
        const id = req.params.id
        // to increment the number of views to a particular id with the above url
        await db.query(
            'UPDATE listings SET views=views+1 WHERE id=?',
            [id],
        )

        const {results} = await db.query(
            'SELECT * FROM listings WHERE id=?',
            [id],
        )
        // send updated listing to client with the views updates
        const updatedListing = results[0]
        return updatedListing
    }
}