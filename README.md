# Gilded Rose
<div align="center">

[Specification](#Specification) | [Technologies Used](#Technologies-Used ) | [Setup](#Setup) | [Running tests](#Running-tests) | [The Approach to the Guilded Rose](#The-Approach-to-the-Guilded-Rose) |
</div>

## Intro to the task

Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a
prominent city ran by a friendly innkeeper named Allison. We also buy and sell only the finest goods.
Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We
have a system in place that updates our inventory for us. It was developed by a no-nonsense type named
Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that
we can begin selling a new category of items. First an introduction to our system:

	- All items have a SellIn value which denotes the number of days we have to sell the item
	- All items have a Quality value which denotes how valuable the item is
	- At the end of each day our system lowers both values for every item

## Specification
- [x] Once the sell by date has passed, Quality degrades twice as fast
- [x] The Quality of an item is never negative
- [x] The Quality of an item is never more than 50
- [x] “Aged Brie” actually increases in Quality the older it gets
- [x] “Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
- [x] "Backstage passes", like aged brie, increases in Quality as it's SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires an update to our system:
- [x] "Conjured" items degrade in Quality twice as fast as normal items

## Technologies Used 
* JavaScript 
* Jest


## Setup

Install dependencies

```sh
npm install
```

## Running tests

To run all tests

```sh
npm test
```

To run all tests in watch mode

```sh
npm run test:watch
```

To generate test coverage report

```sh
npm run test:coverage
```
<img width="724" alt="100%  testing coverage" src="https://user-images.githubusercontent.com/57540755/80870333-a9845e80-8c9d-11ea-9d97-1f9546fa034d.png">

## The Approach to the Guilded Rose
Looking at the code I noticed a lot of nested if statements along with repetition. Before touching any of the code I created tests and made sure I got a 100% line coverage before moving on to refactoring the code. This created a safety net, if I refactored the code wrong, then it would flag where and what went wrong, from the tests.<p>
		My approach was to do the simplest steps first reducing the code by drying it up.So first step was to create functions and call them when for example the state of an item needed to be updated whether that be quality or Sellin date. This made it more readable along with reducing the magic numbers which we learnt about at Makers in a couple of our challenges. This is also made it readable and gave the ability to change the max quality outside of the function for example.<p>
		I created a function which returned the items being called equal to the text. This dried up the code making it easier to see what was being called. Also, I was able to separate the if statement out into each of the items rather then being compared to each other.
	When I felt there wasn't anymore refactoring steps, I then created the method for the  "Conjured" items, which was easier due to the methods already being set up. I created tests as well to make sure the method worked correctly the way I wanted it to. I done this last otherwise it would've created more confusion during the refactor stage.



