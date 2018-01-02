export const initialState = {
        user: {},
        lists: {
            newShoppingList: {
                title: ""
            },
            existingShoppingList: []
        },
        items: [],
        ajaxCallsInProgress: 0,
        edit: {type: "", id: "", data: ""}
};

export default initialState;