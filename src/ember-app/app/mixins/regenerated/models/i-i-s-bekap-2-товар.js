import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  мат: DS.attr('string'),
  производитель: DS.attr('string'),
  товара: DS.attr('number')
});

export let ValidationRules = {
  мат: {
    descriptionKey: 'models.i-i-s-bekap-2-товар.validations.мат.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  производитель: {
    descriptionKey: 'models.i-i-s-bekap-2-товар.validations.производитель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  товара: {
    descriptionKey: 'models.i-i-s-bekap-2-товар.validations.товара.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварE', 'i-i-s-bekap-2-товар', {
    производитель: attr('Производитель', { index: 0 }),
    товара: attr('Товара', { index: 1 }),
    мат: attr('Мат', { index: 2 })
  });

  modelClass.defineProjection('ТоварL', 'i-i-s-bekap-2-товар', {
    производитель: attr('Производитель', { index: 0 }),
    товара: attr('Товара', { index: 1 }),
    мат: attr('Мат', { index: 2 })
  });
};
