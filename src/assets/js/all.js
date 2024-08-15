// jQueryの読み込み
import $ from 'jquery'
import { setupCounter } from "./counter";
import { jquerySetUpCounter } from "./jquerySetUpCounter";


setupCounter(document.querySelector('#counter'));
jquerySetUpCounter($('#jquery-button'));

