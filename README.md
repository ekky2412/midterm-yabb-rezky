# Midterm API Assignment

Creating a backend for the Midterm GoTo Impact Foundation

## i. Database Structure
Here's ER Diagram to show database structure in this repo
![alt text](https://imgur.com/oJHXe3N.png)

## ii. API Structure
Here's the API Structure to show what to response when it requested
![alt text](https://imgur.com/Ebp8h4m.png)

## iii. List API Request and Response

### Video Thumbnails
- Video Object
```js
{
 videoID: string,
 urlThumbnail: string,
 urlVideo: string
}
```

## GET /api/v1/videos/thumbnail
Return all videos thumbnail
- URL Params

None
- Body Params

None
- Headers

Content-Type: application/json
- Code 200 Response :
```js
[
  {
    {<video_object>},
    {<video_object>},
    {<video_object>},
  }
]
```
---
### Products
- Product Object
```js
{
 productID: string,
 title: string,
 linkProduct: string,
 price: number
}
```
## GET /api/v1/products/{videoID}
Return products with given videoID
- URL Params

Required: ```videoID = [string]```
- Body Params

None
- Headers

Content-Type: application/json
- Code 200 
Response :
```js
[
  {
    {<product_object>},
    {<product_object>},
    {<product_object>},
  }
]
```
- Error Response :
    - Code 400 Response : ```{ message: "Video does not exist!" }```

---
- Comments Object
```js
{
 videoID: string
 urlThumbnail: string
 urlVideo: string
}
```

## iv. How to Run

### Installation

Use the package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [yarn](https://yarnpkg.com/getting-started/install) to install.

```bash
npm install
```
or
```bash
yarn install
```

## Author
Rezky Putratama Raharjo
