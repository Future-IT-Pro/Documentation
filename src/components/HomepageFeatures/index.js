import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
      title: 'Future-IT-Dent',
      Svg: require('@site/static/img/marketing.svg').default,
      description: (
          <>
              Перейдя на сайт <a href="https://future-it-dent.ru/" target="_blank">Future-IT-Dent</a> вы можете узнать более подробно о тарифах и преимуществах использования нашего Продукта
          </>
      ),
  },
  {
    title: 'Новости FID',
    Svg: require('@site/static/img/coming-soon-dark.svg').default,
    description: (
      <>
        <p>Узнать последние новости о продукте:</p>
        <p><a href="https://future-it-dent.ru/blog" target="_blank">Здесь</a> новости наших разработчиков, полезные статьи о
            стоматологии, видео работы в программе для стоматологии</p>
      </>
    ),
  },
  {
    title: 'Контакты технической поддержки',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <p>Номер: <a href="tel: +74957989996">+7(495) 798 99 96</a></p>
        <p>WhatsApp: <a href="https://wa.me/+79687604855" target="_blank">+7(968) 760 48 55</a></p>
        <p>telegram: <a href="https://t.me/FID_support" target="_blank">Написать</a></p>
        <p>E-Mail: <a href="mailto:support@future-it-pro.ru">Написать на почту</a></p>
        <p><strong>Мы работаем с Понедельника по Субботу с 10.00 до 18.00 по Московскому Времени</strong></p>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
