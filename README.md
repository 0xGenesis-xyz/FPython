# FPython

## introduction

1.	We simplified the python grammar such as eliminating the float number because Antlr, the parser library we used lacks documents seriously. We've tried to implement a parser and lexer by ourselves, but it's so complicated that costs our so much time and works poorly, and then we turn to Antlr in desperation.
2.	The scope of python is determined by the white space at the head of each line, which requires special processing compared to it in C or Java.
3.	Arithmetic and logic operation are supported finely, so you can play it as a python-liked calculator.
4.	Have fun!

## Run the Server
```
$ python -m SimpleHTTPServer 8000
```

## TODO

3. float number
4. function define
5. list comprehension

## implemented

1. if
2. for
3. arith, logic
4. string, concatation
5. list, concatation
6. print
