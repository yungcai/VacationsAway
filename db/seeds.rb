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

stay1 = Stay.create!(user_id:user1.id, price: 34.34, location:'NYC', lat:23.432432, long:23.342324, description:'Beautiful stay in downtown')