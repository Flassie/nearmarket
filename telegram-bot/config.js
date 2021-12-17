require('dotenv').config();

const nearApi = require('near-api-js');

const NETWORK =  process.env.NETWORK;
const BOT_TOKEN = process.env.BOT_TOKEN;
const BOT_NAME = process.env.BOT_NAME;
const CONTRACT = process.env.CONTRACT;
const SERVER_URL = 'http://localhost:3000'
const RPC = `https://rpc.${NETWORK}.near.org`;
const CALLBACK_URL = `https://t.me/${BOT_NAME}`;
const PROVIDER = new nearApi.providers.JsonRpcProvider({url: RPC})


module.exports = {
    NETWORK,
    BOT_TOKEN,
    BOT_NAME,
    CONTRACT,
    RPC,
    CALLBACK_URL,
    PROVIDER,
    SERVER_URL
}