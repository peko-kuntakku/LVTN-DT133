'use strict';

/**
*  voucher controller
*/

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::voucher.voucher', ({ strapi }) => ({
    saveVoucher: async (ctx, next) => {
        try {
            const { id } = ctx.request.params;
            const { userId } = ctx.request.body.data;
            const updateVoucher = await strapi.entityService.findOne("api::voucher.voucher", id, {
                populate:  
                {
                    users: {
                        fields: "id",
                    }
                },
            });
           
            const remained = updateVoucher.Remained;
            const users = updateVoucher.users;
            const expired = new Date(updateVoucher.Expired_at);
            const today = new Date();

            if (today > expired) {
                return ctx.badRequest('Mã giảm giá hết hạn.');
            }

            //if no voucher remained 
            if (remained === 0) {
                return ctx.badRequest('Mã giảm giá đã hết.');
            }

            // check if user has already saved voucher 
            const checkUserId = users.map(user => user.id).indexOf(userId);
            if (checkUserId !== -1) {
                return ctx.badRequest('Bạn đã lưu mã này.');
            } 

            // user hasn't saved voucher
            users.push({ id: userId });
            
            const updateResult = await strapi.entityService.update("api::voucher.voucher", id, {
                data: {
                    Remained: remained - 1,
                    users: users,
                }
            });
            if (updateResult) {
                return {
                    message: 'Lưu mã thành công',
                }
            }

        } catch (error) {
            console.log(error);
            return ctx.badRequest('Lỗi');
        }
    },

    checkVoucher: async (ctx, next) => {
        try {
            const { id } = ctx.request.params;
            
            const checkVoucher = await strapi.entityService.findOne("api::voucher.voucher", id);
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
            
            ctx.send({ data: checkVoucher });

        } catch (error) {
            console.log(error);
            return ctx.badRequest('Lỗi');
        }
    },
}));

