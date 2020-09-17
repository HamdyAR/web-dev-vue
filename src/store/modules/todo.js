import ExpenseServices from "../../services/ExpenseServices";
import LoaderUtils from "@/utils/BaseUtils/LoaderUtils";
import StoreUtils from "../../utils/BaseUtils/StoreUtils";
import RouterUtils from "@/utils/BaseUtils/RouterUtils";
import TodoServices from "@/services/TodoServices";
const todoService = new TodoServices();

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
    fetchTodoList() {
        let payload = {

        };
        let successAction = responseData => {
            //save unique id to form store
            StoreUtils.commit("table/SET_TABLE_DATA", responseData);
            // //route the user to the dashboard
            // RouterUtils.changeRoute(RouterUtils.routes.DASHBOARD);
        };
        let loaderType = LoaderUtils.types.TABLE;

        todoService.fetchTodoList(payload, successAction, loaderType);
    }
}