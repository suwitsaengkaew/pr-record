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
    { id: 'RP06027', requestName: 'Suwit Saengkaew' }
];

export const BuzAreas: BuzAreaModel[] = [
    { buzarea: '' },
    { buzarea: '1-B' },
    { buzarea: '2-B' },
    { buzarea: '3-B' },
    { buzarea: '4-B' }
];

export const CostCenters: CostCenterModel[] = [
    { costCtr: '1P-210-00', costCtrName: 'TBS_HR&ADMIN. ADMI' },
    { costCtr: '1P-210-01', costCtrName: 'TBS_HR&ADMIN. FACT' },
    { costCtr: '1P-220-00', costCtrName: 'TBS_FA (ADMIN)' },
    { costCtr: '1P-220-01', costCtrName: 'TBS_FA (FACTORY)' },
    { costCtr: '1P-230-00', costCtrName: 'TBS_PURCHASE' },
    { costCtr: '1P-310-00', costCtrName: 'TBS_SAFETY&ENV ADM' },
    { costCtr: '1P-310-01', costCtrName: 'TBS_SAFETY&ENV FACT' },
    { costCtr: '1P-320-00', costCtrName: 'TBS_PLANT CNTL ADM' },
    { costCtr: '1P-320-01', costCtrName: 'TBS_PLANT CNTL FACT' },
    { costCtr: '1P-320-02', costCtrName: 'TBS_RAW MATERIAL' },
    { costCtr: '1P-320-03', costCtrName: 'TBS_F/G WH ADMIN' },
    { costCtr: '1P-320-04', costCtrName: 'TBS_SHIPPING ADMIN' },
    { costCtr: '1P-320-05', costCtrName: 'TBS_IT (ADMIN)' },
    { costCtr: '1P-320-06', costCtrName: 'TBS_IT (FACTORY)' },
    { costCtr: '1P-320-09', costCtrName: 'TBS_INDUST ENGIN ADM' },
    { costCtr: '1P-320-11', costCtrName: 'TBS_F/G WH FACTORY' },
    { costCtr: '1P-330-00', costCtrName: 'TBS_M1- CENTER' },
    { costCtr: '1P-330-01', costCtrName: 'TBS_M1- MIXING' },
    { costCtr: '1P-330-02', costCtrName: 'TBS_M1- STEEL CALEND' },
    { costCtr: '1P-330-03', costCtrName: 'TBS_M1- EXTRUDING, I' },
    { costCtr: '1P-330-04', costCtrName: 'TBS_M1- CUTTING & BE' },
    { costCtr: '1P-330-06', costCtrName: 'TBS_M1- BEAD_SELF' },
    { costCtr: '1P-340-00', costCtrName: 'TBS_M2- CENTER' },
    { costCtr: '1P-340-01', costCtrName: 'TBS_M2- BUILDING' },
    { costCtr: '1P-340-02', costCtrName: 'TBS_M2- CURING, MOLD' },
    { costCtr: '1P-340-03', costCtrName: 'TBS_M2- FINISHING' },
    { costCtr: '1P-350-01', costCtrName: 'TBS_ME- ELECTRICAL' },
    { costCtr: '1P-350-02', costCtrName: 'TBS_ME- MECHANICAL' },
    { costCtr: '1P-350-03', costCtrName: 'TBS_ME- UTILITIES' },
    { costCtr: '1P-360-00', costCtrName: 'TBS_HEAD QA' },
    { costCtr: '1P-370-00', costCtrName: 'TBS_QT- CENTER' },
    { costCtr: '1P-370-01', costCtrName: 'TBS_QT- QA' },
    { costCtr: '1P-370-02', costCtrName: 'TBS_QT- TECHNOLOGY' },
    { costCtr: '1P-380-00', costCtrName: 'TBS_MONODZUKURI ADM' },
    { costCtr: '1P-380-01', costCtrName: 'TBS_MONODZUKURI FAC' }
];

export const Investments: InvestmentModel[] = [
    { invNo: 0, invName: '' },
    { invNo: 1, invName: 'Investment' },
    { invNo: 2, invName: 'No Investment' }
];

export const Plants: PlantModel[] = [
    { plantNo: 1, plantName: 'TBS' },
    { plantNo: 2, plantName: 'PC/LT' },
    { plantNo: 3, plantName: 'Sunari' },
    { plantNo: 4, plantName: 'TDCT' },
    { plantNo: 5, plantName: 'TTCA' },
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
    { no: 0, curr: 'THB' },
    { no: 1, curr: 'US' },
    { no: 2, curr: 'JPY' }
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
