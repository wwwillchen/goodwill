# Good Will CSS

## Goals

Primary goal is to learn CSS and Sass. Experimental framework.

- Responsive
- Flexbox
- Cross-browser support
- Use semantic HTML elements
- BEM naming convention

## Focus

- Use Flexboxes in a reliable way as much as possible
- Review all display and position options
- Understand floats
- Review inherit all..
- Review margin auto
- Transform & animations

## To-dos

General issues:
- Fix padding for navbar
- Add table row border (similar to Skeleton)

Mobile Issues:

- Use em for smaller text in nested media object
- Fix nav for smaller and wider screen (use flex)
- Make code-example larger width
- Forms
  - Fix padding for selection
  - Align submit and checkbox
  - Make checkbox selectable
- Make card responsive (max-width: 100%; width: 20rem)

FF Issues:

- Make text wrap for code block
- Fix font for textarea input

Safari Issues:

- Media block is overflowing to left

IE11 Issue:

- Media block; text overflows to right
- Navbar split across two lines in example (800 x 600 resolution)

Refactor

- Remove hardcode border radius
- Return comps
- CSS lint

### Testing

- Protractor to run test
- Sauce Labs for cross-browser suite
- Applitools to do diffing
- Looked at Instadiff (not sure how to do cross-browser testing)

## Install

Install `node-sass` as an npm dep globally:
```
npm install -g node-sass
```
To compile: run `npm start`

## Inspiration
