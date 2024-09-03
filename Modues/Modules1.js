import { multiply } from "./Modules.js";
import dayjs from 'https://cdn.jsdelivr.net/npm/dayjs@1.11.13/+esm'
console.log(1);
console.log(2);

const ele=document.body;
let s=`2*2*2*2=${multiply(4,2,2)}`;
var now=dayjs().format("DD-MM-YYYY");
console.log(now);
ele.innerText=s;