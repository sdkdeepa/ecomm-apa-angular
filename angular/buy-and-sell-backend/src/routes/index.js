import { getAllListingsRoute } from "./getAllListings";
import { getListingsRoute } from "./getListing";
import { addViewToListingRoute } from "./addViewToListing";
import { getUserListingsRoute } from "./getUserListings";
import { createNewListingRoute } from "./createNewListings";
import {updateListingRoute} from "./updateListing"
import { deleteListingRoute } from "./deleteListing";
import { staticFilesRoute,filesRoutes } from "./files";

export default [
    getAllListingsRoute,
    getListingsRoute,
    addViewToListingRoute,
    getUserListingsRoute,
    createNewListingRoute ,
    updateListingRoute,
    deleteListingRoute,
    staticFilesRoute,
    filesRoutes 
]