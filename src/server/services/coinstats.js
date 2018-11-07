import coinstatsModel from '../models/coinstats';

async function getCoinstats() {
  return await coinstatsModel.find();
}

async function createCoinstats(data) {
  const {
    name,
    symbol,
    slug,
    cmc_rank,
    num_market_pairs,
    circulating_supply,
    total_supply,
    max_supply,
    quote
  } = data;
  let coinstats = new coinstatsModel({
    name,
    symbol,
    slug,
    cmc_rank,
    num_market_pairs,
    circulating_supply,
    total_supply,
    max_supply,
    quote
  });
  return await coinstats.save();
}

async function removeCoinstats() {
  return await coinstatsModel.remove({});
}

export { getCoinstats, createCoinstats, removeCoinstats };
