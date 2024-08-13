# Sistema de Gestão Empresarial - Módulo de Gestão Financeira (Compra e Venda)

## Descrição

Este projeto é um sistema de gestão empresarial destinado ao setor de festas e eventos, que movimenta mais de R$300 bilhões no Brasil. O sistema visa aprimorar a administração dos negócios de empresas que produzem, fabricam e vendem produtos alimentícios para eventos, como salgados, doces e bolos. Através da automação, o sistema pretende facilitar a gestão de estoque, o cadastro de clientes, a gestão financeira e o controle de pedidos, proporcionando uma solução mais eficiente e econômica para pequenas e médias empresas.

## Benefícios Esperados

- **Agilidade**: Redução do tempo de processamento de dados e operações.
- **Controle de Estoque**: Gerenciamento preciso dos produtos em estoque.
- **Registro Completo**: Manutenção de um histórico detalhado de serviços e clientes.
- **Controle de Pedidos e Eventos**: Organização e acompanhamento eficiente dos pedidos.
- **Facilidade de Uso**: Interface intuitiva e amigável.
- **Aperfeiçoamento do Controle Financeiro**: Melhoria na gestão das finanças e cálculo de margens de lucro.

## Detalhamento

O sistema será implementado para enfrentar os desafios atuais enfrentados pelas empresas do setor, como a imprecisão na gestão de estoque, a dificuldade no contato com clientes e o controle financeiro manual. A solução proposta visa automatizar e otimizar esses processos, reduzindo erros e custos, e melhorando a eficiência operacional.

## Módulos Implementados

### 1. Autenticação de Usuário

- **Descrição**: Apenas usuários cadastrados podem acessar o sistema.
- **Credenciais**:
  - Usuário: administrador
  - Senha: 9873
- **Funcionalidade**: Verificação de acesso permitido ou negado.

### 2. Gestão de Estoque

- **Funcionalidades**:
  - Cadastro de Produtos:
    - Nome do Produto
    - Preço do Produto
    - Fornecedor
    - Contato
    - Quantidade de Produtos
    - Atualização de Preço de Produtos
  - Exibição de Informações:
    - Quantidade total de cada produto em estoque
    - Quantidade total de itens no estoque
    - Valor total de produtos em estoque
    - Média de produto em estoque
    - Mensagem de sucesso ou fracasso de operação de registro
  - Sugestão: Cadastro de itens para produção de salgados e bolos.

### 3. Gestão Financeira

#### Módulo Compra

- **Funcionalidades**:
  - Registro de Compras:
    - Número do Pedido
    - Nome do Produto
    - Quantidade do Produto
    - Preço do Produto
    - Fornecedor
    - Total da Compra
    - Data da Compra
    - Frete, se houver
    - Cálculo de Desconto, se houver
    - Tipo de Venda (cartão, à vista, boleto)
  - Visualização:
    - Informações através da chave de data de compra
    - Mensagem de sucesso ou fracasso de operação de registro

#### Módulo Venda

- **Funcionalidades**:
  - Registro de Vendas:
    - CPF do Cliente
    - Data e Hora da Venda
    - Produtos Comprados e seus Preços
    - Preço Final da Venda (com desconto de 3% para kits festa e inclusão de refrigerante de 2L)
    - Valor Total da Compra
    - Aplicação de 10% de desconto para funcionários
  - Exibição:
    - CPF do Cliente
    - Data e Hora da Venda
    - Detalhes da Compra
    - Valor Total da Compra
    - Opções de Visualização:
      - Total de Compras no Dia
      - Quantidade de Produtos Vendidos
      - Total por Tipo de Compra (cartão ou à vista)
      - Total de Vendas no Dia
      - Lucro do Dia

## Orientações de Uso

**Configuração Inicial**:
   - Clone o repositório: `git clone sistema-gestao-empresarial`
   - Sistema utilizado em compilador online, Replit.
   - Configure as variáveis de ambiente, se necessário.
