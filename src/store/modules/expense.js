import ExpenseServices from "../../services/ExpenseServices";
import LoaderUtils from "@/utils/BaseUtils/LoaderUtils";
import StoreUtils from "../../utils/BaseUtils/StoreUtils";
import RouterUtils from "@/utils/BaseUtils/RouterUtils";
const expenseService = new ExpenseServices();

export const namespaced = true;

export const state = {
};

export const getters = {
  getUserOptions: state => {
    return state.userOptions;
  },
};

export const mutations = {
};

export const actions = {
  fetchExpense() {
    let formBody = StoreUtils.rootGetters(
        StoreUtils.getters.form.GET_FORM_BODY
    );
    let payload = {
      email: StoreUtils.rootGetters("user/getUserEmail")
    };
    let successAction = responseData => {
      //save unique id to form store
      StoreUtils.commit("table/SET_TABLE_DATA", responseData.expense);
      // //route the user to the dashboard
      // RouterUtils.changeRoute(RouterUtils.routes.DASHBOARD);
    };
    let loaderType = LoaderUtils.types.TABLE;

    expenseService.fetchExpense(payload, successAction, loaderType);
  }
}