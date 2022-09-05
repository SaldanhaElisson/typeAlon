
interface data {
    Protocolo: Number,
    Status: string,
    Nome: string, 
    Matricula: Number
    dataDeAbertura: string,
    tipoDeRequerimento: string  
}

const datas = [{
    Protocolo: 120930920391923,
    Status: 'ok',
    Nome: 'Elisson Monteiro Saldanha',
    Matricula: 20212045050231,
    dataDeAbertura:  '10/10/2002',
    tipoDeRequerimento: 'Trancamento'   
},
{
    Protocolo: 120930920391923,
    Status: 'ok',
    Nome: 'Saldanha Elisson',
    Matricula: 20212045050231,
    dataDeAbertura:  '10/10/2002',
    tipoDeRequerimento: 'Trancamento'   
}]

const getData = (): void => {
    // vai ter uma função que conecta a api para buscar os dados
    console.log("buscando os dados.....")

    localStorage.setItem('data', JSON.stringify(datas))

    
    return 
}

export default getData