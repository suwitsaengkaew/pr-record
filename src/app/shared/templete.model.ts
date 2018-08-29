import { MonthModel, GLCostModel, UnitsModel, SuppliersModel, CostCenter } from './pr.model';

export const Months: MonthModel[] = [
    { no: '01', mon: 'January' },
    { no: '02', mon: 'February'},
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

export const GLs: GLCostModel[] = [
    { gl: '5450354' },
    { gl: '5551350' },
    { gl: '5551351' },
    { gl: '8410340' },
    { gl: '8410350' },
    { gl: '8440300' },
    { gl: '8440310' },
];

export const CostCenters: CostCenter[] = [
    { costcenter: 'TBS' },
    { costcenter: 'PC/LT' },
    { costcenter: 'Sunari' },
    { costcenter: 'TTCA' },
    { costcenter: 'TDCT' }
];

export const Units: UnitsModel[] = [
    { unit: 'BOX' },
    { unit: 'ROLL' },
    { unit: 'EA' },
    { unit: 'PACK' },
    { unit: 'PCS' },
    { unit: 'SET' },
];

export const Suppliers: SuppliersModel[] = [
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
