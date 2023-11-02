const courtyard = document.querySelector('#courtyard');
const popup1 = document.querySelector('#popup1');
const ampitheatre = document.querySelector('#ampitheatre');
const popup2 = document.querySelector('#popup2');

courtyard.addEventListener('mouseover', () => {
    popup1.style.opacity = '1';
});

courtyard.addEventListener('mouseout', () => {
    popup1.style.opacity = '0';
});


ampitheatre.addEventListener('mouseover', () => {
    popup2.style.opacity = '1';
});

ampitheatre.addEventListener('mouseout', () => {
    popup2.style.opacity = '0';
});