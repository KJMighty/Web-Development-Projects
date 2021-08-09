const apiKey = "W-wb15j4_hgYkpGi_54utY3TwZTuN83SPlJPoLwRdIzxNVe3KM9wWVyyBB3yabF4I1T3Cg0T7nZDvPHfps_brc-t_8ImP0vtSdRXH_p3RSc06jfWjUH9LMxk6qHaX3Yx0";

let Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses) {
                jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_src,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    }
                })
            }
        });
    }
}

export default Yelp;