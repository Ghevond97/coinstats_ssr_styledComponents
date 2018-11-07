import mongoose from 'mongoose';

let Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

let coinstats = new Schema(
  {
    name: {
      type: String
    },
    symbol: {
      type: String
    },
    slug: {
      type: String
    },
    cmc_rank: {
      type: Number
    },
    num_market_pairs: {
      type: Number
    },
    circulating_supply: {
      type: Number
    },
    total_supply: {
      type: Number
    },
    max_supply: {
      type: Number
    },
    quote: {
      type: Object
    }
  },
  { versionKey: false }
);

let coinstatsModel = mongoose.model('coinstats', coinstats);

export default coinstatsModel;
