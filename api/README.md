# REST API

REST stands for **REpresentational State Transfer (REST)**

## HTTP Methods

| HTTP Method | Description                                                   | Idempotent (Can be invoked multiple times without any side effects on server) | Safe (Can be invoked multiple times without any change on server) |
| :---------- | :------------------------------------------------------------ | :---------------------------------------------------------------------------- | :---------------------------------------------------------------- |
| **HEAD**    | Retrieve Meta Information                                     | Y                                                                             | Y                                                                 |
| **OPTIONS** | Returns the HTTP methods that the server supports             | Y                                                                             | Y                                                                 |
| **GET**     | Retrieve                                                      | Y                                                                             | Y                                                                 |
| **DELETE**  | Delete                                                        | Y                                                                             | N                                                                 |
| **PUT**     | Update                                                        | Y                                                                             | N                                                                 |
| **POST**    | Create                                                        | N                                                                             | N                                                                 |
| **PATCH**   | The PATCH method applies partial modifications to a resource. | N                                                                             | N                                                                 |

## Status Codes

* **1xx Informational**
  * 100 Continue
  * 101 Switching Protocols
  * 102 Processing
* **2xx Success**
  * 200 OK
  * 201 Created
  * 202 Accepted
  * 203 Non-authoritative Information
  * 204 No Content
  * 205 Reset Content
  * 206 Partial Content
  * 207 Multi-Status
  * 208 Already Reported
  * 226 IM Used
* **3xx Redirection**
  * 300 Multiple Choices
  * 301 Moved Permanently
  * 302 Found
  * 303 See Other
  * 304 Not Modified
  * 305 Use Proxy
  * 307 Temporary Redirect
  * 308 Permanent Redirect
* **4xx Client Error**
  * 400 Bad Request
  * 401 Unauthorized
  * 402 Payment Required
  * 403 Forbidden
  * 404 Not Found
  * 405 Method Not Allowed
  * 406 Not Acceptable
  * 407 Proxy Authentication Required
  * 408 Request Timeout
  * 409 Conflict
  * 410 Gone
  * 411 Length Required
  * 412 Precondition Failed
  * 413 Payload Too Large
  * 414 Request-URI Too Long
  * 415 Unsupported Media Type
  * 416 Requested Range Not Satisfiable
  * 417 Expectation Failed
  * 418 I'm a teapot
  * 421 Misdirected Request
  * 422 Un-processable Entity
  * 423 Locked
  * 424 Failed Dependency
  * 426 Upgrade Required
  * 428 Precondition Required
  * 429 Too Many Requests
  * 431 Request Header Fields Too Large
  * 444 Connection Closed Without Response
  * 451 Unavailable For Legal Reasons
  * 499 Client Closed Request
* **5xx Server Error**
  * 500 Internal Server Error
  * 501 Not Implemented
  * 502 Bad Gateway
  * 503 Service Unavailable
  * 504 Gateway Timeout
  * 505 HTTP Version Not Supported
  * 506 Variant Also Negotiates
  * 507 Insufficient Storage
  * 508 Loop Detected
  * 510 Not Extended
  * 511 Network Authentication Required
  * 599 Network Connect Timeout Error

## Richardson Maturity Model (RMM)

Developed by Leonard Richardson, this model serves as a way to grade a Web API's adherence to the constraints of **REST**. It consists of four levels (0 through 3), where each level builds upon the previous one.

### Level 0: The Swamp of POX (Plain Old XML)

At this level, HTTP is used purely as a transport protocol for **Remote Procedure Calls (RPC)**.

* **Mechanism:** Uses a single URI (endpoint) and a single HTTP method (usually `POST`).
* **Example:** A system where all requests go to `/service` regardless of whether you are creating, deleting, or fetching data.

### Level 1: Resources

This level introduces **Resources**, allowing the API to distinguish between different entities.

* **Mechanism:** Instead of one endpoint, the API is divided into multiple URIs (e.g., `/books`, `/authors/123`).
* **Limitation:** It still typically uses a single HTTP method (often `POST`) for all interactions with those resources.

### Level 2: HTTP Verbs

This level incorporates **HTTP Methods** and **Status Codes** to define the nature of the action.

* **Mechanism:**

  * `GET` is used for retrieving data (and is cacheable).
  * `POST` is used to create new resources.
  * `PUT`/`PATCH` is used to update resources.
  * `DELETE` is used to remove resources.

* **Status Codes:** Uses specific codes like `201 Created` or `404 Not Found` instead of always returning `200 OK`.
* **Note:** Most modern "RESTful" APIs in the industry operate at this level.

### Level 3: Hypermedia Controls (HATEOAS)

The final level implements **HATEOAS** (Hypermedia As The Engine Of Application State).

* This means that each link is presumed to implement the standard REST verbs of GET, POST, PUT, and DELETE (or a subset).
* Thus providing the links gives the client the information they need to navigate the service.
* **Mechanism:** The API response contains not just data, but **links** that tell the client what they can do next.
* **Advantage:** The client does not need to hardcode URIs for every action. If a resource is "cancellable," the server provides a link to the "cancel" action in the JSON/XML response.
* **Fielding's View:** Roy Fielding (the creator of REST) argues that an API is not truly RESTful unless it reaches Level 3.

| Level | Focus               | Primary Tool                  |
| ----- | ------------------- | ----------------------------- |
| 0     | The Swamp of POX    | HTTP as a Tunnel (RPC)        |
| 1     | Resources           | Individual URIs               |
| 2     | HTTP Verbs          | Proper use of GET, POST, etc. |
| 3     | Hypermedia Controls | HATEOAS (Discoverability)     |

## REST v/s SOAP

| REST                                                            | SOAP                                                      |
| :-------------------------------------------------------------- | :-------------------------------------------------------- |
| HTTP based architectural style for exposing business services   | XML based protocol for invoking methods on remote objects |
| Not specific to any protocol but extensively uses HTTP protocol | Uses HTTP only as a transport layer                       |
| Uses standard HTTP interfaces like GET, POST, PUT, DELETE       | Uses only HTTP POST                                       |
| Uses standard security features of HTTP                         | Has a well-defined security framework                     |
