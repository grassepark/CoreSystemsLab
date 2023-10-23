
elephant = {

  randomImage: function () {
    const images = this.elephants;
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  },

  randomElephant: function () {
    return this.randomImage();
  },


  elephants: [
    "images/elephant1.png",
    "images/elephant2.jpeg",
    "images/elephant3.jpeg",
  ],
}

console.log(elephant.randomElephant());

const myButton = document.querySelector('#myButton');
myButton.addEventListener('click', () => {
  elephant.randomElephant();
  document.querySelector('.elephant').setAttribute('src',elephant.randomElephant());
});



