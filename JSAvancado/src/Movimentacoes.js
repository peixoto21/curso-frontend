class Movimentacao {
    constructor(banco = 'padrao', nome = '', saldo = 0) {
        this.banco = banco,
            this.nome = nome,
            this.saldo = saldo
    }
}

class Registro {
    constructor(dia, mes, ano) {
        this.dia = dia,
            this.mes = mes,
            this.ano = ano,
            this.movimentacoes = []
    }

    nomaMovimentacao(...movimentacoes) {
        movimentacoes.forEach(lancamento => this.movimentacoes.push(lancamento))
    }

    resumo() {
        let valorAtualizado = 0
        let tipo = ''
        const regex = new RegExp('x' , 'gi')
        // no caso foi criado uma regex sobre um determinado valor, fazendo uma busca global sobre ele(g de global e i para ignorar o case)
        this.movimentacoes.forEach(lancamento => {
            //  forçando setar o novo valor de banco, como se fosse um lançamento no banco errado
            lancamento.banco = lancamento.banco.replace(/x$/i, 'Y')
            // sifrão no regex pega o ultimo valor da string
            if (!lancamento.banco.match(regex)) {
                // i no regex ignora o case da letra
                valorAtualizado += lancamento.saldo
                tipo += lancamento.nome + ' | '
            }
        })
        return tipo + valorAtualizado
    }
}

const m01 = new Movimentacao('BankX', 'salário', 20000)
const m02 = new Movimentacao('BankZ', 'comissão', 2000)
const m03 = new Movimentacao('BankX', 'imposto', -5000)
const m04 = new Movimentacao('BankY', 'contas', -1000)
const m05 = new Movimentacao('BankX', 'imposto', -1000)

const registro01 = new Registro(01, 09, 2022)
registro01.nomaMovimentacao(m01, m02, m03, m04, m05)
console.log('O saldo de registros foi de: ' + registro01.resumo())

const arraydeMovimentacoes = [m01, m02, m03, m04, m05]

arraydeMovimentacoes.map (elemento =>{
    console.log(elemento.banco.length)
})