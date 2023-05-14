function CalculatorBMI() {



    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const btn = document.getElementById('calculator');

    const result = weight / Math.pow(height, 2);
    document.getElementById('result').innerText = result.toFixed(2);

    if (result < 18.5) {
        document.getElementById("result-statu").innerText = 'Under Weight';
        document.getElementById("result-statu").style.color = "#2196f3";
    }

    //diğer ifler benzer yapıda yapılabilir

}

function Clear() {

    document.getElementById("weight").value = 0;
    document.getElementById("height").value = 0;
    document.getElementById("result").innerText = "";
    document.getElementById("result-statu").innerText = "";


}