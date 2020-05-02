# Gilded Rose

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



## Getting started

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

## My Approach

