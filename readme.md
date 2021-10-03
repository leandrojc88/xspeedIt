# XspeedIt
XspeedIt is an imports/exports society, which has robotized its packaging line.
It wishes to find an algorithm, which enables its robots to optimize the number of packaging boxes used.
The items to be packed are different sizes, represented by an integer from 1 to 9.
Each box has a storage capacity of 10.
Hence, a box can contain, for instance, an item of size 3, an item of size 1 and an item of size 6.
The line of items to be packed is represented by a sequence of numbers, each one of them representing an item by its size.
After being processed by the packaging robot, the line is divided by the "/" to represent the items contained in a box.
Example

Line of incoming items: 163841689525773
Line of packed items: 163/8/41/6/8/9/52/5/7/73
The current packaging robot´s algorithm is quite basic.
It takes the items one after the other and puts them in a box.
If the total size surpasses the capacity of the box, the robot puts the item in the next box.
Objective
To implement an application, which makes it possible to maximize the number of items per box, by using a language that can be executed on a JVM or on node.js.
The order of boxes and items is not important.
Example
Items : 163841689525773
Current robot: 163/8/41/6/8/9/52/5/7/73 => 10 used boxes
Optimized robot: 163/82/46/19/8/55/73/7 => 8 used boxes