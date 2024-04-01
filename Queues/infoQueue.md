# Por que usar filas (queues) e quando usar

Uma fila (queue) é uma estrutura de dados que segue o princípio FIFO (First-In-First-Out), onde o primeiro elemento inserido é o primeiro a ser removido. Elas são úteis em situações em que os elementos precisam ser processados na ordem em que foram inseridos.

## Por que usar filas:

1. **Mantém a ordem de chegada**: Filas garantem que os elementos sejam processados na ordem em que foram inseridos, o que é importante em muitos cenários de processamento de dados.

2. **Controle de fluxo**: As filas são eficazes para controlar o fluxo de dados em sistemas concorrentes, garantindo que cada elemento seja processado de forma ordenada e justa.

3. **Gerenciamento de recursos compartilhados**: Em sistemas onde recursos são compartilhados entre múltiplas tarefas, filas podem ser usadas para coordenar o acesso a esses recursos, evitando conflitos e garantindo a integridade dos dados.

4. **Buffers em comunicação assíncrona**: Filas são comumente usadas como buffers em sistemas de comunicação assíncrona, permitindo que os dados sejam temporariamente armazenados enquanto aguardam processamento ou transmissão.

## Quando usar filas:

1. **Processamento assíncrono de tarefas**: Use filas quando precisar lidar com tarefas que podem ser processadas em segundo plano de forma assíncrona, sem interromper a execução principal do programa.

2. **Escalonamento de tarefas em sistemas distribuídos**: Em sistemas distribuídos, filas são frequentemente utilizadas para distribuir e balancear a carga de trabalho entre os diferentes nós do sistema.

3. **Modelagem de sistemas de atendimento ao cliente**: Em sistemas de atendimento ao cliente, filas são usadas para gerenciar as solicitações dos clientes e garantir que sejam atendidas na ordem correta.

4. **Processamento de eventos em tempo real**: Em aplicações que lidam com eventos em tempo real, como sistemas de monitoramento ou jogos, filas podem ser usadas para organizar e processar os eventos conforme eles ocorrem.

Em resumo, use filas sempre que precisar garantir a ordem de processamento de elementos, controlar o fluxo de dados ou coordenar o acesso a recursos compartilhados de forma eficiente e justa.