import {
    reactive,
    computed,
    toRefs
} from 'vue';
const plusCalculatorRef = () => {
    let refState = reactive({
        refNum1:0,
        refNum2:0,
        refResult: computed(() => parseInt(refState.refNum1) + parseInt(refState.refNum2))
    });
    return toRefs(refState);
};
export {
    plusCalculatorRef
};
