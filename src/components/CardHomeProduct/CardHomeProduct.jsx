import React from 'react';
import { appendHome, fetchBasket, getAllBasketProduct } from '../../http/basketApi';
import { useNavigate } from 'react-router-dom';
import './style.scss';
import ModalImage from './ModalImage';
import { AppContext } from '../../context/AppContext';
import HomeProductModal from './modal/HomeProductModal';

function CardHomeProduct({ name, new_price, id, materials, home_images }) {
  const { basketProduct } = React.useContext(AppContext);
  const [quantity, setQuantity] = React.useState(1);
  const isCountDisabled = quantity <= 1;
  const [selectedMaterial, setSelectedMaterial] = React.useState('blacksota');
  const [selectedMaterialName, setSelectedMaterialName] = React.useState('Черный');
  const [selectedMaterialId, setSelectedMaterialId] = React.useState(28);
  const [isAddedToCart, setIsAddedToCart] = React.useState(false);
  const [openModalImage, setOpenModalImage] = React.useState(false);
  const [openModalToBasket, setOpenModalToBasket] = React.useState(false);
  const navigate = useNavigate();

  const clickToCart = (homeId, materialId, quantity) => {
    appendHome(homeId, materialId, quantity)
      .then((data) => {
        setIsAddedToCart(true);
        setOpenModalToBasket(true);
        fetchBasket().then((data) => {
          const basketId = data.id;
          getAllBasketProduct(basketId)
            .then((item) => {
              basketProduct.products = item;
            })
            .catch((error) => {
              console.error('Произошла ошибка при загрузке данных:', error);
            });
        });
      })
      .catch((error) => alert(error.response.data.message));
  };

  const handleClickImage = () => {
    setOpenModalImage(true);
  };

  const closedImageModal = () => {
    setOpenModalImage(false);
  };

  const closedModalToBasket = () => {
    setOpenModalToBasket(false);
  };

  const goToCart = () => {
    navigate('/basket');
  };

  return (
    <div className="cardhomeproduct">
      <div className="cardhomeproduct__content">
        <div className="cardhomeproduct__image">
          {home_images.map((icon) => {
            return (
              <div
                key={icon.id}
                style={{
                  display: icon.materialId === selectedMaterialId ? 'block' : 'none',
                }}>
                <img
                  src={process.env.REACT_APP_IMG_URL + icon.image}
                  alt="rug for home"
                  onClick={() => handleClickImage(icon.image)}
                />
              </div>
            );
          })}
        </div>
        {openModalImage && (
          <ModalImage
            closedImageModal={closedImageModal}
            image={
              home_images.find((imageItem) => imageItem.materialId === selectedMaterialId)?.image
            }
          />
        )}
      </div>
      <div className="cardhomeproduct__constructor">
        <div className="cardhomeproduct__constructor-material">
          <div className="cardhomeproduct__constructor-material__title">
            Цвет коврика: {selectedMaterialName}{' '}
          </div>
          <div className="cardhomeproduct__constructor-material__items">
            {materials.map((material) => (
              <div
                key={material.id}
                onClick={() => {
                  setSelectedMaterial(material.color);
                  setSelectedMaterialName(material.name);
                  setSelectedMaterialId(material.id);
                }}>
                <div
                  className={`cardhomeproduct__constructor-material__item ${material.color} ${
                    selectedMaterial === material.color ? 'active' : ''
                  }`}
                  style={{ backgroundColor: material.color }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {id === 50 ? (
        ''
      ) : (
        <div className="cardhomeproduct__equipment">
          <div className="cardhomeproduct__equipment-quantity">
            <button
              className="minus"
              onClick={() => setQuantity(quantity - 1)}
              disabled={isCountDisabled}>
              <img src="../img/minus.png" alt="minus" />
            </button>
            <div className="cardhomeproduct__equipment-total">{quantity}</div>
            <button className="plus" onClick={() => setQuantity(quantity + 1)}>
              <img src="../img/plus.png" alt="plus" />
            </button>
          </div>
        </div>
      )}

      <div class="cardhomeproduct__bottom">
        <h4 class="cardhomeproduct__title">{name}</h4>
        <div class="cardhomeproduct__price">{new_price * quantity} Р</div>
        <div style={{ marginTop: '10px' }}>
          <button
            onClick={() => {
              if (isAddedToCart) {
                goToCart();
              } else {
                clickToCart(id, selectedMaterialId, quantity);
              }
            }}
            type="button"
            id="cardhomeproduct__button">
            В Корзину
          </button>
          {openModalToBasket && (
            <HomeProductModal
              closedModalToBasket={closedModalToBasket}
              name={name}
              selectedMaterialName={selectedMaterialName}
              selectedMaterialId={selectedMaterialId}
              quantity={quantity}
              price={new_price}
              homeImages={home_images}
              goToCart={goToCart}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CardHomeProduct;
