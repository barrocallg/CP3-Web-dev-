# Prompts usados

## IA 1: Copilot
**Prompt:**
"Crie uma aplicação web simples em HTML, CSS e JavaScript puro com tela de login e CRUD de uma lista de lutas marciais. A lista deve começar com 3 itens e permitir adicionar no início e no final, editar e remover."

**Problemas:**
- Usou `prompt()` para editar (funciona, mas não é tão moderno).
- Comentários muito longos.

---

## IA 2: ChatGPT
**Prompt:**
"Preciso de um CRUD em JavaScript puro com login fixo. Após login, mostrar uma lista de filmes favoritos com 3 itens iniciais. O usuário pode adicionar no início e no final, editar e remover. Mostrar mensagens de erro na tela."

**Problemas:**
- Usou objetos no array, mas o requisito era só strings.
- Trouxe `localStorage` sem necessidade.

---

## IA 3: Gemini
**Prompt:**
"Faça um sistema web com HTML, CSS e JavaScript que tenha login com usuário 'aluno' e senha 'fiap2025'. Após login, mostrar uma lista de compras com 3 itens iniciais. Implementar CRUD completo e validar campos vazios."

**Problemas:**
- Não atualizava a lista automaticamente.
- Funções soltas, sem organização.

---

## IA escolhida
Escolhi **Copilot** como base porque o código estava mais organizado e seguiu melhor os requisitos. Fiz ajustes simples: removi comentários e mantive apenas array de strings.
