import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCard from "../ToyCard/ToyCard";
import './ByCategory.css'

const ByCategory = () => {

  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://toy-marketplace-server-iota.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  console.log(toys)

  const sportCars = toys.filter(toy => toy.category === 'sport')
  const truckCars = toys.filter(toy => toy.category === 'truck')
  const modelCars = toys.filter(toy => toy.category === 'model')

  return (
    <div>
      <h2 className="text-center text-5xl font-bold m-20">
        Browse Our Dream Land
      </h2>
      <div className="flex justify-center mt-20 mb-20">
        <Tabs>
          <TabList className="flex gap-4 tabs uppercase justify-center">
            <Tab className="text-2xl tabs border p-2 rounded-lg">
              Sports Cars
            </Tab>
            <Tab className="text-2xl tabs border p-2 rounded-lg">
              Truck Cars
            </Tab>
            <Tab className="text-2xl tabs border p-2 rounded-lg">
              Model Cars
            </Tab>
          </TabList>

          <TabPanel>
            <div className="gap-4 mt-20 mb-20 tabpanel">
              {
                sportCars.map(sportCar => <ToyCard key={sportCar._id} carDetails={sportCar}/>)
              }
            </div>
          </TabPanel>
          <TabPanel>
            <div className="gap-4 mt-20 mb-20">
              {
                truckCars.map(truckCar => <ToyCard key={truckCar._id} carDetails={truckCar}/>)
              }
            </div>
          </TabPanel>
          <TabPanel>
            <div className="gap-4 mt-20 mb-20">
              {
                modelCars.map(modelCar => <ToyCard key={modelCar._id} carDetails={modelCar}/>)
              }
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ByCategory;
