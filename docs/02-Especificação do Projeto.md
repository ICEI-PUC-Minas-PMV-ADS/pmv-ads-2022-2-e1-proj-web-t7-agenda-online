# Especificações do Projeto

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.


## Personas

![image](https://user-images.githubusercontent.com/114623537/194182541-f4572518-72c2-4fd0-8694-533e56ddce6b.png)

![image](https://user-images.githubusercontent.com/114623537/194182578-704b08c3-06f1-44b7-a19e-292474aeeaf4.png)

![image](https://user-images.githubusercontent.com/114623537/194182615-97dba74a-8a55-4367-afec-347a7678daa8.png)


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Nicole Ferreira|Visualizar preços de serviços em salão de beleza|Cuidar da estética sem gastar além do orçamento.|
|Nicole Ferreira|Agendar corte de cabelo sem precisar ligar ou ir até ao estabelecimento.|Otimizar meu tempo.|
|Nicole Ferreira|Escolher o profissional de minha preferência.|Ter um atendimento satisfatório.|
|Nicole Ferreira|Realizar meus agendamentos tanto no desktop, quanto no celular.|Ter flexibilidade no uso do app, aproveitando melhor seu tempo.|
|Nicole Ferreira|Desmarcar um horário agendado, caso surja algum imprevisto.|Ter mais praticidade.|
|Nicole Ferreira|Consultar meus agendamentos.|Me programar.|
|Nicole Ferreira|Receber um lembrete sobre agendamentos realizados.|Não esquecer.|
|Nicole Ferreira|Poder opinar sobre a qualidade do serviço recebido.|Ressaltar o que gostei e o que acredito que possa melhorar.
|Gleice Dias|Estabelecer meus serviços da semana em um sistema online, disponibilizando horários.|Economizar seu tempo evitando marcação manual de horário.
|Gleice Dias|Bloquear dias e horários em minha agenda.|Ter flexibilidade para resolver assuntos pessoais, descansar, viajar…
|Gleice Dias|Organizar meus agendamentos através de computadores.|Programar sua disponibilidade e ganhos semanais.
|Gleice Dias|Visualizar dias e horários em que tenho clientes agendados.|Organizar minha rotina.
|Gleice Dias|Receber notificações de agendamentos e cancelamentos.|Me programar e não ficar ociosa.
|Alexandre|Implantar tecnologia em seu negócio de forma inovadora.|Ter mais eficiência, atrair mais clientes como o público jovem.
|Alexandre|Receber feedback dos serviços prestados em seu estabelecimento.|Conhecer seus clientes e saber em que precisam melhorar.
|Alexandre|Conceder e remover acesso de profissionais.|Manter a segurança do sistema e manter o sistema atualizado.


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01| O site deve exibir somente os horários disponíveis para o cliente. | ALTA | 
|RF-02| O usuário deve poder agendar um horário (se disponível).  | ALTA |
|RF-03| O usuário deve poder consultar o horário marcado sempre que necessário. | MÉDIA |
|RF-04| O gestor e os funcionários deve poder consultar o horário marcado sempre que necessário. | MÉDIA |
|RF-05| O usuário deve conseguir cancelar o horário marcado. | ALTA |
|RF-06| O gestor deve ter acesso aos feedbacks recebidos. | BAIXA |
|RF-07| O gestor deve ter acesso a agenda de todos os profissionais. | ALTA |
|RF-08| O profissional deve conseguir ver os horários marcados e quem ele irá atender. | MÉDIA |
|RF-09| O usuário deve conseguir ver o valor do serviço desejado. | MÉDIA |
|RF-10| O usuário deve poder escolher o profissional de sua preferência. | ALTA |
|RF-11| O site deve exibir todos os dias do mês, porém somente os dias disponíveis devem estar destacados. | ALTA |
|RF-12| O profissional deve poder bloquear sua agenda. | ALTA |
|RF-13| Os usuários devem receber lembretes do horário marcado. | BAIXA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O usuário deve conseguir marcar seu horário em até 5 minutos. | ALTA | 
|RNF-002| O  usuário deve poder usar o sistema em seu telefone. |  ALTA | 
|RNF-003| O site deve possuir um contraste de cores para que pessoas com baixa visão consigam usá-lo adequadamente.| BAIXA|
|RNF-004| O usuário deve poder utilizar o sistema em seu navegador de preferência.| ALTA|
|RNF-005| O site deve bloquear os horários que já foram marcados.| ALTA|


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deve estar pronto e ser entregue até dia 11/12/2022, não é permitido extrapolar essa data. |
|02| O SITE deve ser feito em JavaScript, CSS e HTML.    |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho.|
