<?php
    echo <<<EOT
        <div class="college__panorama">
            <h3 class="pan__title">Виртуальная экскурсия по колледжу</h3>
          
            <div class="pan__container">
                <div class="pan__wrap">
                    <div class="pan__buttons">
                        <!--
                        <a href="#" class="panaram__bnt panaram-back_bnt">Назад</a>
                        <a href="#" class="panaram__bnt panaram-next_bnt">Вперед</a>
                        -->
                        <ul class="pan__nav">
                            <li class="pan__nav-item pan__nav-item--1">Первый этаж
                                <ul class="pan-item__list pan-item__list--1">
                                    <li class="pan-item__list-item">
                                        <a class="pan-item__link" data-place="entrance">Главный вход</a>
                                    </li>
                                    <li class="pan-item__list-item">
                                        <a class="pan-item__link" data-place="foyer">Фойе колледжа</a>
                                    </li>
                                    <li class="pan-item__list-item">
                                        <a class="pan-item__link" data-place="zaoDep">Заоченное отделение</a>
                                    </li>
                                    <li class="pan-item__list-item">
                                        <a class="pan-item__link" data-place="dayDep">Дневное отделение</a>
                                    </li>
                                    <li class="pan-item__list-item">
                                        <a class="pan-item__link" data-place="101">Кабинет 101</a
                                    </li>
                                    <li class="pan-item__list-item">
                                        <a class="pan-item__link" data-place="113">Кабинет 113</a>
                                    </li>
                                    <li class="pan-item__list-item">
                                        <a class="pan-item__link" data-place="114">Кабинет 114</a>
                                    </li>
                                    <li class="pan-item__list-item">
                                        <a class="pan-item__link" data-place="firstСorridor">Коридор первого этажа</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="pan__nav-item pan__nav-item--2">Второй этаж
                                <ul class="pan-item__list pan-item__list--2">
                                    <li class="pan-item__list-item">
                                        <a class="pan-item__link" data-place="secondСorridor">Коридор второго этажа</a>
                                    </li>
                                    <li class="pan-item__list-item">
                                        <a class="pan-item__link" data-place="methodical">Методический кабинет</a>
                                    </li>
                                    <li class="pan-item__list-item">
                                        <a class="pan-item__link" data-place="library">Библиотека</a>
                                    </li>
                                    <li class="pan-item__list-item">
                                        <a class="pan-item__link" data-place="202">Кабинет 202</a>
                                    </li>
                                    <li class="pan-item__list-item">
                                        <a class="pan-item__link" data-place="212">Кабинет 212</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="pan">
                        <div class="labels__container">
                        <a data-place="foyer" class="pan__label pan__label--1 pan-item__link" id="pan__label--1" title="Фойе колледжа">
                            <img src="ico/transition.png" alt="">
                        </a>
                        </div>
                        <a class="pan__label pan-item__link" id="pan__label--2">
                            <img src="ico/transition.png" alt="">
                        </a>
                        <a class="pan__label pan-item__link" id="pan__label--3">
                            <img src="ico/transition.png" alt="">
                        </a>
                        <a class="pan__label pan-item__link" id="pan__label--4">
                            <img src="ico/transition.png" alt="">
                        </a>
                        <a class="pan__label pan-item__link" id="pan__label--5">
                            <img src="ico/transition.png" alt="">
                        </a>
                        <a class="pan__label pan-item__link" id="pan__label--5">
                            <img src="ico/transition.png" alt="">
                        </a>
                        <a class="pan__label pan-item__link" id="pan__label--6">
                            <img src="ico/transition.png" alt="">
                        </a>
                        <a class="pan__label pan-item__link" id="pan__label--7">
                            <img src="ico/transition.png" alt="">
                        </a>
                        <img class="pan__image" id="pan__image" src="img/pan/entrance.jpg" alt="Панарама колледжа" name="panarama_img">
                    </div>
                </div>
            </div>
        </div>
EOT;
?>