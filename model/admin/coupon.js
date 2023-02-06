const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require("moment");
const ObjectId = Schema.ObjectId;
const couponSchema = new Schema(
  {
    couponName: {
      type: String,
      required: true,
    },
    discount: {
      type: Number,
     
    },
    maxLimit: {
      type: Number,
     
    },
    startDate: {
      type: String,
      default:
        moment().format("DD/MM/YYYY") + ";" + moment().format("hh:mm:ss"),
    },
    expirationTime: {
      type: String,
    },
    users: [ ],
  },
  {
    timestamps: true,
  }
);
const coupon = mongoose.model("coupon",couponSchema);
module.exports = coupon;