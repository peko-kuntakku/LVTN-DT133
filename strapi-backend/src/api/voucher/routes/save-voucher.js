module.exports = {
    routes: [
        {
            method: "PATCH",
            path: "/vouchers/save-voucher/:id",
            handler: "voucher.saveVoucher",
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
}