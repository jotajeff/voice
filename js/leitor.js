const botaoLer = document.getElementById('ler');
const campoTexto = document.getElementById('texto');

botaoLer.addEventListener('click', function() {
  const texto = campoTexto.value;
  const sintetizador = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(texto);
  sintetizador.speak(utterance);
});
