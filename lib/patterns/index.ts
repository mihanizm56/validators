export const simpleNumbersOnly = /^\d+$/;
export const decimalNumbers = /^\d*(\.)?\d{1,20}$/;
export const cyrrillicsOnly = /^[ а-яА-ЯёЁ]+$/;
export const emailPattern = /^[a-zA-Z0-9_.+-]{1,20}@[a-zA-Z0-9-]{1,10}\.[a-zA-Z0-9-.]{1,10}$/;
export const phoneNumber = /^\+?\d(\(\d{0,3}\)|\d{0,3})(\d{3})(-(\d{2})-(\d{2})|(\d{4}))$/;
export const datePattern = /^\d{2}\.\d{2}\.\d{4}$/;
export const isEmptyPattern = /\w+/g;
