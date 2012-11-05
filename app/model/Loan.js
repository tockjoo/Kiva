/*
 * File: app/model/Loan.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Kiva.model.Loan', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'id',
                type: 'int'
            },
            {
                name: 'name',
                type: 'string'
            },
            {
                name: 'status',
                type: 'string'
            },
            {
                name: 'loan_amount',
                type: 'int'
            },
            {
                name: 'funded_amount',
                type: 'int'
            },
            {
                name: 'basket_amount',
                type: 'int'
            },
            {
                name: 'borrower_count',
                type: 'int'
            },
            {
                name: 'activity',
                type: 'string'
            },
            {
                name: 'sector',
                type: 'string'
            },
            {
                name: 'use',
                type: 'string'
            },
            {
                name: 'partner_id',
                type: 'int'
            },
            {
                name: 'description',
                mapping: 'description.texts.en',
                type: 'string'
            },
            {
                convert: function(v, rec) {
                    return "http://kiva.org/img/w80h80/" + v + ".jpg";
                },
                name: 'image',
                mapping: 'image.id',
                type: 'string'
            },
            {
                convert: function(v, rec) {
                    return parseInt(rec.data.funded_amount / rec.data.loan_amount * 100, 10);
                },
                name: 'percent_funded'
            },
            {
                name: 'terms'
            },
            {
                name: 'location'
            }
        ]
    }
});