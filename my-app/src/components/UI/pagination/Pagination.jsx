import React from "react";
import { getPagesCount, getPagesArray } from '../../../utils/pages.js';

const Pagination = ({totalPages, page, changePage}) => {

    let pagesArray = getPagesArray(totalPages);

    return(
        <div className="page__wrapper">
            {pagesArray.map(p => 
            <span 
                key={p}
                onClick={() => changePage(p)} 
                className={page === p ? 'page page__current' : 'page'}>{p}
            </span>
            )}
      </div>
    );
}

export default Pagination;