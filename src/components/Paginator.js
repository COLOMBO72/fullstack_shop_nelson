import { observer } from 'mobx-react-lite';
import React from 'react';
import { Context } from '..';
import { Pagination } from 'react-bootstrap';

const Paginator = observer(() => {
  const { product } = React.useContext(Context);
  const pageCount = Math.ceil(product.totalCount / product.limit);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <Pagination>
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          onClick={() => product.setPage(page)}
          active={product.page === page}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
});

export default Paginator;
