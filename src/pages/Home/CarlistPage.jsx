import React from 'react'
import { Link } from 'react-router-dom';

const CarCard = ({ image, title, description, seat, price }) => (
  <div className="card card-compact bg-base-100 shadow-xl flex flex-col">
    <figure className="relative w-full aspect-w-16 aspect-h-9">
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-full rounded-t-lg"
      />
    </figure>
    <div className="card-body flex-1 p-4">
      <h2 className="card-title text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-gray-500 mb-4">{seat}</p>
      
      <div className="card-actions justify-end mt-auto">
        <Link to="/signup">
          <button className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
            Per/Day {price}
          </button>
        </Link>
      </div>
    </div>
  </div>
);

const CarlistPage = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        <CarCard 
          image="https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Alto-800/10327/1687348176706/front-left-side-47.jpg" 
          title="Alto-800" 
          description="Petrol" 
          seat="Seating Capacity: 5"
          price="800" 
        />
        <CarCard 
          image="https://imgd.aeplcdn.com/310x174/n/cw/ec/26742/swift-exterior-right-front-three-quarter-2.jpeg?q=80" 
          title="Swift" 
          description="Diesel" 
          seat="Seating Capacity: 5"
          price="1100" 
        />
        <CarCard 
          image="https://gomechanic.in/blog/wp-content/uploads/2020/04/Maruti-Suzuki-Ritz-1280x720-1-1000x563.jpg" 
          title="Ritz" 
          description="Petrol/Diesel" 
          seat="Seating Capacity: 5"
          price="1100" 
        />
        <CarCard 
          image="https://spn-sta.spinny.com/blog/20221004191046/Hyundai-Venue-2022.jpg?compress=true&quality=80&w=1200&dpr=2.6" 
          title="Creta" 
          description="Petrol/Diesel"
          seat="Seating Capacity: 5"
          price="1500" 
        />
        <CarCard 
          image="https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/KWID/10076/1717586320303/front-left-side-47.jpg?impolicy=resize&imwidth=480" 
          title="Kwid" 
          description="Petrol/Diesel"
          seat="Seating Capacity: 5"
          price="1600" 
        />
        <CarCard 
          image="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202202/Tata_Nexon_3_lakh_units.jpg?size=690:388" 
          title="Nexon" 
          description="Diesel" 
          seat="Seating Capacity: 5"
          price="1600" 
        />
      </div>
    </div>
  )
}

export default CarlistPage;
