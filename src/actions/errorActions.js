const { authTypes } = require("../types/authTypes");

export const setErrorAction = (err) => ({
 type: authTypes.SET_ERROR,
 payload: err,
});

export const unRemoveErrorAction = () => ({
 type: authTypes.UN_ERROR,
});

export const startLoading = () => ({
 type: authTypes.uiStartLoading,
});

export const finishLoading = () => ({
 type: authTypes.uiFinishLoading,
});
