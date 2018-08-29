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

export class CostCenter {
    constructor(
        public costcenter: string
    ){}
}

export class PrinputdataModel {
    constructor(
        public prno: string,
        public costcenter: string,
        public glcost: string,
        public prdate: string,
        public itemdesc: string,
        public unitprice: number,
        public qty: number,
        public unit: string,
        public amountprice: number,
        public suppliername: string,
        public duedate: string,
        public remark: string
    ) {}
}
