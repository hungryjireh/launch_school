/* 
Will this program produce an error when run? Why or why not?


const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

> It will not, as const FOO = 'qux' is defined in a separate scope, hence
an error would not occur.
*/