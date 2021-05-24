# TodoKage

"Kage" of Todo Apps, a title bestowed generally regarded as the strongest Todo App in the realm of internet.

## Features

1. SSR and SSG using NextJS
2. Stored in persistent database (Mongo DB)
3. Authenticated and private todos (NextAuth JS)
   1. Google and Github Login 
   2. Sessions using JWT tokens
4. Data Fetching with SWR
5. Beautifully styled with Chakra-ui   
   1. Dark & Light modes
   2. Responsive   

#

## Roadmap Todo:

### Setup :: Initial Commit

- [x] Connect to Database
  - [x] Setup Middlewares using nc(next-connect)
    - [x] Error Handler
- [x] Set-up Authentication - next-auth
  - [x] Add Google Provider
  - [x] Test out sessions
  - [x] handle the nextauth callbacks 
- [x] Set-up SWR - Data Fetching
  - [x] Basic API Routes
  - [x] Global Fetcher function
  - [x] Global SWR Error Report
- [x]  Set-up Chakra-UI
  - [x] Provider
  - [x] Theming Setup
  - [x] Global Styles setup
  - [x] color mode set up
- [x] Components [ Testing purposes ]
  - [x] Home/Index
  - [x] Navbar
    ...

API Routes

1. Get -- /api/todo --> get all todos
2. POST --> /api/todo/[id] --> add/edit a todo 
3. Get a todo --> /api/todo/[id] --> get a todo
4. delete a todo --> /api/todo/[id] --> delete a todo

# 

## Design Inspiration

[1](https://dribbble.com/shots/15185058-Collection-Tasks/attachments/6927323?mode=media)

[2](https://dribbble.com/shots/14794406-Task-detail-desktop-app)

[3](https://dribbble.com/shots/5845797-Daily-UI-Challenge-046-Todo-List)