import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-bekap-2-клиент', 'Unit | Serializer | i-i-s-bekap-2-клиент', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-bekap-2-клиент',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-bekap-2-пол',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
