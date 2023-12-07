import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  длительность: DS.attr('date'),
  у: DS.attr('number'),
  услуга: DS.attr('string'),
  цена: DS.attr('decimal'),
  составУслуги: DS.hasMany('i-i-s-bekap-2-состав-услуги', { inverse: 'услуга', async: false })
});

export let ValidationRules = {
  длительность: {
    descriptionKey: 'models.i-i-s-bekap-2-услуга.validations.длительность.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  у: {
    descriptionKey: 'models.i-i-s-bekap-2-услуга.validations.у.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-bekap-2-услуга.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-bekap-2-услуга.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  составУслуги: {
    descriptionKey: 'models.i-i-s-bekap-2-услуга.validations.составУслуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УслугаE', 'i-i-s-bekap-2-услуга', {
    у: attr('У', { index: 0 }),
    услуга: attr('Услуга', { index: 1 }),
    длительность: attr('Длительность', { index: 2 }),
    цена: attr('Цена', { index: 3 }),
    составУслуги: hasMany('i-i-s-bekap-2-состав-услуги', 'Состав услуги', {
      количество: attr('Количество', { index: 0 }),
      товар: belongsTo('i-i-s-bekap-2-товар', 'Товар', {
        производитель: attr('Производитель', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'производитель' })
    })
  });

  modelClass.defineProjection('УслугаL', 'i-i-s-bekap-2-услуга', {
    у: attr('У', { index: 0 }),
    услуга: attr('Услуга', { index: 1 }),
    длительность: attr('Длительность', { index: 2 }),
    цена: attr('Цена', { index: 3 })
  });
};
