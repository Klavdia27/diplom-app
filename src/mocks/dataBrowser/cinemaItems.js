const cinemaItems = [
    {
        "name": "Москва",
        "id": 1,
        "adress": "пр-т Победителей, 13",
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.2481234477646!2d27.545149315992713!3d53.9095666400748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf92bc08c8f7%3A0x1cbfff77772146e3!2z0JrQuNC90L7RgtC10LDRgtGAINCc0L7RgdC60LLQsA!5e0!3m2!1sru!2sby!4v1642350540786!5m2!1sru!2sby",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0_%28%D0%BA%D0%B8%D0%BD%D0%BE%D1%82%D0%B5%D0%B0%D1%82%D1%80%29.JPG/411px-%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0_%28%D0%BA%D0%B8%D0%BD%D0%BE%D1%82%D0%B5%D0%B0%D1%82%D1%80%29.JPG",
    },
    {
        "name": "Беларусь",
        "id": 1,
        "adress": "ул. Романовская Слобода, 28",
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.5048101464577!2d27.540682215992504!3d53.90500494041892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfedea517481%3A0xfd6d5790b0d9e572!2z0JrQuNC90L7RgtC10LDRgtGAINCR0LXQu9Cw0YDRg9GB0Yw!5e0!3m2!1sru!2sby!4v1642357081218!5m2!1sru!2sby",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Multiplex_Belarus.JPG/411px-Multiplex_Belarus.JPG",
    },
    {
        "name": "Октябрь",
        "id": 1,
        "adress": "пр-т Независимости, 73",
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.5423931859277!2d27.594634415993056!3d53.922107139128755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcf085b31fed9%3A0xf923f32f6c5b6ac7!2z0J7QutGC0Y_QsdGA0Yw!5e0!3m2!1sru!2sby!4v1642357012398!5m2!1sru!2sby",
        "foto": "https://upload.wikimedia.org/wikipedia/ru/thumb/6/67/%D0%9A%D0%B8%D0%BD%D0%BE%D1%82%D0%B5%D0%B0%D1%82%D1%80_%D0%9E%D0%BA%D1%82%D1%8F%D0%B1%D1%80%D1%8C_%D0%B2_%D0%9C%D0%B8%D0%BD%D1%81%D0%BA%D0%B5.jpg/411px-%D0%9A%D0%B8%D0%BD%D0%BE%D1%82%D0%B5%D0%B0%D1%82%D1%80_%D0%9E%D0%BA%D1%82%D1%8F%D0%B1%D1%80%D1%8C_%D0%B2_%D0%9C%D0%B8%D0%BD%D1%81%D0%BA%D0%B5.jpg",
    },
    {
        "name": "Центральный",
        "id": 1,
        "adress": "просп. Независимости, 13",
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.9127592388163!2d27.55024271599233!3d53.89775454096581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfe8262c4f7d%3A0x9c685623d5f0fb00!2z0KbQtdC90YLRgNCw0LvRjNC90YvQuQ!5e0!3m2!1sru!2sby!4v1642357154202!5m2!1sru!2sby",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/%D0%94%D0%BE%D0%BC_%D0%BF%D0%B0_%D0%BF%D1%80%D0%B0%D1%81%D0%BF%D0%B5%D0%BA%D1%86%D0%B5_%D0%9D%D0%B5%D0%B7%D0%B0%D0%BB%D0%B5%D0%B6%D0%BD%D0%B0%D1%81%D1%86%D1%96%2C_13.jpg/411px-%D0%94%D0%BE%D0%BC_%D0%BF%D0%B0_%D0%BF%D1%80%D0%B0%D1%81%D0%BF%D0%B5%D0%BA%D1%86%D0%B5_%D0%9D%D0%B5%D0%B7%D0%B0%D0%BB%D0%B5%D0%B6%D0%BD%D0%B0%D1%81%D1%86%D1%96%2C_13.jpg",
    },
    {
        "name": "Берестье",
        "id": 1,
        "adress": "пр-т газеты Правда, 25",
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2352.804039278956!2d27.480972115991467!3d53.86413244350127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd079bffd96ff%3A0x226bf66d2ef45042!2z0JHQtdGA0LXRgdGC0YzQtQ!5e0!3m2!1sru!2sby!4v1642357186821!5m2!1sru!2sby",
        "foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Biarescie_cinema_%28Minsk%29_p1.jpg/411px-Biarescie_cinema_%28Minsk%29_p1.jpg",
    },
]

export default cinemaItems;