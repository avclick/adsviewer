import React from 'react';
import { Container, Message } from 'semantic-ui-react';
import { withRouter } from 'next/router';
import { processUsecase } from '../libs/usecases/index';
import AdsItem from '../components/ads-item';
import AdsFactory from '../components/hoc/adsFactory';



function AutoFormTest({ router, request, response, schema }) {

  function onSubmit() {
    query.page = 1;
    router.push({ pathname: router.pathname, query: router.query });
  }
  
  const handleChange = (event) => {
    query.page = 1;
    router.replace({
      pathname: router.pathname,
      query: (event.target.name === schema.required[0]) ?
        { case: router.query.case , [event.target.name]: event.target.value} :
        (event.target.name === schema.required[1]) ?
          { case: router.query.case, [schema.required[0]]: router.query.[schema.required[0]], [event.target.name]: event.target.value } :
          { ...router.query, [event.target.name]: event.target.value }
    });
  };

  const adsData = response.adsdata ? JSON.parse(response.adsdata) : [];
  const adsCountSize = adsData.length;
  const adsPerPage = 10;
  const pagesCount = Math.ceil((adsCountSize || 0) / adsPerPage);
  const currentPage = parseInt(router.query.page || 1);

  const indexOfLastAds = currentPage * adsPerPage;
  const indexOfFirstAds = indexOfLastAds - adsPerPage;
  const currentAds = adsData.slice(indexOfFirstAds, indexOfLastAds);

  function onPaginationItemClick(page) {
    if (page !== currentPage) {
      router.replace({
        pathname: router.pathname,
        query: { ...router.query, page }
      });
    }
  }
  const props = { response, currentAds, request, schema, router, pagesCount, currentPage, onSubmit, handleChange, onPaginationItemClick };

  return (
    <Container>
      <AdsFactory {...props} />
      {adsData && (
        <AdsItem {...props} />
      )}
    </Container>
  );
}

export default withRouter(AutoFormTest);

export async function getServerSideProps(context) {
  // console.log('Context', context.query.case);
  return processUsecase(context, context.query.case ? context.query.case : 'search');
}
