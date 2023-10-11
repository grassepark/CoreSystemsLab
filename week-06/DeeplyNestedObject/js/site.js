LongDistanceRelationship = {
  whatIsLost: {
    smallDetails: [
      "gentle curl of your pretty eyelashes",
      "location of all your moles",
      "texture of your Hair after a Shower",
    ],
    perfectExperience: [
      "Looking directly into eachother's eyes",
      "Gripping your hands",
      "Conveniently talking with eachother",
    ],
    oldMemories: [
      "you ran up to me after we saw eachother",
      "you wore that outfit for our date",
      "we took photos at that abandoned mirror",
    ],
    smell: true, //cringe
    closeToYou:false,
  },

  whatIsStillThere: {
    videoCall: [  
      "i see a room from far away",
      "hearing about your new experiences",
    ],
    emotionalSupport: [
      "What are you doing today?",
      "Do you want advice? Or just emotional support?",
      "I sent you something! Let me know when you recieve it.",
    ],
    uniqueExperiences: {
      startConversation: "Remember when",
      endConversation: "I want to do that again with you",
      ourPlans: [
        "buy eachother flowers",
        "take more photos",
        "go to more cafes",
      ],
    },
    smiling: true,
  },

  happyCheck: function () {
    if (this.whatIsStillThere.smiling === true) {
        return `Response: "I am happy!"`;
    } else {
        return `Response: "I need your support"`;
    }
},

  //randomize the memories...
  generateRandomMemory: function () {
    const memories = LongDistanceRelationship.whatIsLost.oldMemories;
    const randomIndex = Math.floor(Math.random() * memories.length);
    return memories[randomIndex];
  },

  //give me a random memory!
  randomMemory: function () {
    return this.generateRandomMemory();
  },

  //put it in a sentance!
  ourConversations: function () {
    return `"${
      this.whatIsStillThere.uniqueExperiences.startConversation
    } ${LongDistanceRelationship.randomMemory()}? ${
      this.whatIsStillThere.uniqueExperiences.endConversation
    }!"`;
  },
};

console.log(
  "A conversation we have now:",
  LongDistanceRelationship.ourConversations()
);

console.log(
  "Are you happy?",
  LongDistanceRelationship.happyCheck()
);