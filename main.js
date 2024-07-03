function verificarpalavrachave() {
  var palavrachave = document.getElementById('inputchave').value;

  // Substituir pela palavra-chave que o adm quiser (não existe segurança mesmo)
  if (palavrachave === 'pumamarelo27') {
    window.location.href = 'adm.php'; // Redireciona para a página do adm
  } else {
    alert('Palavra-chave incorreta!');
  }
}

/*pagina adm1*/

var opcao = null
  
  function verificarselecao(){
    alert ("opcao selecionada: " + opcao)
  }
    function generateRadioButtons() {
      // Limpar container antes de gerar novos botões
      document.getElementById('radioButtonsContainer').innerHTML = '';

      // Obter o número do campo de entrada
      var quantidade = document.getElementById('quantidade').value;

      if (quantidade > 10) {
        document.getElementById('quantidade').value = 10;
        quantidade = 10;
      }

      // Criar botões de rádio com base no número fornecido
      for (var i = 1; i <= quantidade; i++) {
        var radioBtn = document.createElement('input');
        radioBtn.type = 'radio';
        radioBtn.name = 'opcao';
        radioBtn.value = i;
        radioBtn.id = 'option' + i;
        radioBtn.addEventListener('change', function(){
         opcao = this.value; 
        })

        var label = document.createElement('label');
        label.htmlFor = 'option' + i;
        label.appendChild(document.createTextNode('Alternativa ' + i));

        document.getElementById('radioButtonsContainer').appendChild(radioBtn);
        document.getElementById('radioButtonsContainer').appendChild(label);
      }
    }
    
    //pagina perguntas
    
