import AdsRepository from '../../src/repositories/AdsRepository';
import AdsLoader from '../../src/services/AdsLoader.mjs';
import AdsAdapterFactory from '../../src/adapters/AdsAdapterFactory.mjs';
import AdsApiProvider from '../../src/providers/AdsApiProvider';
import { UriAccessorFactory } from '@ilb/uriaccessorjs';
import LastDateRepository from '../../src/repositories/LastDateRepository';
import prisma from '../../libs/prisma/prisma';

const lastDateRepository = new LastDateRepository({ prisma });
const adsAdapterFactory = new AdsAdapterFactory();
const uriAccessorFactory = new UriAccessorFactory({
  uriAccessorFileEnabled: true
});
const adsRepository = new AdsRepository({ prisma });
const adsAdapter = adsAdapterFactory.create('auto');
// eslint-disable-next-line prettier/prettier
// const sourceAdsUrl = 'https://ads-api.ru/main/api?user=dimars61@mail.ru&token=1e41187b3b81fea6358009d5ac351878&category_id=22';
const sourceAdsUrl = 'file://test/services/ads.json';
const dateFrom = new Date('2021-01-23').toISOString();
const dateTo = new Date('2021-02-25').toISOString();
const expected = '';

it('should return data and save to db table ads', async () => {
  const adsProvider = new AdsApiProvider(sourceAdsUrl, adsAdapter, uriAccessorFactory);
  const adsLoader = new AdsLoader(adsProvider, lastDateRepository, adsRepository, 'adsapi', prisma);

  // const received = await adsLoader.testLoadData();
  // const received = await adsLoader.loadData();
  expect(received).toStrictEqual(expected);
});
