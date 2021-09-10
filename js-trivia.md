1. What is a potential pitfall with using `typeof bar === "object"` to determine if bar is an object? How can this pitfall be avoided?
> First of all, null is an object. So if someone is expecting actual data in the form of an object, map, set, array, etc, and they run a check to see if it's simply an object to run some code, a null value will pass that logic check. It also doesn't just mean a Javascript object, like the curly brace kind, it's the abstract object. 

2. 