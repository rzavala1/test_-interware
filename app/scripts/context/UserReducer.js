const reducer = (globalState, action) => {
    switch (action.type) {
        case "RESULTS_SEARCH":
            return {
                ...globalState,
                results: action.payload,
            };
    }
};
export default reducer;