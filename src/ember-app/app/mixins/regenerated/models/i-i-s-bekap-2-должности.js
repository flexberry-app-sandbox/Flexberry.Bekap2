import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  должности: DS.attr('string'),
  код: DS.attr('number')
});

export let ValidationRules = {
  должности: {
    descriptionKey: 'models.i-i-s-bekap-2-должности.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  код: {
    descriptionKey: 'models.i-i-s-bekap-2-должности.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДолжностиE', 'i-i-s-bekap-2-должности', {
    должности: attr('Должности', { index: 0 }),
    код: attr('Код', { index: 1 })
  });

  modelClass.defineProjection('ДолжностиL', 'i-i-s-bekap-2-должности', {
    должности: attr('Должности', { index: 0 }),
    код: attr('Код', { index: 1 })
  });
};
