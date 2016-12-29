'use strict';

var me = {
  firstname:'Mehri',
  lastname: 'Russo',
  address: {
    street: 'APT C',
    city: 'Boulder',
    state: 'CO'
  }
};

function greet(person) {
  console.log('Hi ' + person.firstname);
}

greet(me);

greet({
  firstname: 'Jack',
  lastname: 'Russo'
});
