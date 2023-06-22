import "./Blog.css";
import useTitle from '../../../hooks/useTitle.js'

const Blog = () => {

  useTitle('Blog')

  return (
    <div className="m-20 flex flex-col">
      <div className="mb-10">
        <p className="mt-5 mb-5 text-2xl">
          Q : What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </p>
        <p>
          A : An access token is a credential that is used to access protected
          resources on a server. <br />A refresh token is a long-lived
          credential that is used to obtain a new access token when the current
          one expires. <br /> When a user logs in or authorizes an application,
          both an access token and a refresh token are generated by the
          authentication server and returned to the client. <br />
          The access token is used to make authorized requests to protected
          resources, while the refresh token is securely stored by the client.{" "}
          <br />
          When the access token expires, the client can send the refresh token
          to the server to obtain a new access token without requiring the user
          to re-authenticate. <br />
          It is important to store tokens securely on the client-side to prevent
          unauthorized access. Here are some common approaches: Cookies , Local
          Storage , Session Storage , In-Memory Storage
        </p>
      </div>
      <div className="mb-10">
        <p className="mt-5 mb-5 text-2xl">
          Q : Compare SQL and NoSQL databases?
        </p>
        <p>
          A : SQL databases are based on a structured, tabular data model with
          predefined schemas, offering strong consistency, ACID (Atomicity,
          Consistency, Isolation, Durability) transactions, and support for
          complex queries. NoSQL databases, on the other hand, are designed for
          unstructured or semi-structured data, providing flexible schemas,
          eventual consistency, horizontal scalability, and better performance
          for high-velocity data. The choice between SQL and NoSQL depends on
          factors like data structure, scalability needs, and the trade-off
          between consistency and flexibility.
        </p>
      </div>
      <div className="mb-10">
        <p className="mt-5 mb-5 text-2xl">
          Q : What is express js? What is Nest JS?
        </p>
        <p>
          A : Express.js is a popular web application framework for Node.js that
          provides a minimalistic and flexible approach to building web
          applications and APIs. It focuses on simplicity and allows developers
          to handle HTTP requests and define routes using middleware functions.
          Express.js is known for its lightweight nature and extensive ecosystem
          of third-party modules and middleware, making it suitable for small to
          medium-sized projects.
          <br />
          Nest.js, on the other hand, is a progressive and opinionated framework
          for building scalable server-side applications using Node.js and
          TypeScript. Inspired by Angular, Nest.js promotes a modular and
          structured architecture, with support for features like decorators,
          dependency injection, and robust routing. It is designed for
          large-scale enterprise applications, offering a robust foundation for
          building maintainable and scalable server-side systems.
        </p>
      </div>
      <div className="mb-10">
        <p className="mt-5 mb-5 text-2xl">
          Q : What is MongoDB aggregate and how does it work?
        </p>
        <p>
          A : In MongoDB, the aggregate operation is used to perform advanced
          data processing and analysis on collections of documents. It allows
          you to perform various operations, such as filtering, grouping,
          sorting, transforming, and calculating aggregate values.
          <br />
          The aggregate operation works by defining a pipeline of stages, where each stage represents a specific data processing step. These stages are processed sequentially, with the output of one stage serving as the input for the next stage. Each stage can modify the documents, add new fields, or perform calculations based on the data.
        </p>
      </div>
    </div>
  );
};

export default Blog;
