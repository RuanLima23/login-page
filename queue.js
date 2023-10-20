export class Fila {
    constructor(capacidade, tipo) {
        this.capacidade = capacidade
        this.tipo = tipo
        this.inicio = 0
        this.final = -1
        this.numero_elementos = 0
        this.valores = new Array()
    }
    // verificaTipo(valor) {
    //     switch (this.tipo) {
    //         case 'string':
    //             return typeof (valor) === 'string'
    //             break

    //         case 'number':
    //             return typeof (valor) === 'number'
    //             break

    //         case 'object':
    //             return typeof (valor) === 'object'
    //             break

    //         case 'float':
    //             return typeof valor === 'number' && !Number.isInteger(valor)
    //             break

    //         default:
    //             console.log('Nenhum tipo corresponde!')
    //     }
    // }
    fila_vazia() {
        return this.numero_elementos === 0
    }
    fila_cheia() {
        return this.numero_elementos === this.capacidade
    }
    enfileirar(valor) {
        if (this.fila_cheia()) {
            console.log('A fila está cheia!')
        }
        // const valido = this.verificaTipo(valor)
        // if (!valido) {
        //     console.log('Insira um valor válido!')
        //     return false
        // }
        else {
            this.final += 1
            this.valores[this.final] = valor
            this.numero_elementos += 1
            return true
        }
    }
    desenfileirar() {
        if (this.fila_vazia()) {
            console.log('A fila está vazia!')
        }
        else {
            const temp = this.valores[this.inicio]
            this.inicio += 1
            if (this.inicio === this.capacidade) {
                this.inicio = 0
            }
            else {
                this.numero_elementos -= 1
                return temp
            }
        }
    }
    primeiro() {
        if (this.fila_vazia()) {
            console.log(-1)
        }
        else {
            console.log(this.valores[this.inicio])
        }
    }
}