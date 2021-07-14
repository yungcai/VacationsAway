require 'open-uri'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')
Stay.destroy_all
Stay.connection.execute('ALTER SEQUENCE stays_id_seq RESTART WITH 1')


user1 = User.create!(username:'demoguest1', email:'demoguest@demoguest', password:'demoguest')
user2 = User.create!(username:'johnsmith', email:'johnsmith@gmail.com', password:'johnsmith')
user3 = User.create!(username:'marysmith', email:'marysmith@gmail.com', password:'marysmith')
user4 = User.create!(username:'jamessmith', email:'jamesmsmith@gmail.com', password:'jamessmith')



stay1 = Stay.create!(user_id:user1.id, price: 200, location:'Brooklyn, NY', lat:23.432432, long:-33.345424, description:'Beautiful 2BR stay in downtown Brooklyn', amenities: 'Washer, Dryer, Patio, Backyard')
stay2 = Stay.create!(user_id:user1.id, price: 150, location:'Fresno, CA', lat:25.432476, long:-43.347224, description:'Cozy home in Fresno with full appliances', amenities:'Hot Tub, Washer, Wifi, Patio')
stay3 = Stay.create!(user_id:user2.id, price: 99, location:'Los Angeles, CA', lat:25.431432, long:-25.342145, description:'Cozy stay in dowtown LA ', amenities:'Balcony, TV, Free Parking, Lake Access' )
stay4 = Stay.create!(user_id:user2.id, price: 129, location:'Austin, TX', lat:22.411432, long:-23.772324, description:'1BR in city center Austin', amenities:'Backyard, Washer, Wifi, Kitchen' )
stay5 = Stay.create!(user_id:user3.id, price: 149, location:'San Diego, CA', lat:23.432432, long:-23.342324, description:'1BR close to the beach', amenities:'Pets allowed, Security Camera, Kitchen, Waterfront' )
stay6 = Stay.create!(user_id:user3.id, price: 120, location:'Queens, NY', lat:23.432432, long:-23.342324, description:'1BR in the heart of Queens', amenities:'Dryer, Luggage Dropoff, Hair Dryer, Air Conditioning ' )
stay7 = Stay.create!(user_id:user4.id, price: 165, location:'Manhattan, NY', lat:27.662432, long:-27.314524, description:'1BR luxury stay next to CitiField ', amenities:'Wifi, Patio, Hair Dryer, Refrigerator ' )
stay8 = Stay.create!(user_id:user4.id, price: 185, location:'Malibu, CA', lat:20.345432, long:-23.342324, description:'2BR house near hiking trails', amenities:'Lake Access, Pets allowed, Kitchen, Washer' )


stay1.photo.attach(io: URI.open('https://vacationsaway-seeds.s3.amazonaws.com/nyc2.jpeg'), filename:'nyc2.jpeg')
stay2.photo.attach(io: URI.open('https://vacationsaway-seeds.s3.amazonaws.com/fresno1.jpeg'), filename:'fresno1.jpeg')
stay3.photo.attach(io: URI.open('https://vacationsaway-seeds.s3.amazonaws.com/la1.jpeg'), filename:'la1.jpeg')
stay4.photo.attach(io: URI.open('https://vacationsaway-seeds.s3.amazonaws.com/texas1.jpeg'), filename:'texas1.jpeg')
stay5.photo.attach(io: URI.open('https://vacationsaway-seeds.s3.amazonaws.com/sd1.jpeg'), filename:'sd1.jpeg')
stay6.photo.attach(io: URI.open('https://vacationsaway-seeds.s3.amazonaws.com/valley1.jpeg'), filename:'valley1.jpeg')
stay7.photo.attach(io: URI.open('https://vacationsaway-seeds.s3.amazonaws.com/cali1.jpeg'), filename:'cali1.jpeg')
stay8.photo.attach(io: URI.open('https://vacationsaway-seeds.s3.amazonaws.com/malibu1.jpeg'), filename:'malibu1.jpeg')