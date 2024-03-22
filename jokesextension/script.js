fetch('https://icanhazdadjoke.com/slack')
 .then(data => data.json())
 .then(jokeData => {
    const jokeText = jokeData.attachments[0].text;
    const jokeElement = document.getElementById('jokeElement');
    jokeElement.innerHTML = jokeText;
 })
 .catch(error => {
    console.error('Error fetching joke:', error);
 });

 //https://hindi-jokes-api.onrender.com/jokes?api_key=17664cb30905a500d0250ea13f56