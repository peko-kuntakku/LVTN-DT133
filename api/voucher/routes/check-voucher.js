module.exports = {
    routes: [
        {
            method: "GET",
            path: "/vouchers/check-voucher/:id",
            handler: "voucher.checkVoucher",
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
}