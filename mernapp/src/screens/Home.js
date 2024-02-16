import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import "./styles.css"

export default function Home() {
  
  const [foodCat, setFoodCat] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [search, setSearch] = useState(""); 

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();
    console.log(response[0], response[1]);
    setFoodItems(response[0]);
    setFoodCat(response[1]);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div >
      <Navbar />
     <div>
     <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id='carousel'>
    <div className='carousel-caption' style={{zIndex:"10"}}>
    <div className="d-flex justify-content-center">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{
        setSearch(e.target.value)
      }}/>
    </div>
    </div>
    <div className="carousel-item active">
      <img src="https://img.freepik.com/free-photo/top-view-bowls-with-indian-food_23-2148723454.jpg?w=1060&t=st=1701359781~exp=1701360381~hmac=3084419917d10529978667f4f7797bc1f70be981bde77775a1b7d17314c76cb9"  className="d-block w-100" style={{filter:"brightness(100%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-photo/flame-grilled-meat-cooking-flames-generative-ai_188544-12355.jpg?w=1060&t=st=1701582795~exp=1701583395~hmac=288485c601a97a3c862881b5b8d63894a6ac5216b628fdb1079e0114418907bb" className="d-block w-100" style={{filter:"brightness(100%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-photo/side-view-baked-chicken-with-cucumber-lemon-seasoning-bread-table_141793-4757.jpg?w=1060&t=st=1701359468~exp=1701360068~hmac=151b863488ce97605e8aebd8cb2a32db234c56d60b8eed58e4b4edb5d7b43007" className="d-block w-100" style={{filter:"brightness(100%)"}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
     </div>
      <div className='container'>
        {
          foodCat.length !== 0 ? foodCat.map((data) => {
            return (
              <div className='row mb-3' key={data.id}>
                <div className='fs-3 m-3'>
                  {data.CategoryName}
                </div>
                <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
                {foodItems.length !== 0 ? foodItems.filter(
                  (items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLowerCase())))
                  .map(filterItems => {
                    return (
                      <div key={filterItems.id} className='col-12 col-md-6 col-lg-3'>
                        {console.log(filterItems.url)}
                        <Card  foodItem={filterItems} options={filterItems.options[0]} ></Card>
                      </div>
                    )
                  }) : <div> No Such Data </div>}
              </div>
            )
          }) : ""}
      </div>
      <Footer />
    </div>
 </div>
 )
        }
