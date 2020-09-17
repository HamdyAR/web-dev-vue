import BaseService from "./BaseService";
import AppUtils from "../utils/BaseUtils/AppUtils";

class ExpenseServices extends BaseService {
    fetchExpense(
        payload,
        successAction,
        loaderType,
        errorType,
        showSuccessMessage,
        successCondition,
        getErrorMessage
    ) {
        return this.makePostRequest(
            AppUtils.urls.expense.FETCH_EXPENSE,
            payload,
            successAction,
            loaderType,
            errorType,
            showSuccessMessage,
            successCondition,
            getErrorMessage
        );
    }



}

export default ExpenseServices;
