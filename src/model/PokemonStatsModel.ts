import PokemonModel from "./Pokemon";

export default class PokemonStatsModel extends PokemonModel {

    #type: string
    #height: string
    #weight: string
    #abilitie: string

    constructor(
        number: string,
        name: string,
        url: string,
        type: string,
        height: string,
        weight: string,
        abilitie: string
    ) {
        super(number, name, url)
        this.#type = type
        this.#weight = weight
        this.#height = height;
        this.#abilitie = abilitie
    }

    get type() {
        return this.#type
    }

    get weight() {
        return this.#weight
    }

    get height() {
        return this.#height
    }

    get abilitie() {
        return this.#abilitie
    }

    static startClass() {
        return new PokemonStatsModel(
            '', '', '', '', '', '', ''
        )
    }

}