json.partial! "api/stays/stay", stay: @stay

json.image url_for(@stay.photo)