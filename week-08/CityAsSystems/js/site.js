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
    console.log("fart")
});

ampitheatre.addEventListener('mouseout', () => {
    popup2.style.opacity = '0';
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
