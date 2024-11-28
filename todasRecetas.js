// Array con las recetas
const recipes = [
    {
        id: 1,
        title: "Pollo al Curry",
        imgSrc: "imagenes/pollo al curry.jpg",
        description: "Jugoso pollo cocinado en una salsa especiada de curry con leche de coco.",
        ingredients: [
            
                "Ingredientes para 2 porciones:",
                "0.5 zucchinis",
                "0.5 calabacines amarillos",
                "0.13 pimentón rojo",
                "0.13 pimentón amarillo",
                "0.25 cebolla blanca o morada",
                "0.25 zanahoria o más si gusta",
                "0.25 libra pasta corta (preparada según las instrucciones)",
                "tomates cherry o pera cortados a la mitad",
                "sal y pimienta al gusto",
                "albahaca fresca",
                "queso feta en trozos o parmesano rallado",
                "0.13 libra espárragos",
                "hierbas secas o frescas orégano, tomillo, romero, salvia, etc",
                "aceite de oliva al gusto",
    
                "Ingredientes para 5 porciones",
                "1.25 zucchinis",
                "1.25 calabacines amarillos",
                "0.31 pimentón rojo",
                "0.31 pimentón amarillo",
                "0.63 cebolla blanca o morada",
                "0.63 zanahoria o más si gusta",
                "0.63 libra pasta corta (preparada según las instrucciones)",
                "tomates cherry o pera cortados a la mitad",
                "sal y pimienta al gusto",
                "albahaca fresca",
                "queso feta en trozos o parmesano rallado",
                "0.31 libra espárragos",
                "hierbas secas o frescas orégano, tomillo, romero, salvia, etc",
                    "aceite de oliva al gusto",
    
                "Ingredientes para 10 porciones",
                "2.5 zucchinis",
                "2.5 calabacines amarillos",
                "0.63 pimentón rojo",
                "0.63 pimentón amarillo",
                "1.25 cebolla blanca o morada",
                "1.25 zanahoria o más si gusta",
                "1.25 libra pasta corta (preparada según las instrucciones)",
                "tomates cherry o pera cortados a la mitad",
                "sal y pimienta al gusto",
                "albahaca fresca",
                "queso feta en trozos o parmesano rallado",
                "0.63 libra espárragos",
                "hierbas secas o frescas orégano, tomillo, romero, salvia, etc",
                "aceite de oliva al gusto",
    
    ],
        instructions: [
            "Para preparar pollo al curry, corta en trozos 500 g de pechuga de pollo y sofríelos en una sartén con aceite caliente hasta dorar.",
            "Retira y, en la misma sartén, cocina una cebolla picada, un diente de ajo y jengibre rallado hasta que estén tiernos.",
            "Añade 1-2 cucharadas de curry en polvo, mezcla bien y agrega 200 ml de leche de coco o crema, junto con el pollo.",
            "Cocina a fuego medio hasta que espese, ajusta la sal y sirve caliente con arroz blanco."
        ]
    },
    {
        id: 2,
        title: "Estofado de Res",
        imgSrc: "imagenes/estofado de res.jpg",
        description: "Carne de res tierna cocida a fuego lento con papas, zanahorias y una mezcla de hierbas.",
        ingredients: [
            "Ingredientes para 2 porciones:", 
            "0.5 libra de carne de res (preferiblemente para estofado, en trozos)", 
            "0.25 cebolla blanca o morada, picada", 
            "0.25 zanahoria, cortada en rodajas", 
            "0.25 libra de papas, cortadas en cubos", 
            "0.13 taza de apio, picado", 
            "0.13 pimentón rojo, picado", 
            "1 diente de ajo, picado", 
            "0.13 taza de arvejas frescas o congeladas", 
            "1.5 tazas de caldo de res", 
            "0.5 cucharadita de pasta de tomate", 
            "0.25 hoja de laurel", 
            "0.5 cucharada de aceite vegetal", 
            "sal y pimienta al gusto", 

            "Ingredientes para 5 porciones:", 
            "1.25 libras de carne de res (preferiblemente para estofado, en trozos)", 
            "0.63 cebolla blanca o morada, picada", 
            "0.63 zanahoria, cortada en rodajas", 
            "0.63 libra de papas, cortadas en cubos", 
            "0.31 taza de apio, picado", 
            "0.31 pimentón rojo, picado", 
            "2 dientes de ajo, picados", 
            "0.31 taza de arvejas frescas o congeladas", 
            "3.75 tazas de caldo de res", 
            "1.25 cucharaditas de pasta de tomate", 
            "0.63 hoja de laurel", 
            "1.25 cucharadas de aceite vegetal", 
            "sal y pimienta al gusto", 

            "Ingredientes para 10 porciones:", 
            "2.5 libras de carne de res (preferiblemente para estofado, en trozos)", 
            "1.25 cebolla blanca o morada, picada", 
            "1.25 zanahorias, cortadas en rodajas", 
            "1.25 libras de papas, cortadas en cubos", 
            "0.63 taza de apio, picado", 
            "0.63 pimentón rojo, picado", 
            "4 dientes de ajo, picados", 
            "0.63 taza de arvejas frescas o congeladas", 
            "7.5 tazas de caldo de res", 
            "2.5 cucharaditas de pasta de tomate", 
            "1.25 hojas de laurel", 
            "2.5 cucharadas de aceite vegetal", 
            "sal y pimienta al gusto", 
        ],
        instructions: [
            "Calienta el aceite en una olla grande y dora los trozos de carne.",  
                "Agrega la cebolla, el ajo, las zanahorias, las papas, el apio y el pimentón.",  
                "Sofríe todo durante unos minutos.",  
                "Añade el caldo de res, la pasta de tomate, la hoja de laurel y las arvejas.",  
                "Cocina a fuego medio-bajo por 1-2 horas o hasta que la carne esté tierna.",  
                "Ajusta la sal y pimienta al gusto y sirve caliente."  
        ]
    },

    {
        id: 3,
        title: "Costillas de Cerdo",
        imgSrc: "imagenes/costillas de cerdo.jpg",
        description: "Costillas de cerdo cocinadas a la perfección, bañadas en una salsa barbacoa dulce y ahumada.",
        ingredients: [
            "Ingredientes para 2 porciones:", 
                "0.5 libra de costillas de cerdo, cortadas en porciones individuales", 
                "0.25 cebolla blanca o morada, picada", 
                "0.25 zanahoria, cortada en rodajas", 
                "0.25 libra de papas, cortadas en cubos", 
                "0.13 taza de apio, picado", 
                "0.13 pimentón rojo, picado", 
                "1 diente de ajo, picado", 
                "0.13 taza de arvejas frescas o congeladas", 
                "1.5 tazas de caldo de cerdo o pollo", 
                "0.5 cucharadita de pasta de tomate", 
                "0.25 hoja de laurel", 
                "0.5 cucharada de aceite vegetal", 
                "sal y pimienta al gusto", 

                "Ingredientes para 5 porciones:", 
                "1.25 libras de costillas de cerdo, cortadas en porciones individuales", 
                "0.63 cebolla blanca o morada, picada", 
                "0.63 zanahoria, cortada en rodajas", 
                "0.63 libra de papas, cortadas en cubos", 
                "0.31 taza de apio, picado", 
                "0.31 pimentón rojo, picado", 
                "2 dientes de ajo, picados", 
                "0.31 taza de arvejas frescas o congeladas", 
                "3.75 tazas de caldo de cerdo o pollo", 
                "1.25 cucharaditas de pasta de tomate", 
                "0.63 hoja de laurel", 
                "1.25 cucharadas de aceite vegetal", 
                "sal y pimienta al gusto", 

                "Ingredientes para 10 porciones:", 
                "2.5 libras de costillas de cerdo, cortadas en porciones individuales", 
                "1.25 cebolla blanca o morada, picada", 
                "1.25 zanahorias, cortadas en rodajas", 
                "1.25 libras de papas, cortadas en cubos", 
                "0.63 taza de apio, picado", 
                "0.63 pimentón rojo, picado", 
                "4 dientes de ajo, picados", 
                "0.63 taza de arvejas frescas o congeladas", 
                "7.5 tazas de caldo de cerdo o pollo", 
                "2.5 cucharaditas de pasta de tomate", 
                "1.25 hojas de laurel", 
                "2.5 cucharadas de aceite vegetal", 
                "sal y pimienta al gusto", 
        ],
        instructions: [
                "Calienta el aceite en una olla grande y dora las costillas de cerdo.",  
                "Agrega la cebolla, el ajo, las zanahorias, las papas, el apio y el pimentón.",  
                "Sofríe todo durante unos minutos.",  
                "Añade el caldo de cerdo o pollo, la pasta de tomate, la hoja de laurel y las arvejas.",  
                "Cocina a fuego medio-bajo por 1-2 horas o hasta que las costillas estén tiernas.",  
                "Ajusta la sal y pimienta al gusto y sirve caliente."  
        ]
    },

    {
        id: 4,
        title: "Bistec Pimienta",
        imgSrc: "imagenes/bistec pimienta.jpg",
        description: "Filete jugoso cubierto con una rica salsa de crema y granos de pimienta negra recién molida.",
        ingredients: [
            "Ingredientes para 2 porciones:", 
                "0.5 libra de bistec de res (filetes de corte tierno)", 
                "0.5 cucharadita de granos de pimienta negra, machacados", 
                "0.25 taza de crema de leche", 
                "0.25 taza de caldo de res", 
                "0.25 cucharada de mantequilla", 
                "0.13 cebolla blanca o chalote, finamente picada", 
                "0.13 taza de vino blanco o brandy (opcional)", 
                "sal al gusto", 

                "Ingredientes para 5 porciones:", 
                "1.25 libras de bistec de res (filetes de corte tierno)", 
                "1.25 cucharaditas de granos de pimienta negra, machacados", 
                "0.63 taza de crema de leche", 
                "0.63 taza de caldo de res", 
                "0.63 cucharada de mantequilla", 
                "0.31 cebolla blanca o chalote, finamente picada", 
                "0.31 taza de vino blanco o brandy (opcional)", 
                "sal al gusto", 

                "Ingredientes para 10 porciones:", 
                "2.5 libras de bistec de res (filetes de corte tierno)", 
                "2.5 cucharaditas de granos de pimienta negra, machacados", 
                "1.25 tazas de crema de leche", 
                "1.25 tazas de caldo de res", 
                "1.25 cucharadas de mantequilla", 
                "0.63 cebolla blanca o chalote, finamente picada", 
                "0.63 taza de vino blanco o brandy (opcional)", 
                "sal al gusto",
        ],
        instructions: [
                "Derrite la mantequilla en una sartén caliente y dora los bistecs por ambos lados.",  
                "Retira los bistecs y, en la misma sartén, sofríe la cebolla o chalote.",  
                "Añade los granos de pimienta negra y desglasa con el vino blanco o brandy si usas.",  
                "Agrega el caldo de res y la crema de leche, dejando reducir la salsa hasta espesar.",  
                "Devuelve los bistecs a la sartén y cocina hasta el punto deseado.",  
                "Ajusta la sal al gusto y sirve caliente con la salsa por encima." 
        ]
    },

    {
        id: 5,
        title: "Buddha Bowl",
        imgSrc: "imagenes/buddha bowl.jpg",
        description: "Plato saludable y colorido, con arroz, garbanzos, aguacate, vegetales frescos y aderezo tahini.",
        ingredients: [
            "Ingredientes para 2 porciones:", 
                "0.5 taza de quinua cocida", 
                "0.5 taza de garbanzos cocidos o enlatados, escurridos", 
                "0.25 aguacate, en rodajas", 
                "0.25 taza de zanahoria rallada", 
                "0.25 taza de repollo morado, finamente picado", 
                "0.25 taza de espinaca o kale", 
                "0.13 taza de tomates cherry, cortados a la mitad", 
                "0.13 taza de pepino, en rodajas", 
                "0.13 taza de aderezo tahini o vinagreta al gusto", 
                "0.13 cucharadita de sal", 
                "0.13 cucharadita de pimienta negra", 

                "Ingredientes para 5 porciones:", 
                "1.25 tazas de quinua cocida", 
                "1.25 tazas de garbanzos cocidos o enlatados, escurridos", 
                "0.63 aguacate, en rodajas", 
                "0.63 taza de zanahoria rallada", 
                "0.63 taza de repollo morado, finamente picado", 
                "0.63 taza de espinaca o kale", 
                "0.31 taza de tomates cherry, cortados a la mitad", 
                "0.31 taza de pepino, en rodajas", 
                "0.31 taza de aderezo tahini o vinagreta al gusto", 
                "0.31 cucharadita de sal", 
                "0.31 cucharadita de pimienta negra", 

                "Ingredientes para 10 porciones:", 
                "2.5 tazas de quinua cocida", 
                "2.5 tazas de garbanzos cocidos o enlatados, escurridos", 
                "1.25 aguacates, en rodajas", 
                "1.25 tazas de zanahoria rallada", 
                "1.25 tazas de repollo morado, finamente picado", 
                "1.25 tazas de espinaca o kale", 
                "0.63 taza de tomates cherry, cortados a la mitad", 
                "0.63 taza de pepino, en rodajas", 
                "0.63 taza de aderezo tahini o vinagreta al gusto", 
                "0.63 cucharadita de sal", 
                "0.63 cucharadita de pimienta negra", 
        ],
        instructions: [
                "Coloca la quinua cocida como base en un bowl.",  
                "Añade los garbanzos, aguacate, zanahoria, repollo, espinaca, tomates cherry y pepino por secciones.",  
                "Rocía el aderezo tahini o la vinagreta por encima.",  
                "Espolvorea sal y pimienta al gusto.",  
                "Sirve fresco y disfruta." 
        ]
    },

    {
        id: 6,
        title: "Tarta Crema de Limon",
        imgSrc: "imagenes/tarta crema de limon.jpg",
        description: "Postre refrescante con una base crujiente y un relleno cremoso de limón coronado con merengue.",
        ingredients: [
            "Ingredientes para 2 porciones:", 
                "0.5 taza de galletas digestivas o galletas de mantequilla, trituradas", 
                "2 cucharadas de mantequilla derretida", 
                "0.25 taza de azúcar", 
                "1 huevo", 
                "0.25 taza de jugo de limón fresco", 
                "1 cucharadita de ralladura de limón", 
                "0.25 taza de leche condensada", 
                "0.25 taza de crema de leche", 
                "sal al gusto", 

                "Ingredientes para 5 porciones:", 
                "1.25 tazas de galletas digestivas o galletas de mantequilla, trituradas", 
                "5 cucharadas de mantequilla derretida", 
                "0.63 taza de azúcar", 
                "2 huevos", 
                "0.63 taza de jugo de limón fresco", 
                "2 cucharaditas de ralladura de limón", 
                "0.63 taza de leche condensada", 
                "0.63 taza de crema de leche", 
                "sal al gusto", 

                "Ingredientes para 10 porciones:", 
                "2.5 tazas de galletas digestivas o galletas de mantequilla, trituradas", 
                "10 cucharadas de mantequilla derretida", 
                "1.25 tazas de azúcar", 
                "4 huevos", 
                "1.25 tazas de jugo de limón fresco", 
                "5 cucharaditas de ralladura de limón", 
                "1.25 tazas de leche condensada", 
                "1.25 tazas de crema de leche", 
                "sal al gusto", 
        ],
        instructions: [
            "Mezcla las galletas trituradas con la mantequilla derretida y el azúcar, y presiona la mezcla en el fondo de un molde.",  
                "Hornea la base a 180°C durante 10-12 minutos o hasta que esté dorada, luego deja enfriar.",  
                "En un tazón, bate los huevos con el jugo y la ralladura de limón, la leche condensada y la crema de leche.",  
                "Vierte la mezcla sobre la base de galletas enfriada.",  
                "Hornea a 170°C durante 15-20 minutos o hasta que la crema se haya cuajado.",  
                "Deja enfriar completamente antes de servir y decora con más ralladura de limón si lo deseas."  
        ]
    },

    {
        id: 7,
        title: "Chuletas de Cordero",
        imgSrc: "imagenes/chuletas de coredero.jpg",
        description: "Carne de res tierna cocida a fuego lento con papas, zanahorias y una mezcla de hierbas.",
        ingredients: [
            "Ingredientes para 2 porciones:", 
                "2 chuletas de cordero", 
                "1 cucharada de aceite de oliva", 
                "1 diente de ajo, picado", 
                "1 cucharadita de romero fresco, picado", 
                "1 cucharadita de tomillo fresco, picado", 
                "sal y pimienta al gusto", 
                "1 cucharadita de jugo de limón", 

                "Ingredientes para 5 porciones:", 
                "5 chuletas de cordero", 
                "2.5 cucharadas de aceite de oliva", 
                "2 dientes de ajo, picados", 
                "2.5 cucharaditas de romero fresco, picado", 
                "2.5 cucharaditas de tomillo fresco, picado", 
                "sal y pimienta al gusto", 
                "2.5 cucharaditas de jugo de limón", 

                "Ingredientes para 10 porciones:", 
                "10 chuletas de cordero", 
                "5 cucharadas de aceite de oliva", 
                "4 dientes de ajo, picados", 
                "5 cucharaditas de romero fresco, picado", 
                "5 cucharaditas de tomillo fresco, picado", 
                "sal y pimienta al gusto", 
                "5 cucharaditas de jugo de limón", 

        ],
        instructions: [
                "Calienta el aceite de oliva en una sartén grande a fuego medio-alto.",  
                "Añade los ajos picados y sofríelos durante unos minutos hasta que estén dorados.",  
                "Coloca las chuletas de cordero en la sartén y cocina por 4-5 minutos de cada lado, o hasta que estén doradas.",  
                "Añade el romero, el tomillo, la sal, la pimienta y el jugo de limón.",  
                "Sigue cocinando durante unos minutos adicionales, asegurándote de que las chuletas estén bien cocidas pero jugosas.",  
                "Retira del fuego y sirve caliente, acompañado de tus guarniciones favoritas."  
        ]
    },

    {
        id: 8,
        title: "Lasaña Vegana",
        imgSrc: "imagenes/lasaña vegana.jpg",
        description: "Capas de pasta rellenas de vegetales, salsa de tomate y un cremoso sustituto vegano del queso.",
        ingredients: [
            "Ingredientes para 2 porciones:", 
                "4 láminas de pasta para lasaña", 
                "1 taza de espinacas frescas", 
                "0.5 taza de champiñones, picados", 
                "0.5 taza de zanahoria rallada", 
                "0.5 taza de calabacín, picado", 
                "1 taza de salsa de tomate", 
                "0.5 taza de tofu firme, triturado", 
                "1 cucharadita de levadura nutricional", 
                "1 cucharadita de albahaca seca", 
                "1 cucharadita de orégano seco", 
                "sal y pimienta al gusto", 

                "Ingredientes para 5 porciones:", 
                "10 láminas de pasta para lasaña", 
                "2.5 tazas de espinacas frescas", 
                "1.25 tazas de champiñones, picados", 
                "1.25 tazas de zanahoria rallada", 
                "1.25 tazas de calabacín, picado", 
                "2.5 tazas de salsa de tomate", 
                "1.25 tazas de tofu firme, triturado", 
                "2.5 cucharaditas de levadura nutricional", 
                "2.5 cucharaditas de albahaca seca", 
                "2.5 cucharaditas de orégano seco", 
                "sal y pimienta al gusto", 

                "Ingredientes para 10 porciones:", 
                "20 láminas de pasta para lasaña", 
                "5 tazas de espinacas frescas", 
                "2.5 tazas de champiñones, picados", 
                "2.5 tazas de zanahoria rallada", 
                "2.5 tazas de calabacín, picado", 
                "5 tazas de salsa de tomate", 
                "2.5 tazas de tofu firme, triturado", 
                "5 cucharaditas de levadura nutricional", 
                "5 cucharaditas de albahaca seca", 
                "5 cucharaditas de orégano seco", 
                "sal y pimienta al gusto", 

        ],
        instructions: [
                "Precalienta el horno a 180°C.",  
                "Cocina las láminas de pasta según las instrucciones del paquete y escúrrelas.",  
                "En una sartén, saltea los champiñones, zanahorias y calabacín hasta que estén tiernos.",  
                "Agrega las espinacas y cocina hasta que se marchiten, luego sazona con sal, pimienta, albahaca y orégano.",  
                "En un recipiente aparte, mezcla el tofu triturado con la levadura nutricional para crear una mezcla cremosa similar al queso.",  
                "En una fuente para hornear, coloca una capa de salsa de tomate en el fondo, seguida de una capa de pasta, una capa de vegetales salteados y una capa de la mezcla de tofu.",  
                "Repite las capas hasta que se acaben los ingredientes, terminando con una capa de salsa de tomate en la parte superior.",  
                "Hornea durante 30-40 minutos, o hasta que la lasaña esté bien cocida y burbujeante.",  
                "Deja reposar unos minutos antes de servir y disfruta."  
        ]
    },

    {
        id: 9,
        title: "Tacos Veganos",
        imgSrc: "imagenes/tacos veganos.jpg",
        description: "Tortillas suaves rellenas de una mezcla sabrosa de frijoles, aguacate, y vegetales frescos, con un toque de salsa picante.",
        ingredients: [
            "Ingredientes para 2 porciones:", 
            "4 tortillas suaves de maíz o harina", 
            "1 taza de frijoles negros cocidos", 
            "0.5 aguacate, cortado en rodajas", 
            "0.5 taza de tomate, picado", 
            "0.25 taza de cebolla morada, picada", 
            "0.25 taza de cilantro fresco, picado", 
            "1 cucharada de salsa picante (opcional)", 
            "sal y pimienta al gusto", 

            "Ingredientes para 5 porciones:", 
            "10 tortillas suaves de maíz o harina", 
            "2.5 tazas de frijoles negros cocidos", 
            "1 aguacate, cortado en rodajas", 
            "1.25 tazas de tomate, picado", 
            "0.5 taza de cebolla morada, picada", 
            "0.5 taza de cilantro fresco, picado", 
            "2.5 cucharadas de salsa picante (opcional)", 
            "sal y pimienta al gusto", 

            "Ingredientes para 10 porciones:", 
            "20 tortillas suaves de maíz o harina", 
            "5 tazas de frijoles negros cocidos", 
            "2 aguacates, cortados en rodajas", 
            "2.5 tazas de tomate, picado", 
            "1 taza de cebolla morada, picada", 
            "1 taza de cilantro fresco, picado", 
            "5 cucharadas de salsa picante (opcional)", 
            "sal y pimienta al gusto", 
        ],
        instructions: [
            "Calienta las tortillas en una sartén a fuego medio durante 1-2 minutos por lado.",  
                "En un tazón grande, mezcla los frijoles negros cocidos con la cebolla morada, el tomate y el cilantro.",  
                "Sazona con sal, pimienta y la salsa picante (si se desea).",  
                "Coloca una porción de la mezcla de frijoles en el centro de cada tortilla.",  
                "Añade rodajas de aguacate sobre la mezcla de frijoles.",  
                "Dobla las tortillas para formar los tacos y sirve inmediatamente."  
        ]
    },

    {
        id: 10,
        title: "Pollo a la Parilla",
        imgSrc: "imagenes/Pollo a la Parilla.jpg",
        description: "",
        ingredients: [
            "Ingredientes para 2 porciones:", 
            "1 pechuga de pollo grande, cortada en dos", 
            "1 diente de ajo, picado", 
            "1 cucharada de jugo de limón", 
            "0.5 cucharada de aceite de oliva", 
            "0.25 cucharadita de pimentón dulce", 
            "sal y pimienta al gusto",
    
            "Ingredientes para 5 porciones:", 
            "2.5 pechugas de pollo grandes, cortadas en porciones", 
            "2 dientes de ajo, picados", 
            "2.5 cucharadas de jugo de limón", 
            "1.25 cucharadas de aceite de oliva", 
            "0.63 cucharadita de pimentón dulce", 
            "sal y pimienta al gusto",
    
            "Ingredientes para 10 porciones:", 
            "5 pechugas de pollo grandes, cortadas en porciones", 
            "4 dientes de ajo, picados", 
            "5 cucharadas de jugo de limón", 
            "2.5 cucharadas de aceite de oliva", 
            "1.25 cucharaditas de pimentón dulce", 
            "sal y pimienta al gusto"
    
        ],
        instructions: [
            "En un tazón grande, mezcla el ajo, el jugo de limón, el aceite de oliva, el pimentón, la sal y la pimienta.",
            "Marina las pechugas de pollo en esta mezcla durante al menos 30 minutos, preferiblemente en el refrigerador.",
            "Precalienta la parrilla a fuego medio-alto.",
            "Coloca las pechugas de pollo en la parrilla y cocina durante 5-7 minutos por lado, o hasta que estén completamente cocidas.",
            "Retira del fuego, deja reposar durante 5 minutos y sirve caliente con tu guarnición favorita."
    
        ]
    },

    
    {
        id: 11,
        title: "Sopa de Verduras",
        imgSrc: "imagenes/sopa de verduras.jpg",
        description: "Sopa ligera y nutritiva con una mezcla de verduras frescas.",
        ingredients: [
            "Ingredientes para 2 porciones:",
            "1 zanahoria, cortada en cubos pequeños",
            "0.5 taza de calabacín, picado",
            "0.5 taza de espinaca fresca",
            "0.25 cebolla, picada",
            "1 diente de ajo, picado",
            "2 tazas de agua o caldo de verduras",
            "sal y pimienta al gusto",
    
            "Ingredientes para 5 porciones:",
            "2.5 zanahorias, cortadas en cubos pequeños",
            "1.25 tazas de calabacín, picado",
            "1.25 tazas de espinaca fresca",
            "0.63 cebolla, picada",
            "2 dientes de ajo, picados",
            "5 tazas de agua o caldo de verduras",
            "sal y pimienta al gusto",
    
            "Ingredientes para 10 porciones:",
            "5 zanahorias, cortadas en cubos pequeños",
            "2.5 tazas de calabacín, picado",
            "2.5 tazas de espinaca fresca",
            "1.25 cebollas, picadas",
            "4 dientes de ajo, picados",
            "10 tazas de agua o caldo de verduras",
            "sal y pimienta al gusto"
        ],
        instructions: [
            "Calienta un poco de aceite en una olla y sofríe la cebolla y el ajo.",
            "Agrega las zanahorias y el calabacín, y cocina por unos minutos.",
            "Añade el caldo de verduras, sal y pimienta, y cocina a fuego medio durante 20 minutos.",
            "Incorpora la espinaca, cocina 5 minutos más, y sirve caliente."
        ]
    },

    {
        id: 12,
        title: "Pasta Carbonara",
        imgSrc: "imagenes/pasta carbonara.jpg",
        description: "Clásica receta italiana de pasta cremosa con huevo y queso.",
        ingredients: [
            "Ingredientes para 2 porciones:",
            "150 g de espagueti",
            "1 huevo entero",
            "1 yema de huevo",
            "50 g de queso parmesano rallado",
            "50 g de panceta, cortada en cubos pequeños",
            "1 diente de ajo",
            "sal y pimienta al gusto",
    
            "Ingredientes para 5 porciones:",
            "375 g de espagueti",
            "2 huevos enteros",
            "2.5 yemas de huevo",
            "125 g de queso parmesano rallado",
            "125 g de panceta, cortada en cubos pequeños",
            "2 dientes de ajo",
            "sal y pimienta al gusto",
    
            "Ingredientes para 10 porciones:",
            "750 g de espagueti",
            "4 huevos enteros",
            "5 yemas de huevo",
            "250 g de queso parmesano rallado",
            "250 g de panceta, cortada en cubos pequeños",
            "4 dientes de ajo",
            "sal y pimienta al gusto"
        ],
        instructions: [
            "Cocina la pasta según las instrucciones del paquete.",
            "En un sartén, cocina la panceta con el ajo hasta que esté crujiente, luego retira el ajo.",
            "Bate los huevos, la yema y el queso parmesano en un tazón.",
            "Escurre la pasta y mezcla con la panceta. Retira del fuego.",
            "Añade la mezcla de huevo y queso a la pasta caliente y revuelve hasta que quede cremosa.",
            "Sirve inmediatamente con pimienta recién molida."
        ]
    },

    {
        id: 13,
        title: "Ensalada César",
        imgSrc: "imagenes/ensalada césar.jpg",
        description: "Clásica ensalada César con lechuga crujiente, crutones y aderezo casero.",
        ingredients: [
            "Ingredientes para 2 porciones:",
            "1 lechuga romana, lavada y cortada",
            "1 taza de crutones",
            "50 g de queso parmesano, rallado",
            "2 filetes de anchoa (opcional)",
            "2 cucharadas de jugo de limón",
            "2 cucharadas de aceite de oliva",
            "1 diente de ajo, picado",
            "sal y pimienta al gusto",
    
            "Ingredientes para 5 porciones:",
            "2.5 lechugas romanas, lavadas y cortadas",
            "2.5 tazas de crutones",
            "125 g de queso parmesano, rallado",
            "5 filetes de anchoa (opcional)",
            "5 cucharadas de jugo de limón",
            "5 cucharadas de aceite de oliva",
            "2.5 dientes de ajo, picados",
            "sal y pimienta al gusto",
    
            "Ingredientes para 10 porciones:",
            "5 lechugas romanas, lavadas y cortadas",
            "5 tazas de crutones",
            "250 g de queso parmesano, rallado",
            "10 filetes de anchoa (opcional)",
            "10 cucharadas de jugo de limón",
            "10 cucharadas de aceite de oliva",
            "5 dientes de ajo, picados",
            "sal y pimienta al gusto"
        ],
        instructions: [
            "Prepara el aderezo mezclando el jugo de limón, el aceite de oliva, el ajo y las anchoas (si las usas).",
            "Coloca la lechuga en un tazón grande y añade los crutones.",
            "Vierte el aderezo sobre la ensalada y mezcla bien.",
            "Espolvorea el queso parmesano y sirve."
        ]
    },

    {
        id: 14,
        title: "Brownies de Chocolate",
        imgSrc: "imagenes/brownies de chocolate.jpg",
        description: "Brownies clásicos, húmedos y llenos de chocolate.",
        ingredients: [
            "Ingredientes para 2 porciones:",
            "50 g de mantequilla",
            "50 g de chocolate amargo",
            "0.25 taza de azúcar",
            "1 huevo",
            "0.25 taza de harina",
            "0.13 cucharadita de esencia de vainilla",
    
            "Ingredientes para 5 porciones:",
            "125 g de mantequilla",
            "125 g de chocolate amargo",
            "0.63 taza de azúcar",
            "2.5 huevos",
            "0.63 taza de harina",
            "0.31 cucharadita de esencia de vainilla",
    
            "Ingredientes para 10 porciones:",
            "250 g de mantequilla",
            "250 g de chocolate amargo",
            "1.25 tazas de azúcar",
            "5 huevos",
            "1.25 tazas de harina",
            "0.63 cucharadita de esencia de vainilla"
        ],
        instructions: [
            "Derrite la mantequilla y el chocolate juntos a fuego bajo.",
            "Agrega el azúcar y mezcla bien.",
            "Incorpora el huevo y la vainilla, batiendo hasta que esté homogéneo.",
            "Añade la harina y mezcla hasta combinar.",
            "Vierte la mezcla en un molde engrasado y hornea a 180°C por 25-30 minutos.",
            "Deja enfriar antes de cortar en porciones."
        ]
    },

    {
        "id": 15,
        "title": "Galletas de Avena y Pasas",
        "imgSrc": "imagenes/galletas de avena y pasas.jpg",
        "description": "Galletas crujientes y saludables con avena y pasas.",
        "ingredients": [
            "Ingredientes para 2 porciones:",
            "50 g de mantequilla",
            "50 g de azúcar moreno",
            "1 huevo",
            "0.5 taza de avena",
            "0.25 taza de pasas",
            "0.25 taza de harina",
            "0.25 cucharadita de canela",
    
            "Ingredientes para 5 porciones:",
            "125 g de mantequilla",
            "125 g de azúcar moreno",
            "2 huevos",
            "1 taza de avena",
            "0.5 taza de pasas",
            "0.5 taza de harina",
            "0.5 cucharadita de canela",
    
            "Ingredientes para 10 porciones:",
            "250 g de mantequilla",
            "250 g de azúcar moreno",
            "4 huevos",
            "2 tazas de avena",
            "1 taza de pasas",
            "1 taza de harina",
            "1 cucharadita de canela"
        ],
        "instructions": [
            "Precalienta el horno a 180°C.",
            "Bate la mantequilla con el azúcar hasta que se forme una mezcla cremosa.",
            "Añade el huevo y bate nuevamente.",
            "Incorpora la avena, las pasas, la harina y la canela.",
            "Forma pequeñas bolitas con la masa y colócalas en una bandeja para hornear.",
            "Hornea durante 10-12 minutos o hasta que estén doradas.",
            "Deja enfriar antes de disfrutar."
        ]
    },

    {
        "id": 16,
        "title": "Muffins de Zanahoria y Nuez",
        "imgSrc": "imagenes/muffins de zanahoria y nuez.jpg",
        "description": "Muffins suaves con zanahoria rallada y nueces crujientes.",
        "ingredients": [
            "Ingredientes para 2 porciones:",
            "50 g de mantequilla derretida",
            "50 g de azúcar",
            "1 huevo",
            "0.5 taza de zanahoria rallada",
            "0.5 taza de nueces picadas",
            "0.5 taza de harina",
            "0.25 cucharadita de polvo de hornear",
    
            "Ingredientes para 5 porciones:",
            "125 g de mantequilla derretida",
            "125 g de azúcar",
            "2 huevos",
            "1 taza de zanahoria rallada",
            "1 taza de nueces picadas",
            "1 taza de harina",
            "0.5 cucharadita de polvo de hornear",
    
            "Ingredientes para 10 porciones:",
            "250 g de mantequilla derretida",
            "250 g de azúcar",
            "4 huevos",
            "2 tazas de zanahoria rallada",
            "2 tazas de nueces picadas",
            "2 tazas de harina",
            "1 cucharadita de polvo de hornear"
        ],
        "instructions": [
            "Precalienta el horno a 180°C.",
            "Bate la mantequilla con el azúcar hasta que esté bien integrada.",
            "Añade los huevos y bate hasta que se mezclen.",
            "Agrega la zanahoria rallada, las nueces, la harina y el polvo de hornear.",
            "Mezcla hasta obtener una masa homogénea.",
            "Llena los moldes para muffins y hornea durante 20-25 minutos.",
            "Deja enfriar antes de servir."
        ]
    },
    {
        "id": 17,
        "title": "Smoothie de Fresas y Plátano",
        "imgSrc": "imagenes/smoothie de fresas y plátano.jpg",
        "description": "Bebida refrescante y saludable con fresas y plátano.",
        "ingredients": [
            "Ingredientes para 1 porción:",
            "1 plátano",
            "0.5 taza de fresas congeladas",
            "0.25 taza de yogur natural",
            "1 cucharadita de miel",
            "1 taza de leche",
    
            "Ingredientes para 2 porciones:",
            "2 plátanos",
            "1 taza de fresas congeladas",
            "0.5 taza de yogur natural",
            "2 cucharaditas de miel",
            "2 tazas de leche",
    
            "Ingredientes para 4 porciones:",
            "4 plátanos",
            "2 tazas de fresas congeladas",
            "1 taza de yogur natural",
            "4 cucharaditas de miel",
            "4 tazas de leche"
        ],
        "instructions": [
            "Coloca todos los ingredientes en una licuadora.",
            "Licúa hasta obtener una mezcla suave.",
            "Sirve en vasos y disfruta inmediatamente."
        ]
    },
    {
        "id": 18,
        "title": "Ensalada de Quinoa y Aguacate",
        "imgSrc": "imagenes/ensalada de quinoa y aguacate.jpg",
        "description": "Ensalada fresca y ligera con quinoa, aguacate y vegetales.",
        "ingredients": [
            "Ingredientes para 2 porciones:",
            "1 taza de quinoa cocida",
            "1 aguacate, cortado en cubos",
            "0.5 taza de tomate cherry, cortado a la mitad",
            "0.25 taza de cebolla morada, picada",
            "1 cucharadita de aceite de oliva",
            "Jugo de 1 limón",
            "Sal y pimienta al gusto",
    
            "Ingredientes para 5 porciones:",
            "2 tazas de quinoa cocida",
            "2 aguacates, cortados en cubos",
            "1 taza de tomate cherry, cortado a la mitad",
            "0.5 taza de cebolla morada, picada",
            "2 cucharaditas de aceite de oliva",
            "Jugo de 2 limones",
            "Sal y pimienta al gusto",
    
            "Ingredientes para 10 porciones:",
            "4 tazas de quinoa cocida",
            "4 aguacates, cortados en cubos",
            "2 tazas de tomate cherry, cortado a la mitad",
            "1 taza de cebolla morada, picada",
            "4 cucharaditas de aceite de oliva",
            "Jugo de 4 limones",
            "Sal y pimienta al gusto"
        ],
        "instructions": [
            "En un tazón grande, mezcla la quinoa cocida, el aguacate, el tomate cherry y la cebolla morada.",
            "Agrega el aceite de oliva y el jugo de limón.",
            "Sazona con sal y pimienta al gusto y mezcla bien.",
            "Sirve inmediatamente o refrigera para disfrutar después."
        ]
    },

    {
        id: 19,
        title: "Arroz con Pollo",
        imgSrc: "imagenes/arroz con pollo.jpg",
        description: "Plato tradicional con arroz sazonado y trozos de pollo jugoso.",
        ingredients: [
            "Ingredientes para 2 porciones:",
            "1 taza de arroz",
            "200 g de pollo en trozos",
            "0.5 pimentón rojo, picado",
            "0.25 cebolla, picada",
            "1 diente de ajo, picado",
            "0.5 zanahoria, rallada",
            "1.5 tazas de caldo de pollo",
            "1 cucharada de aceite",
            "sal y pimienta al gusto",
    
            "Ingredientes para 5 porciones:",
            "2.5 tazas de arroz",
            "500 g de pollo en trozos",
            "1 pimentón rojo, picado",
            "0.63 cebolla, picada",
            "2 dientes de ajo, picados",
            "1.25 zanahorias, ralladas",
            "3.75 tazas de caldo de pollo",
            "2.5 cucharadas de aceite",
            "sal y pimienta al gusto",
    
            "Ingredientes para 10 porciones:",
            "5 tazas de arroz",
            "1 kg de pollo en trozos",
            "2 pimentones rojos, picados",
            "1.25 cebollas, picadas",
            "4 dientes de ajo, picados",
            "2.5 zanahorias, ralladas",
            "7.5 tazas de caldo de pollo",
            "5 cucharadas de aceite",
            "sal y pimienta al gusto"
        ],
        instructions: [
            "Calienta el aceite en una olla y sofríe el pollo hasta dorar.",
            "Agrega la cebolla, el ajo, el pimentón y la zanahoria, y cocina por unos minutos.",
            "Incorpora el arroz y mezcla bien.",
            "Añade el caldo, tapa y cocina a fuego medio hasta que el arroz esté listo.",
            "Rectifica la sazón y sirve caliente."
        ]
    },

    {
        id: 20,
        title: "Crema de Calabaza",
        imgSrc: "imagenes/crema de calabaza.jpg",
        description: "Suave y cremosa sopa a base de calabaza.",
        ingredients: [
            "Ingredientes para 2 porciones:",
            "200 g de calabaza, pelada y en trozos",
            "0.25 cebolla, picada",
            "1 diente de ajo, picado",
            "1 taza de caldo de verduras",
            "0.25 taza de crema de leche",
            "1 cucharada de aceite de oliva",
            "sal y pimienta al gusto",
    
            "Ingredientes para 5 porciones:",
            "500 g de calabaza, pelada y en trozos",
            "0.63 cebolla, picada",
            "2 dientes de ajo, picados",
            "2.5 tazas de caldo de verduras",
            "0.63 taza de crema de leche",
            "2.5 cucharadas de aceite de oliva",
            "sal y pimienta al gusto",
    
            "Ingredientes para 10 porciones:",
            "1 kg de calabaza, pelada y en trozos",
            "1.25 cebollas, picadas",
            "4 dientes de ajo, picados",
            "5 tazas de caldo de verduras",
            "1.25 tazas de crema de leche",
            "5 cucharadas de aceite de oliva",
            "sal y pimienta al gusto"
        ],
        instructions: [
            "Calienta el aceite en una olla y sofríe la cebolla y el ajo.",
            "Añade la calabaza y cocina por unos minutos.",
            "Agrega el caldo y cocina hasta que la calabaza esté blanda.",
            "Licúa la mezcla, vuelve a calentar y añade la crema de leche.",
            "Rectifica la sazón y sirve."
        ]
    },

    {
        id: 21,
        title: "Tacos de Carne",
        imgSrc: "imagenes/tacos de carne.jpg",
        description: "Tacos clásicos con carne sazonada y tus acompañamientos favoritos.",
        ingredients: [
            "Ingredientes para 2 porciones:",
            "200 g de carne molida",
            "0.25 cebolla, picada",
            "1 diente de ajo, picado",
            "0.5 tomate, picado",
            "0.5 cucharadita de comino",
            "4 tortillas de maíz",
            "sal y pimienta al gusto",
    
            "Ingredientes para 5 porciones:",
            "500 g de carne molida",
            "0.63 cebolla, picada",
            "2 dientes de ajo, picados",
            "1.25 tomates, picados",
            "1.25 cucharaditas de comino",
            "10 tortillas de maíz",
            "sal y pimienta al gusto",
    
            "Ingredientes para 10 porciones:",
            "1 kg de carne molida",
            "1.25 cebollas, picadas",
            "4 dientes de ajo, picados",
            "2.5 tomates, picados",
            "2.5 cucharaditas de comino",
            "20 tortillas de maíz",
            "sal y pimienta al gusto"
        ],
        instructions: [
            "Sofríe la carne con la cebolla, el ajo y el comino hasta que esté bien cocida.",
            "Añade el tomate y cocina por unos minutos más.",
            "Calienta las tortillas y rellénalas con la mezcla de carne.",
            "Acompaña con tus toppings favoritos y sirve."
        ]
    },

    {
        id: 22,
        title: "Chili con Carne",
        imgSrc: "imagenes/chili con carne.jpg",
        description: "Plato reconfortante y picante con carne molida y frijoles.",
        ingredients: [
            "Ingredientes para 2 porciones:",
            "200 g de carne molida",
            "1 taza de frijoles rojos cocidos",
            "0.25 cebolla, picada",
            "1 diente de ajo, picado",
            "0.5 taza de tomate triturado",
            "0.5 cucharadita de chile en polvo",
            "1 cucharada de aceite",
            "sal y pimienta al gusto",
    
            "Ingredientes para 5 porciones:",
            "500 g de carne molida",
            "2.5 tazas de frijoles rojos cocidos",
            "0.63 cebolla, picada",
            "2 dientes de ajo, picados",
            "1.25 tazas de tomate triturado",
            "1.25 cucharaditas de chile en polvo",
            "2.5 cucharadas de aceite",
            "sal y pimienta al gusto",
    
            "Ingredientes para 10 porciones:",
            "1 kg de carne molida",
            "5 tazas de frijoles rojos cocidos",
            "1.25 cebollas, picadas",
            "4 dientes de ajo, picados",
            "2.5 tazas de tomate triturado",
            "2.5 cucharaditas de chile en polvo",
            "5 cucharadas de aceite",
            "sal y pimienta al gusto"
        ],
        instructions: [
            "Calienta el aceite en una olla y sofríe la carne con la cebolla y el ajo.",
            "Añade los frijoles, el tomate triturado y el chile en polvo.",
            "Cocina a fuego lento durante 30 minutos.",
            "Rectifica la sazón y sirve caliente."
        ]
    },

    {
        "id": 23,
        "title": "Pizza de Pollo al Pesto",
        "imgSrc": "imagenes/pizza de pollo al pesto.jpg",
        "description": "Pizza casera con pollo, pesto, tomate y queso mozzarella.",
        "ingredients": [
            "Ingredientes para 2 porciones:",
            "1 base de pizza",
            "150 g de pechuga de pollo, cocida y desmenuzada",
            "2 cucharadas de pesto",
            "1 tomate, cortado en rodajas",
            "100 g de queso mozzarella rallado",
            "Aceite de oliva al gusto",
    
            "Ingredientes para 5 porciones:",
            "2 bases de pizza",
            "375 g de pechuga de pollo, cocida y desmenuzada",
            "5 cucharadas de pesto",
            "3 tomates, cortados en rodajas",
            "250 g de queso mozzarella rallado",
            "Aceite de oliva al gusto",
    
            "Ingredientes para 10 porciones:",
            "4 bases de pizza",
            "750 g de pechuga de pollo, cocida y desmenuzada",
            "10 cucharadas de pesto",
            "6 tomates, cortados en rodajas",
            "500 g de queso mozzarella rallado",
            "Aceite de oliva al gusto"
        ],
        "instructions": [
            "Precalienta el horno a 200°C.",
            "Extiende la base de pizza en una bandeja para hornear.",
            "Unta el pesto sobre la base de pizza.",
            "Agrega el pollo desmenuzado y las rodajas de tomate.",
            "Cubre con queso mozzarella y rocía con un poco de aceite de oliva.",
            "Hornea durante 12-15 minutos o hasta que el queso se derrita y la base esté dorada.",
            "Sirve caliente."
        ]
    },
    {
        "id": 24,
        "title": "Tarta de Limón y Merengue",
        "imgSrc": "imagenes/tarta de limón y merengue.jpg",
        "description": "Tarta dulce con un cremoso relleno de limón y un merengue suave.",
        "ingredients": [
            "Ingredientes para 2 porciones:",
            "1 base de tarta",
            "0.5 taza de azúcar",
            "1 huevo",
            "0.5 taza de jugo de limón",
            "0.25 taza de agua",
            "0.25 taza de maicena",
            "1 clara de huevo",
            "0.25 taza de azúcar para el merengue",
    
            "Ingredientes para 5 porciones:",
            "1 base de tarta",
            "1 taza de azúcar",
            "2 huevos",
            "1 taza de jugo de limón",
            "0.5 taza de agua",
            "0.5 taza de maicena",
            "2 claras de huevo",
            "0.5 taza de azúcar para el merengue",
    
            "Ingredientes para 10 porciones:",
            "2 bases de tarta",
            "2 tazas de azúcar",
            "4 huevos",
            "2 tazas de jugo de limón",
            "1 taza de agua",
            "1 taza de maicena",
            "4 claras de huevo",
            "1 taza de azúcar para el merengue"
        ],
        "instructions": [
            "Precalienta el horno a 180°C.",
            "En una cacerola, mezcla el azúcar, el jugo de limón, el agua y la maicena.",
            "Cocina a fuego medio, removiendo constantemente hasta que espese.",
            "Retira del fuego y agrega las yemas de huevo, batiendo hasta que esté bien incorporado.",
            "Vierte el relleno sobre la base de la tarta.",
            "Bate las claras con el azúcar hasta que se forme un merengue firme y cubra la tarta.",
            "Hornea durante 15 minutos o hasta que el merengue esté dorado.",
            "Deja enfriar antes de servir."
        ]
    },
    {
        "id": 25,
        "title": "Hamburguesas Veganas de Garbanzo",
        "imgSrc": "imagenes/hamburguesas veganas de garbanzo.jpg",
        "description": "Hamburguesas vegetarianas hechas con garbanzo, ideales para una comida saludable.",
        "ingredients": [
            "Ingredientes para 2 porciones:",
            "1 taza de garbanzo cocido",
            "0.25 taza de pan rallado",
            "1 diente de ajo, picado",
            "1 cucharadita de comino",
            "1 cucharada de aceite de oliva",
            "Sal y pimienta al gusto",
    
            "Ingredientes para 5 porciones:",
            "2 tazas de garbanzo cocido",
            "0.5 taza de pan rallado",
            "2 dientes de ajo, picados",
            "2 cucharaditas de comino",
            "2 cucharadas de aceite de oliva",
            "Sal y pimienta al gusto",
    
            "Ingredientes para 10 porciones:",
            "4 tazas de garbanzo cocido",
            "1 taza de pan rallado",
            "4 dientes de ajo, picados",
            "4 cucharaditas de comino",
            "4 cucharadas de aceite de oliva",
            "Sal y pimienta al gusto"
        ],
        "instructions": [
            "Tritura los garbanzos en un procesador de alimentos hasta obtener una mezcla gruesa.",
            "Añade el pan rallado, el ajo, el comino, el aceite, sal y pimienta.",
            "Mezcla bien y forma las hamburguesas.",
            "Cocina en una sartén con un poco de aceite a fuego medio, 4-5 minutos por cada lado.",
            "Sirve con pan integral y tus vegetales favoritos."
        ]
    },
    {
        "id": 26,
        "title": "Crepes de Nutella y Fresas",
        "imgSrc": "imagenes/crepes de nutella y fresas.jpg",
        "description": "Deliciosos crepes rellenos de Nutella y fresas frescas.",
        "ingredients": [
            "Ingredientes para 2 porciones:",
            "0.5 taza de harina",
            "1 huevo",
            "0.5 taza de leche",
            "0.25 cucharadita de azúcar",
            "0.5 cucharadita de esencia de vainilla",
            "Nutella al gusto",
            "Fresas frescas, cortadas en rodajas",
    
            "Ingredientes para 5 porciones:",
            "1 taza de harina",
            "2 huevos",
            "1 taza de leche",
            "0.5 cucharadita de azúcar",
            "1 cucharadita de esencia de vainilla",
            "Nutella al gusto",
            "Fresas frescas, cortadas en rodajas",
    
            "Ingredientes para 10 porciones:",
            "2 tazas de harina",
            "4 huevos",
            "2 tazas de leche",
            "1 cucharadita de azúcar",
            "2 cucharaditas de esencia de vainilla",
            "Nutella al gusto",
            "Fresas frescas, cortadas en rodajas"
        ],
        "instructions": [
            "En un tazón, mezcla la harina, el huevo, la leche, el azúcar y la esencia de vainilla hasta obtener una masa suave.",
            "Cocina los crepes en una sartén caliente, añadiendo un poco de aceite, 1-2 minutos por lado.",
            "Rellena con Nutella y fresas, enrolla y sirve inmediatamente."
        ]
    },
    {
        "id": 27,
        "title": "Sopa de Lentejas con Espinacas",
        "imgSrc": "imagenes/sopa de lentejas con espinacas.jpg",
        "description": "Sopa nutritiva de lentejas con espinacas frescas y especias.",
        "ingredients": [
            "Ingredientes para 2 porciones:",
            "1 taza de lentejas",
            "1 zanahoria, picada",
            "1 cebolla, picada",
            "2 dientes de ajo, picados",
            "2 tazas de caldo de verduras",
            "1 taza de espinacas frescas",
            "1 cucharadita de comino",
            "Aceite de oliva",
            "Sal y pimienta al gusto",
    
            "Ingredientes para 5 porciones:",
            "2 tazas de lentejas",
            "2 zanahorias, picadas",
            "2 cebollas, picadas",
            "4 dientes de ajo, picados",
            "5 tazas de caldo de verduras",
            "2 tazas de espinacas frescas",
            "2 cucharaditas de comino",
            "Aceite de oliva",
            "Sal y pimienta al gusto",
    
            "Ingredientes para 10 porciones:",
            "4 tazas de lentejas",
            "4 zanahorias, picadas",
            "4 cebollas, picadas",
            "8 dientes de ajo, picados",
            "10 tazas de caldo de verduras",
            "4 tazas de espinacas frescas",
            "4 cucharaditas de comino",
            "Aceite de oliva",
            "Sal y pimienta al gusto"
        ],
        "instructions": [
            "En una cacerola, calienta el aceite y sofríe la cebolla, el ajo y la zanahoria hasta que estén tiernos.",
            "Añade las lentejas, el caldo de verduras y el comino.",
            "Cocina a fuego medio durante 30 minutos o hasta que las lentejas estén tiernas.",
            "Agrega las espinacas y cocina durante 5 minutos adicionales.",
            "Sirve caliente, ajustando la sal y la pimienta."
        ]
    },

    {
        id: 28,
        title: "Sopa de Lentejas",
        imgSrc: "imagenes/sopa de lentejas.jpg",
        description: "Plato reconfortante hecho con lentejas y vegetales frescos.",
        ingredients: [
            "Ingredientes para 2 porciones:",
            "1 taza de lentejas remojadas",
            "0.25 cebolla, picada",
            "1 diente de ajo, picado",
            "0.25 zanahoria, en rodajas",
            "0.5 papa, en cubos",
            "1 hoja de laurel",
            "1 cucharada de aceite",
            "sal y pimienta al gusto",
    
            "Ingredientes para 5 porciones:",
            "2.5 tazas de lentejas remojadas",
            "0.63 cebolla, picada",
            "2 dientes de ajo, picados",
            "1.25 zanahorias, en rodajas",
            "2.5 papas, en cubos",
            "2.5 hojas de laurel",
            "2.5 cucharadas de aceite",
            "sal y pimienta al gusto",
    
            "Ingredientes para 10 porciones:",
            "5 tazas de lentejas remojadas",
            "1.25 cebollas, picadas",
            "4 dientes de ajo, picados",
            "2.5 zanahorias, en rodajas",
            "5 papas, en cubos",
            "5 hojas de laurel",
            "5 cucharadas de aceite",
            "sal y pimienta al gusto"
        ],
        instructions: [
            "En una olla, calienta el aceite y sofríe la cebolla, el ajo y la zanahoria.",
            "Agrega las lentejas, la papa, el laurel y suficiente agua.",
            "Cocina a fuego medio por 30-40 minutos.",
            "Rectifica la sazón y sirve caliente."
        ]
    },

    {
        id: 29,
        title: "Ceviche de Camarón",
        imgSrc: "imagenes/ceviche de camaron.jpg",
        description: "Camarones frescos marinados en jugo de limón con cebolla y cilantro.",
        ingredients: [
            "Ingredientes para 2 porciones:",
            "200 g de camarones pelados",
            "1 limón (jugo)",
            "0.25 cebolla morada, picada",
            "0.5 tomate, picado",
            "1 cucharada de cilantro fresco, picado",
            "0.5 cucharada de aceite de oliva",
            "sal y pimienta al gusto",
    
            "Ingredientes para 5 porciones:",
            "500 g de camarones pelados",
            "2.5 limones (jugo)",
            "0.63 cebolla morada, picada",
            "1.25 tomates, picados",
            "2.5 cucharadas de cilantro fresco, picado",
            "1.25 cucharadas de aceite de oliva",
            "sal y pimienta al gusto",
    
            "Ingredientes para 10 porciones:",
            "1 kg de camarones pelados",
            "5 limones (jugo)",
            "1.25 cebollas moradas, picadas",
            "2.5 tomates, picados",
            "5 cucharadas de cilantro fresco, picado",
            "2.5 cucharadas de aceite de oliva",
            "sal y pimienta al gusto"
        ],
        instructions: [
            "En un recipiente, mezcla los camarones con el jugo de limón y deja marinar 15 minutos.",
            "Añade la cebolla, el tomate y el cilantro.",
            "Rocía con aceite de oliva y mezcla bien.",
            "Ajusta la sazón y sirve frío."
        ]
    },

    {
        id: 30,
        title: "Pizza Margarita",
        imgSrc: "imagenes/pizza margarita.jpg",
        description: "Clásica pizza italiana con queso mozzarella y albahaca fresca.",
        ingredients: [
            "Ingredientes para 2 porciones:",
            "1 masa para pizza",
            "0.5 taza de salsa de tomate",
            "0.5 taza de queso mozzarella rallado",
            "3 hojas de albahaca fresca",
            "0.5 cucharada de aceite de oliva",
            "sal al gusto",
    
            "Ingredientes para 5 porciones:",
            "2.5 masas para pizza",
            "1.25 tazas de salsa de tomate",
            "1.25 tazas de queso mozzarella rallado",
            "8 hojas de albahaca fresca",
            "1.25 cucharadas de aceite de oliva",
            "sal al gusto",
    
            "Ingredientes para 10 porciones:",
            "5 masas para pizza",
            "2.5 tazas de salsa de tomate",
            "2.5 tazas de queso mozzarella rallado",
            "15 hojas de albahaca fresca",
            "2.5 cucharadas de aceite de oliva",
            "sal al gusto"
        ],
        instructions: [
            "Precalienta el horno a 220 °C.",
            "Extiende la masa en una bandeja y cubre con la salsa de tomate.",
            "Espolvorea el queso mozzarella y coloca las hojas de albahaca.",
            "Rocía con aceite de oliva y hornea por 10-15 minutos.",
            "Sirve inmediatamente."
        ]
    },

    {
        id: 31,
        title: "Lasagna de Carne",
        imgSrc: "imagenes/lasagna de carne.jpg",
        description: "Capas de pasta, carne y queso gratinado al horno.",
        ingredients: [
            "Ingredientes para 2 porciones:",
            "150 g de carne molida",
            "4 láminas de pasta para lasagna",
            "0.25 cebolla, picada",
            "1 diente de ajo, picado",
            "0.5 taza de salsa de tomate",
            "0.25 taza de queso rallado",
            "0.5 cucharada de aceite de oliva",
            "sal y pimienta al gusto",
    
            "Ingredientes para 5 porciones:",
            "375 g de carne molida",
            "10 láminas de pasta para lasagna",
            "0.63 cebolla, picada",
            "2 dientes de ajo, picados",
            "1.25 tazas de salsa de tomate",
            "0.63 taza de queso rallado",
            "1.25 cucharadas de aceite de oliva",
            "sal y pimienta al gusto",
    
            "Ingredientes para 10 porciones:",
            "750 g de carne molida",
            "20 láminas de pasta para lasagna",
            "1.25 cebollas, picadas",
            "4 dientes de ajo, picados",
            "2.5 tazas de salsa de tomate",
            "1.25 tazas de queso rallado",
            "2.5 cucharadas de aceite de oliva",
            "sal y pimienta al gusto"
        ],
        instructions: [
            "Precalienta el horno a 180 °C.",
            "Sofríe la cebolla, el ajo y la carne molida con aceite de oliva.",
            "Agrega la salsa de tomate y cocina por 10 minutos.",
            "En un recipiente, coloca capas alternadas de pasta, carne y queso.",
            "Hornea por 20-30 minutos hasta que el queso esté gratinado.",
            "Sirve caliente."
        ]
    },

    {
        "id": 32,
        "title": "Sushi Roll de Aguacate y Salmón",
        "imgSrc": "imagenes/sushi roll de aguacate y salmón.jpg",
        "description": "Sushi fresco con aguacate y salmón, acompañado de arroz de sushi y algas nori.",
        "ingredients": [
            "Ingredientes para 2 porciones:",
            "1 taza de arroz para sushi",
            "1.5 tazas de agua",
            "2 cucharadas de vinagre de arroz",
            "1 cucharadita de azúcar",
            "1 cucharadita de sal",
            "2 hojas de alga nori",
            "100 g de salmón fresco, en tiras",
            "1 aguacate, cortado en tiras",
            "Salsa de soja y wasabi al gusto",
    
            "Ingredientes para 5 porciones:",
            "2.5 tazas de arroz para sushi",
            "3.75 tazas de agua",
            "5 cucharadas de vinagre de arroz",
            "2 cucharaditas de azúcar",
            "2.5 cucharaditas de sal",
            "5 hojas de alga nori",
            "250 g de salmón fresco, en tiras",
            "2 aguacates, cortados en tiras",
            "Salsa de soja y wasabi al gusto",
    
            "Ingredientes para 10 porciones:",
            "5 tazas de arroz para sushi",
            "7.5 tazas de agua",
            "10 cucharadas de vinagre de arroz",
            "5 cucharaditas de azúcar",
            "5 cucharaditas de sal",
            "10 hojas de alga nori",
            "500 g de salmón fresco, en tiras",
            "5 aguacates, cortados en tiras",
            "Salsa de soja y wasabi al gusto"
        ],
        "instructions": [
            "Lava el arroz varias veces hasta que el agua salga clara.",
            "Cocina el arroz en el agua y luego mezcla con el vinagre, el azúcar y la sal.",
            "Coloca una hoja de alga nori en una esterilla de bambú.",
            "Extiende el arroz sobre el alga, dejando un borde libre.",
            "Agrega tiras de salmón y aguacate en el centro.",
            "Enrolla con cuidado utilizando la esterilla y corta en 6-8 piezas.",
            "Sirve con salsa de soja y wasabi."
        ]
    },
    {
        "id": 33,
        "title": "Paella Valenciana",
        "imgSrc": "imagenes/paella valenciana.jpg",
        "description": "Clásica paella española con mariscos, pollo, conejo y verduras.",
        "ingredients": [
            "Ingredientes para 2 porciones:",
            "1 taza de arroz",
            "1 taza de caldo de pollo",
            "1 taza de caldo de mariscos",
            "100 g de pechuga de pollo, en trozos",
            "100 g de conejo, en trozos",
            "100 g de camarones",
            "1 pimiento rojo, en tiras",
            "1 tomate, picado",
            "1 diente de ajo, picado",
            "Aceite de oliva, sal, pimienta y azafrán al gusto",
    
            "Ingredientes para 5 porciones:",
            "2.5 tazas de arroz",
            "2.5 tazas de caldo de pollo",
            "2.5 tazas de caldo de mariscos",
            "250 g de pechuga de pollo, en trozos",
            "250 g de conejo, en trozos",
            "250 g de camarones",
            "2 pimientos rojos, en tiras",
            "2 tomates, picados",
            "2 dientes de ajo, picados",
            "Aceite de oliva, sal, pimienta y azafrán al gusto",
    
            "Ingredientes para 10 porciones:",
            "5 tazas de arroz",
            "5 tazas de caldo de pollo",
            "5 tazas de caldo de mariscos",
            "500 g de pechuga de pollo, en trozos",
            "500 g de conejo, en trozos",
            "500 g de camarones",
            "4 pimientos rojos, en tiras",
            "4 tomates, picados",
            "4 dientes de ajo, picados",
            "Aceite de oliva, sal, pimienta y azafrán al gusto"
        ],
        "instructions": [
            "En una paellera, calienta aceite y sofríe el pollo y el conejo hasta dorar.",
            "Agrega el ajo, los pimientos y los tomates, y cocina por unos minutos.",
            "Añade el arroz y el caldo, junto con el azafrán, y deja cocinar a fuego medio.",
            "Agrega los camarones y cocina hasta que estén rosados.",
            "Deja reposar durante 5 minutos antes de servir."
        ]
    },
    {
        "id": 34,
        "title": "Mole Poblano",
        "imgSrc": "imagenes/mole poblano.jpg",
        "description": "Mole tradicional mexicano, con chocolate, chiles y especias, ideal para acompañar pollo.",
        "ingredients": [
            "Ingredientes para 2 porciones:",
            "2 pechugas de pollo",
            "2 chiles mulatos",
            "2 chiles pasilla",
            "1 diente de ajo",
            "0.5 taza de chocolate amargo",
            "1 cucharadita de canela",
            "0.5 cucharadita de comino",
            "1 cucharada de manteca de cerdo",
            "1 taza de caldo de pollo",
            "Sal al gusto",
    
            "Ingredientes para 5 porciones:",
            "5 pechugas de pollo",
            "5 chiles mulatos",
            "5 chiles pasilla",
            "3 dientes de ajo",
            "1 taza de chocolate amargo",
            "2 cucharaditas de canela",
            "1 cucharadita de comino",
            "2 cucharadas de manteca de cerdo",
            "2.5 tazas de caldo de pollo",
            "Sal al gusto",
    
            "Ingredientes para 10 porciones:",
            "10 pechugas de pollo",
            "10 chiles mulatos",
            "10 chiles pasilla",
            "6 dientes de ajo",
            "2 tazas de chocolate amargo",
            "4 cucharaditas de canela",
            "2 cucharaditas de comino",
            "4 cucharadas de manteca de cerdo",
            "5 tazas de caldo de pollo",
            "Sal al gusto"
        ],
        "instructions": [
            "Tuesta los chiles en un sartén y quítales las semillas.",
            "En una cazuela, sofríe el ajo y los chiles en manteca.",
            "Agrega el caldo de pollo, el chocolate, la canela, el comino y sal, y cocina a fuego lento.",
            "Licúa la mezcla hasta obtener una salsa suave.",
            "Cocina las pechugas de pollo y cubre con el mole.",
            "Sirve con arroz blanco."
        ]
    },
    {
        "id": 35,
        "title": "Curry Tailandés de Coco",
        "imgSrc": "imagenes/curry tailandés de coco.jpg",
        "description": "Curry tailandés cremoso con leche de coco, pollo y verduras.",
        "ingredients": [
            "Ingredientes para 2 porciones:",
            "2 pechugas de pollo, cortadas en tiras",
            "1 taza de leche de coco",
            "1 cucharada de pasta de curry rojo",
            "1 pimiento rojo, cortado en tiras",
            "1 zanahoria, cortada en rodajas",
            "1 cebolla, picada",
            "1 cucharada de aceite de coco",
            "Hojas de albahaca tailandesa al gusto",
            "Arroz jazmín para acompañar",
    
            "Ingredientes para 5 porciones:",
            "5 pechugas de pollo, cortadas en tiras",
            "2.5 tazas de leche de coco",
            "3 cucharadas de pasta de curry rojo",
            "2 pimientos rojos, cortados en tiras",
            "2 zanahorias, cortadas en rodajas",
            "2 cebollas, picadas",
            "3 cucharadas de aceite de coco",
            "Hojas de albahaca tailandesa al gusto",
            "Arroz jazmín para acompañar",
    
            "Ingredientes para 10 porciones:",
            "10 pechugas de pollo, cortadas en tiras",
            "5 tazas de leche de coco",
            "6 cucharadas de pasta de curry rojo",
            "4 pimientos rojos, cortados en tiras",
            "4 zanahorias, cortadas en rodajas",
            "4 cebollas, picadas",
            "5 cucharadas de aceite de coco",
            "Hojas de albahaca tailandesa al gusto",
            "Arroz jazmín para acompañar"
        ],
        "instructions": [
            "En una sartén grande, calienta el aceite de coco y cocina el pollo hasta que esté dorado.",
            "Agrega la cebolla, zanahoria y pimientos, y cocina por unos minutos.",
            "Añade la pasta de curry y la leche de coco, y cocina a fuego lento hasta que las verduras estén tiernas.",
            "Sirve sobre arroz jazmín y decora con albahaca tailandesa."
        ]
    },
    {
        "id": 36,
        "title": "Falafel",
        "imgSrc": "imagenes/falafel.jpg",
        "description": "Albóndigas fritas de garbanzo, especias y hierbas, típicas de la cocina de Medio Oriente.",
        "ingredients": [
            "Ingredientes para 2 porciones:",
            "1 taza de garbanzos secos, remojados por 12 horas",
            "1 cebolla pequeña, picada",
            "2 dientes de ajo, picados",
            "1 cucharadita de comino",
            "1 cucharadita de cilantro en polvo",
            "Perejil fresco al gusto",
            "Sal y pimienta al gusto",
            "Aceite para freír",
    
            "Ingredientes para 5 porciones:",
            "2.5 tazas de garbanzos secos, remojados por 12 horas",
            "2 cebollas pequeñas, picadas",
            "5 dientes de ajo, picados",
            "2.5 cucharaditas de comino",
            "2.5 cucharaditas de cilantro en polvo",
            "Perejil fresco al gusto",
            "Sal y pimienta al gusto",
            "Aceite para freír",
    
            "Ingredientes para 10 porciones:",
            "5 tazas de garbanzos secos, remojados por 12 horas",
            "5 cebollas pequeñas, picadas",
            "10 dientes de ajo, picados",
            "5 cucharaditas de comino",
            "5 cucharaditas de cilantro en polvo",
            "Perejil fresco al gusto",
            "Sal y pimienta al gusto",
            "Aceite para freír"
        ],
        "instructions": [
            "Escurre los garbanzos y procésalos en un procesador de alimentos con cebolla, ajo, comino, cilantro y perejil.",
            "Forma pequeñas bolitas con la mezcla.",
            "Fría en aceite caliente hasta que estén doradas y crujientes.",
            "Sirve con pan de pita, ensalada y salsa de tahini."
        ]
    },

    {
        "id": 37,
        "title": "Ratatouille",
        "imgSrc": "imagenes/ratatouille.jpg",
        "description": "Un guiso francés con verduras asadas como berenjena, calabacín y pimientos, perfecto como plato principal o acompañante.",
        "ingredients": [
            "Ingredientes para 2 porciones:",
            "1 berenjena, cortada en rodajas",
            "1 calabacín, cortado en rodajas",
            "1 pimiento rojo, cortado en tiras",
            "1 pimiento amarillo, cortado en tiras",
            "1 cebolla, picada",
            "2 tomates, picados",
            "2 dientes de ajo, picados",
            "Aceite de oliva al gusto",
            "Sal y pimienta al gusto",
            "Albahaca fresca al gusto",
    
            "Ingredientes para 5 porciones:",
            "2 berenjenas, cortadas en rodajas",
            "2 calabacines, cortados en rodajas",
            "2 pimientos rojos, cortados en tiras",
            "2 pimientos amarillos, cortados en tiras",
            "2 cebollas, picadas",
            "5 tomates, picados",
            "5 dientes de ajo, picados",
            "Aceite de oliva al gusto",
            "Sal y pimienta al gusto",
            "Albahaca fresca al gusto",
    
            "Ingredientes para 10 porciones:",
            "4 berenjenas, cortadas en rodajas",
            "4 calabacines, cortados en rodajas",
            "4 pimientos rojos, cortados en tiras",
            "4 pimientos amarillos, cortados en tiras",
            "4 cebollas, picadas",
            "10 tomates, picados",
            "10 dientes de ajo, picados",
            "Aceite de oliva al gusto",
            "Sal y pimienta al gusto",
            "Albahaca fresca al gusto"
        ],
        "instructions": [
            "Precalienta el horno a 180°C.",
            "En una sartén, sofríe la cebolla y el ajo con un poco de aceite de oliva.",
            "Agrega los tomates y cocina hasta que estén tiernos.",
            "En una bandeja para hornear, organiza las rodajas de berenjena, calabacín y pimientos en un patrón circular.",
            "Vierte la salsa de tomate sobre las verduras, salpica con sal, pimienta y albahaca.",
            "Hornea durante 40 minutos o hasta que las verduras estén tiernas."
        ]
    },
    {
        "id": 38,
        "title": "Shakshuka",
        "imgSrc": "imagenes/shakshuka.jpg",
        "description": "Plato tradicional del Medio Oriente con huevos escalfados en una salsa picante de tomate, pimientos y especias.",
        "ingredients": [
            "Ingredientes para 2 porciones:",
            "2 huevos",
            "1 pimiento rojo, picado",
            "1 cebolla, picada",
            "2 dientes de ajo, picados",
            "2 tomates, picados",
            "1 cucharadita de comino",
            "1 cucharadita de pimentón",
            "Aceite de oliva al gusto",
            "Sal y pimienta al gusto",
            "Cilantro fresco para decorar",
    
            "Ingredientes para 5 porciones:",
            "5 huevos",
            "2 pimientos rojos, picados",
            "2 cebollas, picadas",
            "5 dientes de ajo, picados",
            "5 tomates, picados",
            "2 cucharaditas de comino",
            "2 cucharaditas de pimentón",
            "Aceite de oliva al gusto",
            "Sal y pimienta al gusto",
            "Cilantro fresco para decorar",
    
            "Ingredientes para 10 porciones:",
            "10 huevos",
            "4 pimientos rojos, picados",
            "4 cebollas, picadas",
            "10 dientes de ajo, picados",
            "10 tomates, picados",
            "4 cucharaditas de comino",
            "4 cucharaditas de pimentón",
            "Aceite de oliva al gusto",
            "Sal y pimienta al gusto",
            "Cilantro fresco para decorar"
        ],
        "instructions": [
            "En una sartén grande, calienta el aceite de oliva y sofríe la cebolla, el pimiento y el ajo.",
            "Agrega los tomates y las especias, y cocina a fuego lento hasta que la salsa espese.",
            "Haz pequeños huecos en la salsa y casca los huevos en ellos.",
            "Cubre la sartén y cocina hasta que los huevos estén escalfados a tu gusto.",
            "Decora con cilantro fresco y sirve con pan pita."
        ]
    },
    {
        "id": 39,
        "title": "Tacos de Carnitas",
        "imgSrc": "imagenes/tacos de carnitas.jpg",
        "description": "Tacos mexicanos rellenos de carne de cerdo cocida lentamente, servidos con cebolla, cilantro y salsa.",
        "ingredients": [
            "Ingredientes para 2 porciones:",
            "300 g de carne de cerdo (espaldilla o lomo)",
            "1 cucharada de comino",
            "1 cucharadita de orégano",
            "1 diente de ajo, picado",
            "1 cebolla pequeña, picada",
            "Cilantro fresco al gusto",
            "Jugo de 1 limón",
            "4 tortillas de maíz",
            "Salsa al gusto",
    
            "Ingredientes para 5 porciones:",
            "750 g de carne de cerdo",
            "2 cucharadas de comino",
            "2 cucharaditas de orégano",
            "2 dientes de ajo, picados",
            "2 cebollas pequeñas, picadas",
            "Cilantro fresco al gusto",
            "Jugo de 2 limones",
            "10 tortillas de maíz",
            "Salsa al gusto",
    
            "Ingredientes para 10 porciones:",
            "1.5 kg de carne de cerdo",
            "4 cucharadas de comino",
            "4 cucharaditas de orégano",
            "4 dientes de ajo, picados",
            "4 cebollas pequeñas, picadas",
            "Cilantro fresco al gusto",
            "Jugo de 4 limones",
            "20 tortillas de maíz",
            "Salsa al gusto"
        ],
        "instructions": [
            "Cocina la carne de cerdo en agua con comino, orégano y ajo hasta que esté tierna (aproximadamente 1.5 horas).",
            "Desmenuza la carne y sofríe en una sartén con un poco de aceite hasta que esté dorada.",
            "Sirve la carne en tortillas calientes y agrega cebolla, cilantro, jugo de limón y salsa."
        ]
    },
    {
        "id": 40,
        "title": "Pav Bhaji",
        "imgSrc": "imagenes/pav bhaji.jpg",
        "description": "Plato típico de la India con un guiso de verduras picantes, servido con pan mantecoso.",
        "ingredients": [
            "Ingredientes para 2 porciones:",
            "2 papas medianas, cocidas y trituradas",
            "1 taza de zanahorias, picadas",
            "1 taza de guisantes",
            "1 pimiento rojo, picado",
            "1 cebolla, picada",
            "2 tomates, picados",
            "2 cucharaditas de pasta de ajo y jengibre",
            "2 cucharaditas de garam masala",
            "1 cucharadita de chile en polvo",
            "Aceite de oliva al gusto",
            "6 panes tipo pav",
            "Mantequilla al gusto",
    
            "Ingredientes para 5 porciones:",
            "5 papas medianas, cocidas y trituradas",
            "2.5 tazas de zanahorias, picadas",
            "2.5 tazas de guisantes",
            "2 pimientos rojos, picados",
            "2 cebollas, picadas",
            "5 tomates, picados",
            "5 cucharaditas de pasta de ajo y jengibre",
            "5 cucharaditas de garam masala",
            "2.5 cucharaditas de chile en polvo",
            "Aceite de oliva al gusto",
            "15 panes tipo pav",
            "Mantequilla al gusto",
    
            "Ingredientes para 10 porciones:",
            "10 papas medianas, cocidas y trituradas",
            "5 tazas de zanahorias, picadas",
            "5 tazas de guisantes",
            "5 pimientos rojos, picados",
            "5 cebollas, picadas",
            "10 tomates, picados",
            "10 cucharaditas de pasta de ajo y jengibre",
            "10 cucharaditas de garam masala",
            "5 cucharaditas de chile en polvo",
            "Aceite de oliva al gusto",
            "20 panes tipo pav",
            "Mantequilla al gusto"
        ],
        "instructions": [
            "En una sartén grande, calienta aceite y sofríe las cebollas, pimientos y pasta de ajo/jengibre.",
            "Agrega los tomates, zanahorias, guisantes y papas trituradas. Cocina a fuego lento hasta que se mezclen bien.",
            "Añade las especias (garam masala, chile en polvo) y cocina hasta que la mezcla esté espesa.",
            "En una sartén separada, tuesta los panes pav con mantequilla.",
            "Sirve el guiso con los panes tostados y decora con cebolla picada y cilantro."
        ]
    },

    {
        "id": 41,
        "title": "Bibimbap Coreano",
        "imgSrc": "imagenes/bibimbap coreano.jpg",
        "description": "Plato coreano tradicional que combina arroz, vegetales, carne y huevo en una mezcla deliciosa.",
        "ingredients": [
            "Ingredientes para 2 porciones:",
            "1 taza de arroz cocido",
            "100 g de carne de res en tiras",
            "1 zanahoria en tiras",
            "1 calabacín en rodajas",
            "50 g de espinacas blanqueadas",
            "2 huevos fritos",
            "1 cucharada de salsa de soja",
            "1 cucharadita de aceite de sésamo",
            "1 diente de ajo picado",
            "Salsa Gochujang (al gusto)",
            "Semillas de sésamo para decorar",
    
            "Ingredientes para 5 porciones:",
            "2.5 tazas de arroz cocido",
            "250 g de carne de res en tiras",
            "3 zanahorias en tiras",
            "2 calabacines en rodajas",
            "125 g de espinacas blanqueadas",
            "5 huevos fritos",
            "2.5 cucharadas de salsa de soja",
            "1 cucharada de aceite de sésamo",
            "3 dientes de ajo picados",
            "Salsa Gochujang (al gusto)",
            "Semillas de sésamo para decorar",
    
            "Ingredientes para 10 porciones:",
            "5 tazas de arroz cocido",
            "500 g de carne de res en tiras",
            "6 zanahorias en tiras",
            "4 calabacines en rodajas",
            "250 g de espinacas blanqueadas",
            "10 huevos fritos",
            "5 cucharadas de salsa de soja",
            "2 cucharadas de aceite de sésamo",
            "5 dientes de ajo picados",
            "Salsa Gochujang (al gusto)",
            "Semillas de sésamo para decorar"
        ],
        "instructions": [
            "Sofríe la carne con ajo, salsa de soja y aceite de sésamo hasta que esté dorada.",
            "Saltea la zanahoria, el calabacín y las espinacas por separado.",
            "Coloca el arroz caliente en un tazón y organiza los vegetales y la carne alrededor.",
            "Agrega un huevo frito encima y decora con salsa Gochujang y semillas de sésamo.",
            "Mezcla bien antes de comer."
        ]
    },
    {
        "id": 42,
        "title": "Baklava Turca",
        "imgSrc": "imagenes/baklava turca.jpg",
        "description": "Postre turco hecho con capas de masa filo, nueces y un jarabe dulce con toque de agua de rosas.",
        "ingredients": [
            "Ingredientes para 2 porciones:",
            "8 hojas de masa filo",
            "50 g de nueces picadas",
            "25 g de mantequilla derretida",
            "0.25 taza de azúcar",
            "0.13 taza de agua",
            "1 cucharadita de agua de rosas",
    
            "Ingredientes para 5 porciones:",
            "20 hojas de masa filo",
            "125 g de nueces picadas",
            "50 g de mantequilla derretida",
            "0.63 taza de azúcar",
            "0.31 taza de agua",
            "2.5 cucharaditas de agua de rosas",
    
            "Ingredientes para 10 porciones:",
            "40 hojas de masa filo",
            "250 g de nueces picadas",
            "125 g de mantequilla derretida",
            "1.25 tazas de azúcar",
            "0.63 taza de agua",
            "5 cucharaditas de agua de rosas"
        ],
        "instructions": [
            "Precalienta el horno a 180°C.",
            "Engrasa un molde y coloca una hoja de masa filo, pincelándola con mantequilla. Repite hasta tener 4 capas.",
            "Esparce una capa de nueces picadas y cubre con otras 4 hojas de masa filo, pincelando cada una con mantequilla.",
            "Repite el proceso hasta terminar con una capa superior de masa filo.",
            "Corta en rombos o cuadrados y hornea durante 25-30 minutos.",
            "Hierve el agua, el azúcar y el agua de rosas hasta formar un jarabe espeso.",
            "Vierte el jarabe caliente sobre el baklava recién salido del horno y deja enfriar antes de servir."
        ]
    }


];

// Obtener todas las tarjetas de receta
const recipeCards = document.querySelectorAll('.recipe-card');

// Obtener el modal y los elementos dentro de él
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');
const modalTitle = document.getElementById('modal-title');
const modalImg = document.getElementById('modal-img');
const modalDescription = document.getElementById('modal-description');
const modalIngredients = document.getElementById('modal-ingredients');
const modalInstructions = document.getElementById('modal-instructions');

// Añadir un evento de clic a cada tarjeta
recipeCards.forEach(card => {
    card.addEventListener('click', function() {
        // Obtener el id de la receta desde la tarjeta (lo puedes agregar como un atributo data-id)
        const recipeId = this.getAttribute('data-id');
        
        // Buscar la receta por id en el array de recetas
        const recipe = recipes.find(r => r.id == recipeId);
        
        // Actualizar el contenido del modal con la receta seleccionada
        modalTitle.textContent = recipe.title;
        modalImg.src = recipe.imgSrc;
        modalImg.alt = recipe.title;
        modalDescription.textContent = recipe.description;
        
        // Limpiar y agregar los ingredientes e instrucciones
        // Limpiar el contenido de ingredientes e instrucciones
        modalIngredients.innerHTML = '';
        modalInstructions.innerHTML = recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('');

        // Recorrer los ingredientes y añadir el estilo de negrita a las frases específicas
        recipe.ingredients.forEach(ingredient => {
            // Verificar si el ingrediente contiene alguna de las frases específicas
            if (ingredient.includes("Ingredientes para 2 porciones") || 
                ingredient.includes("Ingredientes para 5 porciones") || 
                ingredient.includes("Ingredientes para 10 porciones")) {
                // Crear un elemento de lista con la clase 'bold-ingredient'
                const li = document.createElement('li');
                li.classList.add('bold-ingredient');
                li.textContent = ingredient;
                modalIngredients.appendChild(li);
            } else {
                // Si no es una de las frases, solo añadirla normalmente
                const li = document.createElement('li');
                li.textContent = ingredient;
                modalIngredients.appendChild(li);
            }
        });
        
        // Mostrar el modal
        modal.style.display = 'flex';
    });
});

// Cerrar el modal cuando se hace clic en el botón de cerrar
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Cerrar el modal si el usuario hace clic fuera del contenido
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
