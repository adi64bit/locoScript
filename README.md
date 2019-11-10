# locoScript
Easy way to use locomotive :)

## Feature
it's automatically destroy when it's on mobile, and you don't need to worry about "onScroll" function that you have been made. it's also convert to '$(window)' scroll!.

it's also not calling the locomotive if the library is not loaded. it's mean you can exclude the locomotive library on mobile, like i said above, the on scroll will be converted to '$(window)' scroll.

it's can handle hash url and it's also flexible with lazysizes. :)
> Bye white gap on the footer!

## How to used it
Please see code below. (please put on document ready)

```javascript
var yourVariable = immLocomotif;
yourVariable.init('the-element'); // you can use the ID or Class (#element or .the-element)
```

## onScroll Event
Below is how to use scroll event

```javascript
var yourVariable = immLocomotif;
yourVariable.init('the-element'); // you can use the ID or Class (#element or .the-element)

yourVariable.onScroll(function(arg){
  if(yourVariable.locoStatus){
    // put here your code when using locomotive scroll
  } else {
    // put here your code when using window scroll
  }
});

```
if you need to get the scroll event result, try to console.log(arg).


> the file size is just 2kb, and it's not dig your browser harder

Happy Happy
