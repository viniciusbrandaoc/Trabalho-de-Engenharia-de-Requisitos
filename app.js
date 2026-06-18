/* =============================================
   EcoRede — app.js
   Lógica compartilhada (simulação de dados)
   ============================================= */

/* ── Toast ── */
function mostrarToast(msg, duracao = 3500) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duracao);
}

/* ── Chave de armazenamento ── */
const CHAVE_COLETAS = 'ecorede_coletas';

/* Salva uma nova coleta agendada pelo morador */
function salvarColeta(coleta) {
  const lista = JSON.parse(localStorage.getItem(CHAVE_COLETAS) || '[]');
  lista.unshift(coleta);          /* mais recente primeiro */
  localStorage.setItem(CHAVE_COLETAS, JSON.stringify(lista));
}

/* Retorna as coletas do usuário logado (morador) */
function obterHistorico() {
  const usuario = JSON.parse(sessionStorage.getItem('usuarioLogado'));
  if (!usuario) return [];

  const lista = JSON.parse(localStorage.getItem(CHAVE_COLETAS) || '[]');

  /* Se não há nada no storage, retorna histórico de demonstração */
  if (lista.length === 0) {
    return [
      { id: 1, data: '12/05/2026 09:30', categorias: 'Plásticos, Papel', volume: 'Médio (5–20 kg)', status: 'Concluída', pontos: 20, justificativa: null },
      { id: 2, data: '28/04/2026 14:15', categorias: 'Óleo de Cozinha Usado', volume: 'Pequeno (até 5 kg)', status: 'Concluída', pontos: 20, justificativa: null },
      { id: 3, data: '10/04/2026 11:00', categorias: 'Vidros, Metais', volume: 'Grande (acima de 20 kg)', status: 'Recusada', pontos: null, justificativa: 'Material contaminado com resíduos orgânicos.' }
    ];
  }

  return lista;
}

/* Retorna todas as coletas (para o coletor ver as pendentes) */
function obterTodasColetas() {
  return JSON.parse(localStorage.getItem(CHAVE_COLETAS) || '[]');
}

/* Atualiza o status de uma coleta (chamado pelo coletor: RF07) */
function atualizarStatusColeta(coletaId, novoStatus, pontos = 0, justificativa = null) {
  const lista = JSON.parse(localStorage.getItem(CHAVE_COLETAS) || '[]');
  const coleta = lista.find(c => c.id === coletaId);
  if (coleta) {
    coleta.status       = novoStatus;
    coleta.pontos       = pontos > 0 ? pontos : null;
    coleta.justificativa = justificativa;
    localStorage.setItem(CHAVE_COLETAS, JSON.stringify(lista));
  }
}