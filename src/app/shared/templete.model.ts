import {
    MonthModel,
    GLCostModel,
    UnitsModel,
    SuppliersModel,
    CostCenter,
    CurrenciesModel,
    PlantModel,
    InvestmentModel,
    CostCenterModel,
    BuzAreaModel,
    RequestbyModel
} from './pr.model';

export const Requestbys: RequestbyModel[] = [
    { id: '', requestName: '' },
    { id: 'RP06027', requestName: 'Suwit.S' },
    { id: 'RP13074', requestName: 'Wuchareeporn.L' },
    { id: 'RP14068', requestName: 'Kessarin.P' }
];

export const BuzAreas: BuzAreaModel[] = [
    { buzareano: '', buzarea: '' },
    { buzareano: '1-B', buzarea: 'TBS' },
    { buzareano: '2-B', buzarea: 'PC/LT' },
    { buzareano: '3-B', buzarea: 'Sunari' },
    { buzareano: '4-B', buzarea: 'TTCA' }
];

export const CostCenters: CostCenterModel[] = [
    { costCtr: '', costCtrName: '' },
    
];

export const Investments: InvestmentModel[] = [
    { invNo: 0, invName: '' },
    { invNo: 1, invName: 'Investment' },
    { invNo: 2, invName: 'No Investment' }
];

export const Plants: PlantModel[] = [
    { plantNo: '', plantName: '' },
    { plantNo: 'RP01', plantName: 'TBS' },
    { plantNo: 'RP02', plantName: 'PC/LT' },
    { plantNo: 'RP03', plantName: 'Sunari' },
    { plantNo: 'RP04', plantName: 'TTCA' },
];

export const Months: MonthModel[] = [
    { no: '01', mon: 'January' },
    { no: '02', mon: 'February' },
    { no: '03', mon: 'March' },
    { no: '04', mon: 'April' },
    { no: '05', mon: 'May' },
    { no: '06', mon: 'June' },
    { no: '07', mon: 'July' },
    { no: '08', mon: 'August' },
    { no: '09', mon: 'September' },
    { no: '10', mon: 'October' },
    { no: '11', mon: 'November' },
    { no: '12', mon: 'December' }
];

export const Currencies: CurrenciesModel[] = [
    { no: 0, curr: '' },
    { no: 1, curr: 'THB' },
    { no: 2, curr: 'US' },
    { no: 3, curr: 'JPY' }
];

export const GLs: GLCostModel[] = [
    { gl: '' },
    { gl: '5450354' },
    { gl: '5551350' },
    { gl: '5551351' },
    { gl: '8410340' },
    { gl: '8410350' },
    { gl: '8440300' },
    { gl: '8440310' },
];

export const Units: UnitsModel[] = [
    { unit: '' },
    { unit: 'BOX' },
    { unit: 'ROLL' },
    { unit: 'EA' },
    { unit: 'PACK' },
    { unit: 'PCS' },
    { unit: 'SET' },
];

export const Suppliers: SuppliersModel[] = [
    { sp: '' },
    { sp: 'Accept Tech' },
    { sp: 'Advance IT' },
    { sp: 'B&M' },
    { sp: 'BT Connect' },
    { sp: 'Catalog System' },
    { sp: 'CCM System' },
    { sp: 'EAC Eastern Air' },
    { sp: 'First Telecom System' },
    { sp: 'Fujitsu Thailand' },
    { sp: 'Inter Supply' },
    { sp: 'Jenbunjob' },
    { sp: 'Keyence' },
    { sp: 'Kranes' },
    { sp: 'N.P. Doulas' },
    { sp: 'Nitto' },
    { sp: 'Phumthai Comsys' },
    { sp: 'Planet' },
    { sp: 'Precision Tools Service' },
    { sp: 'Purchase' },
    { sp: 'Radio Meter' },
    { sp: 'Rent Thailand' },
    { sp: 'RNS' },
    { sp: 'Star Electric Service' },
    { sp: 'TT Network' },
];
