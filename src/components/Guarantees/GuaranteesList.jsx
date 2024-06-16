import React from 'react';
import './style.scss';

function GuaranteesList() {
  return (
    <div className="guaranteeslist">
      <div className="container">
        <div className="guaranteeslist__title">Гарантии</div>
        <div className="guaranteeslist__content">
          <p className="guaranteeslist__text">
            1. Договор розничной купли-продажи может быть заключен на основании ознакомления
            потребителя с предложенным продавцом описанием товара посредством каталогов, проспектов,
            буклетов, фотоснимков, средств связи (телевизионной, почтовой, радиосвязи и других) или
            иными исключающими возможность непосредственного ознакомления потребителя с товаром либо
            образцом товара при заключении такого договора (дистанционный способ продажи товара)
            способами. (в ред. Федерального закона от 25.10.2007 N 234-ФЗ) (см. текст в предыдущей
            редакции) Каковы последствия непредоставления информации о товаре
          </p>
          <p className="guaranteeslist__text">
            {' '}
            2. Продавцом до заключения договора должна быть предоставлена потребителю информация об
            основных потребительских свойствах товара, об адресе (месте нахождения) продавца, о
            месте изготовления товара, о полном фирменном наименовании (наименовании) продавца
            (изготовителя), о цене и об условиях приобретения товара, о его доставке, сроке службы,
            сроке годности и гарантийном сроке, о порядке оплаты товара, а также о сроке, в течение
            которого действует предложение о заключении договора.
          </p>
          <p className="guaranteeslist__text">
            3. Потребителю в момент доставки товара должна быть в письменной форме предоставлена
            информация о товаре, предусмотренная статьей 10 настоящего Закона, а также
            предусмотренная пунктом 4 настоящей статьи информация о порядке и сроках возврата
            товара. Каков порядок возврата товара, купленного дистанционно{' '}
          </p>
          <p className="guaranteeslist__text">
            4. Потребитель вправе отказаться от товара в любое время до его передачи, а после
            передачи товара - в течение семи дней. В случае, если информация о порядке и сроках
            возврата товара надлежащего качества не была предоставлена в письменной форме в момент
            доставки товара, потребитель вправе отказаться от товара в течение трех месяцев с
            момента передачи товара. Какие документы доказывают факт покупки товара у конкретного
            продавца Возврат товара надлежащего качества возможен в случае, если сохранены его
            товарный вид, потребительские свойства, а также документ, подтверждающий факт и условия
            покупки указанного товара. Отсутствие у потребителя документа, подтверждающего факт и
            условия покупки товара, не лишает его возможности ссылаться на другие доказательства
            приобретения товара у данного продавца. Потребитель не вправе отказаться от товара
            надлежащего качества, имеющего индивидуально-определенные свойства, если указанный товар
            может быть использован исключительно приобретающим его потребителем. При отказе
            потребителя от товара продавец должен возвратить ему денежную сумму, уплаченную
            потребителем по договору, за исключением расходов продавца на доставку от потребителя
            возвращенного товара, не позднее чем через десять дней со дня предъявления потребителем
            соответствующего требования.
          </p>{' '}
          <p className="guaranteeslist__text">
            5. Последствия продажи товара ненадлежащего качества дистанционным способом продажи
            товара установлены положениями, предусмотренными статьями 18 - 24 настоящего Закона.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GuaranteesList;