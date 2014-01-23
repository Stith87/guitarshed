class Track < ActiveRecord::Base

  self.abstract_class = true
  establish_connection ('track')
  self.table_name = 'tracks'

  has_many :queries
end
