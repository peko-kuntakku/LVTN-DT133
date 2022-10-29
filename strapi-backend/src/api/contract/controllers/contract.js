'use strict';

/**
 *  contract controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contract.contract', ({ strapi }) => ({
    async create(ctx) {
        try {
            const data = ctx.request.body.data;
            if (data.voucher) {
                console.log(data.voucher);
                // checkVocher Controller
                const checkVoucher = await strapi.entityService.findOne("api::voucher.voucher",
                    data.voucher, {
                    populate:
                    {
                        users: {
                            fields: "id",
                        },
                        invalid_users: {
                            fields: "id",
                        },
                    },
                });
                console.log(checkVoucher);

                const remained = checkVoucher.Remained;
                if (new Date() > checkVoucher.Expired_at) {
                    return ctx.badRequest('Mã giảm giá hết hạn.');
                }

                if (checkVoucher.Start_at > new Date()) {
                    return ctx.badRequest('Mã giảm giá chưa có hiệu lực.');
                }

                //if no voucher remained 
                if (remained === 0) {
                    return ctx.badRequest('Mã giảm giá đã hết.');
                }

                /* 
                    UPDATE VOUCHER
                */
                //pop user
                const users = checkVoucher.users.filter(user => user.id !== data.user);
                // add user to invalid_users
                const invalidUsers = checkVoucher.invalid_users;
                invalidUsers.push({ id: data.user });

                //update
                await strapi.entityService.update("api::voucher.voucher", data.voucher, {
                    data: {
                        users: users,
                        invalid_users: invalidUsers,
                    }
                });
            }

            /*
                NEED TO CHECK CONTRACT HAS ALREADY BEEN EXISTED ???
                //TODO
            */

            /* 
                IF VALID VOUCHER, CREATE CONTRACT WITH STATUS PENDING
            */
            const response = await super.create(ctx);
            
            return response;

        } catch (error) {
            console.log(error);
            return ctx.badRequest('Lỗi');
        }
    }
}));
