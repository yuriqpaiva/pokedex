export default class PokemonModel {
    #number: string
    #name: string
    #url: string

    constructor(id, name: string, url: string) {
        this.#number = id
        this.#name = name
        this.#url = url
    }

    get number() {
        return this.#number
    }

    get name() {
        return this.#name
    }

    get url() {
        return this.#url
    }

    toObject() {
        return {name: this.name, url: this.url}
    }

    static startClass() {
        return new PokemonModel(
            '', '', ''
        )
    }
}