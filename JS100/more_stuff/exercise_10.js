/**
 * Consider this code:

> let x = "5"
> x = x + 1
= "51"

Now, consider this code:

> let y = "5"
> y++

What gets returned by y++ in the second snippet, and why?

> y++ returns 5. 5 gets coerced into a number by JavaScript when performing numerical operations
on it. y++ is a post-increment operator, which means the original value gets returned. Subsequent calls of y
would return 6, unlike the pre-increment operator ++y, where 6 would be returned.
 */

