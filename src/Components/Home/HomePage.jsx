import React from "react";
import "./HomePage.css";
import logo from "../../logo.png";

const HomePage = () => {
  return (
    <>
      <div className="home-container">
        {/* ================ HEADER START ======================= */}
        <div className="home-header">
          <div className="home-header__bc">
            <img src={logo} alt="" className="logo" />
            <div className="home-header__title">
              <h1>VKUS KG</h1>
            </div>
            <div className="home-header__text">
              <p>
                КЫРГЫЗ УЛУТТУК ПРОДУКЦИЯСЫНЫН <br /> РОССИЯДАГЫ АТАЙЫН ОКУЛУ
              </p>
              <hr />
              <p>
                ОФИЦИАЛЬНЫЙ ДИСТРИБЮТОР КЫРГЫЗСКОЙ <br /> НАЦИОНАЛЬНОЙ ПРОДУКЦИИ
                В РОССИИ
              </p>
            </div>
          </div>
        </div>
        {/* ================ HEADER END ======================= */}
        {/* ================ CONTENT SHORO START ================ */}
        <div className="content-shoro">
          <div className="content-shoro__wrapper">
            <img
              className="logo"
              src="https://cci.kg/images/new_logo_%D0%A8%D0%BE%D1%80%D0%BE_21.jpg"
              alt=""
            />
            <div className="content-shoro__text">
              <p>
                <h3>История компании</h3>
                Созданная более двадцати пяти лет назад в эпоху перестройки
                компания «Шоро» сегодня является флагманом бизнеса, сумевшая
                сохранить традиции, завоевать позиции лидера на рынке и обрести
                постоянное доверие потребителей, что является безусловным
                фактором успеха в бизнесе.
              </p>
            </div>
          </div>
        </div>
        {/* ================ CONTENT SHORO END ================ */}
        {/* ================ ROLA START ======================= */}
        <div className="content-rola">
          <div className="rola-wrapper">
            <img
              src="http://rola.kg/wp-content/uploads/2018/06/logo.png"
              alt=""
              className="logo"
            />
            <div className="content-rola__text">
              <img
                className="rola-img1"
                src="http://rola.kg/wp-content/uploads/2018/06/prod-flour.png"
                alt=""
              />
              <p>
                Датой основания предприятия является 1996 год, когда на
                небольшом производственном участке был налажен выпуск макаронных
                изделий, в 1997 году выпуск брикетированной лапши под торговой
                маркой «Чабрец». В настоящее время предприятие располагает
                современным мукомольным комплексом, производственными цехами по
                выпуску макаронных изделий в широком ассортименте.
              </p>
            </div>
          </div>
        </div>
        {/* ================ ROLA END ========================= */}

        <div className="tea-content">
          <div className="tea-wrapper">
            <p>
              Lets Go! Drinks - современная компания в Кыргызстане по
              производству прохладительных напитков и питьевой воды. На
              сегодняшний день завоевала позицию лидера на рынке прохладительных
              напитков и обрела доверие потребителей, что является безусловным
              фактором успеха компании. Вся продукция компании Lets Go! Drinks
              изготавливается на современном оборудовании. По мощности и
              технической оснащенности оно является одним из лучших в Средней
              Азии.
            </p>
            <img src="https://letsgo.kg/data/product_line/pear.jpg" alt="" />
            <p className="second-block-text">
              Холодный чай «Lets Go». Зеленый чай со вкусом лимона, зеленый чай
              со вкусом грейпфрута и зеленого яблока, черный чай со вкусом
              лимона, черный чай со вкусом персика, черный чай со вскусом манго
              и ананаса, черный чай со вкусом яблоко и шиповник, черный чай со
              вкусом малины. Сокосодержащий напиток "Яблоко" Сокосодержащий
              напиток "Груша" Сокосодержащий напиток «Fresh» со вкусом зеленого
              яблока, лесных ягод, малины и яблока, грейфрута и клюквы и «Fresh»
              со вкусом сладкого абрикоса. Сок «Bahama Mama» представлен в трех
              видах: тропик, экзотик и витамин. Питьевая вода "TienShan" c
              натуральным соком лимона без газа. Питьевая вода "TienShan" без
              газа. Питьевая вода «Lets Go» с газом и без
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
