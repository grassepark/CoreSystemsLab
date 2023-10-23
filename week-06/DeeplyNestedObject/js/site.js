LongDistanceRelationship = {
  whatIsLost: {
    smallDetails: [
      "gentle curl of your pretty eyelashes",
      "location of all your moles",
      "texture of your Hair after a Shower",
    ],
    perfectExperience: [
      "looking directly into eachother's eyes",
      "hold eachother's hands",
      "conveniently talk with eachother",
      "cook and eat food together again",
      "explore new places in the city",
    ],
    oldMemories: [
      "you ran up to me after we saw eachother",
      "you wore that outfit for our date",
      "we took photos at that abandoned mirror",
    ],
    smell: true, //cringe
    closeToYou: false,
  },

  whatIsStillThere: {
    videoCall: [
      "i see a room from far away",
      "hearing about your new experiences",
    ],
    emotionalSupport: [
      "I'd like to hear about what you're working on",
      "Tell me about your day today",
      "I sent you something! Let me know when you recieve it",
      "I missed you",
    ],

    recipesWeMade: [
      "gochujang pasta",
      "kimbap",
      "rice paper tteokboki",
      "carbonara and salad",
    ],
    thingsWeDo: [ //i was
      "out with my friends",
      "working on a side project",
      "spending time with my family",
    ],
    uniqueExperiences: {
      startConversation: "Remember when",
      endConversation: "I want to do that again with you",
      ourPlans: [
        "buy eachother flowers",
        "take more photos",
        "go to more cafes",
      ],
      differentThankYous: [
        "Thank you! <3",
        "Thank you so much!",
        "It makes me really happy :)",
      ]
    },
    smiling: true,
  },

  lookingForward: {
    futurePlans: [
      "go to a lot more cafes",
      "take more photos with eachother",
      "have bauhaus style furniture",
      "automate our electronics",
    ],
    uncertainty: true,
  },

  happyCheck: function () {
    if (this.whatIsStillThere.smiling === true) {
      return `Response: "I am happy!"`;
    } else {
      return `Response: "I need your support"`;
    }
  },

  //randomizing...
  generateRandomMemory: function () {
    const memories = LongDistanceRelationship.whatIsLost.oldMemories;
    const randomIndex = Math.floor(Math.random() * memories.length);
    return memories[randomIndex];
  },

  //randoms!
  randomMemory: function () {
    return this.generateRandomMemory();
  },


  //put it in a sentance!
  ourConversations: function () {
    return `${
      this.whatIsStillThere.uniqueExperiences.startConversation
    } ${LongDistanceRelationship.randomMemory()}? ${
      this.whatIsStillThere.uniqueExperiences.endConversation
    }!`;
  },
};


// console.log(
//   "A conversation we have now:",
//   LongDistanceRelationship.ourConversations()
// );
// console.log("Are you happy?", LongDistanceRelationship.happyCheck());

const randomConversation = LongDistanceRelationship.ourConversations();
const conversation = document.getElementById("conversation");
conversation.innerHTML = randomConversation;

const randomConversation2 = LongDistanceRelationship.ourConversations();
const conversation2 = document.getElementById("conversation2");
conversation2.innerHTML = randomConversation2;

//wow this is so fast
function getRandomPhrase(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

let randomPhraseElement1 = document.getElementById("emotionalSupport");
let randomPhraseElement2 = document.getElementById("missingThis");
let randomPhraseElement3 = document.getElementById("thingsWeDo");
let randomPhraseElement4 = document.getElementById("thankYou");
let randomPhraseElement5 = document.getElementById("perfectExperience");
let randomPhraseElement6 = document.getElementById("emotionalSupport2");
let randomPhraseElement7 = document.getElementById("thankYou2");
let randomPhraseElement8 = document.getElementById("aRecipe");
let randomPhraseElement9 = document.getElementById("perfectExperience2");


randomPhraseElement1.textContent = getRandomPhrase(LongDistanceRelationship.whatIsStillThere.emotionalSupport);
// randomPhraseElement2.textContent = getRandomPhrase(LongDistanceRelationship.whatIsLost.smallDetails);
randomPhraseElement3.textContent = getRandomPhrase(LongDistanceRelationship.whatIsStillThere.thingsWeDo);
randomPhraseElement4.textContent = getRandomPhrase(LongDistanceRelationship.whatIsStillThere.uniqueExperiences.differentThankYous);
randomPhraseElement5.textContent = getRandomPhrase(LongDistanceRelationship.whatIsLost.perfectExperience);
randomPhraseElement6.textContent = getRandomPhrase(LongDistanceRelationship.whatIsStillThere.emotionalSupport);
// randomPhraseElement7.textContent = getRandomPhrase(LongDistanceRelationship.whatIsStillThere.uniqueExperiences.differentThankYous);
randomPhraseElement8.textContent = getRandomPhrase(LongDistanceRelationship.whatIsStillThere.recipesWeMade);
randomPhraseElement9.textContent = getRandomPhrase(LongDistanceRelationship.whatIsLost.perfectExperience);


const d = new Date();
const month = d.toLocaleString('default', { month: 'long' });
const day = d.getDate();
const year = d.getFullYear();
const formattedDate = `${month} ${day}, ${year}`;
document.getElementById("date").innerHTML = formattedDate;
