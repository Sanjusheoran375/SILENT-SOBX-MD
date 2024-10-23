const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "4CljAKiQ#9Fr5wJ5Ja0HOTIULLZk1If-x9LNX-rgrYmUx5J5Jf6Y",
MONGODB: process.env.MONGODB || "mongodb://mongo:pKyCadvhhqTTmcHsClnKceLGsbbfbDpt@junction.proxy.rlwy.net:50116",
};
