import React from "react";
import Header from "./components/Header";
import Footer from "./components/footer";
import Items from "./components/Items"
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props){
super(props)
this.state = {
  orders: [],
  currentItems: [],

  items: [
    {
      id: 1,
      title: "Крісло UDSBJERG сірий",
      img: "chairs.jfif",
      desc: "Опис: Міцна тканинна оббивка. Наповнення подушок сидіння та спинки з піноматеріалу. Ніжки з масиву дуба. 64х68 см, вис. 86 см",
      category: "chairs",
      price: "9.99",
    },
    {
      id: 2,
      title: "Крісло офісне NIMTOFTE",
      img: "office_chairs.jfif",
      desc: "Опис: Штучна шкіра. Регульована висота. 57x64 см, вис. 92-102 см",
      category: "chairs",
      price: "12.99",
    },
    {
      id: 3,
      title: "Стілець обідній TUREBY",
      img: "chairs1.jfif",
      desc: "Опис: Штучна шкіра та масив деревини. 47х60 см, вис. 100 см",
      category: "chairs",
      price: "11.99",
    },
    {
      id: 4,
      title: "Полиця настінна ILBRO ",
      img: "sheif.jfif",
      desc: "Опис: Необроблений масив деревини. 3 шт.: 39х34х15 см, 35х31х14 см, 31х27х13 см",
      category: "shelf",
      price: "3.99",
    },
    {
      id: 5,
      title: "Диван EGENSE 2-місна сірий",
      img: "sofes.jfif",
      desc: "Опис: 2-місна софа для сидіння із тканинною оббивкою. Наповнення подушок сидіння та спинки із піноматеріалу. Ніжки із масиву дерева. 142х80 см, вис. 80 см",
      category: "sofes",
      price: "29.99",
    },
    {
      id: 6,
      title: "Столик DOKKEDAL ",
      img: "table1.jfif",
      desc: "Опис: Ламінат та метал. Обробка: під бетон. 60х60 см, вис. 45 см",
      category: "tables",
      price: "14.99",
    },
    {
      id: 7,
      title: "Ліжко KONGSBERG",
      img: "bed.jfif",
      desc: "Опис: Тканинна оббивка та дерево. Вміщує бокс-матраци, пружинні та безпружинні матраци розміром 160х200 см. Без ламельної основи та матраца. 176х218 см, вис. 101 см",
      category: "beds",
      price: "50.99",
    },
    {
      id: 8,
      title: "Полиця навісна ABILD 120x24см дуб",
      img: "shelf2.jfif",
      desc: "Опис: Ламінат. 120х24 см, вис. 4 см",
      category: "shelf",
      price: "7.50",
    },
    {
      id: 9,
      title: "Полиця настінна ILBRO 3шт ",
      img: "shelf1.jfif",
      desc: "Опис: Необроблений масив деревини, 3 шт.: 30х30х18, 27х27х16 см, 24х24х14 см",
      category: "shelf",
      price: "24.99",
    },
    {
      id: 10,
      title: "Ліжко HALD",
      img: "bed1.jfif",
      desc: "Опис: Ламінат. Вміщує пружинні та безпружинні матраци розміром 160х200 см. Без ламельної основи та матраца. Габаритний розмір: 169х207 см, вис. 90 см",
      category: "beds",
      price: "55.99",
    },
    {
      id: 11,
      title: "Ліжко BILLUND",
      img: "bed2.jfif",
      desc: "Опис: Декоративний шпон. Вміщує пружинні та безпружинні матраци розміром 90х200 см. Без ламельної основи та матраца. 99х204 см, вис. 75 см",
      category: "beds",
      price: "59.99",
    },
    {
      id: 12,
      title: "Лаунж диван ODDE ",
      img: "sofes1.jfif",
      desc: "Опис: 3-місний диван з алюмінію. З подушками для сидіння із піноматеріалу, який швидко висихає та не поглинає вологу. Водонепроникний та плямостійкий чохол із УФ-захистом, що запобігає вигоранню тканини. Стійка до будь-яких погодніх умов. 204х85 см, вис. 65 см",
      category: "sofes",
      price: "33.99",
    },
    {
      id: 13,
      title: "Лаунж диван UHRE ",
      img: "sofes2.jfif",
      desc: "Опис: 6-місний диван з алюмінію. З подушками для сидіння зі швидковисихаючого піноматеріалу з УФ-захистом, що захищає кольори від вицвітання. Водонепроникні та стійкі до подряпин. Може залишатись на вулиці цілий рік. 230х260 см, вис. 71 см",
      category: "sofes",
      price: "50.99",
    },
    {
      id: 14,
      title: "Стіл письмовий EVETOFTE",
      img: "table0.jfif",
      desc: "Опис: Колір: дубю",
      category: "tables",
      price: "25.99",
    },
    {
      id: 15,
      title: "Стіл геймерський LINDHOLM з підсвіткою ",
      img: "table2.jfif",
      desc: "Опис: Ламінат та сталь. 65х114 см, вис. 78 см",
      category: "tables",
      price: "35.99",
    },


    
  ],
  showFullItem: false,
  fullItem: {},
}
this.state.currentItems = this.state.items
this.addToOrder = this.addToOrder.bind(this)
this.deleteOrder = this.deleteOrder.bind(this)
this.chooseCategory = this.chooseCategory.bind(this)
this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
  return (
 <div className="wrapper">
  <Header orders={this.state.orders} onDelete = {this.deleteOrder}/>
  <Categories chooseCategory={this.chooseCategory} />
  <Items onShowItem = {this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
  {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem = {this.onShowItem} item={this.state.fullItem}/>}
  <Footer/>
 </div>
  );
}

onShowItem(item) {
  this.setState({fullItem: item})
this.setState({ showFullItem: !this.state.showFullItem })
}

chooseCategory(category) {
  if(category === 'all') {
    this.setState({currentItems: this.state.items})
    return
  }
  this.setState ({
    currentItems: this.state.items.filter(el => el.category === category)
  })
}

deleteOrder(id) {
this.setState({orders: this.state.orders.filter(el => el.id !==id)})
}


addToOrder(item) {
let isInArray = false
this.state.orders.forEach(el => {
  if(el.id ===item.id)
  isInArray = true
})
if (!isInArray)
this.setState({orders: [...this.state.orders, item] })
}
}

export default App;
