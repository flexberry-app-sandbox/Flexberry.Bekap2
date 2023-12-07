import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-bekap-2-визит-l');
  this.route('i-i-s-bekap-2-визит-e',
  { path: 'i-i-s-bekap-2-визит-e/:id' });
  this.route('i-i-s-bekap-2-визит-e.new',
  { path: 'i-i-s-bekap-2-визит-e/new' });
  this.route('i-i-s-bekap-2-должности-l');
  this.route('i-i-s-bekap-2-должности-e',
  { path: 'i-i-s-bekap-2-должности-e/:id' });
  this.route('i-i-s-bekap-2-должности-e.new',
  { path: 'i-i-s-bekap-2-должности-e/new' });
  this.route('i-i-s-bekap-2-клиент-l');
  this.route('i-i-s-bekap-2-клиент-e',
  { path: 'i-i-s-bekap-2-клиент-e/:id' });
  this.route('i-i-s-bekap-2-клиент-e.new',
  { path: 'i-i-s-bekap-2-клиент-e/new' });
  this.route('i-i-s-bekap-2-сотрудник-l');
  this.route('i-i-s-bekap-2-сотрудник-e',
  { path: 'i-i-s-bekap-2-сотрудник-e/:id' });
  this.route('i-i-s-bekap-2-сотрудник-e.new',
  { path: 'i-i-s-bekap-2-сотрудник-e/new' });
  this.route('i-i-s-bekap-2-товар-l');
  this.route('i-i-s-bekap-2-товар-e',
  { path: 'i-i-s-bekap-2-товар-e/:id' });
  this.route('i-i-s-bekap-2-товар-e.new',
  { path: 'i-i-s-bekap-2-товар-e/new' });
  this.route('i-i-s-bekap-2-услуга-l');
  this.route('i-i-s-bekap-2-услуга-e',
  { path: 'i-i-s-bekap-2-услуга-e/:id' });
  this.route('i-i-s-bekap-2-услуга-e.new',
  { path: 'i-i-s-bekap-2-услуга-e/new' });
});

export default Router;
