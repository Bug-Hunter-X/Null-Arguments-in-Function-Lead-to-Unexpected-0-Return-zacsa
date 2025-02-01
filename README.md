# JavaScript Bug: Unexpected 0 Return with Null Arguments

This repository demonstrates a subtle bug in a JavaScript function that handles null arguments unexpectedly. The `foo` function is intended to add two numbers, but it returns 0 when either or both arguments are null. This behavior might not be immediately obvious and could lead to unexpected results in a larger application. 

## Bug Description

The `foo` function uses loose equality (`===`) to check for null arguments. While this works, it might not be intuitive.  The function should explicitly handle the cases where arguments are null or undefined, ensuring clear and predictable behavior.

## Solution

The solution involves using stricter checks to determine whether the arguments are numbers and adding error handling to make the result of null input consistent and intuitive.