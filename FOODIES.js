function changeLanguage(language) {
    // Traducciones para cada idioma
    const translations = {
        es: {
            pageTitle: "FOODIES",
            title: "RESTAURANTES EN SEVILLA",
            subtitle: "Conozca Sevilla a través de su mesa: le guiamos a los lugares donde la gastronomía y el ambiente crean momentos inolvidables.",
            articles: [
                {
                    title: "ANTIGüEDADES BAR DE TAPAS",
                    description: "El sitio al que vuelves por sus croquetas, te quedas por el trato y repites por lo bien que se come sin arruinarse.",
                    link: "Ver en Google Maps"
                },
                {
                    title: "BAR AMBIGÚ",
                    description: "Un bar de barrio con personalidad propia. Sus platos tienen ese toque casero que enamora, y los precios hacen que siempre quieras repetir.",
                    link: "Ver en Google Maps"
                },
                {
                    title: "BAR RINCON DE ROSITA",
                    description: "Aquí la comida no solo se sirve, se regala: platos llenos de personalidad, en un rincón con esa magia de los sitios que se sienten especiales desde el primer paso adentro.",
                    link: "Ver en Google Maps"
                },
                {
                    title: "MERCADO DE TRIANA",
                    description: "De esos sitios que conquistan por lo honesto: sabores auténticos, ambiente sin pretensiones y una ubicación que lo hace sentir como descubrir un pequeño tesoro.",
                    link: "Ver en Google Maps"
                },
                {
                    title: "MECHELA ARENAL",
                    description: "Humilde por fuera, memorable por dentro. Sus recetas tienen ese algo que las hace únicas, y la zona las acompaña con historias en cada esquina.",
                    link: "Ver en Google Maps"
                },
                {
                    title: "LA AZOTEA VINOS Y TAPAS",
                    description: "Sabores que saben a tradición y a ganas de sorprender. Un local con alma, en una calle llena de vida donde siempre apetece quedarse un rato más.",
                    link: "Ver en Google Maps"
                },
                {
                    title: "LA CAYETANA",
                    description: "Un pequeño tesoro gastronómico escondido en una zona llena de vida. Cada visita se convierte en un descubrimiento nuevo.",
                    link: "Ver en Google Maps"
                },
                {
                    title: "TABERNA LOS COLONIALES",
                    description: "Aquí la comida no solo llena, sino que alegra. Buen ambiente, mejor compañía y una ubicación que lo hace el lugar perfecto para después de trabajar.",
                    link: "Ver en Google Maps"
                },
                {
                    title: "TABERNA ÁLVARO PEREGIL LA GOLETA",
                    description: "Un bar de barrio con personalidad propia. Sus platos tienen ese toque casero que enamora, y los precios hacen que siempre quieras repetir.",
                    link: "Ver en Google Maps"
                },
                {
                    title: "CASA HIJOS E. MORALES",
                    description: "Un rincón donde los aromas de la cocina se mezclan con las risas de la barra. Cada plato cuenta una historia y la zona le pone el escenario perfecto.",
                    link: "Ver en Google Maps"
                }
            ]
        },
        en: {
            pageTitle: "FOODIES",
            title: "RESTAURANTS IN SEVILLE",
            subtitle: "Experience Sevilla through its cuisine: we guide you to where flavor and ambiance create unforgettable moments.",
            articles: [
                {
                    title: "ANTIGüEDADES TAPAS BAR",
                    description: "The place you return to for its croquettes, stay for the service, and come back for how well you eat without breaking the bank.",
                    link: "View on Google Maps"
                },
                {
                    title: "BAR AMBIGÚ",
                    description: "A neighborhood bar with its own personality. Its dishes have that homemade touch that makes you fall in love, and the prices make you want to come back.",
                    link: "View on Google Maps"
                },
                {
                    title: "BAR RINCON DE ROSITA",
                    description: "Here, food is not just served, it is gifted: dishes full of personality, in a corner with the magic of places that feel special from the first step inside.",
                    link: "View on Google Maps"
                },
                {
                    title: "MERCADO DE TRIANA",
                    description: "One of those places that conquer with honesty: authentic flavors, unpretentious atmosphere, and a location that feels like discovering a small treasure.",
                    link: "View on Google Maps"
                },
                {
                    title: "MECHELA ARENAL",
                    description: "Humble on the outside, memorable on the inside. Its recipes have that something that makes them unique, and the area accompanies them with stories on every corner.",
                    link: "View on Google Maps"
                },
                {
                    title: "LA AZOTEA VINOS Y TAPAS",
                    description: "Flavors that taste like tradition and a desire to surprise. A place with soul, on a lively street where you always want to stay a little longer.",
                    link: "View on Google Maps"
                },
                {
                    title: "LA CAYETANA",
                    description: "A small gastronomic treasure hidden in a lively area. Every visit becomes a new discovery.",
                    link: "View on Google Maps"
                },
                {
                    title: "TABERNA LOS COLONIALES",
                    description: "Here, food not only fills you up but also brings joy. Great atmosphere, better company, and a location that makes it the perfect spot after work.",
                    link: "View on Google Maps"
                },
                {
                    title: "TABERNA ÁLVARO PEREGIL LA GOLETA",
                    description: "A neighborhood bar with its own personality. Its dishes have that homemade touch that makes you fall in love, and the prices make you want to come back.",
                    link: "View on Google Maps"
                },
                {
                    title: "CASA HIJOS E. MORALES",
                    description: "A corner where the aromas of the kitchen mix with the laughter of the bar. Each dish tells a story, and the area provides the perfect setting.",
                    link: "View on Google Maps"
                }
            ]
        },
        de: {
            pageTitle: "FOODIES",
            title: "RESTAURANTS IN SEVILLA",
            subtitle: "Erleben Sie Sevilla durch seine Küche: Wir führen Sie zu Orten, an denen Geschmack und Ambiente unvergessliche Momente schaffen.",
            articles: [
                {
                    title: "ANTIGüEDADES TAPAS BAR",
                    description: "Der Ort, an den Sie wegen der Kroketten zurückkehren, wegen des Services bleiben und wegen des guten Essens wiederkommen.",
                    link: "Auf Google Maps ansehen"
                },
                {
                    title: "BAR AMBIGÚ",
                    description: "Eine Nachbarschaftsbar mit eigenem Charakter. Ihre Gerichte haben diesen hausgemachten Touch, der einen verlieben lässt, und die Preise machen Lust auf mehr.",
                    link: "Auf Google Maps ansehen"
                },
                {
                    title: "BAR RINCON DE ROSITA",
                    description: "Hier wird Essen nicht nur serviert, sondern verschenkt: Gerichte voller Persönlichkeit, in einer Ecke mit dem Zauber von Orten, die sich vom ersten Schritt an besonders anfühlen.",
                    link: "Auf Google Maps ansehen"
                },
                {
                    title: "MERCADO DE TRIANA",
                    description: "Einer dieser Orte, die mit Ehrlichkeit überzeugen: authentische Aromen, eine unprätentiöse Atmosphäre und ein Standort, der sich wie das Entdecken eines kleinen Schatzes anfühlt.",
                    link: "Auf Google Maps ansehen"
                },
                {
                    title: "MECHELA ARENAL",
                    description: "Von außen bescheiden, von innen unvergesslich. Seine Rezepte haben das gewisse Etwas, das sie einzigartig macht, und die Gegend begleitet sie mit Geschichten an jeder Ecke.",
                    link: "Auf Google Maps ansehen"
                },
                {
                    title: "LA AZOTEA VINOS Y TAPAS",
                    description: "Geschmäcker, die nach Tradition und dem Wunsch zu überraschen schmecken. Ein Ort mit Seele, in einer lebhaften Straße, in der man immer ein wenig länger bleiben möchte.",
                    link: "Auf Google Maps ansehen"
                },
                {
                    title: "LA CAYETANA",
                    description: "Ein kleines gastronomisches Juwel, versteckt in einer lebhaften Gegend. Jeder Besuch wird zu einer neuen Entdeckung.",
                    link: "Auf Google Maps ansehen"
                },
                {
                    title: "TABERNA LOS COLONIALES",
                    description: "Hier füllt das Essen nicht nur den Magen, sondern erfreut auch das Herz. Großartige Atmosphäre, bessere Gesellschaft und ein Standort, der es zum perfekten Ort nach der Arbeit macht.",
                    link: "Auf Google Maps ansehen"
                },
                {
                    title: "TABERNA ÁLVARO PEREGIL LA GOLETA",
                    description: "Eine Nachbarschaftsbar mit eigenem Charakter. Ihre Gerichte haben diesen hausgemachten Touch, der einen verlieben lässt, und die Preise machen Lust auf mehr.",
                    link: "Auf Google Maps ansehen"
                },
                {
                    title: "CASA HIJOS E. MORALES",
                    description: "Eine Ecke, in der sich die Aromen der Küche mit dem Lachen an der Bar vermischen. Jedes Gericht erzählt eine Geschichte, und die Gegend bietet die perfekte Kulisse.",
                    link: "Auf Google Maps ansehen"
                }
            ]
        },
        zh: {
            pageTitle: "美食家",
            title: "塞维利亚的餐馆",
            subtitle: "通过美食体验塞维利亚：我们带您前往味道与氛围创造难忘时刻的地方。",
            articles: [
                {
                    title: "古董餐吧",
                    description: "您会因其可口的炸丸子而回到这里，因服务而留下，并因美味的食物而再次光顾。",
                    link: "在谷歌地图上查看"
                },
                {
                    title: "AMBIGÚ酒吧",
                    description: "一家具有独特个性的社区酒吧。它的菜肴带有那种让人爱上的家常风味，价格也让人想要一再光顾。",
                    link: "在谷歌地图上查看"
                },
                {
                    title: "罗西塔角落酒吧",
                    description: "在这里，食物不仅仅是被端上桌，而是被赠予：充满个性的菜肴，在一个从第一步进入就感到特别的角落。",
                    link: "在谷歌地图上查看"
                },
                {
                    title: "特里亚纳市场",
                    description: "一个以诚实取胜的地方：正宗的风味，朴实无华的氛围，以及一个让人感觉像发现小宝藏的地点。",
                    link: "在谷歌地图上查看"
                },
                {
                    title: "MECHELA ARENAL",
                    description: "外表谦逊，内在令人难忘。它的食谱有某种让它们独一无二的东西，这个地区在每个角落都伴随着故事。",
                    link: "在谷歌地图上查看"
                },
                {
                    title: "LA AZOTEA VINOS Y TAPAS",
                    description: "味道既有传统的味道，又有惊喜的愿望。一个有灵魂的地方，在一条充满活力的街道上，总是让人想多待一会儿。",
                    link: "在谷歌地图上查看"
                },
                {
                    title: "LA CAYETANA",
                    description: "一个隐藏在热闹地区的小美食宝藏。每次访问都会成为新的发现。",
                    link: "在谷歌地图上查看"
                },
                {
                    title: "TABERNA LOS COLONIALES",
                    description: "这里的食物不仅能填饱肚子，还能带来欢乐。良好的氛围，更好的陪伴，以及一个让它成为下班后完美地点的位置。",
                    link: "在谷歌地图上查看"
                },
                {
                    title: "TABERNA ÁLVARO PEREGIL LA GOLETA",
                    description: "一家具有独特个性的社区酒吧。它的菜肴带有那种让人爱上的家常风味，价格也让人想要一再光顾。",
                    link: "在谷歌地图上查看"
                },
                {
                    title: "CASA HIJOS E. MORALES",
                    description: "一个角落，厨房的香气与酒吧的笑声交织在一起。每道菜都讲述一个故事，这个地区提供了完美的背景。",
                    link: "在谷歌地图上查看"
                }
            ]
        },
        ru: {
            pageTitle: "Гурманы",
            title: "РЕСТОРАНЫ В СЕВИЛЬЕ",
            subtitle: "Познайте Севилью через её кухню: мы покажем вам места, где вкус и атмосфера создают незабываемые моменты.",
            articles: [
                {
                    title: "АНТИКВАРНЫЙ ТАПАС-БАР",
                    description: "Место, куда вы возвращаетесь за крокетами, остаетесь ради обслуживания и возвращаетесь снова ради вкусной еды.",
                    link: "Посмотреть на Google Maps"
                },
                {
                    title: "БАР AMBIGÚ",
                    description: "Районный бар с уникальной атмосферой. Его блюда имеют домашний вкус, который заставляет влюбляться, а цены заставляют возвращаться снова.",
                    link: "Посмотреть на Google Maps"
                },
                {
                    title: "БАР УГОЛОК РОСИТЫ",
                    description: "Здесь еда не просто подается, она дарится: блюда, полные индивидуальности, в уголке с магией мест, которые кажутся особенными с первого шага внутрь.",
                    link: "Посмотреть на Google Maps"
                },
                {
                    title: "РЫНОК ТРИАНА",
                    description: "Одно из тех мест, которые завоевывают честностью: аутентичные вкусы, непритязательная атмосфера и расположение, которое ощущается как открытие маленького сокровища.",
                    link: "Посмотреть на Google Maps"
                },
                {
                    title: "MECHELA ARENAL",
                    description: "Скромный снаружи, запоминающийся внутри. Его рецепты имеют что-то, что делает их уникальными, а район сопровождает их историями на каждом углу.",
                    link: "Посмотреть на Google Maps"
                },
                {
                    title: "LA AZOTEA VINOS Y TAPAS",
                    description: "Вкусы, которые напоминают традиции и желание удивить. Место с душой, на оживленной улице, где всегда хочется остаться немного дольше.",
                    link: "Посмотреть на Google Maps"
                },
                {
                    title: "LA CAYETANA",
                    description: "Маленькое гастрономическое сокровище, спрятанное в оживленном районе. Каждый визит становится новым открытием.",
                    link: "Посмотреть на Google Maps"
                },
                {
                    title: "ТАВЕРНА ЛОС КОЛОНИАЛЕС",
                    description: "Здесь еда не только насыщает, но и радует. Отличная атмосфера, лучшая компания и расположение, которое делает это место идеальным после работы.",
                    link: "Посмотреть на Google Maps"
                },
                {
                    title: "ТАВЕРНА ÁЛЬВАРО ПЕРЕГИЛ ЛА ГОЛЕТА",
                    description: "Районный бар с уникальной атмосферой. Его блюда имеют домашний вкус, который заставляет влюбляться, а цены заставляют возвращаться снова.",
                    link: "Посмотреть на Google Maps"
                },
                {
                    title: "CASA HIJOS E. MORALES",
                    description: "Уголок, где ароматы кухни смешиваются со смехом у бара. Каждое блюдо рассказывает историю, а район предоставляет идеальные декорации.",
                    link: "Посмотреть на Google Maps"
                }
            ]
        },
        fr: {
            pageTitle: "FOODIES",
            title: "RESTAURANTS À SÉVILLE",
            subtitle: "Découvrez Séville à travers sa cuisine : nous vous guidons vers des lieux où saveurs et ambiance créent des moments inoubliables.",
            articles: [
                {
                    title: "ANTIGüEDADES BAR À TAPAS",
                    description: "L'endroit où vous revenez pour ses croquettes, restez pour le service et revenez pour la qualité des repas sans vous ruiner.",
                    link: "Voir sur Google Maps"
                },
                {
                    title: "BAR AMBIGÚ",
                    description: "Un bar de quartier avec une personnalité propre. Ses plats ont cette touche maison qui séduit, et les prix vous donnent envie de revenir.",
                    link: "Voir sur Google Maps"
                },
                {
                    title: "BAR RINCON DE ROSITA",
                    description: "Ici, la nourriture n'est pas seulement servie, elle est offerte : des plats pleins de personnalité, dans un coin magique qui se sent spécial dès le premier pas à l'intérieur.",
                    link: "Voir sur Google Maps"
                },
                {
                    title: "MARCHÉ DE TRIANA",
                    description: "Un de ces endroits qui conquiert par son authenticité : des saveurs authentiques, une ambiance sans prétention et un emplacement qui donne l'impression de découvrir un petit trésor.",
                    link: "Voir sur Google Maps"
                },
                {
                    title: "MECHELA ARENAL",
                    description: "Humble à l'extérieur, mémorable à l'intérieur. Ses recettes ont ce petit quelque chose qui les rend uniques, et le quartier les accompagne avec des histoires à chaque coin.",
                    link: "Voir sur Google Maps"
                },
                {
                    title: "LA AZOTEA VINOS Y TAPAS",
                    description: "Des saveurs qui goûtent à la tradition et au désir de surprendre. Un lieu avec une âme, dans une rue animée où l'on veut toujours rester un peu plus longtemps.",
                    link: "Voir sur Google Maps"
                },
                {
                    title: "LA CAYETANA",
                    description: "Un petit trésor gastronomique caché dans une zone animée. Chaque visite devient une nouvelle découverte.",
                    link: "Voir sur Google Maps"
                },
                {
                    title: "TABERNA LOS COLONIALES",
                    description: "Ici, la nourriture ne se contente pas de remplir, elle réjouit. Bonne ambiance, meilleure compagnie et un emplacement qui en fait l'endroit parfait après le travail.",
                    link: "Voir sur Google Maps"
                },
                {
                    title: "TABERNA ÁLVARO PEREGIL LA GOLETA",
                    description: "Un bar de quartier avec une personnalité propre. Ses plats ont cette touche maison qui séduit, et les prix vous donnent envie de revenir.",
                    link: "Voir sur Google Maps"
                },
                {
                    title: "CASA HIJOS E. MORALES",
                    description: "Un coin où les arômes de la cuisine se mêlent aux rires du bar. Chaque plat raconte une histoire et le quartier offre le décor parfait.",
                    link: "Voir sur Google Maps"
                }
            ]
        }
    };

    // Actualiza el contenido de la página
    document.getElementById("page-title").textContent = translations[language].pageTitle;
    document.getElementById("title").textContent = translations[language].title;
    document.getElementById("subtitle").textContent = translations[language].subtitle;

    // Actualiza los artículos
    const articles = document.querySelectorAll("article");
    translations[language].articles.forEach((article, index) => {
        const articleElement = articles[index];
        if (articleElement) {
            articleElement.querySelector("h3").textContent = article.title;
            articleElement.querySelector("p").textContent = article.description;
            articleElement.querySelector("a").textContent = article.link;
        }
    });
}