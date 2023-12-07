import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('date'),
  времяр: DS.attr('date'),
  код: DS.attr('number'),
  клиент: DS.belongsTo('i-i-s-bekap-2-клиент', { inverse: null, async: false }),
  записьВизита: DS.hasMany('i-i-s-bekap-2-запись-визита', { inverse: 'визит', async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-bekap-2-визит.validations.время.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  времяр: {
    descriptionKey: 'models.i-i-s-bekap-2-визит.validations.времяр.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  код: {
    descriptionKey: 'models.i-i-s-bekap-2-визит.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-bekap-2-визит.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  записьВизита: {
    descriptionKey: 'models.i-i-s-bekap-2-визит.validations.записьВизита.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВизитE', 'i-i-s-bekap-2-визит', {
    код: attr('Код', { index: 0 }),
    время: attr('Время', { index: 1 }),
    времяр: attr('Времяр', { index: 2 }),
    клиент: belongsTo('i-i-s-bekap-2-клиент', 'Клиент', {
      фИО: attr('ФИО', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фИО' }),
    записьВизита: hasMany('i-i-s-bekap-2-запись-визита', 'Запись визита', {
      стоимость: attr('Стоимость', { index: 0 }),
      сотрудник: belongsTo('i-i-s-bekap-2-сотрудник', 'Сотрудник', {
        фИО: attr('ФИО', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'фИО' }),
      услуга: belongsTo('i-i-s-bekap-2-услуга', 'Услуга', {
        услуга: attr('Услуга', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'услуга' })
    })
  });

  modelClass.defineProjection('ВизитL', 'i-i-s-bekap-2-визит', {
    код: attr('Код', { index: 0 }),
    время: attr('Время', { index: 1 }),
    времяр: attr('Времяр', { index: 2 }),
    клиент: belongsTo('i-i-s-bekap-2-клиент', 'ФИО', {
      фИО: attr('ФИО', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
