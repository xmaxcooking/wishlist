export class WishItem {
    constructor(public id: ReturnType<typeof crypto.randomUUID> | null = null, public text = "", public completed = false) { }
}

