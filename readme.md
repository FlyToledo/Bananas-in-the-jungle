# Looking for Bananas in the Monkeys island 

Given a Jungle in the middle of an island of n*m dimensions. Each field in this jungle contains a
positive integer which is the amount of bananas that exist in that field. Initially the monkey is at first
column but can be at any row. The monkey can move only **(right->,right up /,right down\)** from a given
cell. Find out the maximum amount of bananas they can collect.


## Input/Output Examples:
```
Input : mat[][] = {
    {1, 3, 3},
    {2, 1, 4},
    {0, 6, 4}
};
```

```
{(1,0)->(2,1)->(2,2)}
```
**Output : 12**

```
Input: mat[][] = { 
    {1, 3, 1, 5},
    {2, 2, 4, 1},
    {5, 0, 2, 3},
    {0, 6, 1, 2}
};
```
```
{(2,0) -> (1,1) -> (1,2) -> (0,3)} OR
{(2,0) -> (3,1) -> (2,2) -> (2,3)} 
``` 
**Output: 16**

```
Input: mat[][] = {
    {10, 33, 13, 15},
    {22, 21, 04, 1},
    {5, 0, 2, 3},
    {0, 6, 14, 2}
};
```
**Output: 83**


# Getting started
- Clone the repository
```
git clone  <git lab template url> <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Test the project
```
npm test
```

 # How to use
 ```
 const traverse = require('./index');

 const input145 = [
    [10, 33, 13, 15],
    [22, 21, 4, 1],
    [5, 0, 99, 3],
    [0, 6, 15, 2]
];

traverse.traverseWithMoreBananas(input145);
```
# Big O notation
## Time Complexity
**O(N\*M\*3)** => **O(N\*M)** where N and M are the dimensions of the matrix

## Space Complexity
**O(1)**

Thought process [here](https://drive.google.com/file/d/1t7O4zGEuRWy1Vu3KUACBLo2yB66bYIk8/view?usp=drivesdk).

