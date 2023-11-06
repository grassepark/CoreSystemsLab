const courtyard = document.querySelector('#courtyard');
const popup1 = document.querySelector('#popup1');
const ampitheatre = document.querySelector('#ampitheatre');
const popup2 = document.querySelector('#popup2');
const e14st_roadside = document.querySelector('#e14st_roadside')
const popup3 = document.querySelector('#popup3');
const the_steps_behind_the_chesslords = document.querySelector('#the_steps_behind_the_chesslords')
const popup4 = document.querySelector('#popup4');
const ralings_at_the_george_washington_statue = document.querySelector('#ralings_at_the_george_washington_statue')
const popup5 = document.querySelector('#popup5');
const the_long_wooden_benches_in_the_park = document.querySelector('#the_long_wooden_benches_in_the_park')
const popup6 = document.querySelector('#popup6');
const seating_area_near_the_lincoln_statue_and_the_playground_for_children = document.querySelector('#seating_area_near_the_lincoln_statue_and_the_playground_for_children')
const popup7 = document.querySelector('#popup7');


courtyard.addEventListener('mouseover', () => {
    popup1.style.opacity = '1';
});

courtyard.addEventListener('mouseout', () => {
    popup1.style.opacity = '0';
});


ampitheatre.addEventListener('mouseover', () => {
    popup2.style.opacity = '1';
    console.log("fart")
});

ampitheatre.addEventListener('mouseout', () => {
    popup2.style.opacity = '0';
});


e14st_roadside.addEventListener('mouseover', () => {
    popup3.style.opacity = '1';
});

e14st_roadside.addEventListener('mouseout', () => {
    popup3.style.opacity = '0';
});


the_steps_behind_the_chesslords.addEventListener('mouseover', () => {
    popup4.style.opacity = '1';
});

the_steps_behind_the_chesslords.addEventListener('mouseout', () => {
    popup4.style.opacity = '0';
});


ralings_at_the_george_washington_statue.addEventListener('mouseover', () => {
    popup5.style.opacity = '1';
});

ralings_at_the_george_washington_statue.addEventListener('mouseout', () => {
    popup5.style.opacity = '0';
});


the_long_wooden_benches_in_the_park.addEventListener('mouseover', () => {
    popup6.style.opacity = '1';
});

the_long_wooden_benches_in_the_park.addEventListener('mouseout', () => {
    popup6.style.opacity = '0';
});


seating_area_near_the_lincoln_statue_and_the_playground_for_children.addEventListener('mouseover', () => {
    popup7.style.opacity = '1';
});

seating_area_near_the_lincoln_statue_and_the_playground_for_children.addEventListener('mouseout', () => {
    popup7.style.opacity = '0';
});



document.addEventListener("DOMContentLoaded", function () {
    function loadJSONAndUpdateSVG(jsonURL) {
        //change the json based off of button press
        fetch(jsonURL)
            .then(response => response.json())
            .then(data => {
                for (const circleId in data) {
                    const circleData = data[circleId];
                    const circle = document.getElementById(circleId);
        
                    if (circle) {
                        circle.setAttribute('stroke-width', circleData.strokeWidth);
                    }
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    // morning
    document.getElementById("button1").addEventListener("click", function () {
        loadJSONAndUpdateSVG("morning.json"); 
    });

    // noon
    document.getElementById("button2").addEventListener("click", function () {
        loadJSONAndUpdateSVG("noon.json"); 
    });

    // evening
    document.getElementById("button3").addEventListener("click", function () {
        loadJSONAndUpdateSVG("evening.json"); 
    });
});
