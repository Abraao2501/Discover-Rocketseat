# Variáveis

* Nomes simbólicos para receber algum valor
* Atalhos de código
* Identificadores
* As variáveis podem ser declaradas por
    - let
    - var
    - const

O Javascript é uma linguagem fracamente tipada, consequentemente ela se torna mais dinâmica

## Scope

    * Escopo determina a visbilidade de alguma variável no JS

## Block Statement
```js
//Vamos iniciar um bloco
{
    //Aqui dentro é um bloco e poddo colocar qualquer código
}//Aqui se fecha o bloco
```

O bloco também criará um novo escopo, chamamos de `block-scoped`

* var
```js
    //var é global e poderá ser usada fora de um escopo

    console.log('> existe x antes do bloco?', x)

    {
        var x = 0
    }

    console.log('> existe x depois do bloco?', x)
```
* let e const
```js
    console.log('> existe x antes do bloco?', y)

    {
        let y = 0
    }

    console.log('> existe x depois do bloco?', y)
```

## Para criar nomes

* JS é case-sensitive (sensível ao caso)
* JS aceita a cadeia de caracteres UNICODE

- POSSO
    * Iniciar com letras minúsculas ou maiúsculas
    * caracteres especiais: $ _
    * Acentos
- NÃO POSSO
    * Colocar espaços
    * Iniciar com números
 