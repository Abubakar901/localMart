import React from 'react';
import Helmet from 'react-helmet';

const Metadata = ({title}) => {
  return (
    <Helmet>
        <title>{title}</title>
        <style>{"body { background-color: #eeeeee; }"}</style>
    </Helmet>
  )
}

export default Metadata;
