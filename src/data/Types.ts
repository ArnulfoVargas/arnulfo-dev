export type RoutingType = {
    name : string,
    route : string,
}
export type Game = {
    name: string,
    content: string,
    url: string,
    images: Array<string>,
}
export type Page = {
    name: string,
    content: string,
    url: string,
}
export type Tecnology = {
    name: string,
    image: string,
}

export type PokemonType = {
    name     : string,
    sprite   : string,
    abilities: [object],
    types    : [object],
    id       : number,
    shiny    : string,
}
