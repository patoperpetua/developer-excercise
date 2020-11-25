// TODO: improve format to apply a translation.
export const VALID_RESPONSES = {
    ERROR: {
        AUTH: {
            TOKEN: {
                APP: "error.auth.token.app",
                USER: "error.auth.token.user"
            },
            UNPRIVILEGED: "error.auth.unprivileged"
        },
        EXIST: {
            DISCOUNT: "error.exist.discount",
            ORDER: "error.exist.order",
            PRODUCT: "error.exist.product"
        },
        NOT_DELETED: "error.not_deleted",
        NOT_EXIST: {
            DISCOUNT: "error.not_exist.discount",
            ORDER: "error.not_exist.order",
            PRODUCT: "error.not_exist.product"
        },
        PARAMS: {
            MALFORMED: {
                ORDERBY: "error.params.malformed.orderby"
            },
            MISSING: "error.params.missing"
        },
        UNRECOGNIZED: "error.unrecognized",
        VALIDATION: {
            ID: "error.validation.id",
            NAME: "error.validation.name",
            PRICE: "error.validation.price"
        }
    }
};
