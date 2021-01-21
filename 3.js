//Написать функцию, которая создает пустой объект, но без прототипа.
function createObjWithoutPrototype() {
  return Object.create(null);
}