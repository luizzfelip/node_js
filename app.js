import express from 'express'

const servidor = express();
servidor.use(express.json());


servidor.get('/olaseuputo', (req, resp)=>{
    //codigo endpoint
    resp.send('ola seu puto!!!');
})

servidor.get('/mensagem/boasvindas', (req, resp) =>{
    resp.send('Ola oq da o desprazer de ter vc aqui')
})

servidor.get('/v2/mensagem/boasvindas', (req, resp)=> {
    resp.send('Hm vc aqui que bosta em')
})

servidor.get('/mensagem/ocupado', (req,resp)=>{
    resp.send('ocupado demais pra voce')
})

servidor.get('/mensagem/ocupado/recado', (req, resp)=>{
    resp.send('ocupado mande msg para o email xxxxx e reza pra eu ver')
})


servidor.get('/calculadora/conta/:n1/:n2/:n3', (req, resp)=>{
 let n1 = Number(req.params.n1);
 let n2 = Number(req.params.n2);
 let n3 = Number(req.params.n3)
 let conta = n1 * n2 /n3;
 resp.send('a conta é ' + conta)

})

servidor.get('/calculadora/conta2', (req, resp)=>{
    let n1 = Number(req.query.n1);
    let n2 = Number(req.query.n2);
    let n3 = Number(req.query.n3)
    let conta = n1 * n2 /n3;
    resp.send('a conta é ' + conta)
   
   })

   servidor.get('/mensagem/ola', (req, resp)=>{
    let nome = req.query.nome ?? 'irmao'
    resp.send('boa boa ' + nome)
   })

   servidor.post('/media', (req, resp) => {

    let n1 = req.body.nota1;
    let n2 = req.body.nota2;
    let n3 = req.body.nota3;
    let media = (n1 + n2 + n3) /3;

    resp.send('sua media é ' + media)

   })
   servidor.post('/dobro', (req, resp) => {
    let nums = req.body.numeros;

    let nums2 = [];
    for(let i = 0; i < nums.length; i++){
        nums [i] = nums2 [i] *2;

        resp.send('os dobros dos numeros são ' + nums2);
    }
   })

   servidor.post('/loja/pedido', (req, resp)=>{
 let total = req.body.total;
 let parcelas = req.body.parcelas;
 let cupom = req.query.cupom;

 if (parcelas > 1) {
    let juros = total * 0.05;
    total += juros  
 }

 if (cupom == 'LOPES100') {
    total -= 100
 }

 resp.send('O total do pedido é R$ ' + total)
   })

servidor.post('/loja/pedido/completo', (req, resp) =>{
    let parcelas = req.body.parcelas;
    let itens = req.body.itens;
    let cupom = req.query.itens;

    let total = 0;
    for (let produtos of itens){
        total += produtos.preco;
    }

if (parcelas > 1) {
    let juros = total * 0.05;
    total += juros;
}

if (cupom == 'QUERO100') {
    total -= 100
}

 resp.send('o total a pagar é R$' + total)
})


servidor.listen(
    5001,
     () => console.log('API SUBIU COM SUCESSO NA PORTA 5001')
);