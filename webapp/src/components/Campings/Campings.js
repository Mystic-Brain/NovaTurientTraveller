import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// images
import Destination11 from "./assets/Destination11.png";
import Destination12 from "./assets/Destination12.png";
import Destination13 from "./assets/Destination13.png";
import Destination14 from "./assets/Destination14.png";
import Destination15 from "./assets/Destination15.png";
import Destination16 from "./assets/Destination16.png";
import info1 from "./assets/info1.png";
import info2 from "./assets/info2.png";
import info3 from "./assets/info3.png";
// styles
import "./Campings.css"


const data = [
  {
    image: Destination11,
    title: "Matheran Camping",
    subTitle:
      "Matheran is one of the smallest hill station in Indian. Matheran is famous for Horse Riding, Herping, Bird Watching, Handicrafts.",
    cost: "1799/- per person",
    duration: "2 Days / 1 Night",
    distance: "Mumbai: 85km & Pune:120km",
    info: `Looking for a quick and exciting weekend getaway? Matheran is the answer to all your weekend plans!
    Matheran means a forest on the top of the hills. The Matheran hill station is in the Raigad district of Maharashtra, located on the western ghats. It is a really beautiful and small hill station for you to visit and enjoy nature in all its glory.  
    The hill station is approximately 90 km away from Mumbai and around 120 km away from Pune. This place is the perfect getaway for any and every season. It gives you a soothing experience in Summers, a comfortable stay in winters, and the best scenic views in the rainy season. So whenever you want to have a getaway from your hectic life, you can visit this place and have a fun camping experience here.
    Camping in Matheran…yes, you read it right. The Matheran jungle is a popular place for camping and has the most surreal experiences for you. It has very pretty flora and fauna near the campsite. You will get to enjoy nature and spend some time in the arms of nature. There is greenery everywhere, and camping will make the trip worth your while and a change of pace and scenery from all the usual weekend outings. 
    The place near the campsite is quiet and elegant. In the evenings, you can witness the most beautiful sunset with the calm and cold breeze that will make you feel relaxed. You can feel the air here because it is so pure and clean. In the morning, you can experience the golden and glorious sunrise. You can also view the Sahyadri mountains of western ghat, which are extremely beautiful. 
    This camping trip will be a memorable one for you because of the mesmerizing beauty, refreshed feeling, comfortable stay, beautiful view, lush greenery, natural surroundings, and a lot more.`,
    trek_details: { ["Cost"]: "1799/- per person.", ["Location"]: "Matheran Market.", ["Distance From Aurangabad"]: "336km.", ["Distance From Pune"]: " 120km.", ["Batches"]: "All days, special batches on weekends.", ["Duration"]: "2 Days / 1 Night.", ["Check-in"]: "03:00 PM.",  ["Check-out"]: "11:00 AM.",["Accommodation "]:"Camping Tents (2/3 sharing) with mattresses, pillows and blankets. " },
    package_cost:{["Package A"]:"1799/- per person (Stay, Meal course 1,Kayaking).",["Package B"]:"3200/- per person (Stay, Meal course 1,Kayaking, Zip-line, River crossing, Banana boat ride).",["Package C"]:"4500 /- per person (Stay, Meal course 2,12km River Rafting).",["Package D"]:"5000/- per person (Stay, Meal course 2, 12km River Rafting, Kayaking, Zip-line, River crossing, Banana boat ride)."},
    Amenities:{["1"]:"Mineral Water.",["2"]:"Security.",["3"]:"Pillows & Blankets.",["4"]:"Parking.",["5"]:"Dome Tent Stay.",["6"]:"WashroomS (Western).",["7"]:"First Aid Kit.",},
    Activities:{["1"]:"Games, Campfire.",["2"]:"Movie screening.",["3"]:"Midnight Trek (20 to 25min walk).",["4"]:"Sunrise Morning Trek."},
    Things_To_Carry:{["1"]:"Face mask or shield.",["2"]:"Sanitizer.",["3"]:"Torch with extra batteries.",["5"]:"Extra pair of clothes & towel.",["6"]:"Trekking shoes.",["7"]:"Warm clothing (during winter).",},
    Things_To_Do:""
  },
  {
    image: Destination12,
    title: "Igatpuri Water Sports & Camping",
    subTitle: "Igatpuri is the city in the Nashik district of Maharashtra. This place is super beautiful because of its surrounding breathtaking green mountains.",
    cost: "1400/- per person",
    duration: " 2 Days / 1 Nigh",
    distance: "Mumbai: 125km & Pune: 230km",
    info: ` Camping is on everyone's wish list, and to fulfill that wish, I have a perfect place for you to visit. If you want to get out of the hustle-bustle of city life and get close to nature, then Igatpuri is the right place for you.
    Igatpuri is the city in the Nashik district of Maharashtra. This place is super beautiful because of its surrounding breathtaking green mountains. It is surrounded by lush greenery, mighty hills, and magnificent valleys of the western ghat. The best way to feel nature is camping amidst natural beauty. No one really knew about a camping place here, it is a really unexplored and exceptionally beautiful place. The Igatpuri camping is undiscovered because the lake and the camp area lie in a remote area.
    There is a gorgeous lake where you all can enjoy camping. Also, sightseeing is a major attraction here, and people love to view the surrounding nature, valleys, and a lot more. Besides the gorgeous lake, the campsite has a lot of beautiful scenic views to offer. You can witness the attractive valleys, calm and quiet sunrise in the morning, and peaceful sunset in the evening.  
    This campsite is a breathtaking place. You can enjoy a bonfire at night, and enjoy the beautiful weather with your loved ones and make memories. Take a walk near the exceedingly clear and pure lake. In the morning, you will wake up to chirping birds and can also enjoy the sunrise sitting in your tents. 
    For all the adventure lovers, it has a lot of water sports available for you. Igatpuri water sports include thrilling lake rafting, exciting kayaking, and tubing fin. You can also swim in the lakes and have a wonderful experience. People of all ages can participate in watersports activities. 
    If you are visiting this place for a peaceful trip seeking silence. Then, you will love the hidden campsite in the beautiful forest surrounded by unique flora and fauna and a mesmerizing view of the sunrise and sunset. This place has less pollution because of which you can see the clear sky. You can also indulge yourself in stargazing and also view the mesmerizing city lights. 
    If you love to travel, camping, adventure sports, or nature, then this little place, is the perfect destination for you. `,
    trek_details: { ["Cost"]: "1400/- per person.", ["Location"]: "Igatpuri, Maharashtra 401604.", ["Distance from Aurangabad"]: "234.5km", ["Distance from Pune"]: "230km", ["Batches"]: " All weekends.", ["Duration"]: "2 Days / 1 Night.", ["Check-in"]: "02:30 PM.",  ["Check-out"]: "11:00AM.",["Accommodation"]:"Camping Tents (2/3 sharing) with mattresses, pillows and blankets." },
    package_cost:{["Package A"]:"1300/- per person (Stay, Meal course 1,Kayaking)",["Package B"]:"2300/- per person (Stay, Meal course 1,Kayaking, Zip-line, River crossing, Banana boat ride)",["Package C"]:"3000 /- per person (Stay, Meal course 2,12km River Rafting).",["Package D"]:"3700/- per person (Stay, Meal course 2, 12km River Rafting, Kayaking, Zip-line, River crossing, Banana boat ride)."},
    Amenities:{["1"]:"Beautiful Lakeview.",["2"]:"Security.",["3"]:"Parking.",["4"]:"First Aid.",["5"]:"Pick up/ drop facilities (Paid).",},
    Activities:{["1"]:"Lake rafting (boating)",["2"]:"Lake kayaking.",["3"]:"Lake tubing fun ",["4"]:"Music Speaker"},
    Things_To_Carry:{["1"]:"Valid Photo ID Proof (Aadhar Card/Driving License).",["2"]:"Comfortable Footwear.",["3"]:"Water bottle (2 liters each person).",["4"]:"Mosquito Repellent Cream.",["5"]:"Medicine if required",["6"]:"Towel",["7"]:"Waterproof Bag"},
    Things_To_Do:""
  },
  {
    image: Destination13,
    title: "Pawna Lakeside Camping ",
    subTitle: "Pawna lake, also known as Pavana lake, is located in Maval taluka of Pune district in Maharashtra",
    cost: "1200/- per person",
    duration: " 2 Days / 1 Night",
    distance: "Mumbai: 120km & Pune: 65km",
    info: `Looking for an extreme lakeside camping experience? Where you will be surrounded by serene nature and forts around the lake? We are offering you the convenience to explore Pawna lake. Pawna lake the most alluring camping spot in Lonavala. It is 20 kilometers from Lonavala city center. 110 kilometers from Mumbai city, and 58 kilometers from Pune city. We are offering you the best experience at Pawna lake camping. We provide a tent stay, unlimited dinner, free snacks, and delicious barbecue. Not only that, but we provide live guitar music on specific day to soothe your evening. A campfire and adventure activities will add more fun to your trip.`,
    trek_details: { ["Cost"]: "1200/- per person.", ["Location"]: "Thakursai-Ajiwale Rd, Gevhande Khadak, Maharashtra 412108.", ["Distance from Aurangabad"]: "280.8 km.", ["Distance from Pune"]: "", ["Batches"]: " All days, special batches on weekends.", ["Duration"]: "2 Days / 1 Night.", ["Stay Type"]: "Alpine tents with mattresses, pillows, blankets",  ["Tent Sharing"]: "Triple sharing" },
    package_cost:{["Package A"]:"1300/- per person (Stay, Meal course 1,Kayaking).",["Package B"]:"2300/- per person (Stay, Meal course 1,Kayaking, Zip-line, River crossing, Banana boat ride).",["Package C"]:"3000 /- per person (Stay, Meal course 2,12km River Rafting).",["Package D"]:"3700/- per person (Stay, Meal course 2, 12km River Rafting, Kayaking, Zip-line, River crossing, Banana boat ride)."},
    Amenities:{["1"]:"Security.",["2"]:"Parking.",["3"]:"Washrooms.",["4"]:"First Aid.",["5"]:"Beautiful Lakeview",["6"]:"Pick up/ drop facilities (Paid)."},
    Activities:{["1"]:"Bonfire.",["2"]:"Music and DJ Music.",["3"]:"Live Music (only on weekends)."},
    Things_To_Carry:{["1"]:"Water bottle (2 liters each person)",["2"]:"Sleepers or Floaters(Additional).",["3"]:"Sunscreen.",["4"]:"Sunglasses.",["5"]:"Torch with Extra batteries.",["6"]:"Portable Mobile Charger.",["7"]:"Camera(optional).",["8"]:"Waterproof Bag.",["9"]:"Mosquito Repellent Cream.",["10"]:"Valid Photo ID Proof (Aadhar Card/Driving License)"},
    Things_To_Do:""
  },
  {
    image: Destination14,
    title: "Kolad Camping with Rafting & Adventure sports ",
    subTitle: "In the backdrop of Sahyadri, there is a flourishing village, Kolad, in the Raigad district of Maharashtra.",
    cost: "1300/- per person",
    duration: "2 Days / 1 Night",
    distance: "Mumbai 120km & Pune: 120km",
    info: ` Are you a travel enthusiast and obsessed with adventure sports? Then you are at the right place because we have something for you.
    In the backdrop of Sahyadri, there is a flourishing village, Kolad, in the Raigad district of Maharashtra. It is approximately 121 km away from Mumbai, which is around a 3.5 hours drive. This is a perfect place for travel enthusiasts who are looking for an escape from busy city life. 
    This village of Maharashtra is a very calm and beautiful place to visit. This village has a beautiful and pleasant river which is known as the Kolad river. It flows from the forest hills and gives a great opportunity for river rafting for beginners. The best time to visit this place is from October to February.
    Due to the natural scenic beauty, Kolad camping is said to be one of the best camping places. Camping near the river under the stars is pure heaven. Away from the city lights, this place is a star gazer's paradise! Imagine a place with a flowing river stream on one side and mountains on the other side. You will be in awe of the whole experience. This whole experience, despite being away from the city, will make you feel right at home with the vibes that it exudes. 
    This place is surrounded by lush greenery and has various adventurous sports for you. Kolad river rafting is the most popular adventure sport and is a major tourist attraction. If you crave thrill and adrenaline rush, then this sport is exactly what you need. It gives you the excitement and rush which will make your trip memorable. 
    The river has no unfamiliar changes because of which it is a safe place for river rafting. You will be given high-quality safety equipment. The rapids in the river are of grade 3, and they might seem fast flowing but, it is totally safe for a fun-filled experience. The river rafting will be a challenging experience for you because the rafts will run in the fast-flowing water current, which is 12 km downstream. River Rafting takes around 2.5 to 3 hours, and they are going to be the highlight of your trip. 
    All the water sports lovers out there, this is not it. There are many more Kolad water sports available for you, such as kayaking, zipline, river crossing, and banana boat ride. These water sports are very fascinating and adventurous. 
    This unforgettable camping trip will help you to get reconnected with yourself. If you want to spend a few days in the arms of nature and have a relaxing trip with an adventure mix, then this is the best place for you to visit. `,
    trek_details: { ["Cost"]: "₹1,499 per person", ["Location"]: "Kolad, Maharashtra ", ["Batches"]: "ALL DAYS"},
    package_cost:{["Package A"]:"1300/- per person (Stay, Meal course 1,Kayaking).",["Package B"]:"2300/- per person (Stay, Meal course 1,Kayaking, Zip-line, River crossing, Banana boat ride).",["Package C"]:"3000 /- per person (Stay, Meal course 2,12km River Rafting).",["Package D"]:"3700/- per person (Stay, Meal course 2, 12km River Rafting, Kayaking, Zip-line, River crossing, Banana boat ride)."},
    Amenities:{["1"]:"Security.",["2"]:"Pillows & Blankets.",["3"]:"Dome Tent Stay.",["4"]:"Parking.",["5"]:"Mineral Water.",["6"]:"Washroom (Western).",["7"]:"Pick up/ drop facilities (Paid)."},
    Activities:{["1"]:"Music speaker and dance.",["2"]:"12km River Rafting.",["3"]:"Kayaking.",["4"]:"Zip-line.",["5"]:"River crossing.",["6"]:"Banana boat ride.",["7"]:"Team bonding games."},
    Things_To_Carry:{["1"]:"Water bottle (2 liters each person)",["2"]:"Sleepers or Floaters(Additional).",["3"]:"Sunscreen.",["4"]:"Sunglasses.",["5"]:"Torch with Extra batteries.",["6"]:"Portable Mobile Charger.",["7"]:"Camera(optional).",["8"]:"Waterproof Bag.",["9"]:"Mosquito Repellent Cream.",["10"]:"Valid Photo ID Proof (Aadhar Card/Driving License)"},
    Things_To_Do:""
  },
  {
    image: Destination15,
    title: "Kasarsai Dam Camping",
    subTitle: "The Kasarsai dam is a small dam built on a Kasarsai lake just near Pune.",
    cost: "1200Rs per person",
    duration: "1 Night 2 Days",
    distance: "Mumbai: 130km & Pune: 25km",
    info: ` Up until now, all of Pune crowd had to drive all the way to Lonavala or Alibaug for camping. People of Pune, not anymore! We have exciting news for you…
    Exhilarating activity like camping has come closer to your city. Within 25 km proximity from the main city of Pune, a quaint little campsite is established very close to Hinjewadi. This beautiful campsite is set up right beside Kasarsai Lake. This beautiful place has always been an ideal place to hang-out with friends and family; now one can do more than just hangout by the lake. Spend a beautiful weekend in the midst of nature surrounded by lush green hills and rippling beautiful Kasarsai Lake. Located just beside boat club, one can indulge in boating activity along with camping. Apart from experiencing stunning sunset and sunrise, keep a look out for migratory birds which come to this lake.
    The Kasarsai dam is a small dam built on a Kasarsai lake just near Pune. The Kasarsai dam is very close to Kasarsai Village and on another side of the Dam, there is Kusgaon village. The Kasarsai lake is a hidden beauty that is surrounded by lush green areas and hills. The distance of Kasarsai Dam from Hinjewadi is 10 km. It is a very thrilling experience to go to the lake, the view of the dam from inside the lake and the view of Kasarsai Lake is very picturesque.
    Kasarsai dam being this close to Hinjewadi makes it a perfect weekend getaway for adventure lovers and cyclists.
    Trekhievers brings an opportunity for their clients to camp at Kasarsai Dam at a really good resort property with amenities like Live Music, DJ, Boating, Karaoke along with a cozy stay and delicious resort meals.`,
    trek_details: { ["Cost"]: "1200Rs per person.", ["Location"]: "Kasarsai Dam, Hinjewadi.", ["Distance from Aurangabad"]: "289.6 km", ["Distance from Pune"]: "25km (10km from Hinjewadi)", ["Batches"]: " All Weekends",["Check-in"]: "5:00 PM",["Check-out"]: "11:00 AM",["Accommodation"]:"Camping Tents (2/3 sharing) with mattresses, pillows and blankets " },
    package_cost:{["Package A"]:"1300/- per person (Stay, Meal course 1,Kayaking).",["Package B"]:"2300/- per person (Stay, Meal course 1,Kayaking, Zip-line, River crossing, Banana boat ride).",["Package C"]:"3000 /- per person (Stay, Meal course 2,12km River Rafting).",["Package D"]:"3700/- per person (Stay, Meal course 2, 12km River Rafting, Kayaking, Zip-line, River crossing, Banana boat ride)."},
    Amenities:{["1"]:"Dome Tent Stay.",["2"]:"Mattress, Pillows & Blankets.",["3"]:"Security.",["4"]:"Mineral Water.",["5"]:"Washroom (Western).",["6"]:"First Aid Kit."},
    Activities:{["1"]:"DJ Music with dance floor.",["2"]:"Live Music.",["3"]:"Bonfire.",["4"]:"Indoor -Outdoor Games.",["5"]:"Group fun activities and games."},
    Things_To_Carry:{["1"]:"Water bottle (2 liters each person)",["2"]:"Sleepers or Floaters(Additional).",["3"]:"Sunscreen.",["4"]:"Sunglasses.",["5"]:"Torch with Extra batteries.",["6"]:"Portable Mobile Charger.",["7"]:"Camera(optional).",["8"]:"Waterproof Bag.",["9"]:"Mosquito Repellent Cream.",["10"]:"Valid Photo ID Proof (Aadhar Card/Driving License)",["11"]:"Portable Mobile Charger",["12"]:"Bluetooth Speakers is a must for group"},
    Things_To_Do:""
  },
  {
    image: Destination16,
    title: "Alibaug Beach Camping",
    subTitle: "Soothe your soul and mind with the amazing views of the sunset over the sea when you go for a camping experience in Alibaug.",
    cost: "1400",
    duration: "1 Night 2 Day",
    distance: "Mumabi: 110km & Pune: 150km",
    info: `Welcome to Alibaug Camping! Relish a luxurious stay at the best beach near Revdanda Beach. Comfortable Tent Stay at our Private Beach which is 32 Km From Mandwa jetty. Night Open Air Movie with warmth Campfire & Hot Barbeque will make your trip at more enduring. Revdanda Beach is popular for their relaxing beaches. There are ample luxury beach camping in Alibaug and many people who prefer Overnight night stay at Rewdanda Beach with Camping . The Beautiful Beaches & mesmerising sun set of Rewdanda Beach Camping, is perfect Holiday destination for many tourist, This Camping is just couple of hours from mumbai. this incredible location located near Alibaug, will surely offer you the perfect weekend gateway near Revdanda from hustle of routing Life which rejuvenate the affection between your family. so get ready to enjoy Beachside CAmping at alibaug.`,
    trek_details: { ["Cost"]: "1499Rs", ["Location"]: "Revdanda beach", ["Distance from Aurangabad"]: "364.9 km", ["Distance from Pune"]: " 150km", ["Batches"]: " All Days", ["Duration"]: "1 Night 2 Days.", ["Check-in"]: "Day-1 03.00 PM",  ["Check-out"]: " Day-2 11.00 AM.",["Accommodation"]:"Camping Tents (2/3 sharing) with mattresses, pillows and blankets " },
    package_cost:{["Package A"]:"1300/- per person (Stay, Meal course 1,Kayaking).",["Package B"]:"2500/- per person (Stay, Meal course 1,Kayaking, Zip-line, River crossing, Banana boat ride).",["Package C"]:"3000 /- per person (Stay, Meal course 2,12km River Rafting).",["Package D"]:"3700/- per person (Stay, Meal course 2, 12km River Rafting, Kayaking, Zip-line, River crossing, Banana boat ride)."},
    Amenities:{["1"]:"Dome Tent Stay.",["2"]:"Mattress, Pillows & Blankets.",["3"]:"Security.",["4"]:"Mineral Water.",["5"]:"Washroom (Western).",["6"]:"First Aid Kit.",["7"]:"parking"},
    Activities:{["1"]:"DJ Music.",["2"]:"Live Music.",["3"]:"Movie screening.",["4"]:"Movie screening.",["5"]:"Indoor -Outdoor Games.",["6"]:"Group fun activities and games."},
    Things_To_Carry:{["1"]:"Valid Photo ID Proof (Aadhar Card/Driving License).",["2"]:"Comfortable Footwear.",["3"]:"Water bottle (2 liters each person).",["4"]:"Mosquito Repellent Cream.",["5"]:"Medicine if required",["6"]:"Towel",["7"]:"Waterproof Bag",["8"]:"Portable Mobile Charger",["9"]:"Camera",["10"]:"Sunglasses",["11"]:"Sunscreen",["12"]:"Torch with Extra batteries"},
    Things_To_Do:"",
  }

];

const packages = [
  "The Weekend Break",
  "The Package Holiday",
  "The Group Tour",
  "Long Term Slow Travel",
];

function Campings() {

  const navigate = useNavigate()
  const navigateToDetailPage = (data) => {
    navigate("campdetail", { state: data })
  }

  return (
    <section className="section">
      <div className="title">
        <h2>Campings Destinations</h2>
      </div>
      {/* <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div> */}
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination" onClick={() => navigateToDetailPage(destination)}>
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>{destination.distance + " KMS"}</span>
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Campings;
