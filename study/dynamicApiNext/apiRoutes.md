# What are API routes? 

Before you know what an API route is, you shold know what a route is and what an API is. 

A route is a single path of nested folders. Next.js uses a page router to navigate to the various pages in a web application. Each file in the pages directory of a Next.js application's code represents a page on the web application.

For example, if you create a checkout.js file in your pages folder and you visit the URL : "your-app's-domain-name/checkout" on your browser, you will see the content of the checkout.js file rendered.

An API (short for application programming interface) serve as a means of communication between two computers or pieces of software. In a web application, an API facilitates communication between the client and the server.

An API route is a URL that directs incoming requests from the client to the appropriante server resource that will handle the requests.

API routes in Next.js enable you to create API endpoints as Node.js serveless functions. These endpoints allow you to make HTTP requests and also communicate with a database.

# How to create an API route

To create an API route you will create a folder named API in your pages folder. Any file inside the /pages/api directory will be trated as an API route instead of a page/

For instance, you can create a folder named API in your pages folder and thatn create a file names start.js inside it with the following code: 

```javascript
export default function handler(req, res) {
    res.status(200).json({ message : 'Request successful'});
}
```

You have now created an API route. You can access this API route through this URL: /api/start. You can use it to handle an HTTP request and send back the response to the client. 

The request argument is an instace of an HTTP incoming message plus some prebuilt middlewares. The response argument is an instace of an HTTP server response plus some helper functions 

You can create an API route to handle just one HTTP method. To do so will need to create a new file named `get.js`. Then you can add this code to the file: 

```javascript
export default function handler(req, res) {
    if(req.method === 'GET') {
        res.status(200).json({ message : 'This is a GET request })
    } else {
        res.status(405).json({ message : 'Method not Allowed })
    }
}
```

This API route can be access through this URL:/api/get and it will only handle HTTP get requests. 

You can also create an API route to handle more than one HTTP method. To do so, create a new file named `all.js` and put this code in it: 

```javascript
//pags/api/all.js

function handler(req, res) {
  if (req.method === 'GET') {
  	// Handle GET request
  	res.status(200).json({ message: 'This is a GET request' });
  } else if (req.method === 'POST') {
  	// Handle POST request
  	res.status(200).json({ message: 'This is a POST request' });
  } else if (req.method === 'PUT') {
  	// Handle PUT request
  	res.status(200).json({ message: 'This is a PUT request' });
  } else (req.method === 'DELETE') {
  	// Handle DELETE request
  	res.status(200).json({ message: 'This is a DELETE request' });
  }
}
```

This API route can be accessed through this URL: /api/all and can handle four HTTP methods (GET, POST, PUT, and DELETE).

# How to create dynamic API routes

Next.js allows developer to cerate dynamic routes. Dynamic routes are touteswhose segment names are not known ahead of time. They are created from dynamic data. 

A dynamic API route is a form of dynamic route that allows you to create APIendpoints with dynamic segments in the route path. 

These segments are filled in at request time or pre-rendered at build time. They can also be cached by the browser, which can improve performance for requently accessed pages. This makes them good choice for applications that expect a lot of traffic.

### Dynamic route syntax 

There is a particular syntax for creating dynamic API routes in Next.js. Next.js allows you to create dynamic API routes by wrapping the file name in square brackets.

To create a dynamic API route for a library API that fetches author data with dynamic IDs, you can start by creating a new folder `authors` and then create a file names `[id.js]` and add the following code: 

```javascript
export defaut function handler(req, res) {
    const { id } = req.query;

    if(req.method === 'GET') {
        res.status(200).json({id, message : 'Author data fetches'}) 
    }
}
```


The API route for the code above will be `/author/[id]`, and if it is passed this paramenter { id : '234' }, it will match the URL: `/author/234`. 

You can make your dynamic API route handle different HTTP methods. To do so, delete the code in your `[id.js]` folder and put in this code instead: 

```javascript
export defualt function handler(req, res) {
    const { id } = req.query; 

      if (req.method === 'GET') {
  	res.status(200).json({ id, message: 'Author data fetched successfully' });
  } else if (req.method === 'POST') {
  	res.status(200).json({ id, message: 'Author data sent successfully' });
  } else if (req.method === 'PUT') {
  	res.status(200).json({ id, message: 'Author data updated successfully' });
  } else if (req.method === 'DELETE') {
  	res.status(200).json({ id, message: 'Author data deleted successfully' });
  }
}
 
```

### Catch-all segments 

You can also pass sub-parameters to your dynamic API routes. To do this will extend your dynamic API route to be able to catch subsequent segments passed to ir by adding and ellipsis before the file name in the square brackets. This ensures that the API routes can be passed more than one sub-parameter.

To create a dynamic API route that catches all segments, create a folder named store create a file in you store folder name `[...gadgets].js` Then add the following code: 

```javascript
// /api/store/[...gadgets].js 

export default function handler(req, res) {
  const { gadget } = req.query;
  
  if (req.method === 'GET') {
  	res.status(200).json({ id, message: 'Data fetched successfully' });
  }
}

```

The API route for the code above will be pages/api/store/[...gadgets].js. If it is passed this parameter { gadget: ['phones', 'iphones', 'iphone15'] }, it will match the URLs: /store/phones or /store/phones/iphones or /store/phones/iphones/iphone15.

# Optional catch-all segments 

you can make the catch-all segments dynamic API route optional. When you make it optional it will not only be able to match all subsequent segments of the URL path, but also the main URL path. 

To make the catch-all subsequent segments dynamic API route that we saw in the previous section optional, add a square bracket to the file name like this: [[...store]].js]. The optional catch-all segments will not only be able to match the URLs: /store/phones or /store/phones/iphones or /store/phones/iphones/iphone15 alone – it will also be able to match /store URLs.




