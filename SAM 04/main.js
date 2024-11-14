fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        const apiDataDiv = document.getElementById('api-data');
        apiDataDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => console.error('Error fetching data:', error));

var typingEffect = new Typed(".typedCountry", {
    strings: ["Japan", "South Korea", "Switzerland", "New Zealand", "Philippines"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})