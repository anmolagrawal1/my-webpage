import React from "react";
import "./CardComponent.css";

const CardComponent = () => {
  const cardsData = [
    {
      title: "Best Workstations of the Year",
      description:
        "Check out these inspiring workstations to get ideas on how to level-up your workstation.",
      image:
        "https://media.istockphoto.com/id/1286809874/photo/happy-young-man-wearing-santa-hat-drinking-champagne-talking-to-friends-on-virtual-video-call.jpg?s=1024x1024&w=is&k=20&c=YuczuEfkN4NPdig-TMOlg431nZJgA0Iyx6uLq3tD2hE=",
      label: "INSPIRATION",
    },
    {
      title: "Eating for Productivity",
      description:
        "Learn how to be more disciplined in your diet and how you can eat to maximize productivity.",
      image:
        "https://images.unsplash.com/photo-1528699633788-424224dc89b5?q=80&w=2806&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      label: "FOOD",
    },
    {
      title: "A Design Mind-set",
      description:
        "What does it mean to have a design mind-set? Learn how to improve your eye for design.",
      image:
        "https://images.unsplash.com/photo-1638567480455-62773194c936?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      label: "RESOURCES",
    },
  ];

  return (
    <div className="container">
      {cardsData.map((card, index) => (
        <div key={index} className="card">
          <img src={card.image} alt={card.title} className="card-image" />
          <div className={`label ${card.label.toLowerCase()}`}>
            {card.label}
          </div>
          <h3 className="card-title">{card.title}</h3>
          <p className="card-description">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
