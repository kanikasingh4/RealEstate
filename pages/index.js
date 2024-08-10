// pages/index.js

import Head from 'next/head';
import Property from '../components/Property';
import { baseUrl, FetchData } from '../utilities/FetchData';

// Remove the import statement for SearchFilter
// import SearchFilter from '../components/SearchFilter';

export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <>
      <Head>
        <title>Real Estate App</title>
        <meta name="description" content="Real estate properties for sale and rent" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Your navigation bar */}

      {/* Remove the SearchFilter component */}
      {/* <SearchFilter /> */}

      <main className="container mx-auto px-4 py-8">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {propertiesForSale.map((property) => (
            <Property key={property.id} property={property} />
          ))}
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const propertyForSale = await FetchData(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await FetchData(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits || [],
      propertiesForRent: propertyForRent?.hits || [],
    },
  };
}
