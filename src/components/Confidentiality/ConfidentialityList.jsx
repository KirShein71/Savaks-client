import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import './style.scss';

function ConfidentialityList() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="confidentialitylist">
      <div className="confidentialitylist__crumbs">
        <div className="container">
          <div className="confidentialitylist__crumbs-content">
            <Link style={{ textDecoration: 'inherit', color: 'inherit' }} to="/">
              <div className="confidentialitylist__crumbs-item">Главная</div>
            </Link>
            <div className="cofidentialitylist__crumbs-icon">
              <ArrowRightAltIcon sx={{ color: '#ffffff', fontSize: 28 }} />
            </div>
            <div className="confidentialitylist__crumbs-item__active">
              Политика конфиденциальности
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="confidentialitylist__title">Политика конфиденциальности</div>
        <div className="confidentialitylist__content">
          <p className="confidentialitylist__text">
            Информация, полученная от Клиента при использовании им продуктов компании savaks
            (юридическая информация: ИП Шатский И.А. ИНН 781698384040, ОГРНИП 320784700157350;
            адрес: 192288 г. Санкт-Петербург, ул. Бухарестская, д.120), обслуживается
            Интернет-магазином savaks огласно настоящей Политике обработки персональных данных и
            соответствует законам РФ.
          </p>
          <p className="confidentialitylist__title">1. Ключевые термины</p>
          <p className="confidentialitylist__text">
            1.1. Администрация – это сотрудники, занимающие разную должность и работающие от имени
            Интернет-магазина savaks. Они управляют персональными данными и используют их для
            совершения конкретных действий.
          </p>
          <p className="confidentialitylist__text">
            1.2. Персональные данные – конфиденциальная информация Клиента, которая характеризирует
            его как субъекта коммерческих взаимоотношений.
          </p>
          <p className="confidentialitylist__text">
            1.3. Обработка персональной информации – это набор действий, осуществляемый с помощью
            автоматизированных средств (или без них) и направленный на обезличивание, сбор,
            хранение, применение, запись, блокирование, уничтожение и систематизацию данных.
          </p>
          <p className="confidentialitylist__text">
            1.4. Конфиденциальность – требование, предъявляемое к сотрудникам Интернет-магазина
            savaks, которое запрещает распространение персональных данных Клиента без его
            предварительного согласия.
          </p>
          <p className="confidentialitylist__text">
            1.5. Клиент – это пользователь, получивший доступ к функционалу, контенту и продуктам
            Интернет-магазина savaks через всемирную сеть.
          </p>
          <p className="confidentialitylist__text">
            1.6. Cookies – небольшая порция данных, полученная компьютером Клиента от веб-сервера.
            Она автоматически отправляется обратно на сервер в виде HTTP-запроса при каждой попытке
            Клиента открыть страницу Интернет-магазина savaks.
          </p>
          <p className="confidentialitylist__title">2. Ключевые положения</p>
          <p className="confidentialitylist__text">
            2.1. Факт использования Клиентом официального сайта интернет-магазина savaks
            автоматически означает его согласие с текущими правилами и условиями обработки
            информации.
          </p>
          <p className="confidentialitylist__text">
            2.2. В случае если Клиент не согласен с действующими правилами, он должен прекратить
            посещение страниц Интернет-магазина savaks.
          </p>
          <p className="confidentialitylist__text">
            2.3. Требования текущего договора относятся только к сайту Интернет-магазина savaks. Они
            не касаются площадок третьих лиц, на которые Клиент может попасть через
            Интернет-магазин.
          </p>
          <p className="confidentialitylist__text">
            2.4. Персональные данные, предоставленные Клиентом, не проверяются на подлинность
            администрацией сайта.
          </p>
          <p className="confidentialitylist__text">
            2.5. Клиентам запрещено использовать данные третьих лиц, без их официального согласия.
          </p>
          <p className="confidentialitylist__text">
            2.6. В текущей политике обработки сведений используются термины, которые толкуются в
            соответствии с текстом научной доктрины, оферты, законодательства РФ и соглашения о
            порядке использования сайта.
          </p>
          <p className="confidentialitylist__title">3. Состав персональной информации</p>
          <p className="confidentialitylist__text">
            3.1. Клиент предоставляет личные данные при заполнении регистрационной формы, формы
            оформления заказа, формы быстрого заказа, формы обратной связи, формы онлайн чата
            Интернет-магазина savaks. Указывается следующая информация:
          </p>
          <p className="confidentialitylist__text">• ФИО Клиента;</p>
          <p className="confidentialitylist__text">• контактный номер;</p>
          <p className="confidentialitylist__text">• e-mail адрес;</p>
          <p className="confidentialitylist__text">• фактический адрес проживания Клиента.</p>
          <p className="confidentialitylist__title">4. Цели сбора сведений</p>
          <p className="confidentialitylist__text">
            4.1. Идентификация Клиента, ранее зарегистрировавшегося на сайте savaks. Эта процедура
            необходима для заключения цифрового договора Купли-продажи или (и) для официального
            оформления заказа дистанционным способом, корректировки параметров заказа, исполнения
            заказа, доставки заказанных товаров, осуществления гарантийных обязательств.
          </p>
          <p className="confidentialitylist__text">
            4.2. Предоставление Клиенту полноценного доступа к защищенным ресурсам Интернет-магазина
            savaks.
          </p>
          <p className="confidentialitylist__text">
            4.3. Установление обратной связи. Она необходима для направления коммерческих запросов и
            уведомлений, касающихся оказания услуги или использования опция Интернет-магазина
            savaks.
          </p>
          <p className="confidentialitylist__text">
            4.4. Определение фактического местоположения Клиента с целью предотвращения
            мошенничества и обеспечения безопасности.
          </p>
          <p className="confidentialitylist__text">
            4.5. Подтверждение истинности и подлинности предоставленных данных Интернет-магазину
            savaks.
          </p>
          <p className="confidentialitylist__text">
            {' '}
            4.6. Создание индивидуальной учетной записи с целью совершения быстрых и безопасных
            покупок. При условии, если Клиент дал согласие на создание профиля.
          </p>
          <p className="confidentialitylist__text">
            4.7. Уведомление Клиентов о статусе заказа в режиме реального времени.
          </p>
          <p className="confidentialitylist__text">
            4.8. Обработка различных видов транзакций: подтверждение налога, прием платежей, их
            оспаривание, оформление налоговых льгот и получение Клиентом кредитной линии.
          </p>
          <p className="confidentialitylist__text">
            4.9. Предоставление качественной технической поддержки при возникновении сложностей,
            связанных с использованием Интернет-магазина savaks.
          </p>
          <p className="confidentialitylist__text">
            4.10. Предоставление Клиенту спецпредложений, свежих новостей, обновлений продукции
            (программ), информации о текущих ценах и других сведений от имени Интернет-магазина
            savaks или же от имени официальных партнеров. Все это возможно только при условии
            получения согласия от Клиента.
          </p>
          <p className="confidentialitylist__text">
            4.11. Осуществление рекламно-публицистической деятельности (также, только с согласия
            Клиента).
          </p>
          <p className="confidentialitylist__text">
            4.12. Предоставление доступа Клиенту на сервисы официальных партнеров Интернет-магазина
            savaks. Это необходимо для получения обновлений, продуктов и услуг.
          </p>
          <p className="confidentialitylist__title">
            5. Сроки и способы обработки персональных данных
          </p>
          <p className="confidentialitylist__text">
            5.1. Регистрируясь в Интернет-магазине savaks, Клиент автоматически соглашается с тем,
            что сотрудники компании могут разглашать персональную информацию третьим лицам, а
            именно, - курьерам, работникам почтовых служб и сервисам, рассылающим электронные
            уведомления.
          </p>
          <p className="confidentialitylist__text">
            5.2. Интернет-магазин savaks оставляет за собой право передавать персональные данные
            Клиента представителям государственных органов РФ. Это возможно только в рамках порядка,
            установленного действующим законодательством.
          </p>
          <p className="confidentialitylist__text">
            5.3. Обработка личной информации производится без временных ограничений и с
            использованием систем автоматизации (или без них).
          </p>
          <p className="confidentialitylist__text">
            {' '}
            5.4. В случае потери или разглашения данных, администрация Интернет-магазина быстро
            уведомляет Клиента.
          </p>
          <p className="confidentialitylist__text">
            5.5. Предпринимаются необходимые технические и организационные меры для обеспечения
            защиты персональной информации Клиента от случайного или неправомерного доступа третьих
            лиц. А также, от удаления, изменения, блокирования, распространения и копирования.{' '}
          </p>
          <p className="confidentialitylist__text">
            5.6. Интернет-магазин savaks предпринимает совместные с Клиентом меры для предотвращения
            убытков, связанных с потерей или кражей персональной информации.
          </p>
          <p className="confidentialitylist__text">
            5.7. Точные сроки обработки персональной информации определяются на основе соглашения,
            подписанного Клиентом (факт подписи равноценен созданию учетной записи в
            Интернет-магазине savaks) и на базе норм действующего законодательства РФ.
          </p>
          <p className="confidentialitylist__text">
            5.8. Администрация Интернет-магазина savaks имеет право создавать и хранить документы со
            сведениями Клиента. Это требование регламентировано постановлением Правительства РФ
            №687.
          </p>
          <p className="confidentialitylist__title">6. Правовые основания</p>
          <p className="confidentialitylist__text">
            6.1. Обработка и сбор персональной информации осуществляется на основе следующих
            нормативных актов РФ: • Закон «О бухгалтерском учете» №402, принятый 6.12.2001 года; •
            ФЗ «О трудовом кодексе РФ» №197, принятый 30.12.2001 года; • Налоговый кодекс страны; •
            Гражданский кодекс; • ФЗ «Об персонифицированном учете в системах пенсионного
            страхования» №27, принятый 1.04. 1996 года; • Трудовой кодекс и прочие нормативные
            документы.
          </p>
          <p className="confidentialitylist__text">
            6.2. Обработка персональной информации осуществляется с согласия Клиента. Оно дается по
            факту регистрации на сайте Интернет-магазина savaks.
          </p>
          <p className="confidentialitylist__text">
            6.3. Основанием для использования сведений Клиента могут быть требования уставных
            документов Интернет-магазина savaks, соглашения, заключенные с Клиентом, и регламентации
            международных стандартов Allianz SE.
          </p>
          <p className="confidentialitylist__title">
            7. Актуализация персональной информации Клиента
          </p>
          <p className="confidentialitylist__text">
            7.1. В случае если подтверждается факт неправомерной обработки персональной информации
            или их неточность, выполняется процедура актуализации.
          </p>
          <p className="confidentialitylist__text">
            7.2. Если Клиент отзывает свое согласие на обработку персональных сведений (и при
            достижении изначальных целей обработки), то данные удаляются.
          </p>
          <p className="confidentialitylist__text">
            7.3. Процесс уничтожения данных осуществляется путем механического деформирования
            носителя, на котором они содержались. При этом носитель не должен иметь опций
            восстановления персональных сведений и их считывания.
          </p>
          <p className="confidentialitylist__text">
            7.4. Если Клиент запрашивает информацию о проводимой обработке персональных данных,
            Интернет-магазин обязан предоставить ее в полном объеме.
          </p>
          <p className="confidentialitylist__title">8. Условия обработки сведений</p>
          <p className="confidentialitylist__text">
            8.1. Основные принципы обработки персональной информации Клиента: • этот процесс
            осуществляется исключительно на справедливых и законных основаниях; • заканчивается
            обработка по достижению заранее обозначенных целей и задач; • если базы данных разделены
            между собой по определенному признаку, то их объединение становится автоматически
            невозможным; • интернет-магазин savaks не обрабатывает избыточный поток персональной
            информации Клиента (используются лишь те данные, которые необходимы для обеспечения
            безопасности и совершения двухсторонних сделок); • предпринимаются меры по изменению или
            удалению неточных и неполных данных; • если цели обработки информации достигнуты, или же
            они отменены по ненадобности, все персональные сведения Клиента автоматически удаляются.
          </p>
          <p className="confidentialitylist__text">
            8.2. Способы получения данных от Клиента – непосредственно при заполнении
            регистрационной формы или из общедоступных источников.
          </p>
          <p className="confidentialitylist__text">
            8.3. Если Интернет-магазин savaks делегирует ответственность по обработке персональных
            сведений клиента доверенному лицу, он все равно несет ответственность за сохранность и
            целостность пользовательской информации.
          </p>
          <p className="confidentialitylist__text">
            8.4. Интернет-магазин savaks обязывает всех сотрудников, имеющих доступ к персональным
            данным, не распространять их третьим лицам.
          </p>
          <p className="confidentialitylist__text">
            8.5. Только действующее законодательство может обозначить сроки обработки персональных
            сведений Клиента. Если таковые не указаны, информация используется до тех пор, пока не
            будут достигнуты предварительно обозначенные цели обработки.
          </p>
          <p className="confidentialitylist__title">9. Заключительные положения</p>
          <p className="confidentialitylist__text">
            Текущая политика обработки персональных данных может размещаться в Интернет-магазине
            savaks, рассчитанном для общественного пользования. Она вступает в силу с момента
            публикации и может дополняться с четким соблюдением требований действующего
            законодательства РФ. Внутренние документы компании определяют ответственных лиц
            (сотрудников) за использование и обработку персональной информации Клиента. Они
            добросовестно выполняют свои должностные обязательства.
          </p>
          <p className="confidentialitylist__title">
            10. Как с нами связаться Любые вопросы касательно Политики обработки персональных
            данных, использования сайта, оформления заказа и другие вопросы вы можете задать по
            контактному телефону.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ConfidentialityList;
