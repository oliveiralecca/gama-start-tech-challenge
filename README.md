A empresa JobsNET, especialista em recrutamento e seleção de profissionais nas mais diversas áreas, solicitou para a nossa fábrica de software o desenvolvimento de uma página para atrair profissionais e conectá-los a oportunidades de emprego.

---

[ Front-end ] Feito em ReactJS<br>
[ Back-end ] Feito em Node.js<br>
[ Banco de Dados ] MongoDB Atlas (cloud com AWS)<br>
[ Deploy ] Back-end no Heroku e Front-end no Netlify

## Acesse em: [![Netlify Status](https://api.netlify.com/api/v1/badges/5d9a3649-3dd0-40b1-be0f-1dba13ce8ddc/deploy-status)](https://start-tech-jobnet.netlify.app/)

### **Frontend**

### **Fase 1 - Criação da Página**

1. Apresentar a estrutura do projeto no github;
2. Landing page com formulário para preenchimento de candidatura. (Referencia formulário - [link](https://drive.google.com/file/d/1S3Y6otnW2tQLsX1aSgXL5bZuzPbt4rWS/view?usp=sharing))
3. Não existe uma regra para o layout da página, use a imaginação com todos os conhecimentos adquiridos no front-end
4. Indicamos o Netlify para hospedar sua pagina gratuitamente.

### **Backend**

### **Domínio - Modelagem de Dados**

- Cadastro de candidatos com os campos: Id, Nome, Data Nascimento, Endereço {cep, logradouro, numero, bairro, cidade e estado}, Telefone, Email e Profissão e demais campos mencionados na imagem de ilustração de formulário de candidatos.
- Para a conclusão do cadastro, consultar o seu endereço pelo CEP informado (Consultar a API VIA Cep) **NOTA: O sistema deverá utilizar de algum client API para buscar um endereço do serviço via cep conforme link: [https://viacep.com.br/ws/{SEU_CEP}/json/](https://viacep.com.br/ws/%7BSEU_CEP%7D/json/)**

### **Regra de Negócio**

1. Não pode haver 2 cadastros de candidatos com o mesmo cpf
2. Todo candidato precisará preencher os campos: CPF, Nome, Data Nascimento, Cep, Logradouro, Número, Bairro, Cidade, Email, Profissão e Celular

### **Integração entre a Página de Formulário e o Back-end**

1. Disponibilizar uma API Rest com a funcionalidade de cadastro de candidatos armazenando em um banco de dados.
2. Disponibilizar a documentação dos recursos Web Services REST - Uso do Swagger.
