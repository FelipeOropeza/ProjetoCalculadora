let $botao = document.getElementById("button");
$botao.addEventListener("click", calcula)

function calcula(evt){
    evt.preventDefault();
    let $num1 = parseFloat(document.getElementById("num1").value.replace(".","."));
    let $num2 = parseFloat(document.getElementById("num2").value.replace(".","."));
    let $ope = document.getElementById("ope").value;
    let $result;

    if(isNaN(parseFloat($num1))){
        alert("Inseri apenas valores númericos");
        document.getElementById("num1").value = '';
        document.getElementById("num1").focus();
    }
    else if(isNaN(parseFloat($num2))){
        alert("Inseri apenas valores númericos");
        document.getElementById("num2").value = '';
        document.getElementById("num2").focus();
    }
    else{
        if($ope == 0){
            alert("Obrigatório informa uma operação");
        }
        else if($ope == 1){
            $result = parseFloat($num1) + parseFloat($num2);
            alert("Resultado: " + $result);
            document.getElementById("num1").value = '';
            document.getElementById("num2").value = '';
            document.getElementById("num1").focus();
            document.getElementById("ope").value = '0';
        }
        else if($ope == 2){
            $result = parseFloat($num1) - parseFloat($num2);
            alert("Resultado: " + $result);
            document.getElementById("num1").value = '';
            document.getElementById("num2").value = '';
            document.getElementById("num1").focus();
            document.getElementById("ope").value = '0';
        }
        else if($ope == 3){
            $result = parseFloat($num1) / parseFloat($num2);
            alert("Resultado: " + $result);
            document.getElementById("num1").value = '';
            document.getElementById("num2").value = '';
            document.getElementById("num1").focus();
            document.getElementById("ope").value = '0';
        }
        else{
            $result = parseFloat($num1) * parseFloat($num2);
            alert("Resultado: " + $result);
            document.getElementById("num1").value = '';
            document.getElementById("num2").value = '';
            document.getElementById("num1").focus();
            document.getElementById("ope").value = '0';
        }
    }
}
