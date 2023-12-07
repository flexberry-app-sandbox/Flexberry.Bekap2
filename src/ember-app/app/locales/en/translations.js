import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISBekap_2ВизитLForm from './forms/i-i-s-bekap-2-визит-l';
import IISBekap_2ДолжностиLForm from './forms/i-i-s-bekap-2-должности-l';
import IISBekap_2КлиентLForm from './forms/i-i-s-bekap-2-клиент-l';
import IISBekap_2сотрудникLForm from './forms/i-i-s-bekap-2-сотрудник-l';
import IISBekap_2ТоварLForm from './forms/i-i-s-bekap-2-товар-l';
import IISBekap_2УслугаLForm from './forms/i-i-s-bekap-2-услуга-l';
import IISBekap_2ВизитEForm from './forms/i-i-s-bekap-2-визит-e';
import IISBekap_2ДолжностиEForm from './forms/i-i-s-bekap-2-должности-e';
import IISBekap_2КлиентEForm from './forms/i-i-s-bekap-2-клиент-e';
import IISBekap_2сотрудникEForm from './forms/i-i-s-bekap-2-сотрудник-e';
import IISBekap_2ТоварEForm from './forms/i-i-s-bekap-2-товар-e';
import IISBekap_2УслугаEForm from './forms/i-i-s-bekap-2-услуга-e';
import IISBekap_2ВизитModel from './models/i-i-s-bekap-2-визит';
import IISBekap_2ДолжностиModel from './models/i-i-s-bekap-2-должности';
import IISBekap_2ЗаписьВизитаModel from './models/i-i-s-bekap-2-запись-визита';
import IISBekap_2КлиентModel from './models/i-i-s-bekap-2-клиент';
import IISBekap_2СоставУслугиModel from './models/i-i-s-bekap-2-состав-услуги';
import IISBekap_2сотрудникModel from './models/i-i-s-bekap-2-сотрудник';
import IISBekap_2ТоварModel from './models/i-i-s-bekap-2-товар';
import IISBekap_2УслугаModel from './models/i-i-s-bekap-2-услуга';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-bekap-2-визит': IISBekap_2ВизитModel,
    'i-i-s-bekap-2-должности': IISBekap_2ДолжностиModel,
    'i-i-s-bekap-2-запись-визита': IISBekap_2ЗаписьВизитаModel,
    'i-i-s-bekap-2-клиент': IISBekap_2КлиентModel,
    'i-i-s-bekap-2-состав-услуги': IISBekap_2СоставУслугиModel,
    'i-i-s-bekap-2-сотрудник': IISBekap_2сотрудникModel,
    'i-i-s-bekap-2-товар': IISBekap_2ТоварModel,
    'i-i-s-bekap-2-услуга': IISBekap_2УслугаModel
  },

  'application-name': 'Bekap_2',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Bekap_2',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Bekap_2',
          title: 'Bekap_2'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'главная-страничка': {
          caption: 'Главная страничка',
          title: 'Главная страничка',
          'i-i-s-bekap-2-товар-l': {
            caption: 'Товар',
            title: ''
          },
          'i-i-s-bekap-2-визит-l': {
            caption: 'Визит',
            title: ''
          },
          'i-i-s-bekap-2-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-bekap-2-должности-l': {
            caption: 'Должности',
            title: ''
          }
        },
        'справочник-услуг': {
          caption: 'справочник услуг',
          title: 'справочник услуг',
          'i-i-s-bekap-2-услуга-l': {
            caption: 'Услуга',
            title: 'Услуга'
          }
        },
        'справочник-клиенты': {
          caption: 'справочник клиенты',
          title: 'справочник клиенты',
          'i-i-s-bekap-2-клиент-l': {
            caption: 'Клиент',
            title: 'Клиент'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-bekap-2-визит-l': IISBekap_2ВизитLForm,
    'i-i-s-bekap-2-должности-l': IISBekap_2ДолжностиLForm,
    'i-i-s-bekap-2-клиент-l': IISBekap_2КлиентLForm,
    'i-i-s-bekap-2-сотрудник-l': IISBekap_2сотрудникLForm,
    'i-i-s-bekap-2-товар-l': IISBekap_2ТоварLForm,
    'i-i-s-bekap-2-услуга-l': IISBekap_2УслугаLForm,
    'i-i-s-bekap-2-визит-e': IISBekap_2ВизитEForm,
    'i-i-s-bekap-2-должности-e': IISBekap_2ДолжностиEForm,
    'i-i-s-bekap-2-клиент-e': IISBekap_2КлиентEForm,
    'i-i-s-bekap-2-сотрудник-e': IISBekap_2сотрудникEForm,
    'i-i-s-bekap-2-товар-e': IISBekap_2ТоварEForm,
    'i-i-s-bekap-2-услуга-e': IISBekap_2УслугаEForm
  },

});

export default translations;
