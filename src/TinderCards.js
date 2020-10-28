import React, { useState, useEffect } from "react";
import "./TinderCard.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Pavan Shekar",
      url:
        "https://scontent.fblr5-1.fna.fbcdn.net/v/t1.0-9/100591319_2818797534885912_264875490752331776_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=Wu5S66We78QAX-sdwve&_nc_ht=scontent.fblr5-1.fna&oh=4a2c61daafe9c1d9b4f5197c57e8a252&oe=5FBE974E",
    },
    {
      name: "Kapoor Bai",
      url:
        "https://scontent.fblr5-1.fna.fbcdn.net/v/t31.0-8/14859722_218912718522624_5830149756073853845_o.jpg?_nc_cat=100&ccb=2&_nc_sid=a9b1d2&_nc_ohc=Ojb8a_KyJWIAX8ZGSj0&_nc_ht=scontent.fblr5-1.fna&oh=2fc3c1047d11b4d0803e22202ec05dd1&oe=5FBDBE53",
    },
    {
      name: "Vivk Bai",
      url:
        "https://scontent.fblr5-1.fna.fbcdn.net/v/t1.0-9/51054707_2007206589393040_4518883234133573632_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=TG_sGmfXIk4AX-glf2A&_nc_ht=scontent.fblr5-1.fna&oh=f30d183da598a4db7b959622238d76c3&oe=5FBE447B",
    },
    {
      name: "AA",
      url:
        "https://scontent.fblr5-1.fna.fbcdn.net/v/t1.0-9/14054247_10206671237811814_3743239523158986758_n.jpg?_nc_cat=107&ccb=2&_nc_sid=174925&_nc_ohc=ttaZraVQBJ0AX9l1ynA&_nc_ht=scontent.fblr5-1.fna&oh=3a83befec8fa8b388601742769cfab8e&oe=5FBD7D6B",
    },
    {
      name: "Pariiiii",
      url:
        "https://scontent.fblr5-1.fna.fbcdn.net/v/t1.0-9/1525303_608424629246339_653396897_n.jpg?_nc_cat=102&ccb=2&_nc_sid=174925&_nc_ohc=ZCROuoTBu_8AX_bqVXD&_nc_oc=AQlSqQkk1Zqn3MZdf1VpfHOy3_xlH2KRKOMz2IbDoR_0ViQgNYTuFLJJ9xnRP0kVO1s&_nc_ht=scontent.fblr5-1.fna&oh=e597f02c1042804beffc2a656686eb61&oe=5FBECB2A",
    },
    {
      name: "Apurv",
      url:
        "https://scontent.fblr5-1.fna.fbcdn.net/v/t1.0-9/12088041_730055193764960_2460349030630486310_n.jpg?_nc_cat=107&ccb=2&_nc_sid=174925&_nc_ohc=x7py3uBo0FkAX9KkAG1&_nc_ht=scontent.fblr5-1.fna&oh=b5aaf1f8b85c549028300584cd3a9e95&oe=5FBD307B",
    },
    {
      name: "Kuchi",
      url:
        "https://scontent.fblr5-1.fna.fbcdn.net/v/t31.0-8/20900535_1365879883508719_4659445340757557138_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=J2py9QJz_VAAX9oE-SF&_nc_ht=scontent.fblr5-1.fna&oh=528974f60351b6af9b4eea53e6c1daf2&oe=5FC087E3",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing:" + nameToDelete);
    // setLastDirection(direction);
  };
  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
