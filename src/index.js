module.exports = function getZerosCount(number) {
  zerosCount = 0;
  while(number > 0){
  number = Math.floor(number / 5);
  zerosCount += number;
  }
  return zerosCount;
}
