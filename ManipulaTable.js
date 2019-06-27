  // Contador de controle 
  var indexControle = 0;

  function AdicionaLinha(NomeCtrHtmlTable)
  {
      var NomeControle = new String(NomeCtrHtmlTable);
      // 1 - Tabela 
      var tabela = document.getElementById(NomeControle);
      // 2 - Index da Linha 
      var indexLinha = tabela.rows.length;
      // 3 - Cria a linha para ser inserida na tabela
      var linha = tabela.insertRow(indexLinha);
      linha.id = "linha" + indexLinha;

      // 3.1 Estilo da linha 
      linha.style.color = "Black";
      linha.style.backgroundColor = "White";
      linha.style.fontFamily = "Verdana";
      linha.style.fontSize = "XX-Small";
      linha.style.fontWeight = "bold";
      linha.style.borderStyle = "Solid";
      linha.style.borderWidth = "1px";
      linha.style.borderColor = "Black";
      
      // 4 - Cria as celulas para ser inseridas na linha
      var celula1 = linha.insertCell(0);
      var celula2 = linha.insertCell(1);
      var celula3 = linha.insertCell(2);

      celula1.setAttribute("style","border-style: solid; border-width:thin;");
      celula2.setAttribute("style","border-style: solid; border-width:thin;");
      celula3.setAttribute("style","border-style: solid; border-width:thin;");

      // 5 - Pega os valores dos controles  
      var TxtNome = document.getElementById('TxtNome').value;
      var TxtTel = document.getElementById('TxtTel').value;
      
      // 4.1 - Cria os contorle HTML para ser inseridos nas celulas da linha 
      //Controle [image]
      var inputButtonExcluir = document.createElement("input");
      inputButtonExcluir.setAttribute("type", "image");
      inputButtonExcluir.setAttribute("id", "BtnExcluir" + indexControle + "$btnRemove_" + indexLinha);
      inputButtonExcluir.setAttribute("src", "ico_cancelar.gif");
      inputButtonExcluir.setAttribute("onclick", "javascript:return RemoveLinha('" + tabela.id + "', this);");   
      //Controle [text]
      var inputTextNome = document.createElement("input");
      inputTextNome.setAttribute("type","text");
      inputTextNome.setAttribute("id","ListaTel[" + indexControle + "].NomePessoa");
      inputTextNome.setAttribute("name","ListaTel[" + indexControle + "].NomePessoa");
      inputTextNome.setAttribute("value",TxtNome);
      inputTextNome.setAttribute("readonly","");
      inputTextNome.setAttribute("style","border:0");
      //Controle [text]
      var inputTextTel = document.createElement("input");
      inputTextTel.setAttribute("type", "text");
      inputTextTel.setAttribute("id", "ListaTel[" + indexControle + "].TelPessoa");
      inputTextTel.setAttribute("name","ListaTel[" + indexControle + "].TelPessoa");
      inputTextTel.setAttribute("value",TxtTel);
      inputTextTel.setAttribute("readonly","");
      inputTextTel.setAttribute("style","border:0");

      celula1.appendChild(inputTextNome);
      celula2.appendChild(inputTextTel);
      celula3.appendChild(inputButtonExcluir);

      // 5 - Gera o incremento do index do controle
      indexControle = (indexControle + 1); 
     
  }

  function RemoveLinha(NomeCtrHtmlTable, objIMG) {

      // 1 - Pega a Tabela 
      var NomeControle = new String(NomeCtrHtmlTable);
      var tabela = document.getElementById(NomeControle);

      // 2 - Pega o Index da Linha 
      var indexLinha = tabela.rows.length;

      // 3 - Variavel que irá armazena p Novo Index dos Controles 
      var novoIndex = 0;

      // 4 - Recupera Imagem Excluir 
      var hdInfImg = objIMG.parentNode.parentNode.cells['2'].firstChild;

      // 5 - Recupera o index da linha da tabela
      var indexLinha = objIMG.parentNode.parentNode.rowIndex;

      // 6 - Deleta alinha da Tabela 
      tabela.deleteRow(indexLinha);

      // 7 - Pega as linhas contadas na tabela
      for (index = 1; index < tabela.rows.length; index++)
      {
          // 7.1 - Pega a linha da tabela 
          var linha = tabela.rows[index];
          
          // 7.2 - Pega os controles das celulas 
          var ObjTxtNome = linha.cells[0].firstChild;
          var ObjTxtTel = linha.cells[1].firstChild;

         // 7.3 - Refaz o index dos controles contidos na celula [1,2] 
          ObjTxtNome.id = "ListaTel[" + novoIndex + "].NomePessoa";
          ObjTxtNome.name = "ListaTel[" + novoIndex + "].NomePessoa";
          ObjTxtTel.id = "ListaTel[" + novoIndex + "].TelPessoa";
          ObjTxtTel.name = "ListaTel[" + novoIndex + "].TelPessoa"; 

          // 7.4 -Incrementa o novo index
          novoIndex += 1;

      }

      // 8 - Retorna false para não gerar submit na página 
      return false;

  }