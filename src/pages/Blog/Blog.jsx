import React, { useContext } from "react";
import { AuthProvider } from "../../Context/UserContext";
import "./Blog.css";
const Blog = () => {
  const { navControl } = useContext(AuthProvider);
  return (
    <div>
      <div className={`relative w-full h-[16rem] md:h-[20rem] bgImage mb-10`}>
        <div
          className={`absolute font-[cursive]  top-28 w-full ${
            navControl ? "transition-style1  " : "transition-style2 "
          } font-semibold text-center text-white`}
        >
          <span className="text-2xl md:text-5xl block mb-2 font-[800]">
            Blog
          </span>
          <span className="text-xl md:text-2xl ">Enjoy Our Service</span>
        </div>
      </div>

      <div className="grid md:grid-cols-1  gap-3 my-5">
        <div className="collapse collapse-transition bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            1. Differences between SQL and NoSQL.
          </div>
          <div className="collapse-content ">
            <table className="table border-2 border-black lg:w-3/4">
              {/* head */}
              <thead>
                <tr>
                  <th className="w-2"></th>
                  <th className="w-1/2 text-center">SQL</th>
                  <th className=" text-center">NoSQL</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>
                    SQL is a domain-specific language used to query and manage
                    data.Data is stored in collections or documents
                  </td>
                  <td>
                    NoSQL stands for Not only SQL. It is a type of database that
                    uses non-relational data structures, such as documents,
                    graph databases, and key-value stores to store and retrieve
                    data.{" "}
                  </td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>Stands for Structured Query Language</td>
                  <td> Stands for Not Only SQL</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Relational database management system (RDBMS) </td>
                  <td>Non-relational database management system</td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>Suitable for structured data with predefined schema </td>
                  <td>Suitable for unstructured and semi-structured data</td>
                </tr>
                <tr>
                  <th>5</th>
                  <td>Data is stored in tables with columns and rows </td>
                  <td>Data is stored in collections or documents</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="collapse collapse-transition bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            2. What is JWT? How does it work?
          </div>
          <div className="collapse-content">
            <p>
              JSON Web Token (JWT) authentication is a stateless method of
              securely transmitting information between parties as a JavaScript
              Object Notation (JSON) object. It is often used to authenticate
              and authorize users in web applications and APIs{" "}
            </p>
            <p className="font-semibold text-xl">
              {" "}
              Working process:
              <br />
              JWT authorization uses a JWT to represent the user's identity and
              access rights. The JWT is usually generated by the authentication
              server after the user logs in and contains the user's identity and
              access rights. The JWT is then sent with every API request as a
              bearer token in the authorization header.
            </p>
          </div>
        </div>
        <div className="collapse collapse-transition bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            3. What is the difference between javascript and NodeJS?
          </div>
          <div className="collapse-content">
            <p>
              JavaScript and Node.js are related technologies, but they serve
              different purposes and operate in different environments. Here are
              five key differences between JavaScript and Node.js:
              <br />
              1. Environment: <br />
              JavaScript: Traditionally, JavaScript is a scripting language that
              runs in web browsers, providing interactivity and dynamic behavior
              to web pages. <br />
              Node.js: Node.js is a runtime environment that allows the
              execution of JavaScript on the server side. It extends JavaScript
              beyond the browser and enables building server-side applications.{" "}
              <br />
              2. Use Case:
              <br />
              JavaScript: Primarily used for client-side development to enhance
              user interfaces in web browsers.
              <br />
              Node.js: Used for server-side development to build scalable
              network applications. It is commonly used for building APIs, web
              servers, and other server-side applications.
              <br />
              3. APIs and Modules:
              <br />
              JavaScript: Relies on the browser environment for APIs related to
              the Document Object Model (DOM), events, and other web-related
              functionalities.
              <br />
              Node.js: Provides its own set of APIs and modules for server-side
              functionalities. It includes modules for handling file systems,
              networking, and other server-related tasks. Common modules include
              fs (file system), http (HTTP server), and express (web application
              framework).
              <br />
              4. Concurrency Model:
              <br />
              JavaScript: Follows a single-threaded, event-driven concurrency
              model in the browser. It utilizes callbacks, promises, and
              async/await for handling asynchronous operations.
              <br />
              Node.js: Also follows a single-threaded, event-driven model but
              uses an event loop to handle multiple concurrent connections
              efficiently. It employs non-blocking I/O operations to handle a
              large number of simultaneous requests.
              <br />
              5. Package Management:
              <br />
              JavaScript: Uses package managers like npm (Node Package Manager)
              to manage and distribute client-side libraries and tools. npm is
              often associated with Node.js, but it can also be used for
              front-end development.
              <br />
              Node.js: npm is the default package manager for Node.js, and it is
              extensively used to manage server-side libraries and tools. It
              simplifies dependency management, allowing developers to easily
              install, share, and manage packages.
              <br />
            </p>
          </div>
        </div>
        <div className="collapse collapse-transition bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            4.How does NodeJS handle multiple requests at the same time?
          </div>
          <div className="collapse-content">
            <p>
              Node.js handles multiple requests concurrently through its
              event-driven, non-blocking I/O model. It uses an event loop to
              manage asynchronous operations, allowing it to efficiently handle
              a large number of simultaneous requests. When a request initiates
              an asynchronous operation (e.g., reading from a file or making a
              network request), Node.js doesn't block the execution and
              continues processing other requests. Once the asynchronous
              operation is completed, a callback is triggered, and the
              corresponding event is processed, allowing Node.js to move on to
              the next task in the queue. This non-blocking approach enables
              Node.js to scale and handle high concurrency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
