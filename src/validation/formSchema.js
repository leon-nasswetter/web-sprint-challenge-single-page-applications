import * as yup from "yup";

export default yup.object().shape({
    size: yup
    .string()
    .oneOf(["small", "medium", "large"], "Size is required"),
    sauce: yup
    .string()
    .oneOf(["originalRed", "garlicRanch", "bbqSauce", "spinachAlfredo"], "Sauce is required"),
    name: yup
    .string()
    .required("Your name is required")
    .min(2, "Name must be at least 2 characters"),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadianBacon: yup.boolean(),
    spicyItalianSausage: yup.boolean(),
    grilledChicken: yup.boolean(),
    onions: yup.boolean(),
    greenPepper: yup.boolean(),
    dicedTomatos: yup.boolean(),
    blackOlives: yup.boolean(),
    artichokeHearts: yup.boolean(),
    threeCheese: yup.boolean(),
    pineapple: yup.boolean(),
    extraCheese: yup.boolean(),
    special: yup
    .string()
})