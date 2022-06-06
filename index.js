
    function cal() {
        var number = 1
        number = Number(document.getElementById('number').value);
        console.log(number);
        result = "";
        for (var i = 0; i <= 10; i++) {
            result = result + " <p> " + number + " * " + i + " = " + number * i + "</p>";
        }
        console.log(result);
        document.getElementById('result').innerHTML = result;

    }

    function reset() {
        document.getElementById('number').value = " ";
        document.getElementById('result').innerHTML = "";
    }