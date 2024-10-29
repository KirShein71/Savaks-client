import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { logout } from '../../http/userApi';
import { getAllFavoriteProduct } from '../../http/favoriteApi';
import { fetchBasket } from '../../http/basketApi';
import { AppContext } from '../../context/AppContext';
import { getAllForUserAccount } from '../../http/orderApi';
import ProductOrders from './orders/ProductOrders';
import StepperDelivery from './StepperDelivery';
import ProductFavorite from './favorites/ProductFavorite';
import Loader from '../Loader/Loader';
import SteelOrder from './orders/SteelOrder';
import SaddleOrders from './orders/SaddleOrders';
import BagOrders from './orders/BagOrders';
import HomeOrders from './orders/HomeOrders';
import './style.scss';

function PersonalAccount() {
  const { user, favoriteProduct } = React.useContext(AppContext);
  const [userOrders, setUserOrders] = React.useState([]);
  const navigate = useNavigate();
  const [change, setChange] = React.useState(true);
  const [fetching, setFetching] = React.useState(true);

  const handleLogout = () => {
    logout();
    user.logout();
    navigate('/', { replace: true });
  };

  React.useEffect(() => {
    getAllForUserAccount(user.id).then((data) => setUserOrders(data));
  }, [user.id]);

  React.useEffect(() => {
    fetchBasket().then((data) => {
      const basketId = data.id;
      getAllFavoriteProduct(basketId)
        .then((item) => {
          favoriteProduct.items = item;
          setFetching(false);
        })
        .catch((error) => {
          console.error('Произошла ошибка при загрузке данных:', error);
        });
    });
  }, [favoriteProduct, change]);

  if (fetching) {
    return <Loader />;
  }

  return (
    <div className="personal-account">
      <div className="personal-account__crumbs">
        <div className="container">
          <div className="personal-account__crumbs-content">
            <Link style={{ textDecoration: 'inherit', color: 'inherit' }} to="/">
              <div className="personal-account__crumbs-item">Главная</div>
            </Link>
            <img className="personal-account__crumbs-icon" src="../img/arrow.png" alt="arrow" />
            <div className="personal-account__crumbs-item__active">Личный кабинет</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="personal-account__content">
          <div className="personal-account__header">
            <h1 className="personal-account__title">Личный кабинет</h1>
            <div className="personal-account__out" onClick={handleLogout}>
              <div className="personal-account__out-icon">
                <img src="./img/log_out.png" alt="log out" />
              </div>
              <div className="personal-account__out-text">Выйти</div>
            </div>
          </div>
          <div className="personal-account__items">
            <div className="personal-account__orders">
              <h2 className="personal-account__orders-title">Активные заказы</h2>
              {userOrders.map((userOrder) =>
                userOrder.order_items.map((userItems) => (
                  <>
                    {userItems.product !== null ? (
                      <ProductOrders key={userItems.id} {...userItems} />
                    ) : (
                      ''
                    )}
                    {userItems.steel !== null ? <SteelOrder key={userItems} {...userItems} /> : ''}
                    {userItems.saddle !== null ? (
                      <SaddleOrders key={userItems} {...userItems} />
                    ) : (
                      ''
                    )}
                    {userItems.bag !== null ? <BagOrders key={userItems} {...userItems} /> : ''}
                    {userItems.home !== null ? <HomeOrders key={userItems} {...userItems} /> : ''}
                    <div className="personal-account__stepper">
                      <StepperDelivery />
                    </div>
                  </>
                )),
              )}
            </div>

            <div className="personal-account__favorite">
              <ProductFavorite
                change={change}
                setChange={setChange}
                favoriteProduct={favoriteProduct}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalAccount;