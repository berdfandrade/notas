# Initialization of variables 

When the variables in the example above are declared, they have an undertemined value until they are assigned a value for the first time. But it is possible for a variable to have a specific value from the moment it its declared. This is called the _initialization_ of the variable. 

In C++, there are three ways to initialize variables. THey are all equivalent and are reminiscent of the evolution of the language over the years:

The first one, know as _c-like initialization_ (because it is inherited from the C language), consists of appending an equal sign followed by the value to which the variable is initialized: 

`type identifier = initial_value;`

For example, to declare a variable of type `int` called `x` and initialize it to a value of zero from the same moment it is declared, we can write: `int x = 0;`.

A second method, known as _constructor initialization_ (introduced by the C++ language) encloses the initial value between parentheses (()): `int x (0);`

Finally, a third method know as _uniform initialization_, similar to the above, but using curly braces ({}) instead of parentheses (this was introduced by the revision of the C++ standard, in 2011):

`type identifier {initial_value};` For example: 

`int x{0};`

All three ways of initializing variables are valid and equivalent in C++.

```c++ 
// initializaion of variables

#include <iostream>
using namespace std; 

int main () 
{
    int a = 5;  // initial value: 5 
    int b(3);   // initial value: 3 
    int c{2};   // initial value: 2
    int result; 
    
    a = a + b;
    result = a - c; 
    cout << result;

    return 0;
};
```


