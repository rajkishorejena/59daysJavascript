// Today's Goals (Recursion) :

// -Learn the fundamentals of Recursion

// Question 1: k-th symbol in Grammar: We build a table of n rows (1-indexed). We start by writing 0 in the 1st row. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.
// For example, for n = 3, the 1st row is 0, the 2nd row is 01, and the 3rd row is 0110.
// Given two integer n and k, return the kth (1-indexed) symbol in the nth row of a table of n rows.

// Question 2: Josephus problem: There are n friends that are playing a game. The friends are sitting in a circle and are numbered from 1 to n in clockwise order. More formally, moving clockwise from the ith friend brings you to the (i+1)th friend for 1 <= i < n, and moving clockwise from the nth friend brings you to the 1st friend.
// The rules of the game are as follows:
// 1.Start at the 1st friend.
// 2.Count the next k friends in the clockwise direction including the friend you started at. The counting wraps around the circle and may count some friends more than once.
// 3.The last friend you counted leaves the circle and loses the game.
// 4.If there is still more than one friend in the circle, go back to step 2 starting from the friend immediately clockwise of the friend who just lost and repeat.
// 5.Else, the last friend in the circle wins the game.
// Given the number of friends, n, and an integer k, return the winner of the game.
