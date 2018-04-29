import React from 'react';
import Form, { Dialog, TextField } from 'react-form-material-ui';

export default class DemoDialogForm extends Dialog(Form) {
    // NOTE: this static validation rules bellow are best to be defined
    // in a very base Form class in your application, so your other
    // forms could share and reuse them.
    static validations = {
        presence: function(value) {
            if (!value) return 'cannot be blank';
        },

        email: function(value) {
            // very primitive email check. not to be used in production
            if (value && !/^[\w\d.]+@[\w\d]+.[\w\d]{2,}$/.test(value)) {
                return 'should be email';
            }
        }
    };

    validations = {
        email: ['presence', 'email'],
        firstName: 'presence',
        lastName: 'presence'
    };

    $render($) {
        return (
            <div>
                <div><TextField {...$('email')} floatingLabelText="Email" /></div>
                <div><TextField {...$('firstName')} floatingLabelText="First Name" /></div>
                <div><TextField {...$('lastName')} floatingLabelText="Last Name" /></div>
            </div>
        );
    }
}