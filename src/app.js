/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let alert = document.querySelector("#random");
  let button = document.querySelector("#randomBtn");

  let who = [
    "The dog",
    "My grandma",
    "The mailman",
    "My bird",
    "The cat",
    "My neighbor",
    "The teacher",
    "My best friend",
    "A random stranger",
    "The plumber",
    "The delivery guy",
    "A magician",
    "My coworker",
    "The janitor",
    "A celebrity",
    "The mechanic",
    "A scientist",
    "The gardener",
    "My boss",
    "The barista",
    "A police officer",
    "The firefighter",
    "The coach",
    "The principal",
    "The taxi driver",
    "A librarian",
    "The artist",
    "The astronaut",
    "The musician",
    "The athlete",
    "The chef",
    "The nurse",
    "The pilot",
    "A spy",
    "The soldier",
    "The tour guide",
    "The lifeguard",
    "The photographer",
    "The actor",
    "The programmer",
    "The gamer",
    "The historian",
    "The poet",
    "The scientist's assistant",
    "The explorer"
  ];

  let action = [
    "ate",
    "peed",
    "crushed",
    "broke",
    "stole",
    "destroyed",
    "painted",
    "sabotaged",
    "scratched",
    "burned",
    "ripped",
    "buried",
    "hid",
    "bent",
    "froze",
    "forgot",
    "lost",
    "melted",
    "erased",
    "cracked",
    "ruined",
    "spilled",
    "scattered",
    "tore apart",
    "flushed",
    "dropped",
    "pushed",
    "trampled",
    "overcooked",
    "underestimated",
    "ignored",
    "avoided",
    "bribed",
    "confused",
    "duplicated",
    "hacked",
    "encrypted",
    "glued",
    "inflated",
    "deflated",
    "colored",
    "tangled",
    "twisted",
    "shrank",
    "expanded"
  ];

  let what = [
    "my homework",
    "my phone",
    "the car",
    "the computer",
    "the TV",
    "my wallet",
    "my keys",
    "the cake",
    "the project",
    "my book",
    "the couch",
    "the fridge",
    "my glasses",
    "the lamp",
    "the door",
    "the window",
    "my watch",
    "the table",
    "the chair",
    "my shoes",
    "the microwave",
    "the vacuum",
    "the laundry",
    "my passport",
    "the printer",
    "the camera",
    "my headphones",
    "the stove",
    "the coffee machine",
    "my backpack",
    "the notebook",
    "the fence",
    "the garden",
    "the mailbox",
    "the sink",
    "the mirror",
    "the garage",
    "the roof",
    "the bed",
    "my alarm clock",
    "the phone charger",
    "the fan",
    "the heater",
    "the elevator",
    "the skateboard"
  ];

  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
    "on my way to work",
    "at the party",
    "at the grocery store",
    "in the park",
    "during the movie",
    "while I was driving",
    "during the meeting",
    "while I was on a call",
    "when I was in the shower",
    "at the concert",
    "while cooking",
    "during my vacation",
    "on the weekend",
    "on Monday morning",
    "during the football game",
    "at the gym",
    "while studying",
    "at the library",
    "on the train",
    "on the plane",
    "while hiking",
    "during my yoga session",
    "at the zoo",
    "while taking pictures",
    "at the museum",
    "during the fireworks",
    "while gardening",
    "at the beach",
    "while shopping",
    "on my birthday",
    "at the wedding",
    "while biking",
    "during the thunderstorm",
    "in the middle of the night",
    "on my lunch break",
    "at the park bench",
    "while stargazing",
    "on the camping trip",
    "at the festival",
    "during the parade"
  ];

  const getRandomElement = array =>
    array[Math.floor(Math.random() * array.length)]; // funcion reutilizable mediante parametros

  // Generar una excusa aleatoria
  const generateExcuse = () => {
    const whoRandom = getRandomElement(who);
    const actionRandom = getRandomElement(action);
    const whatRandom = getRandomElement(what);
    const whenRandom = getRandomElement(when);
    return `${whoRandom} ${actionRandom} ${whatRandom} ${whenRandom}`;
  };

  const handleClick = () => {
    const newExcuse = generateExcuse();
    alert.innerHTML = newExcuse;
  };

  button.addEventListener("click", handleClick);
};
