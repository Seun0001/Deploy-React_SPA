import React, { Component } from "react";

class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>Project Overview</h2>
        <p>Overview on the project list done and updated below:</p>
        <ol>
          <li>Array Implementation:</li>
          <p className="Display-Array">
            This webpage displays an array as a formatted HTML string. The array
            is initially hidden, and can be displayed by clicking the "Display
            Array" button, while creating the mobile and pc view.
          </p>
          <li>React Form:</li>
          <p className="React-Form">
            Creating login and sign up dynamically using react Es7.
          </p>
          <li>React-RESTful-API-Demo:</li>
          <p className="React-API">Creating Restful Api Demo of my website.</p>
          <li>React Hooks Demonstration:</li>
          <p className="React-Hooks">
            This React application demonstrates the usage of React hooks
            (useState, useEffect, useRef) and a custom hook. The application
            allows users to manage a simple counter and a list of names,
            showcasing how state, side-effects, and references can be handled in
            a functional component. Additionally, it includes a custom hook to
            manage local storage.
          </p>
          <li>Asynchronous React:</li>
          <p className="Asynch-Components">
            <p>
              The FormComponent is a simple React component that allows users to
              submit their name and Gmail address. It validates the input,
              checks for duplicates, and displays a list of submissions along
              with an error marker indicating if the input was valid or not.
            </p>
            <p>
              <h2>Features</h2>
              <p>
                <span>Form Handling:</span> Collects user inputs for name and
                email.
              </p>
            </p>
            <p>
              <span>Validation:</span> Validates that the name is not empty and
              the email is a Gmail address.
            </p>
            <p>
              <span>Duplicate Check:</span> Ensures that the same name and email
              combination is not submitted more than once.
            </p>
            <p>
              <span>Error Handling:</span> Displays error messages for invalid
              inputs or duplicate submissions.
            </p>
            <p>
              <span>Submission List:</span> Displays a list of all submissions
              with the time and an error marker.
            </p>
          </p>
          <li className="React-Store">Pop-up React Store</li>
          <p>
            Setup the Redux Store, Create Context for Local State, Components
            for Pop-ups and Integrate Redux and Context API.
          </p>
          <li className="React-Components">
            <p>
              This project is a simple e-commerce store built using ReactJS. The
              application showcases how to integrate various React UI components
              to create a functional and user-friendly interface. Key features
              of the project include product listing, product detail view,
              shopping cart functionality, and user login.
            </p>
          </li>
          <li className="To-Do">ToDO-App (Testing React App):</li>
          <p>
            This project is a practical implementation of integrating React UI
            components to build a dynamic and interactive Todo application.
            <span>
              The Todo application allows users to add tasks with associated
              information, duration, and price. Tasks can be marked as complete,
              and additional information can be viewed by clicking an info
              button. A modal provides feedback on task completion status.
            </span>
          </p>
          <h2>Key Concepts</h2>
          <h3>Component-Based Architecture:</h3>
          <ul>
            <li className="Key">
              The application is divided into reusable components: App, AddTodo,
              TodoList, TodoItem, and Modal.
            </li>
            <li className="Key">
              Each component handles specific functionality, promoting clean and
              maintainable code.
            </li>
          </ul>
          <h3>State Management:</h3>
          <ul>
            <li className="Key">State is managed using the useState hook.</li>
            <li>
              State and functions are passed as props to child components for
              interaction.
            </li>
          </ul>
          <h3>Event Handling:</h3>
          <ul>
            <li className="Key">
              Form submission in AddTodo captures user input.
            </li>
            <li className="Key">
              Click events in TodoItem handle task completion, info display, and
              deletion.
            </li>
          </ul>
          <h3>Conditional Rendering:</h3>
          <ul>
            <li className="Key">
              Additional task info is conditionally rendered in TodoItem.
            </li>
            <li className="Key">
              The Modal component conditionally displays messages based on task
              completion.
            </li>
          </ul>
          <h3>Styling and Layout:</h3>
          <ul>
            <li className="Key">
              CSS flexbox is used for layout, ensuring elements are properly
              spaced.
            </li>
            <li className="Key">
              Dynamic styling changes the appearance of tasks based on their
              status.
            </li>
          </ul>
          <li>Deploy React SPA:</li>
          <p className="React-SPA">
            Deploying React Single Page Application Project
          </p>
        </ol>
      </div>
    );
  }
}

export default Stuff;
