import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
  fetch('http://localhost:5000/car-service')
  .then(res => res.json())
  .then(data => setServices(data))
    }, [])
    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-3xl font-bold text-orange-500">Our Services</h3>
                <h3 className="text-5xl text-orange-600">Our Services Area</h3>
                <p>
                the majority have suffered alteration in some form, by injected humour, or <br/> randomised words which  look even slightly believable. 
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols3 gap-6">
               
               {
                services.map(service => <ServiceCard
               key={service._id}
               service={service}
                    ></ServiceCard>)
               }
            </div>
        </div>
    );
};

export default Services;