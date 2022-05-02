/* 
What happens when you run the following code? Why?

const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

>
Good Morning, Victor
Good Afternoon, Victor
Good Evening, Victor

There will be an error thereafter, because NAME is a constant and
cannot be reassigned after being declared.
*/