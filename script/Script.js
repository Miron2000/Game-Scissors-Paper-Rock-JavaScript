window.onload = function() {
    const options = ["rock", "paper", "scissors"];


    function resultgame(a, b) {
        console.log(a, b);
        if (b === a) {
            return 'Drow';
        } else if (b === 'rock' && a === 'paper' || b === 'paper' && a === 'scissors' || b === 'scissors' && a === 'rock') {
            return 'You lose';
        } else if (b === 'paper' && a === 'rock' || b === 'scissors' && a === 'paper' || b === 'rock' && a === 'scissors') {
            return 'You win';
        }

    }

    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    const img3 = document.getElementById("img3");

    //const myImages = document.querySelectorAll('img');

    function test(event) {
        let randomNumber = options[Math.floor(Math.random() * 3)];
        let userChoice = event.target.dataset.value;
        // return(alert(resultgame(randomNumber, userChoice)));

        //вывод на екран (создаем переменную и добавляем innerHTML)
        const result = resultgame(randomNumber, userChoice);
        ourResult.innerHTML = result;

    }


    img1.addEventListener("click", test);
    img2.addEventListener("click", test);
    img3.addEventListener("click", test);

    //myImags.forEach(function(image){
    // image.addEventListener("click", test);
    // }

    //вывод на екран
    const ourResult = document.getElementById('result');
}