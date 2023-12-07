import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-bekap-2-товар', 'Unit | Model | i-i-s-bekap-2-товар', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-bekap-2-визит',
    'model:i-i-s-bekap-2-должности',
    'model:i-i-s-bekap-2-запись-визита',
    'model:i-i-s-bekap-2-клиент',
    'model:i-i-s-bekap-2-состав-услуги',
    'model:i-i-s-bekap-2-сотрудник',
    'model:i-i-s-bekap-2-товар',
    'model:i-i-s-bekap-2-услуга',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
