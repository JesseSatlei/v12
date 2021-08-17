function insert(num) {
    document.form.display.value = document.form.display.value + num
}

function backspace() {
    var display = document.form.display.value;
    document.form.display.value = display.substring(0, display.length - 1);
}

function clean() {
    document.form.display.value = '';
}

function equal() {
    var exp = document.form.display.value;
    let result = 0;
    if (exp) {
        document.form.display.value = eval(exp);
        result = eval(exp);
    }

    var nameCustomer = $("[name=nameCustomer]").val();
    formData = {
        "operation": `${exp} = ${result}`,
        "nameCustomer": nameCustomer
    }
     console.log(formData);
    $.ajax({
        url: 'http://localhost:3000/calculator',
        dataType: 'json',
        type: 'post',
        data: formData,
        success: function () {
            console.log('sucesso');
        },
        error: function (XMLHttpRequest) {
            console.log(XMLHttpRequest.responseText);
            console.log('Ops!', 'Algo de errado ocorreu na criação', 'error');
        }
    });
}

function listAll() {
    $.ajax({
        url: "http://localhost:3000/calculator",
        dataType: 'json',
        type:"get",
        success: function (json) {
            let result = '<div>';
                result += '<ul class="list-group">';
                    json.forEach(element => {
                        let newDate = new Date(element.time.toString());
                        let newName = element.nameCustomer ? element.nameCustomer : 'Sem Nome';
                        result += `<li class="list-group-item"> Nome: ${newName} | Operação: ${element.operation} | Realizado em: ${newDate.toDateString()} </li>`;
                        console.log(element)
                    });
                result += '</ul>';
            result += '</div>';
            $('#listAll').html("");
            $('#listAll').append(result);
        },
        error: function (XMLHttpRequest) {
            console.log(XMLHttpRequest.responseText);
            console.log('Ops!', 'Algo de errado ocorreu', 'error');
        }
    })
}