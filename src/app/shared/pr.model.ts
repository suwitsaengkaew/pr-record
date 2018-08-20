export class MonthModel {
    constructor (
        public no: string,
        public mon: string
    ) {}
}

export class GLCostModel {
    constructor (
        public gl: string
    ) {}
}

export class UnitsModel {
    constructor (
        public unit: string
    ) {}
}

export class SuppliersModel {
    constructor (
        public sp: string
    ) {}
}

export class PrinputdataModel {
    constructor(
        public prno: string,
        public glcost: string,
        public prdate: string,
        public itemdesc: string,
        public qty: number,
        public unit: string,
        public price: number,
        public suppliername: string,
        public duedate: string,
        public remark: string
    ) {}
}
