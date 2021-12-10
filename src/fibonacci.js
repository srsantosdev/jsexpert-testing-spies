class Fibonacci {
  *execute(input, current = 0, next = 1) { 
    if(input === 0) {
      return 0
    }

    // RETORNA O VALOR
    yield current

    // DELEGA A FUNCAO MAS NAO RETORNA VALOR
    yield* this.execute(input -1, next, current  + next)
  }
}

module.exports = Fibonacci