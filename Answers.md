1.  Explain the differences between `client-side routing` and `server-side routing`.
 *************** Server-side Routing *********************
When browsing, the adjustment of a URL can make a lot of things happen. This will happen regularly by clicking on a link, which in turn will request a new page from the server. This is what we call a server-side route. A whole new document is served to the user.

A server-side request causes the whole page to refresh. This is because a new GET request is sent to the server which responds with a new document, completely discarding the old page altogether.

Pros
1.A server-side route will only request the data that’s needed. No more, no less.
2.Because server-side routing has been the standard for a long time, search engines are optimised      for webpages that come from the server.

Cons
 1.Every request results in a full-page refresh. That means that unnecessary data is being             requested. A header and a footer of a webpage often stays the same. This isn’t something you        would    want to request from the server again.
 2.It can take a while for the page to be rendered. However, this is only the case when the document   to be rendered is very large or when you have slow internet speed.

**********    Client-side Routing **************************
A client-side route happens when the route is handled internally by the JavaScript that is loaded on the page. When a user clicks on a link, the URL changes but the request to the server is prevented. The adjustment to the URL will result in a changed state of the application. The changed state will ultimately result in a different view of the webpage. This could be the rendering of a new component, or even a request to a server for some data that the application will turn into some HTML elements.

It is important to note that the whole page won’t refresh when using client-side routing. There are just some elements inside the application that will change.

Pros
1.Because less data is processed, routing between views is generally faster.
2.Smooth transitions and animations between views are easier to implement.

Cons
1.The whole website or web-application needs to be loaded on the first request. That’s why the         initial loading time usually takes longer.
2.Because the whole website or web-application is loaded initially, there is a possibility that        there is data downloaded for views you won’t even come across.
3.It requires more setup work or even a library. Because server-side is the standard, extra code        must be written to make client-side routing possible.
4.Search engine crawling is less optimised. Google is making good progress on crawling                  single-paged-apps, but it isn’t nearly as efficient as server-side routed websites.


2.  What does HTTP stand for?
HTTP means HyperText Transfer Protocol. HTTP is the underlying protocol used by the World Wide Web and this protocol defines how messages are formatted and transmitted, and what actions Web servers and browsers should take in response to various commands.

3.  What does CRUD stand for?
CRUD stands for create, read, update, and delete (CRUD) the four basic functions of persistent storage. 

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

HTTP Method	         CRUD
GET	                 Read
PUT	                 Update/Replace
PATCH	             Partial Update/Modify
DELETE	             Delete
5.  Mention three tools we can use to make AJAX requests
Some tools used to make AJAX requesta are axios,Fetch API,jquery ajax library.