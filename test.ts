class User {
    protected company: string = "ABC";
    constructor(
        private id: string,
        private point: number,
        private rank: string
    ) {
        console.log("User Class");
    }
    getRank(): string {
        return this.rank;
    }
}

class Silver extends User {
    constructor(
        private _id: string,
        private _point: number,
    ) {
        super(_id, _point, "Silver");
        console.log("Silver Class");
    }
    getCompany(): string {
        return this.company;
    }
}

class Gold extends User {
    constructor(
        private _id: string,
        private _point: number,
    ) {
        super(_id, _point, "Gold");
        console.log("Gold Class");
    }
    getCompany(): string {
        return this.company;
    }
}

let userA = new Silver("111403", 205);
console.log();
console.log(userA.getRank(), userA.getCompany());

// let userB = new Gold("111500", 664);
// console.log(userB.getRank());
// console.log(userB.getCompany());