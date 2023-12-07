import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number'),
  пол: DS.attr('i-i-s-bekap-2-пол'),
  рож: DS.attr('date'),
  фИО: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-bekap-2-должности', { inverse: null, async: false })
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-bekap-2-сотрудник.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  пол: {
    descriptionKey: 'models.i-i-s-bekap-2-сотрудник.validations.пол.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  рож: {
    descriptionKey: 'models.i-i-s-bekap-2-сотрудник.validations.рож.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-bekap-2-сотрудник.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-bekap-2-сотрудник.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('сотрудникE', 'i-i-s-bekap-2-сотрудник', {
    код: attr('Код', { index: 0 }),
    рож: attr('Рож', { index: 1 }),
    пол: attr('Пол', { index: 2 }),
    фИО: attr('ФИО', { index: 3 }),
    должности: belongsTo('i-i-s-bekap-2-должности', 'Должности', {
      должности: attr('Должности', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'должности' })
  });

  modelClass.defineProjection('сотрудникL', 'i-i-s-bekap-2-сотрудник', {
    код: attr('Код', { index: 0 }),
    рож: attr('Рож', { index: 1 }),
    пол: attr('Пол', { index: 2 }),
    фИО: attr('ФИО', { index: 3 }),
    должности: belongsTo('i-i-s-bekap-2-должности', 'Должности', {
      должности: attr('Должности', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
