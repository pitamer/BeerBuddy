<h1 align="center">BeerBuddy</h1>

<p align="center">

<img src="https://img.shields.io/badge/made%20by-pitamer-success.svg" >

<img src="https://awesome.re/badge.svg">

<img src="https://img.shields.io/badge/Open%20Source-♥-pink.svg" >

<img src="https://img.shields.io/badge/react-16.13-blue.svg">

<img src="https://img.shields.io/github/stars/pitamer/BeerBuddy.svg?color=blueviolet">

<img src="https://img.shields.io/github/languages/top/pitamer/BeerBuddy.svg?color=yellow">

</p>

<p align="center">
<em>A Cheerful App to Beer You Up</em>
<p>

<h2 align="center"><a  href="https://BeerBuddy.xyz">Live Demo</a></h2>

---

## Description

<p align="center">

A React website for the best fictional beer company in the observable universe. It uses [PunkAPI](https://punkapi.com/) to get beers. Made by this humble self-taught programmer in hopes of landing the job he desires.

## License

I believe in open source. As with all of my other open-source projects, this one is effectively uncopyrighted. However, in compliance with the subject matter, I've decided to include the Beerware license. It's as permissive as it gets, plus it involves beer.

## Usage

### AppBar

always stays on the top of the page, and allows users to navigate between browsing the beer catalogue and inspecting their favorite beers.

### Browse

The initial page users see, where they can browse the first 100 beers supplied by PunkAPI. Each beer card has a modal with more info that opens when the card is clicked, and an option to add this beer to favorites. There's also a mini-header with two search options: search by food pairing (default, as per spec) or by beer name (not listed in specification, but I thought it would make a useful addition). upon input to the search field, the results are automatically updated to include only beers that fit the user's search.

### Favorites

This page only shows beers the user marked as favorites. Each beer also has a raiting option, that allows the user to rate a beer from 1 to 5. The option to toggle favorite apears, but upon clicking it, the user is asked to confirm removing this beer from favorites, with an option to see the beer's modal again. There is no mini-header for search.

<br>

# Technical Aspects

## Project setup

```
npm install
npm start
```

## Folder Structure

```
src
 |-App
 | |-Beer
 | | |-AddToFavorites
 | | | |-WarningDialog
 | | |-Modal
 | | |-Rating
 | |-Browse
 | | |-SearchHeader
 | |-Favorites
 | |-Header
 |-store
 |-utils
```

## State Management

I chose to manage state with [MobX](https://mobx.js.org/), learning and using it for the first time. Before this project, I've mostly used [Redux](https://redux.js.org/) for state management. However, having used [Easy-Peasy](https://easy-peasy.now.sh/) (which I love) in my last couple of projects, I got a bit rusty with Redux. Seeing that the specification for the project listed MobX or Redux as a must, I thought, "heck, I should probably give MobX A try sometime anyway". I don't regret it one bit - MobX is awesome! I'll probably use it more in the future.

## Routing

Routing is done with [React Router](https://reactrouter.com/), and is quite simple. there are two routes:

- the initial `/` route, leading to the Browser component
- the `/favorites` route, leading to the Favorites component

## Styling

### Material-UI

Iv'e used many of Material-UI's components, including AppBar, Card, Dialog and Button. However, no component was left uncustomized :)

### CSS

As Material-UI does most of the styling heavylifting, my CSS files are pretty basic. Every component in the project has a matching CSS file, although some of them aren't used. I like to use this file structure pattern as a default.

## Bugs

Somewhere along the development process, the Browse component became pretty damn slow. I only discovered it close to submission time, so fixing it wasn't an option, but I bet it's a rather simple optimization fix.

#
<h2 align="center">Enjoy, and let me know what you think :)</h2>