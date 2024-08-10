// components/Property.js

import React from 'react';

const Property = ({ property }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <img
        src={property.coverPhoto.url}
        alt={property.title}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-2xl font-semibold mt-4">{property.title}</h2>
      <p className="text-gray-600">{property.description}</p>
      <p className="mt-2">
        <span className="font-semibold">Price:</span> AED {property.price}
      </p>
      <p className="mt-2">
        <span className="font-semibold">Rooms:</span> {property.rooms}
      </p>
      <p className="mt-2">
        <span className="font-semibold">Baths:</span> {property.baths}
      </p>
      <p className="mt-2">
        <span className="font-semibold">Area:</span> {property.area} sqft
      </p>
    </div>
  );
};

export default Property;
