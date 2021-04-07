import AdsRepository from '../src/repositories/AdsRepository.mjs';
import AdsLoader from '../src/services/AdsLoader.mjs';
import AdsAdapterFactory from '../src/adapters/AdsAdapterFactory.mjs';
import AdsApiProvider from '../src/providers/AdsApiProvider.mjs';
import { UriAccessorFactory } from '@ilb/uriaccessorjs';
import LastDateRepository from '../src/repositories/LastDateRepository.mjs';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient({ log: ['query', 'info'] });

const lastDateRepository = new LastDateRepository({ prisma });
const adsAdapterFactory = new AdsAdapterFactory();
const uriAccessorFactory = new UriAccessorFactory({
  uriAccessorFileEnabled: true
});
const adsRepository = new AdsRepository({ prisma });
const adsAdapter = adsAdapterFactory.create('auto');
// const sourceAdsUrl = 'file://test/services/ads.json';
// eslint-disable-next-line prettier/prettier
const sourceAdsUrl = 'https://ads-api.ru/main/api?user=dima2prog@gmail.com&token=7898911c474142c34cae4d840cb149e9&category_id=22';

const adsProvider = new AdsApiProvider(sourceAdsUrl, adsAdapter, uriAccessorFactory);
const adsLoader = new AdsLoader(adsProvider, lastDateRepository, adsRepository, 'adsapi', prisma);
// const received = await adsLoader.loadData();
const delay = 6000;

const uploaded = async () => {
  await adsLoader.loadData();
};

let upload = setTimeout(function tick() {
  console.log('tick');
  uploaded();
  // eslint-disable-next-line no-unused-vars
  upload = setTimeout(tick, delay);
}, delay);
