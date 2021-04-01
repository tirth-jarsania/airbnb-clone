import React from 'react'
import '../Styles/Home.css'
import Banner from './Banner'
import Card from './Card'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
    return (
        <div className='home'>
            <Banner />

         <div className='home__section'>   
            <Carousel 
                centerMode
                centerSlidePercentage='50'
                autoPlay>
                <Card 
                    src='https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=1200'
                    title='Experience'
                    description='Local things to do, whenever you are.'/>
                <Card 
                    src='https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=1200'
                    title='Online Experience'
                    description='Live,interactive led by Hosts'/>
                <Card
                    src='https://a0.muscache.com/im/pictures/b9adfc39-6e2a-4e5f-b6f3-681b306fae5c.jpg?im_w=1200'
                    title='Adventures'
                    description='Multi-day trips with meals and stays' />
           
                <Card
                    src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                    title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hosts."
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep."
                />
                <Card
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends or family."
                />
                </Carousel>
                </div>
            </div>
        
    )
}

export default Home
