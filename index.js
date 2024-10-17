const botaoEnviar = document.getElementById("botaoEnviar");

        botaoEnviar.addEventListener("click", function() {
            const inputText = document.querySelectorAll(".info");
            const inputP = document.querySelectorAll(".campo_obgt");

            inputText.forEach((input, index) => {
                const campoObrigatorioDiv = inputP[index];
                campoObrigatorioDiv.innerHTML = ""; // Limpa mensagens anteriores
                if (input.value.trim() === "") {
                    input.classList.remove("bordaVerde");
                    input.classList.add("bordaVermelha");
                    campoObrigatorioDiv.innerHTML = "<p>campo obrigatório</p>"; // Mostra mensagem
                } else {
                    input.classList.add("bordaVerde");
                    input.classList.remove("bordaVermelha");
                }
            });
        });
