export default class Pokemon {
    #name: string
    #url: string

    constructor(name: string, url: string) {
        this.#name = name
        this.#url = url
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
}