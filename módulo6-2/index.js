const tarefas = [];
const input = document.getElementById('descricao');
const btnAdicionar = document.getElementById('btnAdicionar');
const lista = document.getElementById('listaTarefas');

function renderizarTarefas() {
  lista.innerHTML = '';

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = tarefa.status;
    checkbox.addEventListener('change', () => {
      tarefa.status = checkbox.checked;
      renderizarTarefas();
    });

    const span = document.createElement('span');
    span.textContent = tarefa.descricao;
    if (tarefa.status) {
      span.classList.add('concluida');
    }

    li.appendChild(checkbox);
    li.appendChild(span);
    lista.appendChild(li);
  });
}

btnAdicionar.addEventListener('click', () => {
  const descricao = input.value.trim();
  if (descricao !== '') {
    tarefas.push({ descricao: descricao, status: false });
    input.value = '';
    renderizarTarefas();
  }
});
