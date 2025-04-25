let p = document.querySelector('p')
let input = document.querySelector('input')

const contacts = [
    { name: 'Rodolfo', number: '(19) 94343-3434' },
    { name: 'Rafaelly', number: '(15) 99724-2424' },
    { name: 'Rosangela', number: '(15) 99787-0134' },
    { name: 'Aline', number: '(15) 99769-6969'},
    { name: 'Dino', number: '(15) 93242-3934'}
]

function search(){
    for(let i = 0; i < contacts.length; i++){
        if(input.value.toLowerCase() === contacts[i].name.toLowerCase()){
            p.innerHTML = `Contato Encontrado Nome:${contacts[i].name} Telefone: ${contacts[i].number}`
        break
        }else {
            p.innerHTML = 'Contato Não Encontrado'
        }
    }
}