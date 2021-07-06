"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getAllListings = require("./getAllListings");

var _getListing = require("./getListing");

var _addViewToListing = require("./addViewToListing");

var _getUserListings = require("./getUserListings");

var _createNewListings = require("./createNewListings");

var _updateListing = require("./updateListing");

var _deleteListing = require("./deleteListing");

var _files = require("./files");

var _default = [_getAllListings.getAllListingsRoute, _getListing.getListingsRoute, _addViewToListing.addViewToListingRoute, _getUserListings.getUserListingsRoute, _createNewListings.createNewListingRoute, _updateListing.updateListingRoute, _deleteListing.deleteListingRoute, _files.staticFilesRoute, _files.filesRoutes];
exports["default"] = _default;