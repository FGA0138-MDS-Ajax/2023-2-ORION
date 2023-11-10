# Declaração de Escopo do Produto v0.1.2

## Histórico de Revisão

### Versão 0.1

- Data: 25/10/2023
- Autores: Rodrigo, João Pedro, Manoel
- Primeiras definições de escopo.

### Versão 0.1.1

- Data: 02/11/2023
- Autores: João Pedro
- Adição das User Stories, diagrama de casos de uso e alguns itens no backlog do produto.

### Versão 0.1.2

- Data: 03/11/2023
- Autores: Rodrigo, Manoel, João Mateus
- Revisão e alinhamento de todos os documentos

## 1. Problema / Sistema de software

- Definição da equipe: Manoel: desenvolvedor front-end, representante do Product Owner; Lara: desenvolvedora front-end; João Pedro: desenvolvedor back-end; Mateus Santos: desenvolvedor back-end; Rodrigo: analista de bancos de dados, scrum master; Eduardo: testador, prototipador, desenvolvedor.

- Resumo do problema: Falta de um espaço/meio de comunicação para a promoção de eventos de interação entre discentes no campus UnB Gama.

- Sistema de Software. O nome do projeto é GamaHub e seu objetivo é ser uma plataforma para facilitar o encontro de pessoas com interesses em comum e aproximar os discentes.

- Resumo de tecnologias usadas: Resuma as tecnologias usadas no desenvolvimento, justificando seus usos Serão utilizados a linguagem de programação JavaScript, por afinidade dos membros do grupo; o JS runtime Node.js, pois é o runtime de maior afinidade do grupo; o framework React, para desenvolver o front-end com facilidade e com as conveniências do framework; o software de bancos de dados MongoDB, por afinidade da equipe; a IDE VSCode, por afinidade da equipe e o software de organização Notion, para organizar as sprints, documentos e arquivos do projeto.

- Resumo da metodologia de desenvolvimento usada: Resuma o a filosofia de desenvolvimento seu ciclo de vida (fases e atividades). Considerando o contexto do projeto que é de uma aplicação web com vários riscos envolvidos e prazo bastante limitado, foi definido um ciclo de vida ágil, assim como os processos do Scrum XP, visando um produto de software que agrade os usuários e aceite mudanças de requisitos.

#### Outras informações sobre o ciclo de vida:

- Métodos, técnicas: Pair Programming, Code Review, Refactoring, Padrões de Codificação, Integração Contínua, Propriedade Coletiva, Projeto Simples e Metáforas.
- Métricas usadas no desenvolvimento: Tempo de capacitação da equipe, tempo em dias e quantidade de desenvolvedores para completar uma sprint, grau de satisfação do PO
- Testes de software: Os níveis de testes usados serão unitários e integração.

## 2. Backlog do produto

### 2.1 Perfis

##### Tabela 1 - Perfis de acesso

<table>
  <tr>
   <td>#
   </td>
   <td>Nome do perfil
   </td>
   <td>Características do perfil
   </td>
   <td>Permissões de acesso
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>Administrador
   </td>
   <td>Responsável por realizar a moderação dos usuários e eventos cadastrados no sistema.
   </td>
   <td>Permite ver, e deletar usuários  e eventos cadastrados. Não tem acesso direto às senhas.
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>Usuário
   </td>
   <td>Pode cadastrar informações pessoais para contato, registrar eventos e se inscrever em eventos criados por outros usuários.
   </td>
   <td>Permite gerenciar seus próprios eventos e dados cadastrados.
   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td>Visitante
   </td>
   <td>Pode ver todos os eventos cadastrados no sistema.
   </td>
   <td>Não pode se inscrever ou criar eventos, apenas visualizar.
   </td>
  </tr>
</table>

### 2.2 Cenários

Tabela 2 - Cenários funcionais

<table>
  <tr>
   <td colspan="3" >Sistema: GamaHub – Cenários funcionais
   </td>
  </tr>
  <tr>
   <td>Numeração do cenário
   </td>
   <td>Nome do cenário
   </td>
   <td>Sprints
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
</table>

### 2.3 Backlog do produto

Tabela 3 - Backlog do produto

<table>
  <tr>
   <td colspan="6" ><strong>Sistema: GamaHub – Backlog do produto</strong>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Numeração
<p>
(Cenário / requisito)
   </td>
   <td>Sprint
   </td>
   <td>Nome do requisito
   </td>
   <td>Tipo de requisito
<p>
(Funcional / não funcional)
   </td>
   <td>Priorização do requisito
<p>
Must, Should, Could
   </td>
   <td>Descrição sucinta do requisito
   </td>
   <td><strong>User stories (U.S.) associadas</strong>
<p>
Identifique as U.S. associadas ao requisito
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>Criar Conta
   </td>
   <td>Funcional
   </td>
   <td>Must
   </td>
   <td>Permite ao usuário criar conta para se registar nos eventos.
   </td>
   <td>US 01
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>Listar eventos
   </td>
   <td>Funcional
   </td>
   <td>Must
   </td>
   <td>O sistema lista os eventos cadastrados para os perfis de usuário.
   </td>
   <td>US 02
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>Criar eventos
   </td>
   <td>Funcional
   </td>
   <td>Must
   </td>
   <td>O usuário pode registrar um ou mais eventos.
   </td>
   <td>US 03
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>Excluir evento
   </td>
   <td>Funcional
   </td>
   <td>Must
   </td>
   <td>O usuário pode excluir eventos criados por ele mesmo.
   </td>
   <td>US 04
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>Excluir eventos de usuários
   </td>
   <td>Funcional
   </td>
   <td>Must
   </td>
   <td>O administrador pode apagar um evento, caso o mesmo seja ofensivo de alguma forma, por exemplo.
   </td>
   <td>US 05
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>Banir usuário
   </td>
   <td>Funcional
   </td>
   <td>Must
   </td>
   <td>O administrador pode banir um usuário que tenha uma má conduta.
   </td>
   <td>US 06
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>Editar
<p>
informações
   </td>
   <td>Funcional
   </td>
   <td>Must
   </td>
   <td>O usuário pode editar alguns de seus dados no sistema (Apelido, Pronome)
   </td>
   <td>US 12
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>Editar evento
   </td>
   <td>Funcional 
   </td>
   <td>Must
   </td>
   <td>O usuário pode editar seu evento.
   </td>
   <td>US 13
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>Comentários em eventos
   </td>
   <td>Funcional
   </td>
   <td>Could
   </td>
   <td>O usuário pode entrar em contato com o organizador do evento para tirar dúvidas.
   </td>
   <td>US 07
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>Comentários em eventos
   </td>
   <td>Funcional
   </td>
   <td>Could
   </td>
   <td>O usuário pode entrar em contato com o organizador do evento para fazer sugestões ou comentar alguma opinião.
   </td>
   <td>US 08
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>Acrescentar organizadores
   </td>
   <td>Funcional
   </td>
   <td>Could
   </td>
   <td>O organizador do evento pode atribuir um cargo de organizador para outros usuários
   </td>
   <td>US 09
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>Denúncias
   </td>
   <td>Funcional
   </td>
   <td>Should
   </td>
   <td>O usuário pode denunciar um evento ou comentário impróprio / ofensivo 
   </td>
   <td>US 10
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>Filtro de categorias
   </td>
   <td>Funcional
   </td>
   <td>Could
   </td>
   <td>O usuário pode filtrar os eventos disponíveis em categorias.
   </td>
   <td>US 11
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>Expirar evento
   </td>
   <td>Funcional
   </td>
   <td>Should
   </td>
   <td>O evento deverá expirar e ser deletado ao fim da data informada pelo usuário
   </td>
   <td>US 14
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
   </td>
   <td>Conformidade com a LGPD
   </td>
   <td>Não funcional
   </td>
   <td>Must
   </td>
   <td>O sistema deve ter sigilo quanto aos dados de usuários mantidos. Os usuários administradores não devem ver senhas cadastradas de usuário, por exemplo.
   </td>
   <td>
   </td>
  </tr>
</table>

### 2.4 Sprints previstas

Tabela 4 - Sprints previstas

<table>
  <tr>
   <td colspan="4" >Sistema: GamaHub – Sprints previstas
   </td>
  </tr>
  <tr>
   <td># Sprint
   </td>
   <td>Descrição
   </td>
   <td>Objetivos
   </td>
   <td>Composição de itens do backlog (Lista conforme tabela Backlog do produto)
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>
   </td>
   <td>Prototipação do projeto
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>
   </td>
   <td>Criar sistema de login de usuário
   </td>
   <td>Criar Conta
   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td>
   </td>
   <td>Criar home
   </td>
   <td>Visualizar eventos
   </td>
  </tr>
  <tr>
   <td>4
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>5
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>6
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>7
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>8
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
  </tr>
</table>

##### Fonte: (Desenvolvedores, 2023)

## 3. Definição de Ready/Done

- Ready: Quando a equipe está apta a realizar a tarefa / Não necessita de um tempo para capacitação em questão, sua descrição está clara e alinhada com quem irá executar;
- Done: Quando a tarefa foi finalizada, testada e validada.

## 4. US – User Stories

##### Tabela 5 - User Stories

<table>
  <tr>
   <td>
US 01
   </td>
   <td>Eu como visitante quero criar uma conta para interagir no site.
   </td>
  </tr>
  <tr>
   <td>US 02
   </td>
   <td>Eu como visitante quero que o sistema me mostre os eventos cadastrados, assim posso me informar rapidamente do que está acontecendo no momento antes de decidir se quero ficar na plataforma.
   </td>
  </tr>
  <tr>
   <td>US 03
   </td>
   <td>Eu como usuário quero cadastrar um evento, assim posso reunir pessoas para fazer algo de que gostamos.
   </td>
  </tr>
  <tr>
   <td>US 04
   </td>
   <td>Eu como usuário quero excluir um evento que eu tenha criado, pois desisti do plano inicial.
   </td>
  </tr>
  <tr>
   <td>US 05
   </td>
   <td>Eu como administrador quero apagar eventos criados por usuários, para evitar conteúdos ofensivos/desnecessários.
   </td>
  </tr>
  <tr>
   <td>US 06
   </td>
   <td>Eu como administrador quero poder banir um usuário, para evitar usuários maliciosos na plataforma.
   </td>
  </tr>
  <tr>
   <td>US 07
   </td>
   <td>Eu, como usuário, quero poder tirar dúvidas sobre os eventos, para não ter inconveniências no evento.
   </td>
  </tr>
  <tr>
   <td>US 08
   </td>
   <td>Eu, como usuário, quero poder comentar/sugerir nos eventos, para poder adicionar algo aos eventos.
   </td>
  </tr>
  <tr>
   <td>US 09
   </td>
   <td>Eu, como usuário, quero ter mais pessoas como organizadoras do meu evento, pois assim não ficaria sobrecarregado com tarefas.
   </td>
  </tr>
  <tr>
   <td>US 10
   </td>
   <td>Eu, como usuário, quero poder denunciar eventos/comentários maldosos/perigosos, assim posso ajudar a plataforma a ficar mais segura para usar.
   </td>
  </tr>
  <tr>
   <td>US 11
   </td>
   <td>Eu, como visitante, quero filtrar os eventos por categorias, assim posso encontrar eventos do meu interesse mais facilmente.
   </td>
  </tr>
  <tr>
   <td>US 12
   </td>
   <td>Eu, como usuário, quero poder editar informações do meu perfil, pois posso mudar algo em mim ou ter cometido algum erro no cadastro.
   </td>
  </tr>
  <tr>
   <td>US 13
   </td>
   <td>Eu, como usuário, quero poder editar informações do meu evento, pois posso mudar algo ou inserir novas informações.
   </td>
  </tr>
  <tr>
   <td>US 14
   </td>
   <td>Eu, como usuário, quero que meus eventos expiram automaticamente após o término, pois não há necessidade de fazer isso manualmente.
   </td>
  </tr>
</table>

## 5. Diagrama de casos de uso
//
## 6. MVP
O MVP será atingido quando os requisitos / USs marcados como Must forem concluídos e devidamente validados, ou seja, o sistema deverá ser capaz de receber cadastros de usuários que irão cadastrar eventos e também poderão se cadastrar em eventos criados por outros usuários.
