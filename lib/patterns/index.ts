export const simpleNumbersOnly = /^\d*$/;
export const decimalNumbers = /^\d*(\.)?\d{1,20}$/;
export const cyrrillicsOnly = /^[ а-яА-ЯёЁ]*$/;
// Standart email validation that matches almost all email formats
// eslint-disable-next-line
export const emailPattern = /^[a-zA-Zа-яА-Я0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Zа-яА-Я0-9](?:[a-zA-Zа-яА-Я0-9-]{0,61}[a-zA-Zа-яА-Я0-9])?(?:\.[a-zA-Zа-яА-Я0-9](?:[a-zA-Zа-яА-Я0-9-]{0,61}[a-zA-Zа-яА-Я0-9])?)*$/;
export const phoneNumber = /^\+?\d(\(\d{0,3}\)|\d{0,3})(\d{3})(-(\d{2})-(\d{2})|(\d{4}))$/;
export const datePattern = /^\d{2}\.\d{2}\.\d{4}$/;
export const isEmptyPattern = /\w+/g;
