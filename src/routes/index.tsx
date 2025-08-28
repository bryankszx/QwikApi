import { component$, useSignal, $ } from '@builder.io/qwik';
import '../global.css';

export default component$(() => {
  const raca = useSignal('');
  const result = useSignal<any>(null);

  const buscarRaca = $(async () => {
    if (raca.value.trim() !== '') {
      try {
        const response = await fetch(`https://dog.ceo/api/breed/${raca.value}/images`);
        if (!response.ok) throw new Error('Raça não encontrada');

        const data = await response.json();
        const imagens = data.message;
        if (imagens.length > 0) {
          const imagemAleatoria = imagens[Math.floor(Math.random() * imagens.length)];
          result.value = { message: imagemAleatoria };
        } else {
          result.value = { error: 'Nenhuma imagem encontrada para essa raça' };
        }
      } catch {
        result.value = { error: 'Raça não encontrada! Verifique o nome digitado.' };
      }
    }
  });

  return (
    <div class="container">
      <h1>Pesquisar Raça de Cachorro</h1>
      
      <input
        type="text"
        placeholder="Digite a raça (ex: hound, pug, akita)"
        value={raca.value}
        onInput$={(e) => (raca.value = (e.target as HTMLInputElement).value)}
      />

      <button onClick$={buscarRaca}>Buscar</button>

      {result.value && (
        <div class="result">
          {result.value.message ? (
            <img src={result.value.message} alt="Cachorro" width={300} height={300} />
          ) : (
            <p>{result.value.error}</p>
          )}
        </div>
      )}
    </div>
  );
});
