import React, { useEffect } from 'react';
import style from '../Home/Home.module.css';
import logoSP from '../../../images/footer/logo.png';
import flip_chart from '../../../images/main/benefits/flip_chart_120px.png';
import dumbbell from '../../../images/main/benefits/dumbbell_120px.png';
import country from '../../../images/main/benefits/country_120px.png';
import classcharts from '../../../images/main/benefits/classcharts_120px.png';
import comand from '../../../images/main/home/comand.jpg';
import aerostratching from '../../../images/main/home/aerostratching.jpg';
import stratching from '../../../images/main/home/stratching.jpg';
import box from '../../../images/main/home/box.jpg';
import ems from '../../../images/main/home/ems.jpg';
import trx from '../../../images/main/home/trx.jpg';
import functional from '../../../images/main/home/functional.jpg';
import quick from '../../../images/main/home/quick_mode_on_120px.png';
import homeTEL from '../../../images/main/home/homeTEL.png';
import profit from '../../../images/main/home/profit_120px.png';
import present from '../../../images/main/home/present_120px.png';
import quality from '../../../images/main/home/quality_120px.png';
import stefan from '../../../images/main/trainers/stefan.jpg';
import Irina from '../../../images/main/trainers/Irina.jpg';
import Mihail from '../../../images/main/trainers/Mihail.jpg';
import Svetlana from '../../../images/main/trainers/Svetlana.jpg';
import Valentina from '../../../images/main/trainers/Valentina.jpg';
import Salvina from '../../../images/main/trainers/Salvina.jpg';
import Trainer from '../../../reusable_components/Trainer/Trainer';
import Abonement from '../../../reusable_components/Abonement/Abonement';
import one from '../../../images/main/gallery/1.jpg';
import two from '../../../images/main/gallery/2.jpg';
import three from '../../../images/main/gallery/3.jpg';
import four from '../../../images/main/gallery/4.jpg';
import five from '../../../images/main/gallery/5.jpg';
import six from '../../../images/main/gallery/6.jpg';
import seven from '../../../images/main/gallery/7.jpg';
import eight from '../../../images/main/gallery/8.jpg';
import nine from '../../../images/main/gallery/9.jpg';
import ten from '../../../images/main/gallery/10.jpg';
import Slider from 'react-slick';
import BeForm from '../../../reusable_components/BeForm/BeForm';
import { useState } from 'react';
import BeFormPopUp from '../../../reusable_components/BeFormPopUp/BeFormPopUp';

const TRAINERS = [
  {
    image: Salvina,
    button: 'Записаться на занятие к Сальвине',
    name: 'Сальвина',
    info: [
      'А у нас новый ТРЕНЕР 📌',
      'Знакомьтесь, Сальвина - тренер с хореографическим образованием!',
      'С Сальвиной в нашей студии появится совершенно новое направление  — БАРРЕ.',
      'Что это - сочетание балета и фитнеса!',
      ' Барре - набор энергичных упражнений, которые отъединяют технику пилатеса, танцев и йоги, а также интенсивные спортивные нагрузки. ',
      ' Основная идея заключается в использовании хореографического станка! Метод сосредоточен на биомеханике  вашего тела, все упражнения безопасны и предусматривают любой уровень физической подготовки.',
      ' Вы сможете сделать своё тело подтянутым и рельефным, тренировки помогут выпрямить осанку и приобрести легкость, грацию в движениях.',
      ' Также Сальвина квалифицированный тренер по TRX и Функционалу - в её компании вы сможете стать сильнее и выносливее, сбросить все лишнее и добавить мышечную массу. ',
    ],
    inst: 'https://www.instagram.com/sport_personal_moscow/',
  },
  {
    image: stefan,
    button: 'Записаться на занятие к Стефану',
    name: 'Стефан',
    info: [
      'Техническое выполнение упражнений. Методика построения тренировки по единоборствам для разного уровня подготовленности занимающихся. Кроссфит, функциональная подготовка, реабилитация после трав, единоборства.',
      'Тренировки повышают общую выносливость организма, сжигают жир, улучшают физическую форму, укрепляют мышечный корсет, развивают ловкость, силу и быструю реакцию. Занятия также отлично подходят для снятия стресса и освобождения от негатива. ',
      'Кроссфит тренировка - это тренировка с нетяжелой штангой, созданная для тонуса мышц и сжигания жира. Занятия рассчитаны на большое количество повторений для каждой группы мышцы, что позволит работать над похудением, тонусом мышц и уменьшением объемов одновременно.',
    ],
    inst: 'https://www.instagram.com/lebron_mma/',
  },
  {
    image: Valentina,
    button: 'Записаться на занятие к Валентине',
    name: 'Валентина',
    info: [
      'Тренерский стаж 5 лет. Проведение групповых и индивидуальных тренировок по направлениям stretching, active easy stretch,шпагат pro, здоровая спина, силовые тренировки. Занятия со взрослыми и детьми. Знание анатомии и физиологии человека,биомеханика. Умение психологически подготовить клиентов и настроить на тренировку.',
      'Курсы повышения квалификации: Первоклассная школа фитнеса Варвары Медведевой “It`s Russia fitness”',
      '«Я всегда говорила себе: нужно проводить занятия так, чтобы ты сама хотела на них попасть. Я никогда не работаю на поток людей, а только на качество тренировок»',
    ],
    inst: 'https://www.instagram.com/1khobta/',
  },
  {
    image: Irina,
    button: 'Записаться на занятие к Ирине',
    name: 'Ирина',
    info: [
      'Cертификат FPA (Ассоциация профессионалов фитнесса) «Персональный тренер», сертификат «Функциональный тренинг», сертификат «Подвесные системы TRX», сертификат «Питание детей от 4х лет и подростков»',
      'Проведение индивидуальных тренировок и занятий как персонально, так и в мини-группах по направлениям: - EMS тренировки - функциональный тренинг с целью развития всех физических качеств (сила, выносливость, гибкость и ловкость) и основных двигательных способностей - тренинг с использованием подвесных петель TRX - силовой тренинг для укрепления и проработки основных мышечных групп, коррекция осанки.',
      'Нутрициология: - индивидуальная консультация по питанию с целью снижение веса за счет жирового компонента или набор мышечной массы - анализ и коррекция пищевого дневника - помощь в формировании новых пищевых привычек',
    ],
    inst: 'https://www.instagram.com/irina_stepovik/',
  },
  {
    image: Svetlana,
    button: 'Записаться на занятие к Светлане',
    name: 'Светлана',
    info: [
      'Проведение индивидуальных тренировок и занятий в мини-группах по следующим направлениям: функциональный тренинг с целью создания гармонично развитого тела, увеличения тонуса мышц, коррекции осанки, улучшения подвижности суставов и мобильности во всем теле; силовой тренинг для качественной проработки мышц, коррекции фигуры; миофасциальное расслабление; стретчинг для развития гибкости и улучшения эластичности тканей; пилатес; функциональный тренинг с использованием подвесных петель TRX; восстановление и укрепление женского здоровья; фитнес-тренировки беременных. ',
      'Нутрициология: консультации по питанию с целью похудения или набора мышечной массы, составление рациона питания, анализ и коррекция дневника питания, помощь в формировании новых пищевых привычек.',
      'Тренировка подходит для людей с любым уровнем физической подготовки. Тот факт, что занятие проходит в мини-группе, дает тренеру возможность помогать и корректировать движения каждого, что позволит не только избежать возможных травм, но и получить максимальный эффект от каждого занятия. ',
    ],
    inst: 'https://www.instagram.com/sveta_pro_fitness/',
  },
  {
    image: Mihail,
    button: 'Записаться на занятие к Михаилу',
    name: 'Михаил',
    info: [
      'Проведение персональных тренировок и сплит-тренировок для достижения любых целей: снижение массы тела и коррекция фигуры, функциональный тренинг, набор мышечной массы, восстановление после травм, повышение силовых показателей. Работаю по направлениям - TRX, EMS, тренировки со своим весом. Консультации по питанию с целью похудения иили набора мышечной массы. Составление карты питания. Обучение тому как легко перейти на правильный рацион «без страданий». Полная консультация по любым пищевым добавкам.',
      'Предлагаю вашему вниманию качественные тренировки, в ходе которых вы научитесь чувствовать свое тело и мышцы, поймете как «правильно» ими пользоваться в повседневной жизни и экстренных ситуациях. В ходе бесед во время EMS-массажа (да-да в конце EMS тренировок костюм сделает вам массаж) мы обсудим ваше питание и ваши привычки, сделаем выводы, я дам вам гору полезных советов которые вы с легкостью примените — никаких сложных инструкций и страшных схем, все максимально просто. Каждого своего подопечного я веду от старта до финиша, вы в любое время сможете связаться со мной и получить ответы на любые вопросы.',
    ],
    inst: 'https://www.instagram.com/mike_thirteenth/',
  },
];
const ABONEMENTS = [
  {
    name: 'Aerostretching (растяжка в гамаках)',
    trial: '900',
    oneTime: '2 500',
    four: '8 200',
    eight: '15 200',
    twelve: '20 400',
    sixteen: '25 600',
    twentyFour: '36 000',
  },
  {
    name: 'Бокс ',
    trial: '1 000',
    oneTime: '2 500',
    four: '9 500',
    eight: '18 300',
    twelve: '24 000',
    sixteen: '30 400',
    twentyFour: '43 000',
  },
  {
    name: 'Stretching',
    trial: '990',
    oneTime: '2 000',
    four: '7 600',
    eight: '14 400',
    twelve: '20 400',
    sixteen: '28 800',
    twentyFour: '36 000',
  },
  {
    name: 'EMS-тренировки',
    trial: '900',
    oneTime: '2 000',
    four: '7 600',
    eight: '14 400',
    twelve: '20 400',
    sixteen: '25 600',
    twentyFour: '36 000',
  },
  {
    name: 'TRX-тренировки',
    trial: '900',
    oneTime: '2 000',
    four: '7 600',
    eight: '14 400',
    twelve: '20 400',
    sixteen: '25 600',
    twentyFour: '36 000',
  },
  {
    name: 'Функциональные тренировки',
    trial: '900',
    oneTime: '2 000',
    four: '7 600',
    eight: '14 400',
    twelve: '20 400',
    sixteen: '25 600',
    twentyFour: '36 000',
  },
];
const RESTRICTION = {
  four: 'Ограничение 1 месяц',
  eight: '14 400 (ограничение 1 месяц, заморозка от 2 до 7 дней )',
  twelve: '20 400 (ограничение 1,5 месяца, заморозка от 2 до 14 дней )',
  sixteen: '25 600 (ограничение 2 месяца ,заморозка от 2 до 21 дня )',
  twentyFour: '36 600 (ограничение 3 месяца, от 2 до 30 дней заморозка )',
};
const GROUP = {
  four: '3 600',
  eight: '6 400',
  twelve: '9 000',
  sixteen: '11 200',
  twentyFour: '15 600',
};

const Home = ({}) => {
  const [fotoCoutn, setFotoCoutn] = useState(3);
  const [showForm, setShowForm] = useState(false);
  const [titleForm, setTitleForm] = useState('');
  useEffect(() => {
    if (window.innerWidth < 800) {
      setFotoCoutn(2);
    }
    if (window.innerWidth < 480) {
      setFotoCoutn(1);
    }
  }, [window.innerWidth]);

  let closeFormPopUp = () => {
    let boolean = !showForm;
    setShowForm(boolean);
  };
  let openFormPopUp = (title) => {
    setTitleForm(title);
    setShowForm(true);
  };
  // let abonementsItem = ABONEMENTS.map((abonement) => (
  //   <Abonement abonement={abonement} openFormPopUp={openFormPopUp} />
  // ));
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: fotoCoutn,
    slidesToScroll: fotoCoutn,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <section className={style.home}>
      {showForm && (
        <section className={style.home_form}>
          <BeFormPopUp title={titleForm} closeFormPopUp={closeFormPopUp} />
        </section>
      )}

      <section className={`${style.uni_info_sec1} ${style.uni_info_sec1_tel}`}>
        <div>
          <div className={style.uni_info_sec1_div1}>
            <div className={style.uni_info_sec1_info}>
              <a className={style.contacts_num} href='tel: +79637679889'>
                +7 (963) 767-98-89
              </a>
              <h4 className={style.contacts_add}>
                <b>ул. Большая Грузинская, д. 12</b>
              </h4>
            </div>

            <img
              className={style.logo_img}
              width='88'
              src={logoSP}
              alt='imageLogo'
            />

            {/* <div>
              <input
                type='checkbox'
                id='hmt'
                className={style.hidden_menu_ticker}
              ></input>
              <label className={style.btn_menu} for='hmt'>
                <span className={style.first}></span>
                <span className={style.second}></span>
                <span className={style.third}></span>
              </label>
              <ul className={style.hidden_menu}>
                <li className={style.nav_link_li}>
                  <a className={style.nav_link} href='#services'>
                    Услуги
                  </a>
                </li>
                <li className={style.nav_link_li}>
                  <a className={style.nav_link} href='#trainers'>
                    Тренеры
                  </a>
                </li>
                <li className={style.nav_link_li}>
                  <a className={style.nav_link} href='#gallery'>
                    Галерея
                  </a>
                </li>
                <li className={style.nav_link_li}>
                  <a className={style.nav_link} href='#our'>
                    О нас
                  </a>
                </li>
                <div className={style.hidden_menu_soc}>
                  <div className={style.hidden_menu_inst}>
                    <a
                      className={style.footer_link_a}
                      href={'https://www.instagram.com/sport_personal_moscow/'}
                      target='_blank'
                      rel='noreferrer'
                    >
                      Instagram
                    </a>
                  </div>
                  <div className={style.hidden_menu_inst}>
                    <a
                      className={style.footer_link_a}
                      href='https://www.tiktok.com/@sport_personal_msk?'
                      target='_blank'
                      rel='noreferrer'
                    >
                      TikTok
                    </a>
                  </div>
                </div>
              </ul>
            </div> */}
          </div>
          <div
            className={`${style.uni_info_sec1_info} ${style.uni_info_sec1_info_tel}`}
          >
            <div className={style.uni_info_sec1_info_s}>SPORT PERSONAL</div>
            <div className={style.uni_info_sec1_info_s_div}>
              <div>
                <h1>Твоё тело.</h1>
              </div>
              <div>
                <h1 className={style.uni_info_sec1_info_h1}> Твоё дело</h1>
              </div>
            </div>
            <button
              onClick={() => openFormPopUp('Я хочу вступить в клуб')}
              className={`${style.btn_home} ${style.btn_home_sec1}`}
            >
              Вступить в клуб
            </button>
          </div>
        </div>
      </section>

      {/* <section className={style.uni_section_b}>
        <div className={style.uni_container}>
          <div className={style.transform}>
            <div className={style.actions}>
              <img className={style.actions_img} src={actions} alt='images' />
              <img
                className={`${style.actions_img} ${style.actions_img_none}`}
                src={actions}
                alt='images'
              />
              <div className={style.actions_img_div}>
                <div>
                  <img
                    className={style.actions_img_sale}
                    src={sale}
                    alt='images'
                  />
                  <p className={style.actions_p}>АКЦИЯ</p>
                </div>
                <div>
                  <p className={style.actions_obor_subtit}>
                    🔥 Для новых клиентов студии персональных тренировок Sport
                    Personal действует новогодняя акция 30% скидки на покупку
                    абонемента до 28 февраля 2022 года 😉
                  </p>
                </div>
              </div>
            </div>
            <a
              className={style.actions_obor_btn_a}
              href='https://www.instagram.com/p/CWITnPtoinp/'
            >
              <button className={style.actions_obor_btn}>
                Узнать подробней
              </button>
            </a>
          </div>
        </div>
      </section> */}

      <section className={style.uni_section}>
        <div className={style.home_benefits_section}>
          <div className={style.uni_container}>
            <div className={`${style.uni_block1} ${style.uni_block1_t}`}>
              <div className={style.uni_info}>
                <img
                  className={style.uni_block1_img}
                  src={country}
                  alt='imageBenefits'
                />
                <h1 className={style.uni_title_block1}>50 кв. м.</h1>
                <p className={style.uni_subtitle}>
                  Общая площадь фитнеса персонально настроенная под вас
                </p>
              </div>
              <div className={style.uni_info}>
                <img
                  className={style.uni_block1_img}
                  src={classcharts}
                  alt='imageBenefits'
                />
                <h1 className={style.uni_title_block1}>6 тренеров</h1>
                <p className={style.uni_subtitle}>
                  Мастера спорта с опытом более 7 лет
                </p>
              </div>
            </div>
            <div className={style.uni_block2}>
              <div className={style.uni_info}>
                <img
                  className={style.uni_block1_img}
                  src={dumbbell}
                  alt='imageBenefits'
                />
                <h1 className={style.uni_title_block1}>Более 100</h1>
                <p className={style.uni_subtitle}>
                  Довольных клиентов среди которых молодые и взрослые, женщины и
                  мужчины
                </p>
              </div>
              {/* <div className={style.uni_info}>
                <img
                  className={style.uni_block1_img}
                  src={dumbbell}
                  alt='imageBenefits'
                />
                <h1 className={style.uni_title_block1}>50 тренажeров</h1>
                <p className={style.uni_subtitle}>
                  Профессиональное оборудование с индивидуальным подходом,
                  теплым освещением и новой вентиляцией
                </p>
              </div> */}
              <div className={style.uni_info}>
                <img
                  className={style.uni_block1_img}
                  src={flip_chart}
                  alt='imageBenefits'
                />
                <h1 className={style.uni_title_block1}>20 программ</h1>
                <p className={style.uni_subtitle}>
                  Комфортное пространство для тренировок, общения, оздоровления
                  и релакса для Вас
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='our' className={style.uni_section}>
        <div className={style.uni_container}>
          <div className={style.uni}>
            <div className={style.uni_info_comand}>
              <h1
                className={`${style.uni_title_com} ${style.uni_title_com_our}`}
              >
                О нас
              </h1>
              <p
                className={`${style.uni_subtitle} ${style.uni_subtitle_com} ${style.uni_subtitle_our}`}
              >
                Наше уютное пространство имеет максимум возможностей для
                гармоничного совершенствования тела и духа
              </p>
              <p className={`${style.uni_subtitle} ${style.uni_subtitle_our}`}>
                Мы ориентированы на персональные тренировки 1 на 1 с тренером и
                на занятия в группе до 3-4 человек, чтобы вы могли достигать
                эффективных результатов в самые короткие сроки
              </p>
              <p className={`${style.uni_subtitle} ${style.uni_subtitle_our}`}>
                Тренировки с нами это хороший способ улучшить общую физическую
                форму, набрать мышечную массу или похудеть, а также и просто
                поддерживать тело в спортивном тонусе и укрепить мышцы за
                меньшее время
              </p>
            </div>
            <img
              className={`${style.uni_img} ${style.uni_img_com}`}
              src={comand}
              alt='images'
            />
          </div>
        </div>
      </section>
      <section id='services' className={style.uni_section}>
        <div className={style.uni_container}>
          <div className={style.serv_info}>
            <h1 className={style.uni_title_com}>Услуги</h1>
            <p
              className={`${style.uni_subtitle} ${style.uni_subtitle_com} ${style.uni_subtitle_serv}`}
            >
              Более 20 тренировочных программ, все возможности студии и тренеры,
              мотивирующие личным примером, помогают достигать максимальных
              результатов в любом виде спорта. Что вам по душе?
            </p>
          </div>
          <div className={style.our_services}>
            <div className={style.our_services_div}>
              <div>
                <img
                  className={style.our_services_img}
                  src={aerostratching}
                  alt='image'
                />
                <p className={style.our_services_tit}>Аэростретчинг </p>
                <p className={style.uni_subtitle}>
                  Тренажерный зал студии – это идеально оснащенная мотивирующая
                  среда с широким ассортиментом тренажеров для силовых,
                  групповых, круговых и профессиональных тренировок. Наши лучшие
                  тренеры помогут вам получить идеальное тело и максимальную
                  пользу от занятий.
                </p>
              </div>
              <div>
                <button
                  className={`${style.actions_obor_btn} ${style.our_services_btn}`}
                  onClick={() => {
                    setTitleForm('Купить абонемент на Аэростретчинг');
                    setShowForm(true);
                  }}
                >
                  Отправить заявку
                </button>
              </div>
            </div>
            <div className={style.our_services_div}>
              <div>
                <img className={style.our_services_img} src={box} alt='image' />
                <p className={style.our_services_tit}>Бокс</p>
                <p className={style.uni_subtitle}>
                  Бокс – это спорт чемпионов, который позволяет держать удар,
                  как в прямом, так и в переносном смысле слова, быть сильным,
                  ловким, целеустремленным. Занимаясь боксом, Вы всегда будете в
                  отличной физической форме, а также уверенным в себе и своих
                  силах.
                </p>
              </div>
              <div>
                <button
                  className={`${style.actions_obor_btn} ${style.our_services_btn}`}
                  onClick={() => {
                    setTitleForm('Купить абонемент на Бокс');
                    setShowForm(true);
                  }}
                >
                  Отправить заявку
                </button>
              </div>
            </div>
            <div className={style.our_services_div}>
              <div>
                <img
                  className={style.our_services_img}
                  src={stratching}
                  alt='image'
                />
                <p className={style.our_services_tit}>Стретчинг</p>
                <p className={style.uni_subtitle}>
                  Если Вы хотите за максимально короткое время освоить
                  продольный и поперечный шпагат, укрепить спину, улучшить
                  подвижность позвоночника, шеи и повысить гибкость всего тела
                </p>
              </div>
              <div>
                <button
                  className={`${style.actions_obor_btn} ${style.our_services_btn}`}
                  onClick={() => {
                    setTitleForm('Купить абонемент на Стретчинг');
                    setShowForm(true);
                  }}
                >
                  Отправить заявку
                </button>
              </div>
            </div>
            <div className={style.our_services_div}>
              <div>
                <img className={style.our_services_img} src={ems} alt='image' />
                <p className={style.our_services_tit}>ЕМС тренировки</p>
                <p className={style.uni_subtitle}>
                  У вас очень плотный график и мало свободного времени, а
                  выглядеть красиво хочется?Вы хотите быстро избавиться от
                  лишних килограммов, восстановить фигуру после родов или просто
                  быть в тонусе всего за 20 минут в деньХотите Заниматься без
                  риска для здоровья и суставов или восстановиться после травм.
                </p>
              </div>
              <div>
                <button
                  className={`${style.actions_obor_btn} ${style.our_services_btn}`}
                  onClick={() => {
                    setTitleForm('Купить абонемент на ЕМС тренировки');
                    setShowForm(true);
                  }}
                >
                  Отправить заявку
                </button>
              </div>
            </div>
            <div className={style.our_services_div}>
              <div>
                <img className={style.our_services_img} src={trx} alt='image' />
                <p className={style.our_services_tit}>TRX-тренировки</p>
                <p className={style.uni_subtitle}>
                  Тренировка TRX – это система тренировок с петлями TRX, которая
                  используется ваш вес для выполнения сотен упражнений.
                </p>
              </div>
              <div>
                <button
                  className={`${style.actions_obor_btn} ${style.our_services_btn}`}
                  onClick={() => {
                    setTitleForm('Купить абонемент на TRX-тренировки');
                    setShowForm(true);
                  }}
                >
                  Отправить заявку
                </button>
              </div>
            </div>
            <div className={style.our_services_div}>
              <div>
                <img
                  className={style.our_services_img}
                  src={functional}
                  alt='image'
                />
                <p
                  className={`${style.our_services_tit} ${style.our_services_tit_wrap}`}
                >
                  Функциональные тренировки
                </p>
                <p className={style.uni_subtitle}>
                  Тренажерный зал студии – это идеально оснащенная мотивирующая
                  среда с широким ассортиментом тренажеров для силовых,
                  групповых, круговых и профессиональных тренировок. Наши лучшие
                  тренеры помогут вам получить идеальное тело и максимальную
                  пользу от занятий.
                </p>
              </div>
              <div>
                <button
                  className={`${style.actions_obor_btn} ${style.our_services_btn}`}
                  onClick={() => {
                    setTitleForm(
                      'Купить абонемент на Функциональные тренировки'
                    );
                    setShowForm(true);
                  }}
                >
                  Отправить заявку
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={style.uni_section}>
        <div className={style.home_benefits_section}>
          <div className={style.uni_container}>
            <div className={style.serv_info}>
              <h1 className={style.uni_title_com}>Преимущества</h1>
            </div>
            <div className={style.uni_block1}>
              <div
                className={`${style.uni_info} ${style.uni_info_left} ${style.uni_info_top} `}
              >
                <img
                  className={style.uni_block1_img}
                  src={quick}
                  alt='imageBenefits'
                />
                <h1
                  className={`${style.uni_title_block1} ${style.uni_title_block1_b}`}
                >
                  Быстро
                </h1>
                <p className={style.uni_subtitle}>
                  Тренировки в нашей студии проходят 1 на 1 с профессиональным
                  тренером, либо в группе до 3-4 человек. Индивидуальный подход
                  – залог эффективных результатов.
                </p>
              </div>
              <div className={`${style.uni_info} ${style.uni_info_top}`}>
                <img
                  className={style.uni_block1_img}
                  src={profit}
                  alt='imageBenefits'
                />
                <h1
                  className={`${style.uni_title_block1} ${style.uni_title_block1_b}`}
                >
                  Выгодно
                </h1>
                <p className={style.uni_subtitle}>
                  Приходите к нам на пробную тренировку, и мы докажем, что
                  фитнес в студии Sport Personal – это именно то, что поможет
                  вам добиться видимых результатов за короткий срок
                </p>
              </div>
            </div>
            <div className={style.uni_block2}>
              <div className={`${style.uni_info} ${style.uni_info_left}`}>
                <img
                  className={style.uni_block1_img}
                  src={present}
                  alt='imageBenefits'
                />
                <h1
                  className={`${style.uni_title_block1} ${style.uni_title_block1_b}`}
                >
                  Эффективно
                </h1>
                <p className={style.uni_subtitle}>
                  EMS — это лучший способ за 30 минут получить эффект от
                  тренировок в 2 часа в классическом фитнес-зале
                </p>
              </div>
              <div className={`${style.uni_info} ${style.uni_info_top}`}>
                <img
                  className={style.uni_block1_img}
                  src={quality}
                  alt='imageBenefits'
                />
                <h1
                  className={`${style.uni_title_block1} ${style.uni_title_block1_b}`}
                >
                  Качественно
                </h1>
                <p className={style.uni_subtitle}>
                  Это хороший способ улучшить общую физическую форму, набрать
                  мышечную массу или похудеть.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='trainers' className={style.home}>
        <div className={style.uni_container}>
          <div className={style.serv_info}>
            <h1 className={style.uni_title_com}>Тренеры</h1>
          </div>
          <Trainer trainers={TRAINERS} openFormPopUp={openFormPopUp} />
        </div>
      </section>

      {/* <section id='abonements' className={style.home}>
        <section className={style.uni_section}>
          <div className={style.uni_container}>
            <div className={style.serv_info}>
              <h1 className={style.uni_title_com}>Абонементы</h1>
            </div>
            <div className={style.abonementsItem}>{abonementsItem}</div>

            <div className={style.abonementsItems}>
              <div className={style.abonementsItems_div_1}>
                <div className={style.serv_info}>
                  <h1
                    className={`${style.uni_title_com} ${style.uni_title_com_h}`}
                  >
                    Заморозки и ограничения на посещение тренировок
                  </h1>
                  <p className={style.uni_title_com_p}>
                    При покупке абонемента первая тренировка бесплатно
                  </p>
                  <p className={style.uni_title_com_p}>
                    До конца месяца скидка на абонемент 30 %
                  </p>
                </div>
                <Abonement
                  openFormPopUp={openFormPopUp}
                  title={'Заморозки и ограничения на посещение тренировок'}
                  column={true}
                  abonement={RESTRICTION}
                />
              </div>
              <div className={style.abonementsItems_div_2}>
                <div className={style.serv_info}>
                  <h1
                    className={`${style.uni_title_com} ${style.uni_title_com_h}`}
                  >
                    Групповые тренировки до 4 человек
                  </h1>
                  <p className={style.uni_title_com_p}>
                    <p>Пробная тренировка 600 р. с человека</p>
                    <p>(при покупке абонемента, бесплатно)</p>
                  </p>
                  <p className={style.uni_title_com_p}>
                    Тренировка в группе с человека - 1 000 р.
                  </p>
                </div>
                <Abonement
                  openFormPopUp={openFormPopUp}
                  title={'Групповые тренировки до 4 человек'}
                  abonement={GROUP}
                />
              </div>
            </div>
          </div>
        </section>
      </section> */}

      <section id='gallery' className={style.gallery}>
        <div className={style.uni_container}>
          <div className={style.serv_info}>
            <h1 className={`${style.uni_title_com}`}>Галерея</h1>
          </div>
          <Slider
            className={`${style.uni_block1} ${style.uni_block1_z}`}
            {...settings}
          >
            <div>
              <img className={style.slider_img} src={one} alt='image' />
            </div>
            <div>
              <img className={style.slider_img} src={two} alt='image' />
            </div>
            <div>
              <img className={style.slider_img} src={three} alt='image' />
            </div>
            <div>
              <img className={style.slider_img} src={four} alt='image' />
            </div>
            <div>
              <img className={style.slider_img} src={five} alt='image' />
            </div>
            <div>
              <img className={style.slider_img} src={six} alt='image' />
            </div>
            <div>
              <img className={style.slider_img} src={seven} alt='image' />
            </div>
            <div>
              <img className={style.slider_img} src={eight} alt='image' />
            </div>
            <div>
              <img className={style.slider_img} src={nine} alt='image' />
            </div>
            <div>
              <img className={style.slider_img} src={ten} alt='image' />
            </div>
          </Slider>
          {/* </div> */}
        </div>
      </section>
      <section className={style.uni_section}>
        <div className={style.uni_container}>
          <h1
            className={`${style.uni_title_com} ${style.uni_title_com_center}`}
          >
            Связаться с нами
          </h1>
          <div className={`${style.uni_block1} ${style.uni_block1_z}`}>
            <div className={`${style.uni} ${style.uni_call}`}>
              <div>
                <iframe
                  className={style.map}
                  src='https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=133299761264'
                  frameborder='0'
                ></iframe>
              </div>
              <BeForm />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
