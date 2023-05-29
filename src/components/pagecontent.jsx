import React from 'react';
import './css/pagecontent.css';
import About from './about';
import Footer from './footer';
import Pagination from './pagination';
import FirstPhotoGrid from './photoGrid1';
import SecondPhotoGrid from './photoGrid2';

const PageContent = () => {
  return (
    <div className="w3-main w3-content w3-padding" >
      <FirstPhotoGrid />
			<SecondPhotoGrid />
			<Pagination />
			<About />
			<Footer />
    </div>
  );
};

export default PageContent;