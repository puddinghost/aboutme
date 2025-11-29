alert("Este site tem informações datadas do ano de 2025! Então... Caso você esteja lendo em 2030 ou sei lá, no passado, as informações não estão atualizadas para ti");

/* 
	OBJETIVO - quando clicarmos no botão temos que fazer a mensagem principal desaparecer e fazer a informação correspondente clicada aparecer.

    - passo 1 - Inserir as variáveis. Os botões e páginas.

	- passo 2 - Fazer que ao clicar em um botão, execute as ações

	- passo 3 - desmarcar o botão selecionado anterior

	- passo 4 - marcar o botão clicado como se estivesse selecionada

	- passo 5 - esconder a pagina anterior

	- passo 6 - fazer a pagina aparecer com base no botão
*/

// passo 1 - Inserir as variáveis. Os botões e páginas.
const buttonsFromList = document.querySelectorAll('.buttons');
const abas = document.querySelectorAll('.window-off');

// passo 2-6

buttonsFromList.forEach((button, indice) => {
    button.addEventListener('click', () => {    
        offButtonSelected();

        selectButtonFromList(button);

        hideAba();

        showAba(indice);
    })
})


function showAba(indice) {
    abas[indice].classList.remove('window-off')
    abas[indice].classList.add('window-on');
}

function selectButtonFromList(button) {
    button.classList.remove('bnotselect');
    button.classList.add('bselect');
}

function hideAba() {
    const abaSelected = document.querySelector('.window-on');
    abaSelected.classList.add('window-off')
    abaSelected.classList.remove('window-on');
}

function offButtonSelected() {
    const buttonSelected = document.querySelector('.bselect');
    buttonSelected.classList.add('bnotselect');
    buttonSelected.classList.remove('bselect');
}

/* 
	OBJETIVO - quando clicarmos no botão temos que fazer sair uma música ou desativar ela.

    - passo 1 - Inserir as variável BOTÃO.

	- passo 2 - Fazer que ao clicar em um botão, execute a música

	- passo 3 - Fazer que ao clicar no botão de novo, desative a música
*/

const buttonMusic = document.querySelector('.button-music');

buttonMusic.addEventListener('click', () => {
    turnMusic();
})

function turnMusic() {
    const audio = document.getElementById("bgm");
    if (audio.paused) {
        audio.volume = 0.3;
        audio.play();
        buttonMusic.textContent = "🔇";
    } else {
        audio.pause();
        buttonMusic.textContent = "🎵";
    }
    
}