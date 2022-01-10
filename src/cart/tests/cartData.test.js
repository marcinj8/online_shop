import { validateCart } from '../data/cartData';

test('check cart validation on correct data', () => {
  const validationResult = validateCart(
    [1, 2],
    {
      city: 'Wroclaw',
      country: 'Poland',
      fullName: 'imie nazwisko',
      postalCode: 4234,
      street: 'ulica 32',
      phone: 123212,
    },
    'card'
  );

  expect(validationResult).toStrictEqual({
    products: true,
    addressOfDelivery: true,
    payment: true,
  });
});

test('check cart validation on empty products list', () => {
  const validationResult = validateCart(
    [],
    {
      city: 'Wroclaw',
      country: 'Poland',
      fullName: 'imie nazwisko',
      postalCode: 4234,
      street: 'dsafsfd 32',
      phone: 123212,
    },
    'card'
  );

  expect(validationResult).toStrictEqual({
    products: false,
    addressOfDelivery: true,
    payment: true,
  });
});

test('check cart validation on incorrect address data', () => {
  const validationResult = validateCart([1, 2], '', 'card');

  expect(validationResult).toStrictEqual({
    products: true,
    addressOfDelivery: false,
    payment: true,
  });
});

test('check cart validation on incorrect address data property', () => {
    const validationResult = validateCart([1, 2],  {
        city: 'Wroclaw',
        country: 'Poland',
        fullName: '',
        postalCode: 42634,
        street: 'dsafsfd 32',
        phone: 123212,
      }, 'card');
  
    expect(validationResult).toStrictEqual({
      products: true,
      addressOfDelivery: false,
      payment: true,
    });
  });

test('check cart validation on no choosen payment', () => {
  const validationResult = validateCart(
    [1, 2],
    {
      city: 'Wroclaw',
      country: 'Poland',
      fullName: 'imie nazwisko',
      postalCode: 4234,
      street: 'dsafsfd 32',
      phone: 123212,
    },
    null
  );

  expect(validationResult).toStrictEqual({
    products: true,
    addressOfDelivery: true,
    payment: false,
  });
});
