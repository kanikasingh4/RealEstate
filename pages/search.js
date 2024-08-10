// pages/search.js

import React, { useState } from 'react';
import { BiFilter } from 'react-icons/bi';
import Property from '../components/Property';
import SearchFilter from '../components/SearchFilter';
import { baseUrl, FetchData } from '../utilities/FetchData';
import styles from '../styles/Home.module.css'; // Correct import statement

const Search = ({ propertiesForSale }) => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState([]); // Assuming filters are fetched or defined somewhere

  return (
    <div className={styles.mainContainer}>
      <div
        onClick={() => {
          setFilterOpen(!filterOpen);
        }}
        className={`${styles.filterToggle} ${styles.flex} ${styles.itemsCenter} ${styles.cursorPointer}`}
      >
        <span className={styles.filterText}>Search Property by Filter</span>
        <BiFilter className={styles.filterIcon} />
      </div>

      {filterOpen && <SearchFilter filters={filters} />}

      <section className={`${styles.propertySection} ${styles.flex} ${styles.justifyCenter}`}>
        <div className={`${styles.propertyGrid} ${styles.flex} ${styles.flexWrap} ${styles.minusM4}`}>
          {propertiesForSale.map((property) => (
            <Property key={property.id} property={property} />
          ))}
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const roomsMin = query.roomsMin || '0';
  const bathsMin = query.bathsMin || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalID = query.categoryExternalID || '4';

  // Fetch or define your filters here
  const filters = []; // Example: You should populate this with actual filters data

  const data = await FetchData(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      propertiesForSale: data?.hits,
      filters, // Pass filters to props
    },
  };
}

export default Search;
