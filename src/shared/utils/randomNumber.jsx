//랜덤 숫자 생성

export const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
