import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { observer } from 'mobx-react-lite';
import { Context } from '..';

const SwitchBar = observer(() => {
  const { product } = React.useContext(Context);
  return (
    <ListGroup>
      {product.types.map((type) => (
        <ListGroup.Item
          style={{ cursor: 'pointer' }}
          active={type.id === product.selectedType.id}
          onClick={() => product.setSelectedType(type)}
          key={type.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
      <div className="mt-2">
        {product.clothes.map((cloth) => (
          <ListGroup.Item
            style={{ cursor: 'pointer' }}
            onClick={() => product.setSelectedCloth(cloth)}
            key={cloth.id}
            active={cloth.id === product.selectedClothes.id}
          >
            {cloth.name}
          </ListGroup.Item>
        ))}
      </div>
      <div className="mt-2">
        {product.brands.map((brand) => (
          <ListGroup.Item
            style={{ cursor: 'pointer' }}
            onClick={() => product.setSelectedBrand(brand)}
            key={brand.id}
            active={brand.id === product.selectedBrand.id}
          >
            {brand.name}
          </ListGroup.Item>
        ))}
      </div>
    </ListGroup>
  );
});

export default SwitchBar;
