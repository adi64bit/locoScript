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

an example, we want to handle scroll event to navbar.
```javascript
yourVariable.onScroll(function(arg){
  if(yourVariable.locoStatus){
    navbar(arg[0].delta.y);
  } else {
    navbar($(window).scrollTop());
  }
});

var lastScrollTop = 0;
var delta = 50;
var selector = $('header#headerNavigation');
var selector2 = $('body');
var electorHeight = selector.outerHeight();

function navbar(st) {
  scrollTop = st;
  if (Math.abs(lastScrollTop - scrollTop) <= delta)
    return;
  if (scrollTop > lastScrollTop && scrollTop > selectorHeight) {
    selector.addClass('scroll-top');
    selector2.addClass('scroll-top');
  } else {
    if (scrollTop + $(window).height() < $(document).height()) {
      selector.removeClass('scroll-top');
      selector2.removeClass('scroll-top');
    }
  }
  if (scrollTop > 80) {
    selector.addClass('scrolled');
    selector2.addClass('scrolled');
  } else {
    selector.removeClass('scrolled');
    selector2.removeClass('scrolled');
  }
  lastScrollTop = scrollTop;
};
```


> the file size is just 2kb, and it's not dig your browser harder

Happy Happy
