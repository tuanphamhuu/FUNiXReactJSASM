import { STAFFS, DEPARTMENTS } from "../shared/staffs";

export const initialState = {
    staffs: STAFFS,
    staffsView: STAFFS,
    departments: DEPARTMENTS,
};

export const Reducer = (state = initialState, action) => {
    return state;
}