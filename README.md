## An Embedded Screenshot of the App

![Screen Shot of App](https://raw.githubusercontent.com/kailinc/mango-bytes-client-backup/master/assets/img/mango-bytes-screen-shot.png)

## Links

API Repository: https://github.com/kailinc/mango-bytes-api
Deployed API: https://damp-hamlet-57878.herokuapp.com/
Deployed Application:https://kailinc.github.io/mango-bytes-client-backup/

## Explanations of the Technologies Used

- Handlebars.js
  - I used Handlebars.js for rendering data from the API onto the client.
- Amazon Web Services
  - I used AWS for hosting pictures of different items. Each item has a link to the
  - img hosted on AWS, which I was able to use with Handlebars to render img and information
  - about each item.
- BootStrap
  - I used BootStrap for styling purposes. I used modals, forms, and the container, row, column system
  - for the basic html design of the website.

## A couple paragraphs about the general approach you took

On my previous project, Airkicks, I did a lot of whiteboarding and planning before
diving into any coding. That development process was productive and efficient, so for
this project I was also very methodial and organized at every step of the way instead of
improvising as I go.

At first, I wanted to incorprate React.js into this project because React.js is the perfect
tool in the project. I wanted this app to dynamically update based on users adding items and
different quantities to their cart. The major problem and reason I did not incoroporate React
into this project was because I started learning React 3 days before starting this project.
I understand the concept and how to user React.js, but the problem was that there were
so many other tools that I needed to use inconjunction with React.js. How do I incorporate
Redux? React Router? BootStrap? Stripe? With the time constraint of 1 week and moving my apartment,
it is highly unlikely that I learn the technologies required as I go and
meet basic requirements. I decided to use Vanilla JavaScript instead and found a
way to do data binding.

For the first four days, everything was going perfectly. I would whiteboard and think
of the best way to tackle each feature of the website. I felt that the code itself
was not too difficult to write. There was just a lot of code to write and not enough
time or people. I had a plan of action for each coding session. As I go I would make new plans
of action. This was a very good practice to keep me focused and know what I needed to do.

Closer towards submission, I had to make a lot of compromises on my project. I didn't
have enough time to integrate Stripe API for payment. I also didn't have enough time
to add the neat feature of data binding and dynamic UI I wanted. I was facing a weird
issue with AJAX request for updating item quantity and removing items from cart, so
I made it that you can only buy items in quantity of 1 each time.

## Installation instructions for any dependencies

1. npm install

## Link to your user stories – who are your users, what do they want, and why?

1. As a user, I want to add Items to cart so I can buy it.
2. As a user, I want to remove Items to cart so I won't buy it.
3. As a user, I want to successfully pay with a secure payment method so I can buy it.
4. As a user, I want to view updates to my profile so I feel better about my coding skills.
5. As a user, I want to change my password so I save myself from hackers.
6. As a user, I want to sign up so I can buy items.
7. As a user, I want to sign in, so I can see my profile.
8. As a user, I want to be on a dynamic, UI website so I can have a good experience.

## Link to your wireframes – sketches of major views / interfaces in your applicatio4

https://drive.google.com/drive/folders/0Bxg3M0KoMGmAbDJEbVR0VDliUjQ?usp=sharing

## Descriptions of any unsolved problems or major hurdles you had to overcome

# Major Hurdle

 A major hurdle was displaying items information of a cart. In the API, the
 schema for carts is that there is an attribute isPaid (boolean) and attribute products,
 that is an array of items object. An item object has the item id and quantity (numbers).
 I had to write a function that would send AJAX GET request for each item for its full
 information and store it. Then I would have to render it on the client side. None of this
 was hard. The interesting part is that how I initialied saved it in a pojo, it was saved in a weird
 data structure. I thought it was stored as an array of items object, but after closer inspection
 with Google Chrome's Inspect Element there was a funky data structure going on. It would display
 as an empty array, but after I opened it I would get the items object. I fixed this by saving it
 in an array and passing it to handlebars.

# Unsolved Problems

Towards the last few days, I was facing a weird error with AJAX and Mongoose API. AJAX request for updating carts won't work. However, curl scripts would work. The error message was along the lines
that Mongoose makes a new document for each items object in the array and it does not like that, so
it won't update a cart. Because of this error, I was not able to have a feature that updates the quantity
of an item and hae the feature of removing a single item from the cart. However, it is ok for me
to add new items to the cart.

## Future Features to Come

- Stripe API for payment
- Updating Quantity of different items
- bulk loading more items (drones, stickers, t-shirts)
- search bar for items
- promotion bar
- CodeFight API, CodeWars API, GitHUB API for accessing an user's coding skills
- Data binding for carts, and user profiles
- Adding Super Powers (items) to be sold on the website
- Better UI design
