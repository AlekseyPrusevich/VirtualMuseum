$(document).ready(() => {
  let panoramaView = $(".pan");
  let panorama = $(".pan__image");

  let label1 = $("#pan__label--1");
  let label2 = $("#pan__label--2");
  let label3 = $("#pan__label--3");
  let label4 = $("#pan__label--4");
  let label5 = $("#pan__label--5");
  let label6 = $("#pan__label--6");
  let label7 = $("#pan__label--7");

  let place = '';

  let pWidth;
  let pHeight;

  let screenWidth = window.innerWidth;
  let panoramaWidth = panorama.clientWidth;

  panoramaView.scrollLeft(panoramaWidth / 2.4, 0);

  panorama.on("mousemove", function (e) {
    let x = e.offsetX;
    screenWidth = $(window).width();

    if (screenWidth >= 1700)
      panoramaView.scrollLeft(- 140 + x / 1.5, 0);
    else if (screenWidth >= 1500)
      panoramaView.scrollLeft(- 120 + x / 1.4, 0);
    else if (screenWidth >= 1200)
      panoramaView.scrollLeft(- 100 + x / 1.3, 0);
    else if (screenWidth >= 1000)
      panoramaView.scrollLeft(- 80 + x / 1.2, 0);
    else
      panoramaView.scrollLeft(- 60 + x / 1.1, 0);
  });

  $('.pan-item__link').click(function () {
    place = $(this).data("place");
    hideAllLabel();

    panorama.off("load").attr("src", "img/pan/" + place + ".jpg").on("load", function () {
      pWidth = $(this).width();
      pHeight = $(this).height();

      const placeSettings = {
        entrance: [
          { element: label1, top: () => pHeight / 3.2, left: () => pWidth * 0.612, data: { place: "foyer" } }
        ],
        foyer: [
          { element: label1, top: () => pHeight / 1.8, left: () => pWidth * 0.44, data: { place: "firstHallway" }, attr: { title: "Коридор первого этажа" } },
          { element: label2, top: () => pHeight / 2.2, left: () => pWidth * 0.94, data: { place: "entrance" }, attr: { title: "Вход в колледж" } }
        ],
        firstHallway: [
          { element: label1, top: () => pHeight / 2.8, left: () => pWidth * 0.195, data: { place: "101" }, attr: { title: "Кабинет 101" } },
          { element: label2, top: () => pHeight / 3, left: () => pWidth * 0.22, data: { place: "dayDep" }, attr: { title: "Дневное отделение" } },
          { element: label3, top: () => pHeight / 2.4, left: () => pWidth * 0.24, data: { place: "zaoDep" }, attr: { title: "Заочное отделение" } },
          { element: label4, top: () => pHeight / 3.6, left: () => pWidth * 0.5, data: { place: "secondHallway" }, attr: { title: "Второй этаж" } },
          { element: label5, top: () => pHeight / 2.3, left: () => pWidth * 0.728, data: { place: "114" }, attr: { title: "Кабинет 114" } },
          { element: label6, top: () => pHeight / 2, left: () => pWidth * 0.74, data: { place: "113" }, attr: { title: "Кабинет 113" } },
          { element: label7, top: () => pHeight / 1.4, left: () => pWidth * 0.96, data: { place: "foyer" }, attr: { title: "Фойе колледжа" } }
        ],
        dayDep: [
          { element: label1, top: () => pHeight / 2.6, left: () => pWidth * 0.94, data: { place: "firstHallway" }, attr: { title: "Коридор первого этажа" } }
        ],
        zaoDep: [
          { element: label1, top: () => pHeight / 2.6, left: () => pWidth * 0.84, data: { place: "firstHallway" }, attr: { title: "Коридор первого этажа" } }
        ],
        "101": [
          { element: label1, top: () => pHeight / 2.4, left: () => pWidth * 0.676, data: { place: "firstHallway" }, attr: { title: "Коридор первого этажа" } }
        ],
        "113": [
          { element: label1, top: () => pHeight / 2.4, left: () => pWidth * 0.106, data: { place: "firstHallway" }, attr: { title: "Коридор первого этажа" } }
        ],
        "114": [
          { element: label1, top: () => pHeight / 2.4, left: () => pWidth * 0.084, data: { place: "firstHallway" }, attr: { title: "Коридор первого этажа" } }
        ],
        secondHallway: [
          { element: label1, top: () => pHeight / 2.2, left: () => pWidth * 0.342, data: { place: "methodical" }, attr: { title: "Методический кабинет" } },
          { element: label2, top: () => pHeight / 2.2, left: () => pWidth * 0.546, data: { place: "202" }, attr: { title: "Кабинет 202" } },
          { element: label3, top: () => pHeight / 1.3, left: () => pWidth * 0.83, data: { place: "firstHallway" }, attr: { title: "Первый этаж" } },
          { element: label4, top: () => pHeight / 2.6, left: () => pWidth * 0.026, data: { place: "library" }, attr: { title: "Библиотека" } },
          { element: label5, top: () => pHeight / 2.8, left: () => pWidth * 0.068, data: { place: "212" }, attr: { title: "Кабинет 212" } }
        ],
        methodical: [
          { element: label1, top: () => pHeight / 2, left: () => pWidth * 0.464, data: { place: "secondHallway" }, attr: { title: "Коридор второго этажа" } }
        ],
        library: [
          { element: label1, top: () => pHeight / 2.5, left: () => pWidth * 0.65, data: { place: "library_2" }, attr: { title: "Книжные стеллажи" } },
          { element: label2, top: () => pHeight / 2.5, left: () => pWidth * 0.94, data: { place: "secondHallway" }, attr: { title: "Коридор второго этажа" } }
        ],
        library_2: [
          { element: label1, top: () => pHeight / 2.5, left: () => pWidth * 0.094, data: { place: "library" }, attr: { title: "Читальный зал" } }
        ],
        "212": [
          { element: label1, top: () => pHeight / 2.4, left: () => pWidth * 0.506, data: { place: "secondHallway" }, attr: { title: "Коридор второго этажа" } }
        ]
      };

      if (placeSettings[place]) {
        placeSettings[place].forEach(({ element, top, left, data, attr }) => {
          element.css({
            top: top() + "px",
            left: left() + "px"
          });

          if (data)
            Object.entries(data).forEach(([key, value]) => element.data(key, value));
          if (attr)
            Object.entries(attr).forEach(([key, value]) => element.attr(key, value));

          element.show();
        });
      }
    });
  })

  function hideAllLabel() { 
    label1.hide(); 
    label2.hide(); 
    label3.hide(); 
    label4.hide(); 
    label5.hide(); 
    label6.hide(); 
    label7.hide(); 
  }
});
