'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var transactionSchema = Schema( {
    Description: String,
    Amount: Number,
    Category: String,
    Date: Date,
    userId: {type:ObjectId, ref:'user' }
  } );
  
module.exports = mongoose.model( 'TransactionItem', transactionSchema );

