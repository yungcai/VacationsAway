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



stay1 = Stay.create!(user_id:user1.id, price: 200.00, location:'Brooklyn, NY', lat:23.432432, long:-33.345424, description:'Beautiful 2BR stay in downtown')
stay2 = Stay.create!(user_id:user1.id, price: 150.00, location:'Fresno, CA', lat:25.432476, long:-43.347224, description:'Cozy home in Fresno with full appliances')
stay3 = Stay.create!(user_id:user2.id, price: 99.00, location:'Los Angeles, CA', lat:25.431432, long:-25.342145, description:'Cozy stay in dowtown LA ')
stay4 = Stay.create!(user_id:user2.id, price: 129.00, location:'Austin, TX', lat:22.411432, long:-23.772324, description:'1BR in city center Austin')
stay5 = Stay.create!(user_id:user3.id, price: 149.00, location:'San Diego, CA', lat:23.432432, long:-23.342324, description:'1BR close to the beah')
stay6 = Stay.create!(user_id:user3.id, price: 120.00, location:'Queens, NY', lat:23.432432, long:-23.342324, description:'1BR in the heart of Queens')
stay7 = Stay.create!(user_id:user4.id, price: 165.00, location:'Manhattan, NY', lat:27.662432, long:-27.314524, description:'1BR lxury stay next to CitiField ')
stay8 = Stay.create!(user_id:user4.id, price: 185.00, location:'Malibu, CA', lat:20.345432, long:-23.342324, description:'2BR house near hiking trails')