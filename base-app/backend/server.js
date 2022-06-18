"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const os_1 = __importDefault(require("os"));
let app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send(`The Hostname is : ${os_1.default.hostname}`);
});
app.listen(3000, () => {
    console.log(`Server is listening on port 3000`);
});
