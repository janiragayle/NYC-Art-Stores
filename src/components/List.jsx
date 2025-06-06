import React from 'react';
import Store from './Store';

const List = () => {

    const stores = [
      {
        id: 1,
        name: "Blick Art Materials",
        image: "https://cdn.dick-blick.com/retail/storephotos/mar20updates/1Brooklyn-Flatbush.jpg",
        description: "A popular art supply chain store with a wide range of materials. Offers student discounts!",
        address: "Multiple Locations",
        hours: "Mon-Fri: 10am - 7pm, Sat-Sun: 11am - 5pm",
        website: "https://www.dickblick.com",
        category: "Fine Art Supplies",
      },
      {
        id: 2,
        name: "Artist & Craftsman Supply",
        image: "https://s.hdnux.com/photos/01/10/77/14/19133200/30/rawImage.jpg",
        description: "A local favorite for unique and affordable art supplies.",
        address: "Multiple Locations in Brooklyn",
        hours: "Mon-Fri: 10am - 8pm, Sat-Sun: 10am - 6pm",
        website: "https://www.artistcraftsman.com",
        category: "Fine Art"
      },
      {
        id: 3,
        name: "Michaels",
        image: "https://static.platform.michaels.com/_next/public/static/2c-prd/_next/public/_next/static/media/store-image.559b8bfe.png", 
        description: "A popular chain for arts, crafts, and home decor supplies.",
        address: "Multiple Locations",
        hours: "Mon-Sat: 9am - 9pm, Sun: 10am - 7pm",
        website: "https://www.michaels.com",
        category: "Fine Arts & Crafts"
      },
      {
        id: 4,
        name: "B&H Photo Video",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/B%26H_Photo_Video_logo_2021.svg/1200px-B%26H_Photo_Video_logo_2021.svg.png", // Replace with an actual image URL if needed
        description: "A well-known store for photography, video, and audio equipment, as well as art supplies.",
        address: "420 9th Ave, New York, NY 10001",
        hours: "Mon-Thu: 9am - 7pm, Fri: 9am - 2pm, Sun: 10am - 6pm",
        website: "https://www.bhphotovideo.com",
        category: "Digital and Film Photography"
      },
      {
        id: 5,
        name: "Fabrics Save-A-Thon",
        image: "https://s3-media0.fl.yelpcdn.com/bphoto/97I0Jv-uUd8u-Hkp-BXohg/348s.jpg", // Replace with an actual image URL or local path
        description: "A go-to store for affordable Source for fabric and yarn, including some sewing supplies, and party items.",
        address: "Multiple Locations",
        hours: "Mon-Sat: 9am - 8pm, Sun: 10am - 6pm",
        website: "https://www.save-a-thon.com",
        category: "Fabrics & Sewing"
      },     
      {
        id: 6,
        name: "Home Depot",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/TheHomeDepot.svg/1200px-TheHomeDepot.svg.png", // Replace with an actual image URL or local path
        description: "A large retailer offering tools, construction products, and some art and craft supplies.",
        address: "Multiple Locations",
        hours: "Mon-Sat: 6am - 10pm, Sun: 8am - 8pm",
        website: "https://www.homedepot.com",
        category: "Tools & Craft Supplies"
      },
      {
        id: 7,
        name: "Soho Art Materials",
        image: "https://images.squarespace-cdn.com/content/v1/5eb2b37ea61ef51ceb3a825f/1602608047483-RSS8WMU5T3TZ76SSVV6A/127+Grand+St+front+of+store.jpg", // Replace with an actual image URL
        description: "A boutique art supply store in Soho offering high-quality materials for artists.",
        address: "123 Prince St, New York, NY 10012",
        hours: "Mon-Sat: 10am - 7pm, Sun: 11am - 6pm",
        website: "https://www.sohoartmaterials.com",
        category: "Fine Art Supplies",
      },
      {
        id: 8,
        name: "The League's Fine Art Supply Store",
        image: "https://theartstudentsleague.org/wp-content/uploads/2016/11/P1200559-edited-copy.jpg", // Replace with an actual image URL
        description: "Located at the Art Students League, this store provides professional-grade art supplies.",
        address: "215 W 57th St, New York, NY 10019",
        hours: "Mon-Fri: 9am - 8pm, Sat-Sun: 10am - 5pm",
        website: "https://www.theartstudentsleague.org",
        category: "Fine Art Supplies",
      },
      {
        id: 9,
        name: "Kremer Pigments",
        image: "https://shop.kremerpigments.com/elements/gfx/logo_kremer-pigmente.jpg", // Replace with an actual image URL
        description: "A specialty store offering rare pigments and materials for professional artists.",
        address: "247 W 29th St, New York, NY 10001",
        hours: "Mon-Fri: 10am - 6pm, Sat: 11am - 5pm, Sun: Closed",
        website: "https://www.kremerpigments.com",
        category: "Specialty Art Supplies",
      },
      {
        id: 10,
        name: "The Pearl Creations DIY Studio",
        image: "https://s3-media0.fl.yelpcdn.com/bphoto/l8eOWWgCbnb3Q7y0AHAc4w/348s.jpg", // Replace with an actual image URL
        description: "A creative studio offering DIY workshops and unique crafting supplies.",
        address: "456 Craft Ave, Brooklyn, NY 11211",
        hours: "Mon-Sat: 10am - 8pm, Sun: 11am - 6pm",
        website: "https://www.pearlcreationsdiy.com",
        category: "DIY & Craft Supplies",
      }
    ]
    return (
      <div className="List">
        {stores.map(store => (
          <Store //Store instance
            key={store.id} 
            image={store.image} 
            name={store.name} 
            description={store.description} 
            address={store.address} 
            hours={store.hours} 
            website={store.website} 
            category={store.category}
          />
        ))}
      </div>
    );
  };
  
export default List;