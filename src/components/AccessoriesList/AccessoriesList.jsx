import React from 'react';
import Bag from './Bag/Bag';
import { Link } from 'react-router-dom';

import './style.scss';

function AccessoriesList() {
  return (
    <div className="accessorieslist">
      <div className="accessorieslist__crumbs">
        <div className="container">
          <div className="accessorieslist__crumbs-content">
            <Link style={{ textDecoration: 'inherit', color: 'inherit' }} to="/">
              <div className="accessorieslist__crumbs-item">Главная</div>
            </Link>
            <img className="accessorieslist__crumbs-icon" src="../img/arrow.png" alt="arrow" />
            <div className="accessorieslist__crumbs-item__active">Автоаксессуары</div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="accessorieslist__title">Автоаксессуары</h1>
        <div className="accessorieslist__content">
          <Bag />
        </div>
      </div>
    </div>
  );
}

export default AccessoriesList;