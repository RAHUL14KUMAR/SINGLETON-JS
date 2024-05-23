"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = void 0;
const store_1 = require("./store");
// import { games } from "./store";
function startLogger() {
    setInterval(() => {
        console.log(store_1.gameManager.games);
    }, 4000);
}
exports.startLogger = startLogger;
