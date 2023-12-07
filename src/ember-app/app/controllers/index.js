import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.главная-страничка.caption'),
          title: i18n.t('forms.application.sitemap.главная-страничка.title'),
          children: [{
            link: 'i-i-s-bekap-2-товар-l',
            caption: i18n.t('forms.application.sitemap.главная-страничка.i-i-s-bekap-2-товар-l.caption'),
            title: i18n.t('forms.application.sitemap.главная-страничка.i-i-s-bekap-2-товар-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-bekap-2-визит-l',
            caption: i18n.t('forms.application.sitemap.главная-страничка.i-i-s-bekap-2-визит-l.caption'),
            title: i18n.t('forms.application.sitemap.главная-страничка.i-i-s-bekap-2-визит-l.title'),
            children: null
          }, {
            link: 'i-i-s-bekap-2-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.главная-страничка.i-i-s-bekap-2-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.главная-страничка.i-i-s-bekap-2-сотрудник-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-bekap-2-должности-l',
            caption: i18n.t('forms.application.sitemap.главная-страничка.i-i-s-bekap-2-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.главная-страничка.i-i-s-bekap-2-должности-l.title'),
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-услуг.caption'),
          title: i18n.t('forms.application.sitemap.справочник-услуг.title'),
          children: [{
            link: 'i-i-s-bekap-2-услуга-l',
            caption: i18n.t('forms.application.sitemap.справочник-услуг.i-i-s-bekap-2-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-услуг.i-i-s-bekap-2-услуга-l.title'),
            icon: 'file',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-клиенты.caption'),
          title: i18n.t('forms.application.sitemap.справочник-клиенты.title'),
          children: [{
            link: 'i-i-s-bekap-2-клиент-l',
            caption: i18n.t('forms.application.sitemap.справочник-клиенты.i-i-s-bekap-2-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-клиенты.i-i-s-bekap-2-клиент-l.title'),
            icon: 'address card',
            children: null
          }]
        }
      ]
    };
  }),
})