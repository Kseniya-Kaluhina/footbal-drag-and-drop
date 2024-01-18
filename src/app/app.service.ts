import {Injectable} from '@angular/core';

export class Player {
  public id: number = 0;
  public photo: string = '';
  public number: number = 0;
  public firstname: string = '';
  public lastname: string = '';
}

@Injectable()
export class PlayersService {
  players: Player[] = [
    {
      id: 1,
      photo: 'https://cdn-media.tass.ru/width/1020_b9261fa1/tass/m2/uploads/i/20190927/5182903.jpg',
      number: 1,
      firstname: 'Лионель',
      lastname: 'Месси'
    },
    {
      id: 2,
      photo: 'https://vesti.kz/userdata/news/2024/news_338935/crop_b/photo_207540.jpg',
      number: 2,
      firstname: 'Криштиану',
      lastname: 'Роналду'
    },
    {
      id: 3,
      photo: 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRykWFTS83mU3Dct2HQed3yIHj8n6axqDpVME6vRo_AOvW80Y6y2T_g4D4HBnMd-D9U',
      number: 3,
      firstname: 'Лука',
      lastname: 'Модрич'
    },
    {
      id: 4,
      photo: 'https://static.ua-football.com/img/upload/20/27ac86.jpeg',
      number: 4,
      firstname: 'Тони',
      lastname: 'Кроос'
    },
    {
      id: 5,
      photo: 'https://azertag.az/files/2022/1/1200x630/16507140046180640301_1200x630.jpg',
      number: 5,
      firstname: 'Альваро',
      lastname: 'Мората'
    },
    {
      id: 6,
      photo: 'https://s0.rbk.ru/v6_top_pics/resized/590xH/media/img/3/05/756713779880053.webp',
      number: 6,
      firstname: 'Анхель',
      lastname: 'Ди Мария'
    },
    {
      id: 7,
      photo: 'https://cdnn11.img.sputnik.by/img/07e6/0c/0a/1069981211_0:0:3073:1728_1920x0_80_0_0_f98efd40ee9f8f9da47448f06ec518ce.jpg.webp',
      number: 7,
      firstname: 'Мануэль',
      lastname: 'Нойер'
    },
    {
      id: 8,
      photo: 'https://img.championat.com/s/732x488/news/big/r/w/luis-suares-poluchil-mnogo-predlozhenij-ot-klubov-mls_1657568853634996485.jpg',
      number: 8,
      firstname: 'Луис',
      lastname: 'Суарес'
    },
    {
      id: 9,
      photo: 'https://cdnn21.img.ria.ru/images/07e7/08/0c/1889681021_59:0:1175:628_1920x0_80_0_0_e136ff7c8dc0ce3c34a187f7226d2a36.jpg.webp',
      number: 9,
      firstname: 'Гарри',
      lastname: 'Кейн'
    },
    {
      id: 10,
      photo: 'https://img.championat.com/s/732x488/news/big/b/n/vratar-reala-tibo-kurtua-pri.jpg',
      number: 10,
      firstname: 'Тибо',
      lastname: 'Куртуа'
    },
  ];

  getPlayers() {
    return this.players;
  }
}
