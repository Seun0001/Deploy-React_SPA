import React, { Component } from "react";
import ReactCardSlider from "react-card-slider-component";

class Home extends Component {
  sliderClick = (slide) => {
    // Handle the click event for a slide
    if (slide.link) {
      // If the slide has a link property, open it in a new tab
      window.open(slide.link, "_blank");
    } else {
      // Otherwise, handle the click event normally (e.g., log the title)
      console.log(`Clicked on: ${slide.title}`);
    }
  };

  render() {
    const slides = [
      {
        image: "/Projects/ReactForm.jpg",
        title: "React Form",
        description: "Login And Signup For React.",
        clickEvent: () =>
          this.sliderClick({
            title: "React Form",
            link: "https://github.com/Seun0001/react-form-system",
          }),
      },
      {
        image: "/Projects/Array.jpg",
        title: "Array Implementation",
        description: "Array Console Implemented.",
        clickEvent: () =>
          this.sliderClick({
            link: "https://github.com/Seun0001/Array-implementation-webpage",
          }),
      },
      // Uncomment and add more slides if needed
      {
        image: "/Projects/API.jpg",
        title: "React-RESTful-API-Demo",
        description: "Demonstration Of React API Usage.",
        clickEvent: () =>
          this.sliderClick({
            link: "https://github.com/Seun0001/React-RESTful-API-Demo",
          }),
      },
      {
        image: "/Projects/ReactHook.png",
        title: "React_Hooks_Demonstration_App",
        description: "Simple Counter Application And A NameList.",
        clickEvent: () =>
          this.sliderClick({
            link: "https://react-hooks-demonstration-app.vercel.app/",
          }),
      },
      {
        image: "/Projects/Asynch.jpg",
        title: "Asynchronous-React",
        description: "React Component To Submit Name & Gmail By User.",
        clickEvent: () =>
          this.sliderClick({
            link: "https://github.com/Seun0001/Asynchronous-React/tree/main/asynchronous-react",
          }),
      },
      {
        image: "/Projects/Pop-React.jpg",
        title: "Pop-up-React-Store",
        description: "Redux Pop-Up Random Number Generator",
        clickEvent: () =>
          this.sliderClick({
            link: "https://github.com/Seun0001/Pop-up-React-Store",
          }),
      },
      {
        image: "/Projects/React-UI.jpg",
        title: "React-UI-Components",
        description: "Simple E-commerce Store Built With ReactJS",
        clickEvent: () =>
          this.sliderClick({
            link: "https://github.com/Seun0001/React-UI-Components",
          }),
      },
      {
        image: "/Projects/To-Do.jpg",
        title: "ToDO-App (Testing React App)",
        description: "Integrate React UI to build dynamic Todo App.",
        clickEvent: () =>
          this.sliderClick({
            link: "https://github.com/Seun0001/ToDo-App/tree/main/my-todo-app",
          }),
      },
      {
        image: "/Projects/React-SPA.jpg",
        title: "Deploy-React_SPA",
        description: "Displays React SPA Of Projects.",
        clickEvent: () =>
          this.sliderClick({
            link: "https://github.com/Seun0001/Deploy-React_SPA/tree/main/deploy-react-spa",
          }),
      },
      // {
      //   image: "https://picsum.photos/300/400",
      //   title: "This is a seventh title",
      //   description: "This is a seventh description",
      //   clickEvent: () => this.sliderClick({ title: "This is a seventh title" }),
      // },
      // {
      //   image: "https://picsum.photos/300/400",
      //   title: "This is a seventh title",
      //   description: "This is a seventh description",
      //   clickEvent: () => this.sliderClick({ title: "This is a seventh title" }),
      // },
    ];

    const quoteStyle = {
      padding: "10px 20px",
      margin: "20px 0",
      fontStyle: "italic",
      fontSize: "18px",
      color: "#555",
      borderLeft: "4px solid #ddd",
      backgroundColor: "#f9f9f9",
    };

    return (
      <div>
        <h2>Welcome To The SPA Web</h2>
        <p style={quoteStyle}>
          "Introducing You To The Flexisaf Internship Project.
          <span className="explore"> Feel free, to explore more."</span>
        </p>
        <h3 className="Proj1">Latest Projects</h3>

        {/* Insert the ReactCardSlider here */}
        <ReactCardSlider slides={slides} />
      </div>
    );
  }
}

export default Home;
