// jQueryの読み込み
import $ from 'jquery'

export function jquerySetUpCounter(elm) {
  let counter = 0;

  const setCounter = (count) => {
    counter = count
    $(elm).html(`jQuey count is ${counter}`)
  }

  $(elm).click(() => {
    setCounter(counter + 1);
  })
  setCounter(0)
}